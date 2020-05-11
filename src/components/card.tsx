import { ReactNode, FC } from "react";

export const Card: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <div>{children}</div>
    <style jsx>{`
      div {
        background: white;
        border-radius: 12px;
        padding: 0.5rem 3rem 1.5rem 3rem;
        cursor: pointer;
        box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.4);
      }
      div :hover {
        text-decoration: underline;
        box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.4);
      }
      div :active {
        box-shadow: 0rem 0rem 0rem rgba(0, 0, 0, 0.4);
      }
    `}</style>
  </>
);
