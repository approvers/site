import YAML from "yaml";
import path from "path";
import { promises } from "fs";

const { readFile } = promises;

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

const linksFile = path.join(process.cwd(), "data", "links.yaml");

export async function getLinks(): Promise<Link[]> {
  const content = await readFile(linksFile, "utf8");
  const parsed = YAML.parse(content);
  if (!validateLinks(parsed)) {
    throw new Error("invalid links format");
  }
  return parsed;
}
