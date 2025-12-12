import type { ReactElement } from "react";
import { render as vitestRender, type RenderResult } from "vitest-browser-react";

export const render = (ui: ReactElement): Promise<RenderResult> => vitestRender(ui);
