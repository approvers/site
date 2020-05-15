import { ReactNode, FC, Ref, MouseEvent, forwardRef, RefObject } from "react";
import styles from "../sass/components/header.module.sass";

type ButtonProps = {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  ref?: RefObject<HTMLDivElement>;
};

export const Button: FC<ButtonProps> = forwardRef(
  ({ onClick, children }: ButtonProps, ref?: Ref<HTMLDivElement>) => (
    <>
      <div ref={ref} onClick={onClick} className={styles.button}>
        {children}
      </div>
    </>
  ),
);
