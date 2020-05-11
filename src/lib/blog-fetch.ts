import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/blogs');

export type Blog = {
  date: string;
  title: string;
  id: string;
  contentHtml: string;
};

export type Metadata = {
  date: string;
  title: string;
};
const validateMetadata = (value: any): value is Metadata => {
  return (
    'date' in value &&
    typeof value.date === 'string' &&
    'title' in value &&
    typeof value.title === 'string'
  );
};

export function getSortedBlogs() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    const data = matterResult.data;
    if (!validateMetadata(data)) {
      throw 'invalid metadata';
    }
    const metadata: {date: string} = data;

    return {
      id,
      ...metadata,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllBlogIds() {
  const fileNames = fs.readdirSync(postsDirectory);

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
  const {data} = matterResult;
  if (!validateMetadata(data)) {
    throw 'invalid metadata';
  }

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...data,
  };
}
