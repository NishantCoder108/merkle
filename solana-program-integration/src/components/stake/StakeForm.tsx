"use client";

import { useState } from "react";

type Duration = "durationOne" | "durationTwo" | "durationThree";

type Props = {
  onConfirm?: (data: { amount: number; duration: Duration }) => void;
  loading?: boolean;
};

const durations: { value: Duration; label: string }[] = [
  { value: "durationOne", label: "Duration One" },
  { value: "durationTwo", label: "Duration Two" },
  { value: "durationThree", label: "Duration Three" },
];

export default function StakeForm({ onConfirm, loading = false }: Props) {
  const [amount, setAmount] = useState<string>("");
  const [duration, setDuration] = useState<Duration>("durationOne");
  const [error, setError] = useState<string | null>(null);

  const submit = () => {
    const num = Number(amount);
    if (!Number.isFinite(num) || num <= 0) {
      setError("Enter a valid amount > 0");
      return;
    }
    setError(null);
    onConfirm?.({ amount: num, duration });
  };

  const commonInputClass =
    "w-full rounded-2xl bg-white/5 border border-white/10 px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200";

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl">
      <div className="space-y-6">
      
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Amount to Stake
          </label>
          <input
            type="number"
            min="0"
            step="0.000001"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter token amount"
            className={commonInputClass}
          />
        </div>

     
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Lock Duration
          </label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value as Duration)}
            className={commonInputClass}
          >
            {durations.map((d) => (
              <option key={d.value} value={d.value} className="bg-gray-900">
                {d.label}
              </option>
            ))}
          </select>
        </div>

     
        {error && (
          <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
            {error}
          </div>
        )}

      
        <button
          onClick={submit}
          disabled={loading}
          className="w-full bg-[#522AA5] disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg cursor-pointer"
        >
          {loading ? "Staking..." : "Stake Tokens"}
        </button>
      </div>
    </div>
  );
}
