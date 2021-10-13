import { Grid } from "./paper";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Grid>
        <div>hoge</div>
        <div>fuga</div>
        <div>foo</div>
        <div>bar</div>
      </Grid>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
