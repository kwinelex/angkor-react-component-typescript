import React from "react";
import { BaseInputProps } from "./input";

export const Input: React.FC<BaseInputProps> = (props) => {
  return <input style={props.style} name={props.name} type={props.htmlType} placeholder={props.placeholder} />;
};
