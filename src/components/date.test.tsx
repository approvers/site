import { expect, it } from "vitest";
import { DateString } from "./date";
import { render } from "../utils/react-test";

it("renders correctly", async () => {
  const tree = await render(<DateString dateString="2021-01-01" />);
  expect(tree.getByTestId("date-string")).toMatchSnapshot("date-string");
});
