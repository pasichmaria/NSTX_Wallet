import { instance } from "@/api/axios";
import { Transaction } from "@/interfaces";

export const getTransactions = async ({
  id
}: {
  id: string;
}): Promise<Transaction[]> => {
  const response = await instance.get("/transactions", {
    params: {
      id
    }
  });
  return response.data;
};

export const getTransactionById = async ({
  id
}: {
  id: string;
}): Promise<Transaction> => {
  const response = await instance.get(`/transactions/${id}`);
  return response.data;
};

export const getTransactionsForCurrency = async ({
  currency
}: {
  currency: string;
}): Promise<Transaction[]> => {
  const response = await instance.get("/transactions/currency", {
    params: {
      currency
    }
  });
  return response.data;
};

export const createNSTXTransfer = async ({
  senderId,
  receiverId,
  amount,
  currency
}: {
  senderId: string;
  receiverId: string;
  amount: number;
  currency: string;
}): Promise<void> => {
  await instance.post("/transactions/transfer", {
    senderId,
    receiverId,
    amount,
    currency
  });
};
