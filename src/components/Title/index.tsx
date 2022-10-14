import React, { HTMLAttributes } from "react";

interface Title extends HTMLAttributes<HTMLDivElement> {
  children: any;
}

const Title = ({ children, ...props }: Title) => {
  return (
    <div className="text-xl font-extrabold text-mainBlack" {...props}>
      {children}
    </div>
  );
};

export default Title;
