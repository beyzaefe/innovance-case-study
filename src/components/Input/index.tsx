import React, { InputHTMLAttributes } from "react";
import Title from "../Title";

interface Input extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
}

const Input = ({ error = false, errorMessage, ...props }: Input) => {
  return (
    <div>
      <input
        {...props}
        className={`w-full px-4 py-3 border-2 border-solid rounded bg-slate-200 placeholder:font-semibold hover:ring-1 hover:ring-gray-600 outline-slate-500 border-slate-300`}
      />
      {errorMessage && (
        <Title className="text-sm font-normal text-red-600 ">
          {errorMessage}
        </Title>
      )}
    </div>
  );
};

export default Input;
