import { expect, it } from "vitest";
import { Questions } from "./questions";
import { render } from "../utils/react-test";

it("renders correctly", () => {
  const tree = render(<Questions />);
  expect(tree.toJSON()).toMatchSnapshot();
});
