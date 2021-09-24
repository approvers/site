import Link from "next/link";
import styles from "../scss/components/prev-next-link.module.scss";

export type PrevNextLinkProps = {
  prevLinkHref: string | null;
  nextLinkHref: string | null;
};

export const PrevNextLink = ({ prevLinkHref, nextLinkHref }: PrevNextLinkProps): JSX.Element => (
  <nav className={styles.nav}>
    {prevLinkHref !== null && (
      <Link href={prevLinkHref}>
        <a className={styles.left}>〈 前</a>
      </Link>
    )}
    {nextLinkHref !== null && (
      <Link href={nextLinkHref}>
        <a className={styles.right}>次 〉</a>
      </Link>
    )}
  </nav>
);
