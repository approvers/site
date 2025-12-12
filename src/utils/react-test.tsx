import { ReactElement } from "react";
import { render as vitestRender, RenderResult } from "vitest-browser-react";

import { Providers } from "../components/providers";

export const render = (ui: ReactElement): Promise<RenderResult> =>
  vitestRender(<Providers>{ui}</Providers>);
