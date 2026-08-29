import Image from "next/image";

export const metadata = {
  title: "Spa & Wellness Blog | Spa In Gurgaon",
  description:
    "Expert massage guides and wellness insights from Spa In Gurgaon's therapists — deep tissue, sandwich, Swedish and full body massage explained.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Spa & Wellness Blog | Spa In Gurgaon",
    description:
      "Expert massage guides, spa tips, and wellness insights from Gurgaon's premium spa professionals.",
    url: "https://www.spaingurgaon.com/blog",
    images: ["/images/fpkdl.com_750_1758979994_natural-elements-spa-with-candles_23-2148199479.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/fpkdl.com_750_1758979994_natural-elements-spa-with-candles_23-2148199479.jpg"],
  },
};

export default function SpaBlogPage() {
  const blogs = [
    {
      title: "Deep Tissue Massage Benefits: A Simple Guide for Everyone",
      desc: "Learn the top deep tissue massage benefits, how it works, who should get it, and why it helps reduce pain, stress, and muscle tension naturally.",
      img: "/images/fpkdl.com_960_1758962686_masseur-doing-massage-woman-s-back-spa-salon-with-many-candles_355000-245.jpg",
      date: "03 Aug 2026",
      tag: "Massage",
      Link: "/deep-tissue-massage-benefits",
    },
    {
      title: "What is The Difference Between a Sandwich Massage and a Deep Tissue Massage?",
      desc: "One of the most widespread reasons people seek out massage therapy is for pain relief. There is huge benefit to using the right massage technique. Sandwich Massage and Deep tissue massage are two of the most popular body massage services available today.",
      img: "/images/fpkdl.com_960_1758962771_young-relaxing-woman-getting-massage-with-cosmetic-oil-spa-salon-background_852367-2763.jpg",
      date: "12 Aug 2026",
      tag: "Wellness",
      Link: "/difference-between-sandwich-massage-and-deep-tissue-massage",
    },
    {
      title: "Sandwich Massage vs. Swedish Massage: Which one is better to relieve stress?",
      desc: "When you're already stressed out, a Sandwich massage vs Swedish massage can seem like a confusing choice. In this article, we compare both styles and explore which one may be more suitable for your needs.",
      img: "/images/fpkdl.com_960_1760685466_therapist-make-professional-hand-massage-back-shoulders-young-beautiful-woman_359031-29618.jpg",
      date: "05 Aug 2026",
      tag: "Massage",
      Link: "/sandwich-massage-vs-swedish-massage",
    },
    {
      title: "Full Body Massage: Benefits, Types, and Everything You Should Know",
      desc: "Learn what a full body massage is, its benefits, different types, what happens during a session, and how it helps your body and mind.",
      img: "/images/fpkdl.com_960_1760685860_full-body-massage-spa-salon_926199-4238291.jpg",
      date: "04 Aug 2026",
      tag: "Wellness",
      Link: "/full-body-massage",
    },
  ];

  return (
    <section className="bg-[#f8f6f2] min-h-screen">
      {/* HERO */}
      <div
        className="relative h-[50vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/fpkdl.com_750_1758979994_natural-elements-spa-with-candles_23-2148199479.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-serif text-white font-bold">
            Spa & Wellness Blog – Gurgaon
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Expert tips, massage guides, and wellness insights from Gurgaon’s premium spa professionals
          </p>
        </div>
      </div>

      {/* BLOG LIST */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image with fixed aspect ratio — prevents stretching */}
              <div className="aspect-[3/2] overflow-hidden">
                <Image width={800} height={600} src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <span className="inline-block bg-[#f5ede0] text-[#7b0f2b] text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                  {blog.tag}
                </span>
                <h2 className="text-base font-bold text-gray-900 leading-snug line-clamp-2 mb-2 group-hover:text-[#7b0f2b] transition-colors">
                  {blog.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
                  {blog.desc}
                </p>
                <a
                  href={blog.Link}
                  className="inline-flex items-center gap-1 text-[#7b0f2b] text-sm font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#7b0f2b] text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-serif font-bold">
            Experience the Best Spa in Gurgaon
          </h3>
          <p className="mt-4 text-gray-200">
            Book a luxury massage or spa therapy session today and rejuvenate your body and mind.
          </p>
          <a
            href="/contacts"
            className="inline-block mt-8 bg-[#c9b37e] text-black px-8 py-3 rounded-full font-semibold hover:bg-white transition"
          >
            Book Appointment
          </a>
        </div>
      </div>

    </section>
  );
}
