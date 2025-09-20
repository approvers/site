import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import type { SNSLinkInfo } from "../lib/member-fetch";
import { ExternalLink } from "./link";

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
    >
      <FontAwesomeIcon icon={icon} />
    </ExternalLink>
  );
};
