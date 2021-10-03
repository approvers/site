import { Navigation } from "./navigation";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Navigation
        links={[
          {
            name: "root",
            url: "/",
          },
          {
            name: "blog",
            url: "/blog",
          },

          {
            name: "contacts",
            url: "/contacts",
          },
          {
            name: "links",
            url: "/links",
          },
        ]}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
