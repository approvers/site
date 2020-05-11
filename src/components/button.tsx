import {ReactNode, FC, Ref, MouseEvent} from 'react';

export const ShadowButton: FC<{
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  ref?: Ref<HTMLDivElement>;
}> = ({ref, onClick, children}) => (
  <>
    <div ref={ref} onClick={onClick}>
      {children}
    </div>
    <style jsx>{`
      div {
        min-width: 6em;
        padding: 1em 0;
        margin: 0.2em;
        border: solid black 1px;
        border-radius: 4px;
        box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      div :hover {
        box-shadow: 0.1em 0.1em 0.1em rgba(0, 0, 0, 0.4);
      }
      div :active {
        box-shadow: 0em 0em 0em rgba(0, 0, 0, 0.4);
      }
    `}</style>
  </>
);
