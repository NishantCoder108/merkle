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
    // display using 9 decimals (ui amount)
    return (Number(amount) / 1_000_000_000).toFixed(4);
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "N/A";
    return new Date(Number(timestamp) * 1000).toLocaleDateString();
  };

  const getDurationLabel = (duration: any) => {
    if (!duration) return "Unknown";
    if (duration.durationOne) return "Duration One";
    if (duration.durationTwo) return "Duration Two";
    if (duration.durationThree) return "Duration Three";
    return "Unknown";
  };

  return (
    <div className="grid gap-6">
      {items.map((item, index) => (
        <div key={item.pubkey.toBase58()} className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-xl hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                #{index + 1}
              </div>
              <div>
                <div className="text-white font-semibold text-lg">
                  {getDurationLabel(item.data.lockedDuration)}
                </div>
                <div className="text-gray-400 text-sm">
                  {item.pubkey.toBase58().slice(0, 8)}...{item.pubkey.toBase58().slice(-8)}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">
                {formatAmount(item.data.stakedAmount)}
              </div>
              <div className="text-gray-400 text-sm">Staked</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-2xl bg-white/5">
              <div className="text-lg font-semibold text-green-400">
                {formatAmount(item.data.claimedAmount)}
              </div>
              <div className="text-gray-400 text-sm">Claimed</div>
            </div>
            <div className="text-center p-4 rounded-2xl bg-white/5">
              <div className="text-lg font-semibold text-red-400">
                {formatAmount(item.data.burnedAmount)}
              </div>
              <div className="text-gray-400 text-sm">Burned</div>
            </div>
            <div className="text-center p-4 rounded-2xl bg-white/5">
              <div className="text-lg font-semibold text-blue-400">
                {formatDate(item.data.stakedAt)}
              </div>
              <div className="text-gray-400 text-sm">Staked Date</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


