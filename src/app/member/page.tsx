import { Members } from "./members";
import type { Metadata } from "next";
import { getMembers } from "../lib/member-fetch";

export const metadata: Metadata = {
  title: "メンバー紹介",
};

export default async function Page() {
  const members = await getMembers();
  return <Members members={members} />;
}
