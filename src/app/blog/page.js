export default function SpaBlogPage() {
  const blogs = [
    {
      title: "What is The Difference Between a Sandwich Massage and a Deep Tissue Massage?",
      desc: "One of the most widespread reasons people seek out massage therapy is for pain relief. “When it comes to some of the aches and pains in life, whether it be chronic back pain, stiffness through muscles, technology stress — quite literally pain that many times comes from our devices or work volumes but still landed on your body in one way/shape/or form — or post workout recovery soreness: there is huge benefit to using the right massage technique. Sandwich Massage and Deep tissue massage as Pretty Beloved Body to body massage services. There are so many options out of the box that you can choose from as part of the massage service.",
      img: "/images/fpkdl.com_960_1758962771_young-relaxing-woman-getting-massage-with-cosmetic-oil-spa-salon-background_852367-2763.jpg",
      date: "12 Aug 2026",
      tag: "Wellness",
    },
    {
      title: "Swedish vs Deep Tissue Massage – Which One is Right for You?",
      desc: "A complete guide to choosing the right massage based on your body pain, stress level, and relaxation goals.",
      img: "/images/spa-blog-2.webp",
      date: "05 Aug 2026",
      tag: "Massage",
    },
    {
      title: "Why Luxury Spa Experience Matters in Gurgaon",
      desc: "Learn why premium spa experiences in Gurgaon hotels and private spas offer deeper relaxation and better results.",
      img: "/images/spa-blog-3.webp",
      date: "29 Jul 2026",
      tag: "Luxury Spa",
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
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <div className="relative">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="h-60 w-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-[#c9b37e] text-black text-sm px-3 py-1 rounded-full">
                  {blog.tag}
                </span>
              </div>

              <div className="p-6">
                <p className="text-sm text-gray-500">{blog.date}</p>
                <h2 className="mt-2 text-xl font-semibold text-gray-900">
                  {blog.title}
                </h2>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {blog.desc}
                </p>

                <a
                  href="/difference-between-sandwich-massage-and-deep-tissue-massage"
                  className="inline-block mt-6 text-[#7b0f2b] font-semibold hover:underline"
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
            href="/contact"
            className="inline-block mt-8 bg-[#c9b37e] text-black px-8 py-3 rounded-full font-semibold hover:bg-white transition"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
