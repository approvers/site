import { RenderResult, render as vitestRender } from "vitest-browser-react";
import { Providers } from "../components/providers";
import { ReactElement } from "react";

export const render = (ui: ReactElement): Promise<RenderResult> =>
  vitestRender(<Providers>{ui}</Providers>);
