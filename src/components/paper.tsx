import type { FC, ReactNode } from "react";
import styles from "../scss/components/paper.module.scss";

const Paper: FC<{ children: ReactNode }> = ({ children }) => (
  <div className={styles.paperWrapper}>
    <div className={styles.paper}>{children}</div>
  </div>
);

export const Grid: FC<{ children: readonly ReactNode[] }> = ({ children }) => (
  <div className={styles.grid}>
    {children.map((child, index) => (
      <Paper key={index}>{child}</Paper>
    ))}
  </div>
);
