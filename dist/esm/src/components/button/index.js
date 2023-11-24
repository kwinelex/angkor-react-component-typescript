import React from "react";
export const Button = (props) => {
    const { children, backgroundColor, color, style } = props;
    const styles = style || {};
    if (backgroundColor)
        styles.backgroundColor = backgroundColor;
    if (color)
        styles.color = color;
    return (React.createElement("button", Object.assign({ style: styles }, props), children));
};
