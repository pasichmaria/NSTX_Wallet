"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Balance, User } from "@/interfaces";
import { useNSTXTransfer } from "@/hooks/useTransactions";

import { Button, Col, Loading } from "@/components";

interface ConfirmPaymentPageProps {
  user: User;
  receiverId: string;
  amount: string;
  currency: string;
  balances: Balance[];
}

export const ConfirmPayment = ({
  user,
  receiverId,
  amount,
  currency,
  balances
}: ConfirmPaymentPageProps) => {
  const balance = balances.find(balance => balance.currency === currency);
  const router = useRouter();

  const { NSTXTransfer } = useNSTXTransfer({
    onSuccess: () => {
      toast.success("Payment was successful");
      setTimeout(() => {
        router.push("/transactions");
      }, 1000);
    },
    onError: () => {
      toast.error("Payment failed");
    }
  });

  const onConfirm = () => {
    NSTXTransfer({
      senderId: user.id,
      receiverId,
      amount: parseFloat(amount),
      currency
    });
  };

  const onCancel = () => {
    router.push("/dashboard");
  };

  if (!balance) {
    return <Loading />;
  }

  return (
    <div className="w-full max-w-xl p-8 bg-gray-900 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8">Confirm Payment</h1>
      <div className="text-center mb-4">
        <p className="text-3xl">{amount}</p>
        <p className="text-lg">{currency}</p>
      </div>
      <div className="flex justify-between text-lg mb-4">
        <p>To:</p>
        <p>{receiverId}</p>
      </div>
      <div className="flex justify-between text-lg mb-4">
        <p>From:</p>
        <p>{user.id}</p>
      </div>
      <div className="flex justify-between text-lg mb-4">
        <p>Current balance:</p>
        <p>
          {balance?.value} {currency}
        </p>
      </div>
      <div className="flex justify-between text-lg mb-8">
        <p>Balance after payment:</p>
        <p>
          {balance?.value - parseFloat(amount)} {currency}
        </p>
      </div>

      <div className="flex items-center justify-center mb-4">
        <input
          type="checkbox"
          name="terms"
          id="terms"
          className="rounded text-blue-500"
        />
        <label
          htmlFor="terms"
          className="ml-2 text-sm font-medium text-gray-300"
        >
          I agree with the{" "}
          <a href="/terms" className="text-blue-500 hover:underline">
            terms and conditions
          </a>
          .
        </label>
      </div>
      <Col className="flex justify-between">
        <Button onClick={onCancel} color="transparent">
          Cancel Payment
        </Button>
        <Button onClick={onConfirm} color="cyan">
          Confirm Payment
        </Button>
      </Col>
    </div>
  );
};
