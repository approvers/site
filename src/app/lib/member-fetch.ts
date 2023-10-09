import YAML from "yaml";

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

function validateSNSLinks(links: unknown): links is readonly SNSLinkInfo[] {
  return (
    typeof links === "object" &&
    links !== null &&
    (Object.values(links) as unknown[]).every(validateSNSLink)
  );
}

export type Member = {
  avatar: string;
  name: string;
  role: string;
  links: readonly SNSLinkInfo[];
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

function validateMembers(obj: unknown): obj is readonly Member[] {
  return (
    typeof obj === "object" &&
    obj != null &&
    (Object.values(obj) as unknown[]).every(validateMember)
  );
}

const membersUrl = "https://github.com/approvers/site-data/raw/master/data/members/list.yaml";

export async function getMembers(): Promise<readonly Member[]> {
  const res = await fetch(membersUrl);
  const parsed = YAML.parse(await res.text());
  if (!validateMembers(parsed)) {
    throw "invalid list format";
  }
  return parsed;
}
