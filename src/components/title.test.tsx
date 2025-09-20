import { expect, it } from "vitest";

import { render } from "../utils/react-test";
import { Subtitle, Title } from "./title";

it("renders title correctly", () => {
  const tree = render(<Title>Epic Title</Title>);
  expect(tree.toJSON()).toMatchSnapshot();
});

it("renders subtitle correctly", () => {
  const tree = render(<Subtitle>Epic Subtitle</Subtitle>);
  expect(tree.toJSON()).toMatchSnapshot();
});
