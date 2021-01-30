import { Button } from "./button";
import type { FC } from "react";
import Link from "next/link";
import styles from "../scss/components/header.module.scss";

export interface LinksProps {
  links: readonly Readonly<{
    name: string;
    url: string;
  }>[];
}

const Links: FC<LinksProps> = ({ links }) => (
  <nav className={styles.buttonWrapper}>
    {links.map(({ name, url }) => (
      <Link key={name} href={url}>
        <Button>
          <a>{name}</a>
        </Button>
      </Link>
    ))}
  </nav>
);

export const Header: FC<LinksProps> = (props) => (
  <header className={styles.headerLayout}>
    <Links {...props} />
  </header>
);
