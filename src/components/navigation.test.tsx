import { expect, it } from "vitest";

import { render } from "../utils/react-test";
import { Navigation } from "./navigation";

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
  expect(tree.toJSON()).toMatchSnapshot();
});
