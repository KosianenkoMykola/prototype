import { ArticlePage } from "@/components/pages/blog/ArticlePage";
import { allBlogSlugs } from "@/components/pages/blog/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allBlogSlugs.map((slug) => ({ slug }));
}

export default async function BlogArticleRoute({ params }: Props) {
  const { slug } = await params;
  return <ArticlePage slug={slug} />;
}
