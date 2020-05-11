import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/blogs');

export type Blog = {
  date: string;
  title: string;
  id: string;
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
      throw 'the article has no date';
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
