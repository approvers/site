import { Button } from "./button";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Button
        onClick={() => {
          alert("Clicked!");
        }}
      >
        Click Here
      </Button>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
