import { Button, Flex, Spacer } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

export type PrevNextLinkProps = {
  prevLinkHref: string | null;
  nextLinkHref: string | null;
};

export const PrevNextLink = ({ prevLinkHref, nextLinkHref }: PrevNextLinkProps): JSX.Element => (
  <Flex as="nav" mt={4} mb={4} color="highlighted">
    {prevLinkHref !== null && (
      <Button as={Link} leftIcon={<FontAwesomeIcon icon={faArrowLeft} />} to={prevLinkHref}>
        前
      </Button>
    )}
    <Spacer />
    {nextLinkHref !== null && (
      <Button as={Link} rightIcon={<FontAwesomeIcon icon={faArrowRight} />} to={nextLinkHref}>
        次
      </Button>
    )}
  </Flex>
);
