"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUser } from "@/hooks/useClient";
import { useBalances } from "@/hooks/useBalances";

import {Button, ConfirmPayment, Input, Loading, Row, Select} from "@/components";


export default function NSTXPaymentPage() {
  const { user, isLoadingUser } = useUser();
  const { balances } = useBalances({ userId: user?.id as string });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const validationSchema = Yup.object({
    receiverId: Yup.string().required("Recipient is required"),
    currency: Yup.string().required("Choose the currency"),
    amount: Yup.number()
      .required("Amount is required")
      .min(0, "Amount must be greater than 0")
  });

  const formik = useFormik({
    initialValues: {
      receiverId: "",
      currency: "USDT",
      amount: "",
      message: ""
    },
    validationSchema,
    onSubmit: values => {
      setShowConfirmation(true);
      console.log(values);
    }
  });

  if (isLoadingUser || !balances) {
    return <Loading />;
  }

  return (
    <Row className="justify-center items-center h-full text-white">
      {!showConfirmation ? (
        <div className="p-6 max-w-md w-full bg-gray-900 shadow-lg rounded-lg">
          <h1 className="text-left mb-6">Send crypto to NSTX wallet owner</h1>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <Input
              id="receiverId"
              name="receiverId"
              type="text"
              value={formik.values.receiverId}
              onChange={formik.handleChange}
            />
            {formik.touched.receiverId && formik.errors.receiverId ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.receiverId}
              </div>
            ) : null}

            <Select
              id="currency"
              name="currency"
              value={formik.values.currency}
              onChange={formik.handleChange}
            >
              {balances.map(balance => (
                <option key={balance.currency} value={balance.currency}>
                  {balance.currency}
                </option>
              ))}
            </Select>
            {formik.touched.currency && formik.errors.currency ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.currency}
              </div>
            ) : null}

            <Input
              id="amount"
              name="amount"
              type="number"
              value={formik.values.amount}
              onChange={formik.handleChange}
            />
            {formik.touched.amount && formik.errors.amount ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.amount}
              </div>
            ) : null}

            <Input
              id="message"
              name="message"
              type="text"
              value={formik.values.message}
              onChange={formik.handleChange}
            />

            <Button color="cyan" type="submit" className="mt-4 w-full">
              Send
            </Button>
          </form>
        </div>
      ) : (
        <ConfirmPayment
          balances={balances}
          user={user}
          receiverId={formik.values.receiverId}
          amount={formik.values.amount}
          currency={formik.values.currency}
        />
      )}
    </Row>
  );
}
