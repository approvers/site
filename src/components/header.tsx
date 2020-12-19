import { Button } from "./button";
import type { FC } from "react";
import Link from "next/link";
import styles from "../scss/components/header.module.scss";

const links: readonly { name: string; url: string }[] = [
  {
    name: "ホーム",
    url: "/",
  },
  {
    name: "メンバー",
    url: "/member",
  },
  {
    name: "ブログ",
    url: "/blog",
  },
  {
    name: "リンク",
    url: "/link",
  },
];

const Links: FC = () => (
  <>
    {links.map(({ name, url }) => (
      <Link key={name} href={url}>
        <Button>
          <a>{name}</a>
        </Button>
      </Link>
    ))}
  </>
);

export const Header: FC = () => (
  <header className={styles.headerLayout}>
    <div className={styles.buttonWrapper}>
      <Links />
    </div>
  </header>
);
