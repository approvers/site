"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

const headerLinks = [
  {
    name: "トップ",
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
] as const;

export const Nav = (): React.JSX.Element => (
  <NavigationMenu>
    <NavigationMenuList className="w-full justify-center-safe">
      {headerLinks.map(({ name, url }) => (
        <NavigationMenuItem key={name}>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href={url}>{name}</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);
