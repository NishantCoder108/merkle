"use client";
import { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { stakeTokens } from "@/lib/services/stakeService";
import { BN } from "bn.js";

const DURATION_MAP = [
  { value: 0, label: "Duration One" },
  { value: 1, label: "Duration Two" },
  { value: 2, label: "Duration Three" },
];

export default function StakeForm({ onStaked }: { onStaked?: () => void }) {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [amount, setAmount] = useState("");
  const [durationIndex, setDurationIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  async function handleConfirm() {
    if (!wallet.publicKey) return alert("Connect wallet");
    const parsed = Number(amount);
    if (!isFinite(parsed) || parsed <= 0) return alert("Enter valid amount");

    setLoading(true);
    try {
      // Create a random positive 64-bit (i64) value as 8-byte LE buffer to avoid number precision issues
      const bytes = new Uint8Array(8);
      window.crypto.getRandomValues(bytes);
      // Ensure non-negative signed i64 by clearing the highest bit
      bytes[7] &= 0x7f;
      const stakeId = new BN(Buffer.from(bytes), "le");
      console.log("____", "amount :", amount, "Stake Id",  stakeId, "Parsed Amount", parsed)
      const tx = await stakeTokens({
        connection,
        wallet,
        amountFloat: parsed,
        stakeId,
        durationIndex,
      });
      console.log("Stake tx : ", tx);
      alert("Staked! tx: " + tx);
      onStaked?.();
    } catch (err: any) {
      console.error(err);
      alert("Error: " + (err?.message || String(err)));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
      <label className="block text-sm text-gray-300">Amount</label>
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="0.0"
        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white"
      />

      <label className="block text-sm text-gray-300">Lock Duration</label>
      <select
        value={durationIndex}
        onChange={(e) => setDurationIndex(Number(e.target.value))}
        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white"
      >
        {DURATION_MAP.map((d) => (
          <option key={d.value} value={d.value}>
            {d.label}
          </option>
        ))}
      </select>

      <button
        onClick={handleConfirm}
        disabled={loading}
        className="w-full bg-[#522AA5] text-white py-3 rounded-xl font-semibold disabled:opacity-50 cursor-pointer"
      >
        {loading ? "Staking..." : "Confirm"}
      </button>
    </div>
  );
}
