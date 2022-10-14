import React, { LabelHTMLAttributes } from "react";

interface SubTitle extends LabelHTMLAttributes<HTMLLabelElement> {
  children: any;
}

const SubTitle = ({ children, color, ...props }: SubTitle) => {
  return (
    <label className="text-base font-medium text-mainBlack" {...props}>
      {children}
    </label>
  );
};

export default SubTitle;
