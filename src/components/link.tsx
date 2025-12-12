import { ExternalLinkIcon } from "lucide-react";
import React, { type ComponentProps, type ReactNode } from "react";

export const Link = (props: ComponentProps<"a">): ReactNode => (
  <a {...props}>
    <i>
      <u>{props.children}</u>
    </i>
  </a>
);

export interface ExternalLinkProps {
  withIcon?: boolean;
}

export const ExternalLink = (
  props: ComponentProps<typeof Link> & ExternalLinkProps,
): React.JSX.Element => (
  <a target="_blank" rel="noopener noreferrer" className="underline" {...props}>
    {props.children}
    {props.withIcon && <ExternalLinkIcon className="inline size-3" />}
  </a>
);
