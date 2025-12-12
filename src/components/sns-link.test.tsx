import { expect, it } from "vitest";

import { render } from "../utils/react-test";
import { SNSLink } from "./sns-link";

it("renders twitter link correctly", async () => {
  const tree = await render(<SNSLink type="twitter" url="https://twitter.com/MikuroXina" />);
  expect(tree.getByTestId("sns-link")).toMatchSnapshot("sns-link");
});

it("renders github link correctly", async () => {
  const tree = await render(<SNSLink type="github" url="https://github.com/MikuroXina" />);
  expect(tree.getByTestId("sns-link")).toMatchSnapshot("sns-link");
});
