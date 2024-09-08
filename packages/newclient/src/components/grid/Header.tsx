"use client";

import React from "react";
import { MdLogin, MdLogout, MdOutlineSupportAgent } from "react-icons/md";
import { useLogout } from "@/hooks/useClient";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import { User } from "@/interfaces";
import { Button } from "@/components/buttons";
import {IoBuildOutline,IoChatboxEllipsesOutline } from "react-icons/io5";


export default function Header({ user }: { user?: User }) {
  const { logout } = useLogout({
    onError: _error => {
      toast.error("Error logging out", { position: "top-right" });
    }
  });

  const router = useRouter();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gray-900">
      <div className="flex items-center space-x-6">
        <nav className="hidden md:flex space-x-6 text-gray-400">
          <Button
            color="blue"
            onClick={() => router.push("/paymentsmethod/nstx")}
          >
            Withdraw
          </Button>
            <Button color={"blue"} onClick={() => router.push("/paymentsmethod")}>
                Payments
            </Button>
            <Button
                color={"none"}
                onClick={() => router.push("/trade")}
            >
                Trade
            </Button>
            <Button
                color={"blue"}
                onClick={() => router.push("/transactions")}
            >
                Transactions
            </Button>

        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <Button color={"none"} onClick={() => router.push("/balance")}>
          <IoChatboxEllipsesOutline size={24} />
        </Button>
        <Button color={"none"} onClick={() => router.push("/support")}>
          <MdOutlineSupportAgent size={24} />
        </Button>

        {user ? (
          <Button color={"none"} onClick={handleLogout}>
            <MdLogout size={24} />
          </Button>
        ) : (
          <Button color={"none"} onClick={() => router.push("/login")}>
            <MdLogin size={24} />
          </Button>
        )}
        <IoBuildOutline
          color={"white"}
          size={24}
          onClick={() => router.push("/settings")}
        />
      </div>
    </header>
  );
}
