import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: "blue" | "red" | "transparent" | "cyan" | "none"
}

export const Button = ({
  color,
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "px-4 py-2 rounded-lg shadow-md text-white transition-all duration-200";
  const colorStyles = {
    blue:
      "bg-blue-400 hover:bg-blue-500",
    red:
      "hover:bg-red-700 border border-red-700",
    transparent:
        "bg-transparent border border-gray-700",
    cyan:
      "bg-teal-500 hover:bg-teal-700",
    none: "",
  };

  return (
    <button
      className={`${baseStyles} ${colorStyles[color]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
