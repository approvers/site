import { ExternalIconLink, ExternalLink } from "./external-link";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(<ExternalLink href="https://duckduckgo.com">Go to DuckDuckGo</ExternalLink>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders icon correctly", () => {
  const tree = renderer
    .create(<ExternalIconLink href="https://duckduckgo.com">Go to DuckDuckGo</ExternalIconLink>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
