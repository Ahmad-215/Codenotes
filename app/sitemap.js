import { getAllNotes, getAllTips } from "@/lib/content";

const BASE_URL = "https://codenotes-rho.vercel.app"; // TODO: replace with your real domain after deploying

export default function sitemap() {
  const staticRoutes = ["", "/notes", "/tips", "/resources", "/about", "/contact", "/privacy", "/terms"].map(
    (route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
    })
  );

  const noteRoutes = getAllNotes().map((note) => ({
    url: `${BASE_URL}/notes/${note.category}/${note.slug}`,
    lastModified: new Date(),
  }));

  const tipRoutes = getAllTips().map((tip) => ({
    url: `${BASE_URL}/tips/${tip.slug}`,
    lastModified: new Date(tip.date),
  }));

  return [...staticRoutes, ...noteRoutes, ...tipRoutes];
}
