import { expect, it } from "vitest";
import { PrevNextLink } from "./prev-next-link";
import { render } from "../utils/react-test";

it("renders both prev and next correctly", () => {
  const tree = render(
    <PrevNextLink
      prevLinkHref="https://example.com/prev"
      nextLinkHref="https://example.com/next"
    />,
  );
  expect(tree).toMatchSnapshot();
});

it("renders only prev correctly", () => {
  const tree = render(<PrevNextLink prevLinkHref="https://example.com/prev" nextLinkHref={null} />);
  expect(tree).toMatchSnapshot();
});

it("renders only next correctly", () => {
  const tree = render(<PrevNextLink prevLinkHref={null} nextLinkHref="https://example.com/next" />);
  expect(tree).toMatchSnapshot();
});
