import type React from "react";
import Styles from "./styles.module.css";

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: 'green'|'red';
} & React.ComponentProps<"button">;

export default function DefaultButton({icon, 
    color = 'green',
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button className={`${Styles.button} ${Styles[color]} `} {...props}> {icon} </button>
    </>
  );
}
