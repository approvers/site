import { expect, it } from "vitest";
import { Questions } from "./questions";
import { render } from "../utils/react-test";

it("renders correctly", async () => {
  const tree = await render(<Questions />);
  expect(tree.getByTestId("questions")).toMatchSnapshot("questions");
});
