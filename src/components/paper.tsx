import { ReactNode, FC } from "react";
import styles from "../scss/components/paper.module.scss";

export const Paper: FC<{ children: ReactNode }> = ({ children }) => (
  <div className={styles.paperWrapper}>
    <div className={styles.paper}>{children}</div>
  </div>
);
