import { ReactNode, FC, MouseEvent, forwardRef, Ref } from "react";
import styles from "../sass/components/header.module.sass";

type ButtonProps = {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  ref?: Ref<HTMLDivElement>;
};

const button = ({ onClick, children }: ButtonProps, ref?: Ref<HTMLDivElement>) => (
  <>
    <div ref={ref} onClick={onClick} className={styles.button}>
      {children}
    </div>
  </>
);

export const Button: FC<ButtonProps> = forwardRef(button);
