import React from "react";

type Props = {
  type?: "button" | "submit";
  children: React.ReactNode;
  className?: string;
};

const Button = ({ type, children, className }: Props) => {
  return (
    <button className={`border px-4 py-2 rounded-md ${className}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
