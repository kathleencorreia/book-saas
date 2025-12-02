import React from "react";

type Props = {
  type?: "button" | "submit";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

const Button = ({ type, children, className, onClick }: Props) => {
  return (
    <button onClick={onClick} className={`border px-4 py-2 rounded-md cursor-pointer ${className}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
