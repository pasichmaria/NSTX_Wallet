"use client";

export default function PayPalPage() {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
        <h1 className="text-3xl font-bold">PayPal</h1>
        <p className="text-gray-400">Pay with PayPal </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-3">
                <div className="bg-gray-800 p-4 rounded-lg h-72">
                    <p className="text-center text-gray-400">PayPal</p>
                </div>
            </div>
        </div>
    </div>
  );
}
