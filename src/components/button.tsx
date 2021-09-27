import { MouseEvent, ReactNode, Ref, forwardRef } from "react";
import styles from "../scss/components/button.module.scss";

export interface ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

const button = ({ onClick, children }: ButtonProps, ref?: Ref<HTMLDivElement>): JSX.Element => (
  <div ref={ref} onClick={onClick} className={styles.button}>
    {children}
  </div>
);

export const Button = forwardRef(button);
