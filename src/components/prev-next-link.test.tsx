import { expect, it } from "vitest";

import { render } from "../utils/react-test";
import { PrevNextLink } from "./prev-next-link";

it("renders both prev and next correctly", () => {
  const tree = render(
    <PrevNextLink
      prevLinkHref="https://example.com/prev"
      nextLinkHref="https://example.com/next"
    />,
  );
  expect(tree.toJSON()).toMatchSnapshot();
});

it("renders only prev correctly", () => {
  const tree = render(<PrevNextLink prevLinkHref="https://example.com/prev" nextLinkHref={null} />);
  expect(tree.toJSON()).toMatchSnapshot();
});

it("renders only next correctly", () => {
  const tree = render(<PrevNextLink prevLinkHref={null} nextLinkHref="https://example.com/next" />);
  expect(tree.toJSON()).toMatchSnapshot();
});
