import { IconDefinition, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { ExternalIconLink } from "./external-link";
import type { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { SNSLinkInfo } from "../lib/member-fetch";
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
    <ExternalIconLink href={url}>
      <FontAwesomeIcon className={styles.icon} icon={icon} />
    </ExternalIconLink>
  );
};
