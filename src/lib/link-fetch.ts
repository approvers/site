import YAML from "yaml";

export interface Link {
  name: string;
  url: string;
}

function validateLink(link: unknown): link is Link {
  if (typeof (link as Link).name !== "string") {
    return false;
  }
  if (typeof (link as Link).url !== "string") {
    return false;
  }
  return true;
}

function validateLinks(links: unknown): links is Link[] {
  if (!Array.isArray(links)) {
    return false;
  }
  return links.every(validateLink);
}

const linksUrl = "https://github.com/approvers/site-data/raw/master/data/links.yaml";

export async function getLinks(): Promise<Link[]> {
  const res = await fetch(linksUrl);
  const parsed = YAML.parse(await res.text());
  if (!validateLinks(parsed)) {
    throw new Error("invalid links format");
  }
  return parsed;
}
