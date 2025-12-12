import { expect, it } from "vitest";

import { render } from "../utils/react-test";
import { PrevNextLink } from "./prev-next-link";

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
