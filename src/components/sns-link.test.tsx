import { expect, it } from "vitest";

import { render } from "../utils/react-test";
import { SNSLink } from "./sns-link";

it("renders twitter link correctly", () => {
  const tree = render(<SNSLink type="twitter" url="https://twitter.com/MikurXina" />);
  expect(tree.toJSON()).toMatchSnapshot();
});

it("renders github link correctly", () => {
  const tree = render(<SNSLink type="github" url="https://github.com/MikurXina" />);
  expect(tree.toJSON()).toMatchSnapshot();
});
