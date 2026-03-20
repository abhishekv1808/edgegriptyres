"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BLOG_POSTS } from "@/lib/blogData";
import { ArrowRight, Clock, BookOpen } from "lucide-react";

const CATEGORY_COLORS: Record<string, string> = {
  "Tyre Care": "bg-blue-500/10 text-blue-400",
  Knowledge: "bg-purple-500/10 text-purple-400",
  Safety: "bg-amber-500/10 text-amber-400",
  Services: "bg-green-500/10 text-green-400",
};

export default function BlogListPage() {
  return (
    <main className="min-h-screen bg-[#0e0e0e]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 w-[400px] h-[400px] bg-brand-red/[0.03] rounded-full blur-[100px]" />
        </div>
        <div className="section-container relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] font-body font-bold text-brand-red uppercase tracking-[0.15em] mb-6">
            <BookOpen size={13} />
            Blog
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight mb-4">
            Tyre Care <span className="text-brand-red">Tips & Knowledge</span>
          </h1>
          <p className="text-white/35 font-body text-lg max-w-xl">
            Expert advice on tyre maintenance, safety, and getting the most out of your tyres on Indian roads.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/[0.06] hover:border-brand-red/20 overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_-15px_rgba(227,30,36,0.1)] flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-[10px] font-body font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${CATEGORY_COLORS[post.category] || "bg-white/5 text-white/50"}`}>
                      {post.category}
                    </span>
                    <span className="text-[11px] font-body text-white/25 flex items-center gap-1">
                      <Clock size={11} /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-display font-bold text-white mb-2 leading-snug group-hover:text-brand-red transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm font-body text-white/30 leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.05]">
                    <span className="text-[11px] text-white/20 font-body">{post.date}</span>
                    <span className="text-[11px] font-body font-bold text-brand-red uppercase tracking-wider flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
