import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "./ui/button";

export type PrevNextLinkProps = {
  prevLinkHref: string | null;
  nextLinkHref: string | null;
};

export const PrevNextLink = ({ prevLinkHref, nextLinkHref }: PrevNextLinkProps): JSX.Element => (
  <nav data-testid="prev-next-link">
    {prevLinkHref !== null && (
      <Button asChild>
        <a href={prevLinkHref}>
          <FontAwesomeIcon icon={faArrowLeft} /> 前
        </a>
      </Button>
    )}
    {nextLinkHref !== null && (
      <Button asChild>
        <a href={nextLinkHref}>
          次 <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </Button>
    )}
  </nav>
);
