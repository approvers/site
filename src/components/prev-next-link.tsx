import type { FC } from "react";
import Link from "next/link";
import styles from "../scss/components/prev-next-link.module.scss";

export type PrevNextLinkProps = {
  prevLinkHref: string | null;
  nextLinkHref: string | null;
};

export const PrevNextLink: FC<PrevNextLinkProps> = ({ prevLinkHref, nextLinkHref }) => (
  <nav className={styles.nav}>
    {prevLinkHref !== null && (
      <Link href={prevLinkHref}>
        <a>〈 前</a>
      </Link>
    )}
    {nextLinkHref !== null && (
      <Link href={nextLinkHref}>
        <a>次 〉</a>
      </Link>
    )}
  </nav>
);
