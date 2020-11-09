import type { ReactNode, FC } from "react";
import styles from "../scss/components/external-link.module.scss";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
};

export const ExternalLink: FC<ExternalLinkProps> = (props) => (
  <a href={props.href} className={styles.link} rel="noopener noreferrer" target="_blank">
    {props.children}
  </a>
);
