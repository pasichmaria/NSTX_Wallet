import React from "react";

import { useCoinMarketCup } from "@/hooks/useCoinMarketCap";
import { NstxLogo } from "@/assets";

interface CoinData {
  currency: string;
  value: number;
}

export const CryptoTickerBar = ({ className = "" }: { className?: string }) => {
  const { coinMarketCup, isLoading, isError } = useCoinMarketCup();

  if (isLoading || !coinMarketCup?.data) {
    return null;
  }
  if (isError) {
    return (
      <div className="text-red-500 text-center">Error loading data...</div>
    );
  }

  return (
    <div className={`w-full text-white ${className}`}>
      <div className="xs: max-w-xs max-w-7xl mx-auto flex items-center space-x-4">
        <NstxLogo className="text-white" />
        <div className="flex overflow-x-auto no-scrollbar space-x-4">
          {coinMarketCup?.data.map((coin: CoinData) => (
            <div key={coin.currency} className="flex items-center space-x-2">
              <span>{coin.currency}</span>
              <span className="text-green-400">${coin.value.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
