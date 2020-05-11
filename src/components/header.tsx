import { FC } from "react";
import Link from "next/link";
import { ShadowButton } from "./button";

const links = {
  ホーム: "/",
  メンバー: "/member",
  ブログ: "/blog",
  参加方法: "/join",
};
export const Header: FC = () => (
  <>
    <header>
      {Object.entries(links).map(([name, url]) => (
        <Link key={name} href={url}>
          <ShadowButton>
            <a>{name}</a>
          </ShadowButton>
        </Link>
      ))}
    </header>
    <style jsx>{`
      header {
        display: flex;
      }
      a {
        color: black;
        text-decoration: none;
      }
    `}</style>
  </>
);
