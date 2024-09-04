import { expect, it } from "vitest";
import { DateString } from "./date";
import { render } from "../../utils/react-test";

it("renders correctly", () => {
  const tree = render(<DateString dateString="2021-01-01" />);
  expect(tree.toJSON()).toMatchSnapshot();
});
