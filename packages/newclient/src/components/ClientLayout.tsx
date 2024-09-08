"use client";

import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "@/components/grid/Header";
import { useUser } from "@/hooks/useClient";
import { useRouter } from "next/navigation";
import { Button, Loading } from "@/components/buttons";
import { CryptoTickerBar } from "@/components/table/CoinMarketCapBar";
import {ToastContainer} from "react-toastify";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  const { getUser, user, isErrorUser, isLoadingUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    getUser();
  }, [getUser]);

  if (isLoadingUser) return <Loading />;
  if (isErrorUser) {
    return (
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold">Something went wrong...</h1>
            <Button color="cyan" onClick={() => router.push("/login")}>Login</Button>
          </div>
        </div>
    );
  }

  return (
      <QueryClientProvider client={queryClient}>
          <div className="flex w-full flex-col min-h-screen bg-gray-100  text-black">
              <ToastContainer
                  position="top-right"
                  autoClose={2000}
                  closeOnClick
                  rtl={false}
                  stacked={true}
                  draggable
                  pauseOnHover
              />
              <Header user={user}/>
              <CryptoTickerBar className={"bg-gray-900"}/>
              <main className="flex-grow p-8 overflow-y-auto">{children}</main>
          </div>
      </QueryClientProvider>

  );
}
