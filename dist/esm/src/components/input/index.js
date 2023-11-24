import React from "react";
export const Input = (props) => {
    return (React.createElement("input", { name: props.name, style: props.style, type: props.htmlType, disabled: props.disabled, className: props.className, placeholder: props.placeholder }));
};
