"use client";

import { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import Container from "@/components/layout/Container";
import WalletConnect from "@/components/solana/WalletConnect";
import StakeForm from "@/components/stake/StakeForm";
import StakeList from "@/components/stake/StakeList";
import { StakeService, DurationType } from "@/lib/services/stakeService";
import { useAnchorProgram } from "@/lib/anchor/program";
export default function Home() {
  const { connected, publicKey } = useWallet();
  // const { program, provider, wallet } = useAnchorProgram(); // ✅ hook at top

  // const [stakeAccounts, setStakeAccounts] = useState<any[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);

  // const handleStakeConfirm = async (data: { amount: number; duration: string }) => {
  //   if (!connected || !publicKey) {
  //     setError("Please connect your wallet first");
  //     return;
  //   }

  //   setIsLoading(true);
  //   setError(null);

  //   try {
  //     const stakeService = new StakeService(program, provider, wallet);
  //     const stakeId = BigInt(Date.now());
      
  //     await stakeService.stakeToken({
  //       amount: data.amount,
  //       stakeId,
  //       duration: data.duration as DurationType,
  //     });

  //     await loadStakeAccounts();
  //   } catch (err: any) {
  //     setError(err.message || "Stake transaction failed");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const loadStakeAccounts = async () => {
  //   if (!connected || !publicKey) {
  //     setStakeAccounts([]);
  //     return;
  //   }

  //   setIsLoading(true);
  //   try {
  //     const stakeService = new StakeService(program, provider, wallet);
  //     const accounts = await stakeService.getStakeAccounts();
  //     setStakeAccounts(accounts);
  //   } catch (err: any) {
  //     setError(err.message || "Failed to load stake accounts");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   if (connected) {
  //     loadStakeAccounts();
  //   } else {
  //     setStakeAccounts([]);
  //   }
  // }, [connected, publicKey]);

  return (
    <main className="min-h-screen bg-black">
      {/* ... UI ... */}
      <Container className="flex items-center justify-between py-8">
        <h1 className="text-2xl font-semibold text-white">Solana Program Integration</h1>
        <WalletConnect />
      </Container>
      <Container className="mt-16">
        <StakeForm/>
      </Container>
      {/* <Container>
        <StakeForm onConfirm={handleStakeConfirm} loading={isLoading} />
      </Container>
      <Container>
        <StakeList items={stakeAccounts} />
      </Container> */}
    </main>
  );
}
