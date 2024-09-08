"use client";

import { Section } from "@/components/layout";

export default function PayPalPage() {
  return (
    <Section title="Bank Transfer">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Bank Transfer</h1>
        <p className="text-gray-400">Pay with Bank Transfer</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-3">
            <div className="bg-gray-800 p-4 rounded-lg h-72">
              <p className="text-center text-gray-400">Bank Transfer</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
