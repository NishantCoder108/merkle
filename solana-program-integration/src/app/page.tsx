"use client";

import { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import Container from "@/components/layout/Container";
import WalletConnect from "@/components/solana/WalletConnect";
import StakeForm from "@/components/stake/StakeForm";
import StakeList from "@/components/stake/StakeList";
import { useConnection } from "@solana/wallet-adapter-react";
import { fetchUserStakeAccounts } from "@/lib/services/stakeService";



export default function Home() {
  const { connection } = useConnection();
  const { connected, publicKey } = useWallet();
  const [stakeAccounts, setStakeAccounts] = useState<any[]>([]);

  async function loadStakes() {
    if (!connected || !publicKey) {
      setStakeAccounts([]);
      return;
    }
    try {
      const items = await fetchUserStakeAccounts({ connection, wallet: { publicKey } as any });
      setStakeAccounts(items);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    loadStakes();
    
  }, [connected, publicKey?.toBase58()]);

  return (
    <main className="min-h-screen bg-black">
    
      <Container className="flex items-center justify-between py-8">
        <h1 className="text-2xl font-semibold text-white">Solana Program Integration</h1>
        <WalletConnect />
      </Container>
      <Container className="mt-16">
        <StakeForm onStaked={loadStakes} />
      </Container>
      <Container className="mt-10">
        <StakeList items={stakeAccounts} />
      </Container>
    </main>
  );
}
