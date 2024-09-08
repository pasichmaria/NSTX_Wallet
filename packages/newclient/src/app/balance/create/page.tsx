"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useCreateBalance } from "@/hooks/useBalances";
import { FaChevronDown } from "react-icons/fa";

import { Button } from "@/components";

const currencyOptions = [
    "USD", "DASH", "XMR", "BCH", "LTC", "XRP", "XLM", "BTC",
    "BNB", "USDT", "ETH", "BUSD", "SOL", "DOT", "LINK", "CAKE",
    "CRO", "UNI", "AAVE"
];

export default function CreateBalancePage() {
    const router = useRouter();

    const { createBalance, isLoading } = useCreateBalance({
        onSuccess: () => {
            toast.success("Balance created successfully");
            router.push("/user");
        },
        onError: () => {
            toast.error("Error creating balance");
        }
    });

    return (
        <div className="container mx-auto p-4 flex items-center justify-center">
            <div className="w-full border border-blue-400 p-6 rounded-lg">
                <h1 className="text-3xl  mb-6 text-white uppercase">
                    Create Balance
                </h1>
                <CreateBalanceForm createBalance={createBalance} isLoading={isLoading} />
            </div>
        </div>
    );
}

function CreateBalanceForm({ createBalance, isLoading }: { createBalance: (data: { currency: string }) => void, isLoading: boolean }) {
    const [isOpen, setIsOpen] = useState(false);

    const formik = useFormik({
        initialValues: {
            currency: ""
        },
        validationSchema: Yup.object({
            currency: Yup.string().required("Currency is required")
        }),
        onSubmit: values => {
            createBalance(values);
        }
    });

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (currency: string) => {
        formik.setFieldValue("currency", currency);
        setIsOpen(false);
    };

    return (
        <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div className="relative">
                <label htmlFor="currency" className="block text-sm font-medium mb-2 text-gray-300">
                    Currency
                </label>
                <div className="relative">
                    <div
                        className={`w-full p-3 text-white   ${
                            formik.touched.currency && formik.errors.currency ? "border-red-500" : "border-gray-700"
                        } flex justify-between items-center cursor-pointer`}
                        onClick={toggleDropdown}
                    >
                        {formik.values.currency || "Select a currency"}
                        <FaChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </div>
                    {isOpen && (
                        <div className="absolute w-full mt-1 rounded-lg text-white z-10 max-h-48 overflow-y-auto border border-gray-700">
                            {currencyOptions.map(currency => (
                                <div
                                    key={currency}
                                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                                    onClick={() => handleOptionClick(currency)}
                                >
                                    {currency}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                {formik.touched.currency && formik.errors.currency && (
                    <div className="text-red-500 text-sm mt-2">{formik.errors.currency}</div>
                )}
            </div>
            <Button color={isLoading ? "transparent" : "blue"} type="submit" className="w-full flex items-center justify-center">
                {isLoading ? (
                    <svg className="w-5 h-5 mr-2 animate-spin text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 16 0H4z"/>
                    </svg>
                ) : "Create Balance"}
            </Button>
        </form>
    );
}
