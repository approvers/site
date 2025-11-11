import { Button, Flex, Spacer } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

export type PrevNextLinkProps = {
  prevLinkHref: string | null;
  nextLinkHref: string | null;
};

export const PrevNextLink = ({ prevLinkHref, nextLinkHref }: PrevNextLinkProps): JSX.Element => (
  <Flex as="nav" mt={4} mb={4} color="highlighted" data-testid="prev-next-link">
    {prevLinkHref !== null && (
      <Button asChild>
        <Link to={prevLinkHref}>
          <FontAwesomeIcon icon={faArrowLeft} /> 前
        </Link>
      </Button>
    )}
    <Spacer />
    {nextLinkHref !== null && (
      <Button asChild>
        <Link to={nextLinkHref}>
          次 <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </Button>
    )}
  </Flex>
);
