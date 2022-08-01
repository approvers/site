import { expect, it } from "vitest";
import { Footer } from "./footer";
import { render } from "../utils/react-test";

it("renders correctly", () => {
  const tree = render(<Footer />);
  expect(tree.toJSON()).toMatchSnapshot();
});
