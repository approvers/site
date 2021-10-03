import styles from "../scss/components/avatar.module.scss";
import { useImage } from "react-image";

const ALTERNATIVE = "/alternative.png";

export const Avatar = ({ name, src }: { name: string; src?: string }): JSX.Element => {
  const { src: guarded } = useImage({ srcList: [src ?? "", ALTERNATIVE], useSuspense: false });
  return <img src={guarded ?? src} alt={name} className={styles.avatar} />;
};
