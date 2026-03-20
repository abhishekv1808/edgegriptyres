import type { Metadata } from "next";
import { getBlogBySlug } from "@/lib/blogData";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogBySlug(params.slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} — EdgeGrip Tyres Blog`,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
