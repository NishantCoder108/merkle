import {
  Connection,
  PublicKey,
  SystemProgram,
  TransactionInstruction,
} from "@solana/web3.js";
import { getProgram } from "@/lib/anchor/program";
import {
  getStakePda,
  getGlobalPda,
  getAssociatedUserPda,
  getAssociatedGlobalPda,
  getAssociatedStakePda,
} from "@/lib/anchor/pdas";
import BN from "bn.js";
import {
  TOKEN_PROGRAM_ID,
  ASSOCIATED_TOKEN_PROGRAM_ID,
  getAccount,
  createAssociatedTokenAccountInstruction,
} from "@solana/spl-token";

const TOKEN_MINT = new PublicKey(
  "Cx97mtHU9hKb3XWeKcDPHgLyEB8vguoNxEsnyGUmm4G9"
); //FROM IDL , Mint address token
const DECIMALS = 9;

async function buildAtaIxIfMissing(
  connection: Connection,
  payer: PublicKey,
  ata: PublicKey,
  owner: PublicKey,
  mint: PublicKey
): Promise<TransactionInstruction | null> {
  try {
    await getAccount(connection, ata);
    return null;
  } catch (_) {
    return createAssociatedTokenAccountInstruction(
      payer,
      ata,
      owner,
      mint,
      TOKEN_PROGRAM_ID,
      ASSOCIATED_TOKEN_PROGRAM_ID
    );
  }
}

export async function stakeTokens({
  connection,
  wallet,
  amountFloat,
  stakeId,
  durationIndex,
}: {
  connection: Connection;
  wallet: any;
  amountFloat: number;
  stakeId: number | BN;
  durationIndex: number;
}) {
  if (!wallet?.publicKey) throw new Error("Wallet not connected");

  const program = getProgram(connection, wallet);
  const user = wallet.publicKey;

  const [globalPda] = getGlobalPda();
  const [stakePda] = getStakePda(user, stakeId);
  const [assocUserPda] = getAssociatedUserPda(user, TOKEN_MINT);
  const [assocStakePda] = getAssociatedStakePda(stakePda, TOKEN_MINT);

  const preIxs: TransactionInstruction[] = [];
  const userAtaIx = await buildAtaIxIfMissing(
    connection,
    user,
    assocUserPda,
    user,
    TOKEN_MINT
  );
  if (userAtaIx) preIxs.push(userAtaIx);

  const base = Math.pow(10, DECIMALS);
  const amountBase = Math.floor(amountFloat * base);

  const amountBn = BN.isBN(amountBase) ? amountBase : new BN(amountBase);
  const stakeIdBn = new BN(stakeId);

  try {
    const userAtaAcc = await getAccount(connection, assocUserPda);
    const userBalBase = BigInt(userAtaAcc.amount.toString());
    const wantBase = BigInt(amountBase);
    if (wantBase <= 0n) {
      throw new Error("Amount must be greater than 0");
    }
    if (userBalBase < wantBase) {
      const fmt = (v: bigint) => Number(v) / base;
      throw new Error(
        `Insufficient ${TOKEN_MINT.toBase58()} balance. Have ${fmt(
          userBalBase
        )} need ${fmt(wantBase)}`
      );
    }
  } catch (e: any) {
    if (String(e?.message || e).includes("Insufficient")) {
      throw e;
    }

    if (String(e?.message || e).includes("Account does not exist")) {
      throw new Error(
        `No ${TOKEN_MINT.toBase58()} found in your wallet. Please acquire tokens before staking.`
      );
    }
  }

  let lockDuration: any;
  switch (durationIndex) {
    case 0:
      lockDuration = { durationOne: {} };
      break;
    case 1:
      lockDuration = { durationTwo: {} };
      break;
    case 2:
      lockDuration = { durationThree: {} };
      break;
    default:
      throw new Error("Invalid duration index");
  }

  const method = program.methods
    .stakeToken(stakeIdBn, amountBn, lockDuration)
    .accounts({
      user,
      stake: stakePda,
      global: globalPda,
      tokenMint: TOKEN_MINT,
      associatedStake: assocStakePda,
      associatedUser: assocUserPda,
      associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
      tokenProgram: TOKEN_PROGRAM_ID,
      systemProgram: SystemProgram.programId,
    } as any)
    .preInstructions(preIxs);

  try {
    const sim: any = await method.simulate();
    const simLogs: string[] | undefined = sim?.raw?.[0]?.logs || sim?.logs;
    if (simLogs && simLogs.length > 0) {
      console.debug("stakeToken simulate logs:", simLogs);
    }
  } catch (e: any) {
    try {
      const tx = await method.transaction();
      tx.feePayer = user;
      const { blockhash, lastValidBlockHeight } =
        await connection.getLatestBlockhash();
      tx.recentBlockhash = blockhash;

      const simRes: any = await (connection as any).simulateTransaction(tx);
      const rawLogs: string[] | undefined = simRes?.value?.logs || [];
      const logs =
        rawLogs && rawLogs.length ? `\nLogs:\n${rawLogs.join("\n")}` : "";
      throw new Error(`Simulation failed: ${e?.message || e}${logs}`);
    } catch (inner: any) {
      const errLogs: string[] | undefined =
        inner?.value?.logs || inner?.logs || inner?.error?.logs;
      const logs =
        errLogs && errLogs.length ? `\nLogs:\n${errLogs.join("\n")}` : "";
      throw new Error(`Simulation failed: ${inner?.message || inner}${logs}`);
    }
  }

  const txSig = await method.rpc();

  return txSig;
}

export async function fetchUserStakeAccounts({
  connection,
  wallet,
}: {
  connection: Connection;
  wallet: any;
}) {
  if (!wallet?.publicKey) throw new Error("Wallet not connected");
  const program = getProgram(connection, wallet);
  const user = wallet.publicKey;

  const accounts = await program.account.stake.all([
    {
      memcmp: {
        // 8 bytes Anchor discriminator, then `user` pubkey starts
        offset: 8,
        bytes: user.toBase58(),
      },
    },
  ]);

  return accounts.map((acc: any) => ({
    pubkey: acc.publicKey,
    data: acc.account,
  }));
}
