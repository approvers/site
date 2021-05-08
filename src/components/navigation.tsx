import { FC, useCallback, useRef, useState } from "react";
import { Button } from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "../scss/components/navigation.module.scss";

export interface LinksProps {
  links: readonly Readonly<{
    name: string;
    url: string;
  }>[];
}

const Links: FC<LinksProps> = ({ links }) => (
  <nav className={styles.buttonWrapper}>
    {links.map(({ name, url }) => (
      <Button key={name}>
        <Link href={url}>
          <a>{name}</a>
        </Link>
      </Button>
    ))}
  </nav>
);

const NavButton: FC<{ onClick: () => void }> = ({ onClick }) => (
  <button className={styles.navButton} onClick={onClick}>
    <FontAwesomeIcon icon={faBars} />
  </button>
);

export const Navigation: FC<LinksProps> = (props) => {
  const [showingLinks, setShowingLinks] = useState(false);
  const canceler = useRef<HTMLDivElement | null>(null);
  const onCancel = useCallback(
    (e: { target: EventTarget }) => e.target == canceler.current && setShowingLinks(() => false),
    [canceler],
  );

  return (
    <>
      <NavButton onClick={() => setShowingLinks((v) => !v)} />
      <div className={styles.navWrapper} data-showing={showingLinks}>
        <Links {...props} />
        <div
          onTouchStart={onCancel}
          onClick={onCancel}
          className={styles.canceler}
          ref={canceler}
          data-showing={showingLinks}
        ></div>
      </div>
    </>
  );
};
