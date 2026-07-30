const BASE_URL = "https://example.com"; // TODO: replace with your real domain after deploying

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
