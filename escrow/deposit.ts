import {
    Connection,
    Keypair,
    PublicKey,
    Transaction,
    TransactionInstruction,
    sendAndConfirmTransaction,
  } from "@solana/web3.js";
  import { getOrCreateAssociatedTokenAccount, TOKEN_PROGRAM_ID } from "@solana/spl-token";
  import bs58 from "bs58";
  import "dotenv/config";
  
  
 
  const PROGRAM_ID = new PublicKey(process.env.PROGRAM_ID || "Q5v9W72xJaP3J39EnwhPm6LBgmUPTEkSQwtqgLFQaLw");
  const RPC_URL = process.env.RPC_URL || "https://api.devnet.solana.com";
  const MINT_ADDRESS = process.env.MINT_ADDRESS || "";
  const AMOUNT_RAW = process.env.AMOUNT || "0"; 
  const WALLET_SECRET_BASE58 = process.env.WALLET_SECRET_BASE58 || "";
  
  if (!WALLET_SECRET_BASE58) {
    throw new Error("WALLET_SECRET_BASE58 is required in .env");
  }
  if (!MINT_ADDRESS) {
    throw new Error("MINT_ADDRESS must be set to a valid SPL token mint");
  }
  if (!AMOUNT_RAW) {
    throw new Error("AMOUNT must be set to a positive integer amount in base units");
  }
  
 
  const secretKey = bs58.decode(WALLET_SECRET_BASE58);
  const wallet = Keypair.fromSecretKey(secretKey);
  
  const connection = new Connection(RPC_URL, "confirmed");


  function deriveVaultPda(authority: PublicKey) {
    const [vaultPda] = PublicKey.findProgramAddressSync(
      [Buffer.from("vault"), authority.toBuffer()],
      PROGRAM_ID
    );
    return vaultPda;
  }
  
  
  async function main() {
    const mint = new PublicKey(MINT_ADDRESS);
    const amount = BigInt(AMOUNT_RAW);
  
   
   
    const senderTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      wallet,
      mint,
      wallet.publicKey
    );
  
    console.log("__________________________");
    console.log("Mint:", mint.toBase58());
    console.log("Amount:", amount);
    console.log("Wallet:", wallet.publicKey.toBase58());
    
    
    const vaultPda = deriveVaultPda(wallet.publicKey);
    const vaultTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      wallet,
      mint,
      vaultPda,
      true
    );
  
    
    console.log("Vault PDA:", vaultPda.toBase58());
    console.log("Sender token account:", senderTokenAccount.address.toBase58());
    console.log("Vault token account:", vaultTokenAccount.address.toBase58());
    console.log("__________________________");
   
    const discriminator = Buffer.from([0]);
    const amountBuffer = Buffer.alloc(8);
    amountBuffer.writeBigUInt64LE(amount);
    const data = Buffer.concat([discriminator, amountBuffer]);
  
   
    const keys = [
      { pubkey: senderTokenAccount.address, isSigner: false, isWritable: true },
      { pubkey: vaultTokenAccount.address, isSigner: false, isWritable: true },
      { pubkey: wallet.publicKey, isSigner: true, isWritable: false },
      { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
    ];
  
  
    const ix = new TransactionInstruction({
      programId: PROGRAM_ID,
      keys,
      data,
    });
  
   
    const tx = new Transaction().add(ix);
    const sig = await sendAndConfirmTransaction(connection, tx, [wallet]);
    console.log("✅ Deposit successful!");
    console.log("Transaction Signature:", sig);
    console.log(`Explorer: https://explorer.solana.com/tx/${sig}?cluster=devnet`);
  }
  
  main().catch((err) => console.error(err));
  