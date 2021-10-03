import { Questions } from "./questions";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Questions />).toJSON();
  expect(tree).toMatchSnapshot();
});
