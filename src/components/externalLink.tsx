import { ReactNode, FC } from "react";

type ExternalLinkProps = {
  href: string;
  className: string;
  children: ReactNode;
};

export const ExternalLink: FC<ExternalLinkProps> = (props) => (
  <a href={props.href} className={props.className} rel="noopener noreferrer" target="_blank">
    {props.children}
  </a>
);
