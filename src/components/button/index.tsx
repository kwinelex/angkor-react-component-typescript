import React from "react"
import { BaseButtonProps } from "./button"

export const Button: React.FunctionComponent<BaseButtonProps> = (props) => {
  const { children, backgroundColor, color, style } = props
  const styles: React.CSSProperties = style || {}
  if (backgroundColor) styles.backgroundColor = backgroundColor
  if (color) styles.color = color

  return (
    <button style={styles} {...props}>
      {children || "primary"}
    </button>
  )
}
