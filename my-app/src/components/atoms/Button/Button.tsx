import { btnProps } from "./Button.model"
import styles from "./Button.module.css"


export const Button = ({ text, onClick, color, bgColor, fontSize, width, height }: btnProps) => {

  const styleProps: any = {
    "--color": color,
    "--bgColor": bgColor,
    "--fontSize": fontSize,
    "--width": width,
    "--height": height,
  }

  return (
    <button onClick={onClick} style={styleProps} className={styles.btnContainer}>
      {text}
    </button>
  )
}