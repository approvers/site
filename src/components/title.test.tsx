import { Subtitle, Title } from "./title";
import { expect, it } from "vitest";
import { render } from "../utils/react-test";

it("renders title correctly", () => {
  const tree = render(<Title>Epic Title</Title>);
  expect(tree).toMatchSnapshot();
});

it("renders subtitle correctly", () => {
  const tree = render(<Subtitle>Epic Subtitle</Subtitle>);
  expect(tree).toMatchSnapshot();
});
