"use client";
import React, { useState } from "react";
import {
  FiArrowLeft,
  FiChevronDown,
  FiChevronUp
} from "react-icons/fi";
import { useTransactionById } from "@/hooks/useTransactions";
import {useParams, useRouter} from "next/navigation";

import {Button, Loading} from "@/components";


export default function TransactionDetailsPage() {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const { id } =  useParams()

  const { transaction, isError,isLoading } = useTransactionById({ id : id as string });

  if (isLoading || !transaction) {
    return <Loading />;
  }
  if (isError) {
    return <div>Error loading transaction details.</div>;
  }

  return (
    <div className="max-w-lg items-center text-gray-800 flex justify-around p-4 lg:p-10">
      <div className="w-full  bg-white shadow-lg rounded-lg p-6">

        <div className="flex items-center justify-between pb-4 border-b">
            <button
                className="text-gray-500"
                onClick={() => router.push("/transactions")}
            >
                <FiArrowLeft className="w-6 h-6" />
            </button>
          <div className="text-left ml-4">

            <p className="text-sm text-black">{transaction.createdAt}</p>
          </div>
          <span
            className={`text-sm px-3 py-1 rounded-full ${
              transaction.status === "success"
                ? "bg-green-100 text-green-600"
                : "bg-yellow-100 text-yellow-600"
            }`}
          >
            {transaction.status === "success" ? "Успішно" : "В очікуванні"}
          </span>
        </div>

        <div className="py-6 text-left">
          <p className="text-3xl font-bold text-gray-800">
            + {transaction.amount} {transaction.currency}
          </p>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between">
            <p className="font-semibold">Деталі транзакції</p>
            <button onClick={toggleExpand}>
              {isExpanded ? (
                <FiChevronUp className="w-6 h-6" />
              ) : (
                <FiChevronDown className="w-6 h-6" />
              )}
            </button>
          </div>

          {isExpanded && (
            <div className="mt-4 text-black">
              <div className="flex items-center justify-between">
                <p>Тип:</p>
                <p className="">{transaction.type}</p>
              </div>
              <div className="flex items-center justify-between">
                <p>Статус:</p>
                <p>{transaction.status}</p>
              </div>
              <div className="flex items-center justify-between">
                <p>Валюта:</p>
                <p>{transaction.currency}</p>
              </div>
              <div className="flex items-center justify-between">
                <p>Створено:</p>
                <p>{transaction.createdAt}</p>
              </div>
              <div className="flex items-center justify-between">
                <p>Оновлено:</p>
                <p>{transaction.updatedAt}</p>
              </div>
            </div>
          )}
        </div>

        <div className="border-t pt-4 mt-4">
          <label className="text-gray-600">Замітка:</label>
          <textarea
            className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Додати замітку"
          />
        </div>

        <div className="border-t pt-6 mt-6 flex flex-col space-y-4">
            <Button color='none' type="button" onClick={() => router.push("/share")}>
                Поділитися
            </Button>
          <Button color='blue' type="button" onClick={() => router.push("/support")}>
            Звернутися в підтримку
            </Button>
        </div>
      </div>
    </div>
  );
}
