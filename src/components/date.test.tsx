import { expect, it } from "vitest";

import { render } from "../utils/react-test";
import { DateString } from "./date";

it("renders correctly", async () => {
  const tree = await render(<DateString dateString="2021-01-01" />);
  expect(tree.getByTestId("date-string")).toMatchSnapshot("date-string");
});
