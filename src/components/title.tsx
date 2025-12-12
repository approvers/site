import type { ReactNode } from "react";

export const Title = ({ children }: { children?: ReactNode }): JSX.Element => (
  <h1 className="mt-8 mb-8 w-full text-center text-2xl" data-testid="title">
    {children}
  </h1>
);

export const Subtitle = ({ children }: { children?: ReactNode }): JSX.Element => (
  <h2 className="text-xl" data-testid="subtitle">
    {children}
  </h2>
);
