import { LinkPage } from "./link";
import { Metadata } from "next";
import { getLinks } from "../lib/link-fetch";

export const metadata: Metadata = {
  title: "リンク",
};

export default async function Page() {
  const links = await getLinks();
  return <LinkPage links={links} />;
}
