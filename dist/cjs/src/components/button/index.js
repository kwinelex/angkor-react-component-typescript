"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const Button = (props) => {
    const { children, backgroundColor, color, style } = props;
    const styles = style || {};
    if (backgroundColor)
        styles.backgroundColor = backgroundColor;
    if (color)
        styles.color = color;
    return (react_1.default.createElement("button", Object.assign({ style: styles }, props), children));
};
exports.Button = Button;
