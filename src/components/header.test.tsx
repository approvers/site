import { expect, it } from "vitest";
import { Header } from "./header";
import { render } from "../utils/react-test";

it("renders correctly", async () => {
  const tree = await render(<Header />);
  expect(tree.getByTestId("header")).toMatchSnapshot("header");
});
