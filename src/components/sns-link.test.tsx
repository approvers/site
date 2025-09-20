import { expect, it } from "vitest";
import { SNSLink } from "./sns-link";
import { render } from "../utils/react-test";

it("renders twitter link correctly", () => {
  const tree = render(<SNSLink type="twitter" name="MikuroXina" />);
  expect(tree.container.innerHTML).toMatchSnapshot();
});

it("renders github link correctly", () => {
  const tree = render(<SNSLink type="github" name="MikuroXina" />);
  expect(tree.container.innerHTML).toMatchSnapshot();
});
