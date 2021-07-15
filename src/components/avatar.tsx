import type { FC } from "react";
import styles from "../scss/components/avatar.module.scss";
import { useImage } from "react-image";

const ALTERNATIVE = "/alternative.png";

export const Avatar: FC<{ name: string; src?: string }> = ({ name, src }) => {
  const { src: guarded } = useImage({ srcList: [src ?? "", ALTERNATIVE], useSuspense: false });
  return <img src={guarded} alt={name} className={styles.avatar} />;
};
