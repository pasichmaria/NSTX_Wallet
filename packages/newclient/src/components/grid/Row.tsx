import React from "react";

export const Row = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
    return (
        <div className={`flex w-full items-center ${className}`}>
        {children}
        </div>
    );
}
