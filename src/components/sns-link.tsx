import { IconDefinition, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@chakra-ui/react";
import type { SNSLinkInfo } from "../lib/member-fetch";

type Icon = { icon: IconDefinition };

const icons: Record<SNSLinkInfo["type"], Icon> = {
  twitter: {
    icon: faTwitter,
  },
  github: {
    icon: faGithub,
  },
};

export const SNSLink = ({ type, url }: SNSLinkInfo): JSX.Element => {
  const { icon } = icons[type];
  return (
    <Link href={url} isExternal color="highlighted" w={["1rem", "1.2rem"]} h={["1rem", "1.2rem"]}>
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
};
