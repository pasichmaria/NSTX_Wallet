import React from "react";

interface ColProps {
  children: React.ReactNode;
  span?: string;
  className?: string;
}

export const Col = ({
  children,
  span = "col-span-1",
  className = ""
}: ColProps) => {
  return <div className={`${span} ${className}`}>{children}</div>;
};
