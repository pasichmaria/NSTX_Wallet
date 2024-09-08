"use client";
import React from "react";

import {useTransactions} from "@/hooks/useTransactions";
import {useUser} from "@/hooks/useClient";
import {Button, Row, TransactionsList, TransactionsTable} from "@/components";

export default function TransactionsPage() {
    const {user} = useUser();

    const {transactions, isLoading, isError} = useTransactions({id : user?.id as string});
    return (
        <div className="text-white">
            <div className="w-full lg: p-6">
                <div
                    className="mb-10 flex flex-col lg:flex-row items-start
        lg:items-center justify-between bg-gray-900 p-6 rounded-lg"
                >
                    <p className="text-lg font-medium mb-4 lg:mb-0">
                        TransactionHistory.pdf
                    </p>
                    <Button color="cyan">Download</Button>
                </div>
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
                <div className="mb-10 lg:mb-16">
                    <h2 className="text-2xl lg:text-3xl  mb-6">Transactions</h2>
                    <p className="text-lg lg:text-xl">
                        By using our services, you agree to our terms of service. Please
                        read them carefully before using our services.
                    </p>
                </div>
                <div className="bg-gray-800 p-6 lg:p-12 rounded-lg">
                    <h2 className="text-2xl lg:text-3xl  mb-6">Document Contents</h2>
                    <ul className="space-y-4 lg:space-y-6 list-none">
                        <li className="flex items-start">
                            <span className="text-green-400 mr-2"> ● </span>
                            <p> General provisions and definitions. </p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-400 mr-2"> ● </span>
                            <p> Rules for collecting and protecting personal data. </p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-400 mr-2"> ● </span>
                            <p> Cookie usage rules. </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
