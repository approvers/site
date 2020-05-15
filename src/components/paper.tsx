import { ReactNode, FC } from "react";
import styles from "../sass/wrapper.module.sass";

export const Paper: FC<{ children: ReactNode }> = ({ children }) => (
  <div className={styles.cardWrapper}>
    <div className={styles.card}>{children}</div>
  </div>
);
