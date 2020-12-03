import { FC, MouseEvent, ReactNode, Ref, forwardRef } from "react";
import styles from "../scss/components/button.module.scss";

type ButtonProps = {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  ref?: Ref<HTMLDivElement>;
};

const button = ({ onClick, children }: ButtonProps, ref?: Ref<HTMLDivElement>) => (
  <div ref={ref} onClick={onClick} className={styles.button}>
    {children}
  </div>
);

export const Button: FC<ButtonProps> = forwardRef(button);
