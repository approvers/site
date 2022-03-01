import { Button, Flex, Spacer } from "@chakra-ui/react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextLink from "next/link";

export type PrevNextLinkProps = {
  prevLinkHref: string | null;
  nextLinkHref: string | null;
};

export const PrevNextLink = ({ prevLinkHref, nextLinkHref }: PrevNextLinkProps): JSX.Element => (
  <Flex as="nav" color="highlighted" mt={4} mb={4}>
    {prevLinkHref !== null && (
      <NextLink href={prevLinkHref}>
        <Button leftIcon={<FontAwesomeIcon icon={faArrowLeft} />}>前</Button>
      </NextLink>
    )}
    <Spacer />
    {nextLinkHref !== null && (
      <NextLink href={nextLinkHref}>
        <Button rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>次</Button>
      </NextLink>
    )}
  </Flex>
);
