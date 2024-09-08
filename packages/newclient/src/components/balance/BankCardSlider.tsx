import React from "react";
import Slider from "react-slick";
import { Balance, User } from "@/interfaces";
import { useBalances } from "@/hooks/useBalances";
import { useRouter } from "next/navigation";

import { BankCard, Button } from "@/components";

interface UserCardInfoProps {
  user?: User;
}

export const BankCardSlider = ({ user }: UserCardInfoProps) => {
  const { balances, isErrorBalances, isLoadingBalances } = useBalances({
    userId: user?.id as string
  });

  const router = useRouter();

  const handleCreateBalance = () => {
    router.push("/balance/create");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="text-white">
      {isLoadingBalances ? (
        <div className="text-gray-400 p-4">Loading balances...</div>
      ) : isErrorBalances ? (
        <div className="text-red-500 p-4">
          Error loading balances. Please try again later.
        </div>
      ) : balances && balances.length > 0 ? (
        <div className="relative w-full max-w-xl mx-auto">
          <Slider {...settings}>
            {balances.map((balance: Balance, index: number) => (
              <div key={index as number}>
                <BankCard balance={balance} user={user} />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="flex flex-col">
          <p className="text-gray-400 text-left">No balances available.</p>
          <Button onClick={handleCreateBalance} color="cyan" className="mt-6">
            Create Balance
          </Button>
        </div>
      )}
    </div>
  );
};
