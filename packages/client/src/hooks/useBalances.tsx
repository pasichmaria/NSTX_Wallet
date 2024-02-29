import { useQuery } from "react-query";

import { getUserBalance, getUserBalances } from "../API";

export const useBalances = ({ userId }: { userId: string }) => {
	const balancesQuery = useQuery("balances", () => getUserBalances({ userId }));
	return {
		balances: balancesQuery.data,
		isLoading: balancesQuery.isLoading,
		isError: balancesQuery.isError,
	};
};
export const useBalance = ({ userId, id }: { userId: string; id: string }) => {
	const balanceQuery = useQuery(["balance", id], () =>
		getUserBalance({ userId, id }),
	);

	return {
		balance: balanceQuery.data,
		isLoading: balanceQuery.isLoading,
		isError: balanceQuery.isError,
	};
};
