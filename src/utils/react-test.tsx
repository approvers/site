import { cleanup, render } from "@testing-library/react";
import { ReactElement } from "react";
import { afterEach } from "vitest";

afterEach(cleanup);

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  });

export * from "@testing-library/react";
export { customRender as render };
