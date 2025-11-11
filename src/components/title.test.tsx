import { Subtitle, Title } from "./title";
import { expect, it } from "vitest";
import { render } from "../utils/react-test";

it("renders title correctly", async () => {
  const tree = await render(<Title>Epic Title</Title>);
  expect(tree.getByTestId("title")).toMatchSnapshot("title");
});

it("renders subtitle correctly", async () => {
  const tree = await render(<Subtitle>Epic Subtitle</Subtitle>);
  expect(tree.getByTestId("subtitle")).toMatchSnapshot("subtitle");
});
