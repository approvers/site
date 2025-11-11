import { expect, it } from "vitest";
import { Footer } from "./footer";
import { render } from "../utils/react-test";

it("renders correctly", async () => {
  const tree = await render(<Footer />);
  expect(tree.getByTestId("footer")).toMatchSnapshot("footer");
});
