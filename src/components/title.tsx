import type { FC } from "react";
import styles from "../scss/components/title.module.scss";

export const Title: FC = ({ children }) => <h1 className={styles.title}>{children}</h1>;

export const Subtitle: FC = ({ children }) => <h2 className={styles.subtitle}>{children}</h2>;
