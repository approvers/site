import { DateString } from "./date";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<DateString dateString="2021-01-01" />).toJSON();
  expect(tree).toMatchSnapshot();
});
