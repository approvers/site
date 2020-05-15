import { ReactNode, FC, Ref, MouseEvent, forwardRef } from "react";

type ShadowButtonProps = {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  ref?: Ref<HTMLDivElement>;
};

export const ShadowButton: FC<ShadowButtonProps> = forwardRef(
  ({ onClick, children }: ShadowButtonProps, ref?: Ref<HTMLDivElement>) => (
    <>
      <div ref={ref} onClick={onClick}>
        {children}
      </div>
      <style jsx>{`
        div {
          min-width: 6rem;
          padding: 1rem 0;
          margin: 0.2rem;
          border: solid black 1px;
          border-radius: 4px;
          box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
        div :hover {
          box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.4);
        }
        div :active {
          box-shadow: 0rem 0rem 0rem rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </>
  ),
);
