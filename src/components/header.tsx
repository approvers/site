import { FC } from "react";
import Link from "next/link";
import { ShadowButton } from "./button";
import styles from "../sass/components/header.module.sass";

const links = {
  ホーム: "/",
  メンバー: "/member",
  ブログ: "/blog",
  参加方法: "/join",
};
export const Header: FC = () => (
  <>
    <header className={styles.headerLayout}>
      <div className={styles.buttonWrapper}>
        {Object.entries(links).map(([name, url]) => (
          <Link key={name} href={url}>
            <ShadowButton>
              <a>{name}</a>
            </ShadowButton>
          </Link>
        ))}
      </div>
    </header>
  </>
);
