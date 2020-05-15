import { FC } from "react";
import { SNSLinkInfo } from "../lib/member-fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { ExternalLink } from "./externalLink";
import styles from "../sass/pages/member.module.sass";

type Icon = { icon: IconDefinition };

const icons: Record<SNSLinkInfo["type"], Icon> = {
  twitter: {
    icon: faTwitter,
  },
  github: {
    icon: faGithub,
  },
};

export const SNSLink: FC<SNSLinkInfo> = ({ type, url }) => {
  const { icon } = icons[type];
  return (
    <ExternalLink href={url} className={styles.icon}>
      <FontAwesomeIcon icon={icon} />
    </ExternalLink>
  );
};
