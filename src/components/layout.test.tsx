import { Layout } from "./layout";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Layout pageName="Template Layout" description="the template page for this website">
        Hello, world!
      </Layout>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
