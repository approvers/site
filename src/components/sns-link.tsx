import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      className="color-accent-foreground size-4"
      href={`https://${type}.com/${name}`}
      data-testid="sns-link"
    >
      <FontAwesomeIcon icon={icon} />
    </ExternalLink>
  );
};
