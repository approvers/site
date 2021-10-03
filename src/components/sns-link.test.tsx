import { SNSLink } from "./sns-link";
import renderer from "react-test-renderer";

it("renders twitter link correctly", () => {
  const tree = renderer
    .create(<SNSLink type="twitter" url="https://twitter.com/MikurXina" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders github link correctly", () => {
  const tree = renderer
    .create(<SNSLink type="github" url="https://github.com/MikurXina" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
