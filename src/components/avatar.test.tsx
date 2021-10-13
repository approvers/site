import { Avatar } from "./avatar";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(<Avatar name="MikuroXina" src="https://github.com/MikuroXina.png" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
