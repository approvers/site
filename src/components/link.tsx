import React, { type ComponentProps, type ReactNode } from "react";

export const Link = (props: ComponentProps<"a">): ReactNode => (
  <a {...props}>
    <i>
      <u>{props.children}</u>
    </i>
  </a>
);

export const ExternalLink = (props: ComponentProps<typeof Link>): React.JSX.Element => (
  <a target="_blank" rel="noopener noreferrer" {...props} />
);
