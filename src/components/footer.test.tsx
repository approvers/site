import { Footer } from "./footer";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
