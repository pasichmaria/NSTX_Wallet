import { useMutation, useQuery } from "react-query";

import {createNSTXTransfer, getTransactionById, getTransactions, getTransactionsForCurrency} from "../API";
import {Balance, Transaction, User} from "../interfaces";

interface TransactionProps {
  onSuccess?: (data: unknown) => void;
  onError?: (error: unknown) => void;
}

export const useTransactions = ({ user }: { user: User }) => {
  const userId = user.id;
  const transactionsQuery = useQuery<Transaction[], Error, Transaction[]>(
    "transactions",
    () => getTransactions({ userId })
  );
  return {
    transactions: transactionsQuery.data,
    isLoading: transactionsQuery.isLoading,
    isError: transactionsQuery.isError
  };
};

export const useTransactionsForCurrency = ({
  balance
}: {
  balance: Balance;
}) => {
  const transactionsQuery = useQuery<Transaction[], Error, Transaction[]>(
    ["transactions", balance],
    () =>
      getTransactionsForCurrency({
        currency: balance.currency
      })
  );
  return {
    transactionsCurrency: transactionsQuery.data,
    isLoading: transactionsQuery.isLoading,
    isError: transactionsQuery.isError
  };
};

export const useNSTXTransfer = ({ onSuccess, onError }: TransactionProps) => {
  const NSTXTransferQuery = useMutation<
    void,
    unknown,
    {
      senderId: string;
      receiverId: string;
      amount: number;
      currency: string;
    }
  >(
    "NSTXTransfer",
    async data => {
      await createNSTXTransfer(data);
    },
    {
      onSuccess: async data => {
        if (onSuccess) {
          onSuccess(data);
        }
      },
      onError: async error => {
        if (onError) {
          onError(error);
        }
      }
    }
  );
  return {
    NSTXTransfer: NSTXTransferQuery.mutate
  };
};

export const useTransactionById = ({ id }: { id: string }) => {
  const transactionQuery = useQuery<Transaction, Error, Transaction>(
    ["transaction", id],
    () => getTransactionById({ id })
  );
  return {
    transaction: transactionQuery.data,
    isLoading: transactionQuery.isLoading,
    isError: transactionQuery.isError
  };
};