import { useQuery } from "react-query";
import { getCoinMarketCup } from "@/api/coinMarketCap";

export const useCoinMarketCup = () => {
  const coinMarketCupQuery = useQuery("coinMarketCup", getCoinMarketCup);
  return {
    coinMarketCup: coinMarketCupQuery,
    isLoading: coinMarketCupQuery.isLoading,
    isError: coinMarketCupQuery.isError
  };
};
