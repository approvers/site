import type { ReactNode } from "react";
import styles from "../scss/components/paper.module.scss";

const Paper = ({ children }: { children: ReactNode }): JSX.Element => (
  <div className={styles.paperWrapper}>
    <div className={styles.paper}>{children}</div>
  </div>
);

export const Grid = ({ children }: { children: readonly ReactNode[] }): JSX.Element => (
  <div className={styles.grid}>
    {children.map((child, index) => (
      <Paper key={index}>{child}</Paper>
    ))}
  </div>
);
