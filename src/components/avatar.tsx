import type { FC } from "react";
import styles from "../scss/components/avatar.module.scss";

const ALTERNATIVE = "/alternative.png";

export const Avatar: FC<{ name: string; src?: string }> = ({ name, src }) => (
  <img src={src ?? ALTERNATIVE} alt={name} className={styles.avatar} />
);
