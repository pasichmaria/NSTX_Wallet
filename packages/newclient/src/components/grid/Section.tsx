import React from "react";

export const Section = ({
  title,
  children
}: {
  title?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="w-full max-w-6xl mb-12 p-4">
      <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
      {children}
    </div>
  );
};

