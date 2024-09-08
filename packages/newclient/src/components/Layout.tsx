"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {ToastContainer} from "react-toastify";
import {Footer} from "@/components/grid/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();


  return (
    <QueryClientProvider client={queryClient}>
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            stacked={true}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
      <div className="flex bg-gray-900 w-full items-center justify-center min-h-screen text-white">
        {children}
      </div>
        <Footer />
    </QueryClientProvider>
  );
};

export default Layout;
