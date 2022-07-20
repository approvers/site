import { expect, it } from "vitest";
import { Layout } from "./layout";
import { render } from "../utils/react-test";

it("renders correctly", () => {
  const tree = render(
    <Layout pageName="Template Layout" description="the template page for this website">
      Hello, world!
    </Layout>,
  );
  expect(tree).toMatchSnapshot();
});
