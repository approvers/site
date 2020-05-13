import { ReactNode, FC } from "react";
import styles from "../sass/wrapper.module.sass";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);
