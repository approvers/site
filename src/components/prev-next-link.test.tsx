import { PrevNextLink } from "./prev-next-link";
import renderer from "react-test-renderer";

it("renders both prev and next correctly", () => {
  const tree = renderer
    .create(
      <PrevNextLink
        prevLinkHref="https://example.com/prev"
        nextLinkHref="https://example.com/next"
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders only prev correctly", () => {
  const tree = renderer
    .create(<PrevNextLink prevLinkHref="https://example.com/prev" nextLinkHref={null} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders only next correctly", () => {
  const tree = renderer
    .create(<PrevNextLink prevLinkHref={null} nextLinkHref="https://example.com/next" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
