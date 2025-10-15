## Escrow Deposit - TS (Devnet)

This directory contains a minimal TypeScript client to execute the Deposit instruction against a deployed Solana program. It derives a program-derived address (PDA) vault for your wallet and deposits SPL tokens into the vault's associated token account (ATA).

### What was implemented
- **Environment-driven config**: `deposit.ts` reads RPC URL, program ID, mint, amount, and wallet secret from `.env` via `dotenv`.
- **PDA + ATAs**: The script derives the vault PDA with seeds `["vault", authority]` and ensures both the sender and vault ATAs exist for the specified mint.
- **Instruction encoding**: Builds instruction data as `[discriminator=0 | amount(u64, little-endian)]` and sends it to the on-chain program.
- **Classic SPL Token program**: Uses `TOKEN_PROGRAM_ID` (not Token-2022), matching the on-chain `Transfer` in the provided contract snippet.

### Reference program
- Gist (on-chain logic and instruction layout): [Escrow Program Gist](https://gist.github.com/Alwin24/d7be9fa2d58ddfcf172cf38b92abdd49)
- Program ID (from `declare_id!`): `Q5v9W72xJaP3J39EnwhPm6LBgmUPTEkSQwtqgLFQaLw`

### Successful example transaction
- Devnet Explorer: [Solana Explorer](https://explorer.solana.com/tx/tSowK93wpGjhhenR1VKEtxRkoh5rBipzWiuXDbCqWYbWMH6tAGdeaLTPTKue3SGGLF2oFCc4FvTPhmek54qHjB1?cluster=devnet)

- Sol-Scan Explorer: [Solscan](https://solscan.io/tx/tSowK93wpGjhhenR1VKEtxRkoh5rBipzWiuXDbCqWYbWMH6tAGdeaLTPTKue3SGGLF2oFCc4FvTPhmek54qHjB1?cluster=devnet#tokenBalanceChange)



### Project structure
- `deposit.ts`: TypeScript client that constructs and sends the Deposit instruction.
- `package.json`: Scripts and dependencies.
- `tsconfig.json`: TypeScript compiler options.
- `.env` (local): Secrets and runtime config (not committed).

### Prerequisites
- Node.js 18+
- Yarn or npm
- A Solana wallet with devnet SOL and the chosen SPL token balance

### Install
```bash
yarn install
```

### Configure environment
Create a `.env` file alongside `package.json` with:
```ini
RPC_URL=https://api.devnet.solana.com
PROGRAM_ID=Q5v9W72xJaP3J39EnwhPm6LBgmUPTEkSQwtqgLFQaLw
MINT_ADDRESS=REPLACE_WITH_SPL_TOKEN_MINT
AMOUNT=REPLACE_WITH_AMOUNT_IN_BASE_UNITS
WALLET_SECRET_BASE58=REPLACE_WITH_YOUR_BASE58_SECRET
```
- **AMOUNT** is in base units (e.g., for 6 decimals: 1 token = 1000000).
- **WALLET_SECRET_BASE58**: You can use the private key exported from Phantom (Settings → Developer → Export Private Key). Handle with extreme care and never commit real secrets.

### Run
Using `tsx`:
```bash
yarn tsx deposit.ts
```
Or:
```bash
npx tsx deposit.ts
```

### How the deposit works
- **PDA derivation**: `vaultPda = findProgramAddressSync(["vault", authorityPubkey])` under the program ID.
- **ATA creation**: Ensures
  - Sender ATA: mint owned by your wallet
  - Vault ATA: mint owned by the PDA (allows owner PDA)
- **Instruction accounts (order matters)**:
  1. `sender_token_account` (writable)
  2. `vault_token_account` (writable)
  3. `authority` (signer)
  4. `TOKEN_PROGRAM_ID`
- **Instruction data**: 1 byte discriminator = `0` (Deposit), followed by `amount` as `u64` little-endian.

### Troubleshooting
- "TokenAccountNotFoundError": Ensure your wallet has devnet SOL to create ATAs and that `MINT_ADDRESS` is a valid devnet SPL mint.
- "invalid account data for instruction": Make sure you are using `TOKEN_PROGRAM_ID` (legacy SPL Token) consistently, and that your ATAs were created for the same token program as the mint.

### Licensing
MIT


