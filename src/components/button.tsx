import { ReactNode, FC, Ref, MouseEvent, forwardRef, RefObject } from "react";
import styles from "../sass/components/header.module.sass";

type ShadowButtonProps = {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  ref?: RefObject<HTMLDivElement>;
};

export const ShadowButton: FC<ShadowButtonProps> = forwardRef(
  ({ onClick, children }: ShadowButtonProps, ref?: Ref<HTMLDivElement>) => (
    <>
      <div ref={ref} onClick={onClick} className={styles.button}>
        {children}
      </div>
    </>
  ),
);
