import reactTestRenderer, { ReactTestRenderer, TestRendererOptions } from "react-test-renderer";
import { ReactElement } from "react";

export const render = (
  ui: ReactElement,
  options?: TestRendererOptions | undefined,
): ReactTestRenderer => reactTestRenderer.create(ui, options);
