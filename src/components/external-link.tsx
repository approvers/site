import type { ReactNode } from "react";
import styles from "../scss/components/external-link.module.scss";

export interface ExternalLinkProps {
  href: string;
  children: ReactNode;
}

export const ExternalLink = (props: ExternalLinkProps): JSX.Element => (
  <a href={props.href} className={styles.link} rel="noopener noreferrer" target="_blank">
    {props.children}
  </a>
);

export const ExternalIconLink = (props: ExternalLinkProps): JSX.Element => (
  <a href={props.href} className={styles.iconLink} rel="noopener noreferrer" target="_blank">
    {props.children}
  </a>
);
