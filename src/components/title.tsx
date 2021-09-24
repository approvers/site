import type { ReactNode } from "react";
import styles from "../scss/components/title.module.scss";

export const Title = ({ children }: { children?: ReactNode }): JSX.Element => (
  <h1 className={styles.title}>{children}</h1>
);

export const Subtitle = ({ children }: { children?: ReactNode }): JSX.Element => (
  <h2 className={styles.subtitle}>{children}</h2>
);
