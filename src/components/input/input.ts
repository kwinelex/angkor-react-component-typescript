declare const InputTypes: readonly [
  "text",
  "password",
  "checkbox",
  "button",
  "file",
  "date",
  "datetime-local",
  "email",
  "hidden",
  "month",
  "number",
  "range",
  "reset",
  "search",
  "submit",
  "tel",
  "time",
  "url",
  "week",
  "image",
  "radio",
];
export type InputType = (typeof InputTypes)[number];
declare const InputSizes: readonly ["small", "middle", "large"];
export type InputSize = (typeof InputSizes)[number];
export interface BaseInputProps extends React.PropsWithChildren {
  name?: string | undefined;
  className?: string | undefined;
  htmlType?: InputType | undefined;
  placeholder?: string | undefined;
  style?: React.CSSProperties | undefined;
  size?: InputSize | undefined;
}
