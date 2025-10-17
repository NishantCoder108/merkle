"use client";

type Item = {
  pubkey: any;
  data: {
    user: any;
    stakedAmount: any;
    claimedAmount: any;
    burnedAmount: any;
    stakeId: any;
    stakedAt: any;
    cmlRewardPerToken: any;
    lockedDuration: any;
  };
};

type Props = {
  items?: Item[];
};

export default function StakeList({ items = [] }: Props) {
  if (!items.length) {
    return <div className="text-sm text-zinc-400">No stake accounts found.</div>;
  }

  const formatAmount = (amount: any) => {
    if (!amount) return "0";
    
    return (Number(amount) / 1_000_000_000).toFixed(4);
  };

  return (
    <div className="space-y-3">
      <div className="px-4">
        <div className="grid grid-cols-2 gap-4 text-xs text-zinc-400">
          <div>Stake account</div>
          <div className="text-right">Amount</div>
        </div>
      </div>

      {items.map((item) => (
        <div
          key={item.pubkey.toBase58()}
          className="bg-white/5 rounded-2xl border border-white/10 px-4 py-3"
        >
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="text-gray-200 text-sm font-mono truncate">
              {item.pubkey.toBase58().slice(0, 8)}...{item.pubkey
                .toBase58()
                .slice(-8)}
            </div>
            <div className="text-right text-white font-semibold tabular-nums">
              {formatAmount(item.data.stakedAmount)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


