import { FC } from "react";
import Link from "next/link";
import { Button } from "./button";
import styles from "../sass/components/header.module.sass";

const links: { name: string; url: string }[] = [
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
    name: "参加方法",
    url: "/join",
  },
];
export const Header: FC = () => (
  <>
    <header className={styles.headerLayout}>
      <div className={styles.buttonWrapper}>
        {links.map(({ name, url }) => (
          <Link key={name} href={url}>
            <Button>
              <a>{name}</a>
            </Button>
          </Link>
        ))}
      </div>
    </header>
  </>
);
