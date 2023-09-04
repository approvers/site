import YAML from "yaml";

export type SNSLinkInfo = { type: "twitter"; name: string } | { type: "github"; name: string };

function validateSNSLink(obj: unknown): obj is SNSLinkInfo {
  if (typeof obj !== "object" || obj == null) {
    console.error("not object: ", obj);
    return false;
  }

  if (!("type" in obj && ["twitter", "github"].includes((obj as SNSLinkInfo).type))) {
    console.error("unknown type from: ", obj);
    return false;
  }
  if (!("url" in obj && typeof (obj as SNSLinkInfo).name === "string")) {
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
  username: string;
  associatedLinks: readonly SNSLinkInfo[];
};

function validateMember(obj: unknown): obj is Member {
  if (typeof obj !== "object" || obj == null) {
    console.error("not object: ", obj);
    return false;
  }

  if (typeof (obj as Member).username !== "string") {
    console.error("`avatar` not in: ", obj);
    return false;
  }
  if (!validateSNSLinks((obj as Member).associatedLinks)) {
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

const membersUrl = "https://members.approvers.dev/members";

export async function getMembers(): Promise<readonly Member[]> {
  const res = await fetch(membersUrl);
  if (!res.ok) {
    throw new Error("members-assoc unavailable");
  }
  const parsed = await res.json();
  if (!validateMembers(parsed)) {
    throw new Error("invalid list format");
  }
  return parsed;
}
