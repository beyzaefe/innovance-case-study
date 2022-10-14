import React, { ButtonHTMLAttributes } from "react";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
}

const Button = ({ children, ...props }: Button) => {
  return (
    <button
      className="flex items-center justify-center w-full py-4 font-bold rounded bg-orange text-blue-50 hover:opacity-75 disabled:bg-grey2 "
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
