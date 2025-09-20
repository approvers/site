import { expect, it } from "vitest";

import { render } from "../utils/react-test";
import { Footer } from "./footer";

it("renders correctly", () => {
  const tree = render(<Footer />);
  expect(tree.toJSON()).toMatchSnapshot();
});
