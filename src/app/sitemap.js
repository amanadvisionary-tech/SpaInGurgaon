const BASE_URL = "https://www.spaingurgaon.com";

const routes = [
  { path: "", changeFrequency: "daily", priority: 1.0 },
  { path: "/about-us", changeFrequency: "monthly", priority: 0.8 },
  { path: "/massage-service-in-gurgaon", changeFrequency: "weekly", priority: 0.9 },
  { path: "/sandwich-massage-in-gurgaon", changeFrequency: "weekly", priority: 0.9 },
  { path: "/couples-massage-in-gurgaon", changeFrequency: "weekly", priority: 0.9 },
  { path: "/full-body-massage-in-gurgaon", changeFrequency: "weekly", priority: 0.9 },
  { path: "/deep-tissue-massage-in-gurgaon", changeFrequency: "weekly", priority: 0.9 },
  { path: "/full-body-massage", changeFrequency: "weekly", priority: 0.8, lastModified: "2026-08-04" },
  { path: "/b2b-massage-in-gurgaon", changeFrequency: "monthly", priority: 0.8 },
  { path: "/spa-price-in-delhi-ncr", changeFrequency: "monthly", priority: 0.8 },
  { path: "/spa-therapist-jobs-in-gurgaon", changeFrequency: "monthly", priority: 0.6 },
  { path: "/deep-tissue-massage-benefits", changeFrequency: "monthly", priority: 0.7, lastModified: "2026-08-03" },
  { path: "/difference-between-sandwich-massage-and-deep-tissue-massage", changeFrequency: "monthly", priority: 0.7 },
  { path: "/sandwich-massage-vs-swedish-massage", changeFrequency: "monthly", priority: 0.7 },
  { path: "/spa-in-gurgaon", changeFrequency: "monthly", priority: 0.8 },
  { path: "/spa-in-DLF-Phase-1", changeFrequency: "monthly", priority: 0.8 },
  { path: "/spa-in-cyber-city", changeFrequency: "monthly", priority: 0.8 },
  { path: "/spa-in-mg-road", changeFrequency: "monthly", priority: 0.8 },
  { path: "/spa-in-golf-course-road", changeFrequency: "monthly", priority: 0.8 },
  { path: "/spa-in-sohna-road", changeFrequency: "monthly", priority: 0.8 },
  { path: "/spa-in-sector-29", changeFrequency: "monthly", priority: 0.8 },
  { path: "/spa-in-aerocity", changeFrequency: "monthly", priority: 0.8 },
  { path: "/spa-in-connaught-place", changeFrequency: "monthly", priority: 0.8 },
  { path: "/spa-in-lajpat-nagar", changeFrequency: "monthly", priority: 0.8 },
  { path: "/spa-in-mahipalpur", changeFrequency: "monthly", priority: 0.8 },
  { path: "/spa-in-noida", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/contacts", changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap() {
  const buildDate = new Date();
  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: route.lastModified ? new Date(route.lastModified) : buildDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
