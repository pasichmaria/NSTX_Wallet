import React from "react";

export const Notification = ({
  imageUrl,
  imageAlt,
  title,
  message
}: {
  imageUrl?: { src: string; alt: string };
  imageAlt?: string;
  title: string;
  message: string;
}) => {
  return (
    <div className="flex items-center justify-between p-6 rounded-lg">
      <div className="flex items-center">
        {imageUrl && (
          <img
            src={imageUrl.src}
            alt={imageAlt}
            className="w-16 h-16 rounded-full"
          />
        )}
        <div className="ml-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-500">{message}</p>
        </div>
      </div>
      <button className="text-gray-500 hover:text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

  );
};
// <Notification
//     imageUrl={{
//         src: "https://via.placeholder.com/150",
//         alt: "Notification"
//     }}
//     imageAlt="Notification"
//     title="Welcome to Crypto Wallet"
//     message="Crypto Wallet is a secure and easy-to-use platform for managing your cryptocurrency assets. With Crypto Wallet, you can securely store, exchange, and monitor your crypto investments all in one place."
// />
//<span class="relative flex h-3 w-3">
//   <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
//   <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
// </span>
//<div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
//   <div class="animate-pulse flex space-x-4">
//     <div class="rounded-full bg-slate-700 h-10 w-10"></div>
//     <div class="flex-1 space-y-6 py-1">
//       <div class="h-2 bg-slate-700 rounded"></div>
//       <div class="space-y-3">
//         <div class="grid grid-cols-3 gap-4">
//           <div class="h-2 bg-slate-700 rounded col-span-2"></div>
//           <div class="h-2 bg-slate-700 rounded col-span-1"></div>
//         </div>
//         <div class="h-2 bg-slate-700 rounded"></div>
//       </div>
//     </div>
//   </div>
// </div>