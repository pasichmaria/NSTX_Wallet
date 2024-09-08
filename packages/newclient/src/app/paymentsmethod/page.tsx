"use client";

import { NstxLogo, PayPalLogo } from "@/assets";
import React from "react";
import { useRouter } from "next/navigation";

import { CiCreditCard2 } from "react-icons/ci";
import {Col, PaymentsMethodCard, Section} from "@/components";

export default function PaymentsMethod() {
  const router = useRouter();

  return (
      <Col className="grid  grid-cols-2 xs:grid-cols-1 gap-4">
        <Section title="Withdraw">
          <PaymentsMethodCard
            icon={<NstxLogo />}
            title="Nstx"
            description="Nstx to Nstx"
            onClick={() => router.push("/paymentsmethod/nstx")}
          />
          <PaymentsMethodCard
            icon={<PayPalLogo />}
            title="PayPal"
            description="Nstx to PayPal"
            onClick={() => router.push("/paymentsmethod/paypal")}
          />
          <PaymentsMethodCard
            icon={<CiCreditCard2 />}
            title="Bank Transfer"
            description="Nstx to card"
            onClick={() => router.push("/paymentsmethod/bank")}
          />
        </Section>

        <Section title="Deposit">
          <PaymentsMethodCard
            icon={<CiCreditCard2 />}
            title="Debit/Credit card"
            description="Add money to your wallet"
          />
          <PaymentsMethodCard
            icon={<CiCreditCard2 />}
            title="From NSTX user to card"
            description="Transfer money from any user wallet to your card"
          />
          <PaymentsMethodCard
            icon={<CiCreditCard2 />}
            title="Trade any currency to card"
            description="Trade any currency to your card"
          />
        </Section>
      </Col>
  );
}
