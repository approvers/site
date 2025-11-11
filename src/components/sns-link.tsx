import { ExternalLink } from "./link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import type { SNSLinkInfo } from "../lib/member-fetch";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";

type Icon = { icon: IconDefinition };

const icons: Record<SNSLinkInfo["type"], Icon> = {
  twitter: {
    icon: faTwitter,
  },
  github: {
    icon: faGithub,
  },
};

export const SNSLink = ({ type, name }: SNSLinkInfo): JSX.Element => {
  const { icon } = icons[type];
  return (
    <ExternalLink
      w={["1rem", "1.2rem"]}
      h={["1rem", "1.2rem"]}
      color="highlighted"
      href={`https://${type}.com/${name}`}
      data-testid="sns-link"
    >
      <FontAwesomeIcon icon={icon} />
    </ExternalLink>
  );
};
