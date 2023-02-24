export type SNSLinkInfo = { type: "twitter"; url: string } | { type: "github"; url: string };

export interface Member {
  avatar: string;
  name: string;
  role: {
    name: string;
    color: string;
  };
  links: readonly SNSLinkInfo[];
}

const membersUrl = "https://members.approvers.dev/api/v1/members";

interface MembersDbScheme {
  discord_user_id: string;
  display_name: string;
  twitter: string[];
  github: string[];
  role: {
    name: string;
    color: string;
  };
}

const isDict = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const existsKeys = <K extends string>(
  obj: Record<string, unknown>,
  keys: readonly K[],
): obj is Record<K, unknown> => {
  for (const key of keys) {
    if (!Object.hasOwn(obj, key)) {
      console.error(`\`${key}\` not in: `, obj);
      return false;
    }
  }
  return true;
};

const validate = (obj: unknown): obj is MembersDbScheme[] => {
  if (!Array.isArray(obj)) {
    return false;
  }

  const keys: (keyof MembersDbScheme)[] = [
    "discord_user_id",
    "display_name",
    "twitter",
    "github",
    "role",
  ];
  const roleKeys: (keyof MembersDbScheme["role"])[] = ["name", "color"];
  for (const entry of obj) {
    if (!isDict(entry)) {
      return false;
    }
    if (!existsKeys(entry, keys)) {
      return false;
    }
    if (!isDict(entry.role)) {
      return false;
    }
    if (!existsKeys(entry.role, roleKeys)) {
      return false;
    }
  }
  return true;
};

export async function getMembers(): Promise<Member[]> {
  const res = await fetch(membersUrl);
  const parsed = await res.json();
  if (!validate(parsed)) {
    throw "invalid list format";
  }
  const members: Member[] = [];
  for (const { display_name, role, twitter, github } of parsed) {
    const links: SNSLinkInfo[] = [];
    for (const githubId of github) {
      const githubUserRes = await fetch(`https://api.github.com/user/${githubId}`);
      const githubLogin = (await githubUserRes.json()).login as string;
      links.push({
        type: "github",
        url: `https://github.com/${githubLogin}`,
      });
    }
    const primaryGhUrl = links.at(0)?.url;
    for (const twitterId of twitter) {
      links.push({
        type: "twitter",
        url: `https://twitter.com/intent/user?user_id=${twitterId}`,
      });
    }
    members.push({
      avatar: primaryGhUrl ? `${primaryGhUrl}.png` : "",
      name: display_name,
      role,
      links,
    });
  }
  return members;
}
