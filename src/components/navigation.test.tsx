import { expect, it } from "vitest";
import { Navigation } from "./navigation";
import { render } from "../utils/react-test";

it("renders correctly", () => {
  const tree = render(
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
  );
  expect(tree).toMatchSnapshot();
});
