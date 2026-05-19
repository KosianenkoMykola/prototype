import Link from "next/link";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { BlogPostListItem } from "./data";

type Props = {
  post: BlogPostListItem;
};

export function BlogArticleCard({ post }: Props) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group overflow-hidden rounded border border-neolith-gray-200 bg-white transition-shadow hover:shadow-md"
    >
      <ImagePlaceholder label="Обкладинка" aspect="video" className="h-[220px] rounded-none w-full" />
      <div className="space-y-2 p-6">
        <p className="text-[11px] font-semibold tracking-wide text-neolith-gray-600 uppercase">
          {post.categoryLabel}
        </p>
        <h2 className="text-lg font-semibold leading-snug text-neolith-black group-hover:opacity-80">
          {post.title}
        </h2>
        <p className="text-xs text-neolith-gray-600">
          {post.author} • {post.readTime}
        </p>
      </div>
    </Link>
  );
}
