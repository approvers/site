import { Subtitle, Title } from "./title";
import renderer from "react-test-renderer";

it("renders title correctly", () => {
  const tree = renderer.create(<Title>Epic Title</Title>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders subtitle correctly", () => {
  const tree = renderer.create(<Subtitle>Epic Subtitle</Subtitle>).toJSON();
  expect(tree).toMatchSnapshot();
});
