import React from "react";
import { Transaction } from "@/interfaces";
import { useRouter } from "next/navigation"

import {
  FaCalendarAlt,
  FaCheckCircle,
  FaClipboardList,
  FaDollarSign,
  FaInfoCircle,
  FaMoneyBillWave,
  FaUser
} from "react-icons/fa";
import {Loading} from "@/components";

interface TransactionProps {
  transactions?: Transaction[];
  isTransactionsLoading?: boolean;
  isTransactionsError?: boolean;
}

export const TransactionsTable = ({
  transactions,
  isTransactionsLoading,
  isTransactionsError
}: TransactionProps) => {
  const router = useRouter();

  if (isTransactionsLoading) {
    return <Loading />;
  }

  if (isTransactionsError) {
    return <div>Error loading transactions.</div>;
  }

  if (!transactions) {
    return <div>No transactions found.</div>;
  }

  return (
    <table className="min-w-full bg-gray-900 border-blue-500a border-l-4 shadow-lg transition-shadow duration-300 w-full text-white">
      <thead>
        <tr className="bg-gray-800 text-left">
          <th className="p-4">ID</th>
          <th className="p-4">Status</th>
          <th className="p-4">Type</th>
          <th className="p-4">Amount</th>
          <th className="p-4">Currency</th>
          <th className="p-4">Created At</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr
            key={transaction.id}
            className="border-t border-gray-800 hover:bg-gray-800"
          >
            <td className="p-4">
              <button
                onClick={() => router.push(`/transactions/${transaction.id}`)}
                className="text-blue-500"
              >
                {transaction.id}
              </button>
            </td>
            <td className="p-4 flex items-center">
              {transaction.status === "completed" ? (
                <FaCheckCircle className="mr-2 text-green-500" />
              ) : (
                <FaInfoCircle className="mr-2 text-yellow-500" />
              )}
              {transaction.status}
            </td>
            <td className="p-4">{transaction.type}</td>
            <td className="p-4">
              {transaction.type === "deposit" ? (
                <h1 className="text-green-500">+ {transaction.amount}</h1>
              ) : (
                <h1 className="text-red-500">- {transaction.amount}</h1>
              )}
            </td>
            <td className="p-4">
              <FaDollarSign className="inline-block mr-1 text-blue-500" />
              {transaction.currency}
            </td>
            <td className="p-4 flex items-center">
              <FaCalendarAlt className="mr-2 text-gray-500" />
              {transaction.createdAt}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export const TransactionsList = ({ transactions }: TransactionProps) => {
  const router = useRouter();

  return (
      <ul className="space-y-4 sm:space-y-6">
        {transactions?.map((transaction) => (
            <li
                key={transaction.id}
                className="p-4 sm:p-6 bg-gray-800 border-l-4 border-blue-500 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 text-white"
            >
              <button
                  onClick={() => router.push(`/transactions/${transaction.id}`)}
                  className="block w-full text-left"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 tracking-wide">
                  <div className="flex items-center">
                    <FaClipboardList className="mr-2 text-blue-500" />
                    <strong>ID:</strong> {transaction.id}
                  </div>
                  <div className="flex items-center">
                    <FaUser className="mr-2 text-blue-500" />
                    <strong>User ID:</strong> {transaction.userId}
                  </div>
                  <div className="flex items-center">
                    {transaction.status === "completed" ? (
                        <FaCheckCircle className="mr-2 text-green-500" />
                    ) : (
                        <FaInfoCircle className="mr-2 text-yellow-500" />
                    )}
                    <strong>Status:</strong> {transaction.status}
                  </div>
                  <div className="flex items-center">
                    <FaClipboardList className="mr-2 text-blue-500" />
                    <strong>Type:</strong> {transaction.type}
                  </div>
                  <div className="flex items-center">
                    <FaMoneyBillWave className="mr-2 text-green-500" />
                    <strong>Amount:</strong> {transaction.amount}
                  </div>
                  <div className="flex items-center">
                    <FaDollarSign className="mr-2 text-blue-500" />
                    <strong>Currency:</strong> {transaction.currency}
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2 text-gray-500" />
                    <strong>Created:</strong> {transaction.createdAt}
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2 text-gray-500" />
                    <strong>Updated:</strong> {transaction.updatedAt}
                  </div>
                </div>
              </button>
            </li>
        ))}
      </ul>
  );
};
