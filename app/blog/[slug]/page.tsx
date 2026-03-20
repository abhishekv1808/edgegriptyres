"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getBlogBySlug, BLOG_POSTS } from "@/lib/blogData";
import { ArrowLeft, Clock, BookOpen, ArrowRight } from "lucide-react";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogBySlug(params.slug);

  if (!post) return notFound();

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0e0e0e] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 w-[400px] h-[400px] bg-brand-red/[0.04] rounded-full blur-[100px]" />
        </div>
        <div className="section-container relative z-10 max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-8 transition-colors text-sm font-body font-semibold"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-[11px] font-body font-bold bg-brand-red/10 text-brand-red px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-[11px] font-body text-white/30 flex items-center gap-1">
              <Clock size={11} /> {post.readTime}
            </span>
            <span className="text-[11px] font-body text-white/30">
              {post.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white leading-[1.1] tracking-tight mb-6">
            {post.title}
          </h1>
          <p className="text-white/40 font-body text-lg leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <article className="section-container max-w-3xl">
          <div className="space-y-6">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-[15px] font-body text-gray-600 leading-[1.9]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-black/[0.04] text-center">
            <h3 className="text-xl font-display font-bold text-[#1a1a1a] mb-2">
              Need expert advice?
            </h3>
            <p className="text-sm text-gray-500 font-body mb-6">
              Our tyre specialists are ready to help you make the right choice.
            </p>
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20read%20your%20article%20and%20have%20a%20question"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-body font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(227,30,36,0.3)]"
            >
              Chat with an Expert
            </a>
          </div>
        </article>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50 border-t border-black/[0.04]">
        <div className="section-container max-w-3xl">
          <h3 className="text-2xl font-display font-bold text-[#1a1a1a] mb-8">
            More Articles
          </h3>
          <div className="space-y-4">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex items-center justify-between bg-white rounded-xl p-5 border border-black/[0.04] hover:shadow-md hover:border-brand-red/10 transition-all"
              >
                <div>
                  <span className="text-[10px] font-body font-bold text-brand-red uppercase tracking-wider">
                    {p.category}
                  </span>
                  <h4 className="text-sm font-display font-bold text-[#1a1a1a] group-hover:text-brand-red transition-colors mt-1">
                    {p.title}
                  </h4>
                </div>
                <ArrowRight size={16} className="text-gray-300 group-hover:text-brand-red flex-shrink-0 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
