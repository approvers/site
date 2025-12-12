import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "./ui/button";

export type PrevNextLinkProps = {
  prevLinkHref: string | null;
  nextLinkHref: string | null;
};

export const PrevNextLink = ({ prevLinkHref, nextLinkHref }: PrevNextLinkProps): JSX.Element => (
  <nav className="grid w-full grid-cols-3 gap-8 md:grid-cols-5" data-testid="prev-next-link">
    {prevLinkHref !== null ? (
      <Button className="col-1" variant="outline" asChild>
        <a href={prevLinkHref}>
          <FontAwesomeIcon icon={faArrowLeft} /> 前
        </a>
      </Button>
    ) : (
      <div className="col-1" />
    )}
    {nextLinkHref !== null ? (
      <Button className="-col-end-1" variant="outline" asChild>
        <a href={nextLinkHref}>
          次 <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </Button>
    ) : (
      <div className="-col-end-1" />
    )}
  </nav>
);
