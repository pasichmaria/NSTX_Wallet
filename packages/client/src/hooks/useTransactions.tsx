import { useQuery } from "react-query";

import { getTransactions } from "../API";
import { Transaction, User } from "../interfaces";

export const useTransactions = ({ user }: { user: User }) => {
  const userId = user.id;
  const transactionsQuery = useQuery<
    Transaction[] | undefined,
    Error,
    Transaction[]
  >("transactions", () => getTransactions({ userId }));
  return {
    transactions: transactionsQuery.data,
    isLoading: transactionsQuery.isLoading,
    isError: transactionsQuery.isError
  };
};
