import { ReactNode, FC } from "react";

export const Card: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <div>{children}</div>
  </>
);
