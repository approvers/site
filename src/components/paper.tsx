import { ReactNode, FC } from "react";
import styles from "../sass/pages/member.module.sass";

export const Paper: FC<{ children: ReactNode }> = ({ children }) => (
  <div className={styles.cardWrapper}>
    <div className={styles.memberCard}>{children}</div>
  </div>
);
