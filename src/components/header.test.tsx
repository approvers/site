import { expect, it } from "vitest";
import { Header } from "./header";
import React from "react";
import { render } from "../../utils/react-test";

it("renders correctly", () => {
  const tree = render(<Header />);
  expect(tree.toJSON()).toMatchSnapshot();
});
