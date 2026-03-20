import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blogData";

const CATEGORY_COLORS: Record<string, string> = {
  "Tyre Care": "bg-blue-50 text-blue-600",
  Knowledge: "bg-purple-50 text-purple-600",
  Safety: "bg-amber-50 text-amber-700",
  Services: "bg-green-50 text-green-600",
};

export default function BlogSection() {
  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1, 4);

  return (
    <section className="py-24 bg-gray-50">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/[0.06] text-sm font-body font-semibold text-brand-red mb-4 shadow-sm">
              <BookOpen size={14} />
              Tips & Knowledge
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black text-[#1a1a1a] tracking-tight">
              Tyre Care <span className="text-brand-red">Blog</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-body font-bold text-brand-chrome hover:text-brand-red transition-colors uppercase tracking-wider"
          >
            View All Articles <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured Post — Large Card */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group bg-[#1a1a1a] rounded-2xl p-8 lg:p-10 flex flex-col justify-end min-h-[400px] relative overflow-hidden hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] transition-all duration-300"
          >
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-brand-red/[0.06] rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] font-body font-bold bg-brand-red/10 text-brand-red px-3 py-1 rounded-full uppercase tracking-wider">
                  {featured.category}
                </span>
                <span className="text-[11px] font-body text-white/30 flex items-center gap-1">
                  <Clock size={11} /> {featured.readTime}
                </span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-display font-black text-white mb-3 leading-tight tracking-tight group-hover:text-brand-red transition-colors">
                {featured.title}
              </h3>
              <p className="text-white/40 font-body text-sm leading-relaxed mb-6 max-w-md">
                {featured.excerpt}
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-body font-bold text-white/50 group-hover:text-brand-red uppercase tracking-wider transition-colors">
                Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Other Posts — Stacked Cards */}
          <div className="flex flex-col gap-4">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl p-6 flex items-start gap-5 border border-black/[0.04] hover:shadow-lg hover:border-brand-red/10 transition-all duration-300"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className={`text-[10px] font-body font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${CATEGORY_COLORS[post.category] || "bg-gray-100 text-gray-600"}`}>
                      {post.category}
                    </span>
                    <span className="text-[11px] font-body text-gray-400 flex items-center gap-1">
                      <Clock size={11} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-base font-display font-bold text-[#1a1a1a] mb-1.5 leading-snug group-hover:text-brand-red transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs font-body text-gray-400 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-brand-red/5 flex items-center justify-center flex-shrink-0 mt-1 transition-colors">
                  <ArrowRight size={16} className="text-gray-300 group-hover:text-brand-red transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
