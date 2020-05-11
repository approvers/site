import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/blogs');

export type Metadata = {
  date: string;
  title: string;
};

export type Blog = {
  id: string;
  content: string;
} & Metadata;

const validateMetadata = (value: any): value is Metadata => {
  return (
    'date' in value &&
    typeof value.date === 'string' &&
    'title' in value &&
    typeof value.title === 'string'
  );
};

const metadataFromFile = (fileName: string) => {
  const id = fileName.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const data = matterResult.data;
  if (!validateMetadata(data)) {
    throw 'invalid metadata';
  }
  return {
    id,
    ...data,
  };
};

export function getSortedBlogMetadatas(): Metadata[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(metadataFromFile);

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getAllBlogIds() {
  const fileNames = await new Promise<string[]>((resolve, reject) =>
    fs.readdir(postsDirectory, (e, files) => (e ? reject(e) : resolve(files)))
  );

  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ''),
    },
  }));
}

export async function getBlogFromId(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  const {data, content} = matterResult;
  if (!validateMetadata(data)) {
    throw 'invalid metadata';
  }

  // Combine the data with the id and contentHtml
  return {
    id,
    content,
    ...data,
  };
}
