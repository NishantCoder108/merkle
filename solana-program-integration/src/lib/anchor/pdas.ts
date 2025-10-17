import BN from "bn.js";
import { idl } from "./staking_program_idl";
import { PublicKey } from "@solana/web3.js";
import { ASSOCIATED_TOKEN_PROGRAM_ID } from "@solana/spl-token";
const PROGRAM_ID = new PublicKey((idl as any).address);
const TOKEN_CONST_SEED = Buffer.from([
  6, 221, 246, 225, 215, 101, 161, 147, 217, 203, 225, 70, 206, 235, 121, 172,
  28, 180, 133, 237, 95, 91, 55, 145, 58, 140, 245, 133, 126, 255, 0, 169,
]);

const ATA_PROGRAM_ID = ASSOCIATED_TOKEN_PROGRAM_ID;

export function getGlobalPda() {
  return PublicKey.findProgramAddressSync([Buffer.from("global")], PROGRAM_ID);
}

export function getStakePda(
  user: PublicKey,
  stakeId: number | BN
): [PublicKey, number] {
  const s = new BN(stakeId).toArrayLike(Buffer, "le", 8); // i64 LE, 8 bytes
  return PublicKey.findProgramAddressSync(
    [Buffer.from("stake"), user.toBuffer(), s],
    PROGRAM_ID
  );
}

export function getAssociatedUserPda(user: PublicKey, tokenMint: PublicKey) {
  return PublicKey.findProgramAddressSync(
    [user.toBuffer(), TOKEN_CONST_SEED, tokenMint.toBuffer()],
    ATA_PROGRAM_ID
  );
}

export function getAssociatedGlobalPda(
  global: PublicKey,
  tokenMint: PublicKey
) {
  return PublicKey.findProgramAddressSync(
    [global.toBuffer(), TOKEN_CONST_SEED, tokenMint.toBuffer()],
    ATA_PROGRAM_ID
  );
}

export function getAssociatedStakePda(stake: PublicKey, tokenMint: PublicKey) {
  return PublicKey.findProgramAddressSync(
    [stake.toBuffer(), TOKEN_CONST_SEED, tokenMint.toBuffer()],
    ATA_PROGRAM_ID
  );
}
