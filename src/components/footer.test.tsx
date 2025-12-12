import { expect, it } from "vitest";

import { render } from "../utils/react-test";
import { Footer } from "./footer";

it("renders correctly", async () => {
  const tree = await render(<Footer />);
  expect(tree.getByTestId("footer")).toMatchSnapshot("footer");
});
