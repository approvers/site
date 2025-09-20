import { ReactElement } from "react";
import reactTestRenderer, { ReactTestRenderer, TestRendererOptions } from "react-test-renderer";

export const render = (
  ui: ReactElement,
  options?: TestRendererOptions | undefined,
): ReactTestRenderer => reactTestRenderer.create(ui, options);
