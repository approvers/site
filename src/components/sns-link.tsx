import { FC } from "react";
import { SNSLinkInfo } from "../lib/member-fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { ExternalLink } from "./external-link";
import styles from "../scss/components/sns-link.module.scss";

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
    <ExternalLink href={url}>
      <FontAwesomeIcon className={styles.icon} icon={icon} />
    </ExternalLink>
  );
};
