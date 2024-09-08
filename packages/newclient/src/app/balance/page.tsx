// "use client";
//
// import React from "react";
//
// const transactions = [
//   { id: 1, date: "2024-09-01", amount: 100.0, type: "Deposit" },
//   { id: 2, date: "2024-08-25", amount: -50.0, type: "Withdrawal" },
//   { id: 3, date: "2024-08-15", amount: 200.0, type: "Deposit" }
// ];
//
// export const BalancePage = () => {
//   return (
//     <div className="container mx-auto p-4 flex flex-col items-center justify-center">
//       <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold mb-6 text-white text-center">
//           Balance
//         </h1>
//         <p className="text-gray-300 mb-4">
//           This is the balance page. Here you can view your current balance and
//           recent transactions.
//         </p>
//
//         <div className="bg-gray-800 p-4 rounded-lg mb-6">
//           <h2 className="text-xl font-semibold text-white mb-2">
//             Balance Summary
//           </h2>
//           <p className="text-lg text-gray-300">
//             Current Balance:{" "}
//             <span className="font-bold text-green-400">$1,250.00</span>
//           </p>
//         </div>
//
//         <div className="bg-gray-800 p-4 rounded-lg">
//           <h2 className="text-xl font-semibold text-white mb-4">
//             Recent Transactions
//           </h2>
//           <table className="min-w-full bg-gray-800 text-white">
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 border-b border-gray-700 text-left">
//                   Date
//                 </th>
//                 <th className="py-2 px-4 border-b border-gray-700 text-left">
//                   Amount
//                 </th>
//                 <th className="py-2 px-4 border-b border-gray-700 text-left">
//                   Type
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {transactions.map(transaction => (
//                 <tr key={transaction.id}>
//                   <td className="py-2 px-4 border-b border-gray-700">
//                     {transaction.date}
//                   </td>
//                   <td
//                     className={`py-2 px-4 border-b border-gray-700 ${
//                       transaction.amount < 0 ? "text-red-500" : "text-green-400"
//                     }`}
//                   >
//                     {transaction.amount < 0 ? "-" : "+"}$
//                     {Math.abs(transaction.amount).toFixed(2)}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-700">
//                     {transaction.type}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };
