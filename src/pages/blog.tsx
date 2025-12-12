import { Link } from "@/components/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { DateString } from "../components/date";
import { Layout } from "../components/layout";

function BlogCard({
  slug,
  frontmatter,
}: Queries.BlogEntriesQuery["allBlog"]["nodes"][number]): JSX.Element {
  const title = frontmatter?.title ?? "無題";
  return (
    <div className="flex" borderColor="shadowed" borderRightWidth="1px" borderBottomWidth="2px">
      <Avatar flex="0 0 sm" asChild>
        <a href={`/blog/${slug}`}>
          <AvatarFallback>{title}</AvatarFallback>
          <AvatarImage />
        </a>
      </Avatar>
      <div className="flex flex-col" alignItems="self-start" flex="1 1" p={2} spaceY={0.5}>
        <a href={`/blog/${slug}`}>
          <h3 fontSize="lg">{title}</h3>
        </a>
        <div className="flex" align="self-end" wrap="wrap" gap={2} w="100%">
          {frontmatter?.author && frontmatter?.authorId && (
            <Link href={`https://github.com/${frontmatter.authorId}`}>{frontmatter.author}</Link>
          )}
          <DateString dateString={frontmatter?.date ?? ""} />
          <a href={`/blog/${slug}`} size="sm">
            記事を読む &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export const query = graphql`
  query BlogEntries {
    allBlog {
      nodes {
        slug
        frontmatter {
          title
          date
          author
          authorId
        }
      }
    }
  }
`;

export default function Blog({ data }: PageProps<Queries.BlogEntriesQuery>) {
  const blogs = data.allBlog.nodes;
  return (
    <Layout title="ブログ">
      <SimpleGrid gap={4} columns={1}>
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} {...blog} />
        ))}
      </SimpleGrid>
    </Layout>
  );
}
