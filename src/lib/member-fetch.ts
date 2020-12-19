import YAML from "yaml";
import path from "path";
import { promises } from "fs";
const { readFile } = promises;

export type SNSLinkInfo = { type: "twitter"; url: string } | { type: "github"; url: string };

function validateSNSLink(obj: unknown): obj is SNSLinkInfo {
  if (typeof obj !== "object" || obj == null) {
    console.error("not object: ", obj);
    return false;
  }

  if (!("type" in obj && ["twitter", "github"].includes((obj as SNSLinkInfo).type))) {
    console.error("unknown type from: ", obj);
    return false;
  }
  if (!("url" in obj && typeof (obj as SNSLinkInfo).url === "string")) {
    console.error("`url` not in: ", obj);
    return false;
  }
  return true;
}

function validateSNSLinks(links: unknown): links is SNSLinkInfo[] {
  return links === "object" && (Object.values(links) as unknown[]).every(validateSNSLink);
}

export type Member = {
  avatar: string;
  name: string;
  role: string;
  links: SNSLinkInfo[];
};

function validateMember(obj: unknown): obj is Member {
  if (typeof obj !== "object" || obj == null) {
    console.error("not object: ", obj);
    return false;
  }

  if (typeof (obj as Member).avatar !== "string") {
    console.error("`avatar` not in: ", obj);
    return false;
  }
  if (typeof (obj as Member).name !== "string") {
    console.error("`name` not in: ", obj);
    return false;
  }
  if (typeof (obj as Member).role !== "string") {
    console.error("`role` not in: ", obj);
    return false;
  }
  if (!validateSNSLinks((obj as Member).links)) {
    console.error("`links` not in: ", obj);
    return false;
  }

  return true;
}

function validateMembers(obj: unknown): obj is Member[] {
  return (
    typeof obj === "object" &&
    obj != null &&
    (Object.values(obj) as unknown[]).every(validateMember)
  );
}

const membersFile = path.join(process.cwd(), "data/members/list.yaml");

export async function getMembers(): Promise<Member[]> {
  const file = await readFile(membersFile);
  const parsed = YAML.parse(file.toString());
  if (!validateMembers(parsed)) {
    throw "invalid list format";
  }
  return parsed;
}
