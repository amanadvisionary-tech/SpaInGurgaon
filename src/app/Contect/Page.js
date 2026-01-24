import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contect() {
  const blogs = [
    {
      title: "Top 7 Benefits of Body Spa Therapy in Gurgaon",
      excerpt:
        "Discover how professional body spa therapies in Gurgaon help reduce stress, improve circulation, and enhance overall well-being.",
      image: "/images/spa-blog-1.webp",
      slug: "/blog/benefits-of-body-spa-gurgaon",
      date: "Jan 10, 2026",
    },
    {
      title: "Swedish vs Deep Tissue Massage – Which Is Best for You?",
      excerpt:
        "Confused between Swedish and deep tissue massage? Learn which spa massage suits your body, lifestyle, and stress level.",
      image: "/images/spa-blog-2.webp",
      slug: "/blog/swedish-vs-deep-tissue-massage",
      date: "Jan 6, 2026",
    },
    {
      title: "Why Luxury Spa in Gurgaon Is the Ultimate Stress Reliever",
      excerpt:
        "Explore why Gurgaon’s luxury spas are becoming the top choice for professionals seeking relaxation and rejuvenation.",
      image: "/images/spa-blog-3.webp",
      slug: "/blog/luxury-spa-in-gurgaon",
      date: "Jan 2, 2026",
    },
  ];

  return (
    <main className="bg-[#faf7f3]">
      {/* HERO SECTION */}
      <section className="relative h-[55vh] flex items-center justify-center text-center">
        <Image
          src="/images/spa-blog-banner.webp"
          alt="Spa Blog Gurgaon"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Spa & Wellness Blog – Gurgaon
          </h1>
          <p className="mt-4 text-lg text-neutral-200">
            Expert tips, massage guides, and wellness insights from Gurgaon’s
            premium spa professionals.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <div className="relative h-60">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-[#c9b37e] font-medium">
                    {blog.date}
                  </span>
                  <h2 className="mt-2 text-xl font-semibold text-gray-900">
                    {blog.title}
                  </h2>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  <Link
                    href={blog.slug}
                    className="inline-block mt-5 text-[#7b0f2b] font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#7b0f2b] py-16 px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
          Experience the Best Spa in Gurgaon
        </h3>
        <p className="mt-4 max-w-2xl mx-auto text-neutral-200">
          Book a relaxing body massage or luxury spa therapy in Gurgaon today and
          feel the difference.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-8 px-10 py-4 bg-[#c9b37e] text-black font-semibold rounded-full hover:bg-[#b8a066] transition"
        >
          Book Your Spa Session
        </Link>
      </section>
    </main>
  );
}
