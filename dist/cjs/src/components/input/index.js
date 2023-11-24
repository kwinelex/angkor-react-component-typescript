"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const react_1 = __importDefault(require("react"));
const Input = (props) => {
    return (react_1.default.createElement("input", { name: props.name, style: props.style, type: props.htmlType, disabled: props.disabled, className: props.className, placeholder: props.placeholder }));
};
exports.Input = Input;
