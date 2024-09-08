import ClientLayout from "@/components/ClientLayout";
import React from "react";

export default function Page({ children }: { children: React.ReactNode }) {
    return <ClientLayout>{children}</ClientLayout>;
}
