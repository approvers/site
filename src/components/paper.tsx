import { ReactNode, FC } from "react";

export const Paper: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <div>{children}</div>
    <style jsx>{`
      div {
        background: white;
        border-radius: 6px;
        margin: 1em 0.2em;
        padding: 0.5rem 3rem 1.5rem 3rem;
      }
    `}</style>
  </>
);
