import { expect, it } from "vitest";
import { PrevNextLink } from "./prev-next-link";
import { render } from "../utils/react-test";

it("renders both prev and next correctly", async () => {
  const tree = await render(
    <PrevNextLink
      prevLinkHref="https://example.com/prev"
      nextLinkHref="https://example.com/next"
    />,
  );
  expect(tree.getByTestId("prev-next-link")).toMatchSnapshot("prev-next-link");
});

it("renders only prev correctly", async () => {
  const tree = await render(
    <PrevNextLink prevLinkHref="https://example.com/prev" nextLinkHref={null} />,
  );
  expect(tree.getByTestId("prev-next-link")).toMatchSnapshot("prev-next-link");
});

it("renders only next correctly", async () => {
  const tree = await render(
    <PrevNextLink prevLinkHref={null} nextLinkHref="https://example.com/next" />,
  );
  expect(tree.getByTestId("prev-next-link")).toMatchSnapshot("prev-next-link");
});
