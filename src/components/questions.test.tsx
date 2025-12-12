import { expect, it } from "vitest";

import { render } from "../utils/react-test";
import { Questions } from "./questions";

it("renders correctly", async () => {
  const tree = await render(<Questions />);
  expect(tree.getByTestId("questions")).toMatchSnapshot("questions");
});
