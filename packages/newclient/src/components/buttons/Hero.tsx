import React from "react";
import { Button } from "@/components/buttons/Button";
import { NstxLogo } from "@/assets";
import {CryptoTickerBar} from "@/components/table/CoinMarketCapBar";

export const Hero = ({
                         handleLogin,
                         handleSupport
                     }: {
    handleLogin: () => void;
    handleSupport: () => void;
}) => {
    return (
        <div
            className="p-6 relative flex flex-col items-center justify-center h-screen w-full bg-gradient-to-b from-black to-cyan-900">

            <h1 className="underline underline-offset-8 decoration-cyan-800 tracking-tighter uppercase mb-8 text-lg xs:text-base xs:mb-4">
                Your Gateway to the World of Cryptocurrency
            </h1>
            <h2 className="text-4xl font-bold mb-8 xs:text-2xl xs:mb-4">
                Exchange, Store, and Monitor Your Crypto Assets
            </h2>
            <div className="flex z-10 space-x-4 mb-8 xs:flex-col xs:space-x-0 xs:space-y-4 xs:mb-4">
                <Button onClick={handleLogin} color="cyan">
                    Sign-in
                </Button>
                <Button onClick={handleSupport} color="transparent">
                    Support
                </Button>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 z-[-1]">
                <NstxLogo className="w-32 h-32 mx-auto my-8 xs:w-24 xs:h-24 xs:my-4"/>
            </div>
            <div className="absolute bottom-0 w-full inset-x-0 p-4">
                <CryptoTickerBar/>
            </div>
        </div>
    );
};
