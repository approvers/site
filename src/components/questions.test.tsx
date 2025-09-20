import { expect, it } from "vitest";

import { render } from "../utils/react-test";
import { Questions } from "./questions";

it("renders correctly", () => {
  const tree = render(<Questions />);
  expect(tree.toJSON()).toMatchSnapshot();
});
