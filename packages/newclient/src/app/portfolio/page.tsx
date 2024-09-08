"use client";

import React from "react";

import { useTransactions } from "@/hooks/useTransactions";

import { useUser } from "@/hooks/useClient";
import {
  TransactionsList,
  TransactionsTable
} from "@/components/table/TransactionsTable";
import Link from "next/link";
import { BankCardSlider, Col, Loading, Row } from "@/components";

export default function UserPage() {
  const { user, isErrorUser, isLoadingUser } = useUser();
  const { transactions, isLoading, isError } = useTransactions({
    id: user?.id as string
  });

  if (!user && isLoadingUser) {
    return <Loading />;
  }

  if (isErrorUser) {
    return (
      <div>
        <h1>Something went wrong...</h1>
      </div>
    );
  }

  return (
    <Row className="flex flex-col">
      <h1 className="text-3xl font-bold uppercase">Your Wallet Balance</h1>
      <Row className="justify-between flex-col lg:flex-row">
        <Col className="w-full lg:w-1/3">
          <BankCardSlider user={user} />
        </Col>
        <Col className="bg-gray-700 xs  p-24 w-full lg:w-1/3 h-48 rounded-lg">
          <p>Graph</p>
        </Col>
      </Row>

      <Row className="m-6">
        <Link
          href="/transactions"
          className="text-2xl text-blue-500 hover:text-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          Go to all transactions...
        </Link>
      </Row>

      <Row className="hidden lg:flex flex-col">
        <TransactionsTable
          transactions={transactions}
          isTransactionsLoading={isLoading}
          isTransactionsError={isError}
        />
      </Row>

      <Row className="flex flex-col lg:hidden">
        <TransactionsList
          transactions={transactions}
          isTransactionsLoading={isLoading}
          isTransactionsError={isError}
        />
      </Row>
    </Row>
  );
}
