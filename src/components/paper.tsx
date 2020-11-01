import { ReactNode, FC } from "react";
import styles from "../scss/components/paper.module.scss";

export const Paper: FC<{ children: ReactNode }> = ({ children }) => (
  <div className={styles.cardWrapper}>
    <div className={styles.card}>{children}</div>
  </div>
);
