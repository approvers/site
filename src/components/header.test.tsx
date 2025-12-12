import { expect, it } from "vitest";

import { render } from "../utils/react-test";
import { Header } from "./header";

it("renders correctly", async () => {
  const tree = await render(<Header />);
  expect(tree.getByTestId("header")).toMatchSnapshot("header");
});
