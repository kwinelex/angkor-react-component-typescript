export interface BaseButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  backgroundColor?: string
  color?: string
  htmlType?: string
  typeoOf?: "button" | "submit" | "reset"
}
