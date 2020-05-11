import {readFile} from 'fs';
import YAML from 'yaml';
import path from 'path';

export type SNSLinkInfo =
  | {type: 'twitter'; url: string}
  | {type: 'github'; url: string};

const validateSNSLink = (obj: any): obj is SNSLinkInfo =>
  'type' in obj &&
  ['twitter', 'github'].includes(obj.type) &&
  'url' in obj &&
  typeof obj.url === 'string' &&
  obj.url.startsWith('https://');

export type Member = {
  avatar: string;
  name: string;
  role: string;
  links: SNSLinkInfo[];
};

const validateMember = (obj: any): obj is Member =>
  'avatar' in obj &&
  typeof obj.avatar === 'string' &&
  'name' in obj &&
  typeof obj.name === 'string' &&
  'role' in obj &&
  typeof obj.role === 'string' &&
  'links' in obj &&
  typeof obj.links === 'object' &&
  (Object.values(obj.links) as any[]).every(validateSNSLink);

const validateMembers = (obj: any): obj is Member[] =>
  typeof obj === 'object' &&
  (Object.values(obj) as any[]).every(validateMember);

const membersFile = path.join(process.cwd(), 'src/members/list.yaml');

export async function getMembers(): Promise<Member[]> {
  const file = await new Promise<Buffer>((resolve, reject) =>
    readFile(membersFile, (e, data) => (e ? reject(e) : resolve(data)))
  ).then((buffer) => buffer.toString());
  const parsed = YAML.parse(file);
  if (!validateMembers(parsed)) {
    throw 'invalid list format';
  }
  return parsed;
}
