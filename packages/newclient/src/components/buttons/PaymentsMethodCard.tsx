import React from "react";

interface ReplenishCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export const PaymentsMethodCard = ({
                                     title,
                                     description,
                                     icon,
                                     onClick
                                   }: ReplenishCardProps) => {
  return (
      <div onClick={onClick} className="cursor-pointer m-4">
        <div className="flex flex-col md:flex-row p-6 bg-gray-800 rounded-lg shadow-lg space-y-4 md:space-y-0 md:space-x-6 hover:bg-gray-700 transition-colors duration-300">
          <div className="flex-shrink-0 text-blue-500 text-4xl">{icon}</div>
          <div className="text-center md:text-left">
            <h2
                className="text-xl text-white truncate w-full md:w-60"
                title={title}
            >
              {title.length > 30 ? `${title.slice(0, 30)}...` : title}
            </h2>
            <p className="text-gray-400 mt-2">{description}</p>
          </div>
        </div>
      </div>
  );
};
