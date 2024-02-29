import { useQuery } from "react-query";

import { getTransactions } from "../API";

export const useTransactions = ({ user }: any) => {
	const userId = user.id;
	const transactionsQuery = useQuery("transactions", () =>
		getTransactions({ userId }),
	);
	return {
		transactions: transactionsQuery.data,
		isLoading: transactionsQuery.isLoading,
		isError: transactionsQuery.isError,
	};
};
