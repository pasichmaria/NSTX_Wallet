import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Balance, User } from "@/interfaces";
import {NstxLogo} from "@/assets";

interface userCardProps {
  balance: Balance;
  user?: User;
}

export const BankCard = ({ balance, user }: userCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div
      className={`relative max-w-xs h-48
       bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg transform transition-transform ${
        isFlipped ? "rotate-y-180 transform" : ""
        
      }`}
      onClick={handleFlip}
    >
      <div
        className={`absolute inset-0 flex flex-col justify-between p-5 ${
          isFlipped ? "hidden" : "block"
        }`}
      >
        <NstxLogo className="w-12 h-12" />
        <div className="text-white text-xs  ">
          {balance.id}
        </div>
        <div className="flex justify-between items-center text-white">
          <div>
            {user?.firstName} {user?.lastName}
          </div>
          <div>
            {balance.value} {balance.currency}
          </div>
        </div>
      </div>

      <div
        className={`absolute inset-0 flex rounded-xl flex-col justify-between p-5 bg-gray-800 text-white transform rotate-y-180 ${
          isFlipped ? "block" : "hidden"
        }`}
      >
        <div className="text-right text-sm">CVV: card.cvv</div>
        <div className="text-sm">balance.additionalInfo</div>
        <button
          onClick={() => copyToClipboard(balance.id)}
          className="flex items-center justify-center space-x-2 bg-blue-600 text-white p-2 rounded-lg mt-auto"
        >
          <FaCopy />
          <span>Copy Card Number</span>
        </button>
      </div>
    </div>
  );
};
