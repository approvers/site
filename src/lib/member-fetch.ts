import { readFile } from "fs";
import YAML from "yaml";
import path from "path";

export type SNSLinkInfo = { type: "twitter"; url: string } | { type: "github"; url: string };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validateSNSLink = (obj: any): obj is SNSLinkInfo => {
  if (!("type" in obj && ["twitter", "github"].includes(obj.type))) {
    console.error("unknown type from: ", obj);
    return false;
  }
  if (!("url" in obj && typeof obj.url === "string")) {
    console.error("`url` not in: ", obj);
    return false;
  }
  return true;
};

export type Member = {
  avatar: string;
  name: string;
  role: string;
  links: SNSLinkInfo[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validateMember = (obj: any): obj is Member => {
  if (!("avatar" in obj && typeof obj.avatar === "string")) {
    console.error("`avatar` not in: ", obj);
    return false;
  }
  if (!("name" in obj && typeof obj.name === "string")) {
    console.error("`name` not in: ", obj);
    return false;
  }
  if (!("role" in obj && typeof obj.role === "string")) {
    console.error("`role` not in: ", obj);
    return false;
  }
  if (
    !(
      "links" in obj &&
      typeof obj.links === "object" &&
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (Object.values(obj.links) as any[]).every(validateSNSLink)
    )
  ) {
    console.error("`links` not in: ", obj);
    return false;
  }

  return true;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validateMembers = (obj: any): obj is Member[] =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  typeof obj === "object" && (Object.values(obj) as any[]).every(validateMember);

const membersFile = path.join(process.cwd(), "src/members/list.yaml");

export async function getMembers(): Promise<Member[]> {
  const file = await new Promise<Buffer>((resolve, reject) =>
    readFile(membersFile, (e, data) => (e ? reject(e) : resolve(data))),
  ).then((buffer) => buffer.toString());
  const parsed = YAML.parse(file);
  if (!validateMembers(parsed)) {
    throw "invalid list format";
  }
  return parsed;
}
