import React from "react";
import { BaseInputProps } from "./input";

export const Input: React.FC<BaseInputProps> = (props) => {
  return (
    <input
      name={props.name}
      style={props.style}
      type={props.htmlType}
      disabled={props.disabled}
      className={props.className}
      placeholder={props.placeholder}
    />
  );
};
