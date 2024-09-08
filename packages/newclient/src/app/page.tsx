"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { HelpCard, Hero, Section} from "@/components";



export default function Home() {
    const router = useRouter();

    const handleLogin = () => {
        router.push("/auth/login");
    };

    const handleSupport = () => {
        router.push("/support");
    };

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen text-white">
            <Hero handleLogin={handleLogin} handleSupport={handleSupport} />
            <Section>
                <p className="text-center mx-auto max-w-screen-md p-4 sm:text-lg">
                    Crypto Wallet is a secure and easy-to-use platform for managing your
                    cryptocurrency assets. With Crypto Wallet, you can securely store,
                    exchange, and monitor your crypto investments all in one place.
                </p>
            </Section>

            <Section>
                <div className="grid grid-cols-1 gap-8 p-4 sm:grid-cols-2 lg:grid-cols-3">
                    {/*<Testimonial*/}
                    {/*    quote="Crypto Wallet has revolutionized the way I manage my crypto assets!"*/}
                    {/*    author="John Doe"*/}
                    {/*    image="https://via.placeholder.com/150"*/}
                    {/*/>*/}
                    {/*<Testimonial*/}
                    {/*    quote="The security and ease of use are unmatched."*/}
                    {/*    author="Jane Smith"*/}
                    {/*    image="https://via.placeholder.com/150"*/}
                    {/*/>*/}
                    {/*<Testimonial*/}
                    {/*    quote="I can track all my investments in one place. Highly recommend!"*/}
                    {/*    author="Robert Brown"*/}
                    {/*    image="https://via.placeholder.com/150"*/}
                    {/*/>*/}
                </div>
            </Section>

            <Section title="Frequently Asked Questions">
                <div className="space-y-4">
                    <HelpCard
                        question="How secure is Crypto Wallet?"
                        answer="Crypto Wallet uses advanced encryption techniques to secure all transactions and ensure that your funds are safe."
                    />
                    <HelpCard
                        question="Can I exchange cryptocurrencies easily?"
                        answer="Yes, Crypto Wallet allows you to exchange between different cryptocurrencies quickly and with minimal fees."
                    />
                    <HelpCard
                        question="What investment opportunities are available?"
                        answer="Crypto Wallet provides access to exclusive investment opportunities within the crypto market."
                    />
                </div>
            </Section>
        </div>
    );
}
