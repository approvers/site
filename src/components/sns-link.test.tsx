import { expect, it } from "vitest";

import { render } from "../utils/react-test";
import { SNSLink } from "./sns-link";

it("renders twitter link correctly", async () => {
  const tree = await render(<SNSLink type="twitter" name="MikuroXina" />);
  expect(tree.getByTestId("sns-link")).toMatchSnapshot("sns-link");
});

it("renders github link correctly", async () => {
  const tree = await render(<SNSLink type="github" name="MikuroXina" />);
  expect(tree.getByTestId("sns-link")).toMatchSnapshot("sns-link");
});
