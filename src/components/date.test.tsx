import { expect, it } from "vitest";

import { render } from "../utils/react-test";
import { DateString } from "./date";

it("renders correctly", () => {
  const tree = render(<DateString dateString="2021-01-01" />);
  expect(tree.toJSON()).toMatchSnapshot();
});
