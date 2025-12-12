import { DateString } from "./date";
import { ExternalLink, Link } from "./link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export interface BlogCardProps {
  slug: string;
  frontmatter?: {
    author: string;
    authorId: string;
    date: string;
    title: string;
  };
}

export const BlogCard = ({ slug, frontmatter }: BlogCardProps): JSX.Element => {
  const title = frontmatter?.title ?? "無題";
  return (
    <div className="flex border-r-1 border-b-2">
      <a href={`/blog/${slug}`}>
        <Avatar className="flex-none basis-sm">
          <AvatarImage src="/alternative.png" alt={title} />
          <AvatarFallback>
            <img src="/alternative.png" />
          </AvatarFallback>
        </Avatar>
      </a>
      <div className="flex shrink grow flex-col items-start space-y-0.5 p-2">
        <a href={`/blog/${slug}`}>
          <h3 className="text-lg">{title}</h3>
        </a>
        <div className="flex w-full flex-wrap gap-2 self-end">
          {frontmatter?.author && frontmatter?.authorId && (
            <ExternalLink href={`https://github.com/${frontmatter.authorId}`}>
              {frontmatter.author}
            </ExternalLink>
          )}
          <DateString dateString={frontmatter?.date ?? ""} />
          <Link className="size-sm" href={`/blog/${slug}`}>
            記事を読む &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};
