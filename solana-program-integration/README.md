### Solana Staking dApp (Next.js + Anchor)

A minimal, production-ready staking frontend for a Solana Anchor program.

### What this delivers

- Wallet connect (Wallet Adapter) and network-aware RPCs
- Stake flow: generate 64-bit stake id, derive PDAs, simulate, send
- Account management: list user stake accounts via Anchor account query
- Robust UX: client-side validation, clear on-chain error logs surfaced to UI

### Tech

- Next.js 15, TypeScript, Tailwind CSS
- Anchor (typed IDL), @solana/web3.js, @solana/spl-token
- Wallet Adapter (Phantom and Standard wallets)

### Run locally

1) Install
```bash
npm install
```

2) Configure env (`.env.local`)
```env
NEXT_PUBLIC_SOLANA_NETWORK=https://api.devnet.solana.com
NEXT_PUBLIC_PROGRAM_ID=Hv6Q2KdFtbdobWYEeMWJ2yPfmg6efMZPd3A6mfKN3L7W
NEXT_PUBLIC_TOKEN_MINT=Cx97mtHU9hKb3XWeKcDPHgLyEB8vguoNxEsnyGUmm4G9
```

3) Start
```bash
npm run dev
```

### Key implementation notes

- PDAs: `stake` and `global` PDAs are derived with the program id; ATAs use the canonical `ASSOCIATED_TOKEN_PROGRAM_ID`.

- Safety: amounts are converted to base units with BN; stake ids are 8-byte LE values; transactions are simulated before send and logs are surfaced.

### Solana program integration (how-to)

- Generate typed bindings from your IDL:
```bash
anchor idl type staking_program.json --out staking_program.ts
```
- Create a typed Anchor `Program` instance with your IDL and `AnchorProvider`.
- Derive PDAs per program seeds; for ATAs, derive with `ASSOCIATED_TOKEN_PROGRAM_ID`.
- Validate inputs client-side (amounts, balances), then `simulate()` the method.
- Add any needed preInstructions (e.g., user ATA creation), then call `.rpc()`.
- Query program accounts via `program.account.<account>.all(...)` with `memcmp` filters.

- Reference IDL (staking): [staking_program.json](https://gist.githubusercontent.com/Alwin24/8eb8507030c586ea5dd5a92dcfea2fbe/raw/426d877c23087c2254774848e083b9d30438bfad/staking_program.json)

### Project layout

```
src/
  app/            # Next.js app entry
  components/     # UI (wallet, stake form/list)
  lib/
    anchor/       # IDL, typed program, PDA helpers
    services/     # stakeService (business logic)
    solana/       # connection + wallet providers
```

### Troubleshooting

- Insufficient balance: the UI validates your ATA balance and shows a clear message.
- Account not initialized: the dApp creates the user ATA if missing, program must create vault accounts for PDAs.
- ATA for PDA: not allowed by the ATA program, use a program-owned token account instead.

---

MIT License