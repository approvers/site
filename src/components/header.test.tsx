import { expect, it } from "vitest";

import { render } from "../utils/react-test";
import { Header } from "./header";

it("renders correctly", () => {
  const tree = render(<Header />);
  expect(tree.toJSON()).toMatchSnapshot();
});
