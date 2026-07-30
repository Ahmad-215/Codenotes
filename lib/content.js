import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const NOTES_DIR = path.join(process.cwd(), "content", "notes");
const TIPS_DIR = path.join(process.cwd(), "content", "tips");

export const CATEGORY_META = {
  python: { label: "Python", color: "amber" },
  mysql: { label: "MySQL", color: "teal" },
  webdev: { label: "Web Dev", color: "coral" },
  java: { label: "Java", color: "dust" },
  cpp: { label: "C++", color: "dust" },
};  

function readMarkdownDir(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
}

export function getAllCategories() {
  if (!fs.existsSync(NOTES_DIR)) return [];
  return fs
    .readdirSync(NOTES_DIR)
    .filter((entry) => fs.statSync(path.join(NOTES_DIR, entry)).isDirectory());
}

export function getNotesByCategory(category) {
  const dir = path.join(NOTES_DIR, category);
  const files = readMarkdownDir(dir);
  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const source = fs.readFileSync(path.join(dir, file), "utf8");
      const { data } = matter(source);
      return { slug, category, ...data };
    })
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getAllNotes() {
  return getAllCategories().flatMap((cat) => getNotesByCategory(cat));
}

export function getNote(category, slug) {
  const filePath = path.join(NOTES_DIR, category, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  const html = marked.parse(content);
  return { slug, category, html, ...data };
}

export function getAllTips() {
  const files = readMarkdownDir(TIPS_DIR);
  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const source = fs.readFileSync(path.join(TIPS_DIR, file), "utf8");
      const { data } = matter(source);
      return { slug, ...data };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getTip(slug) {
  const filePath = path.join(TIPS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  const html = marked.parse(content);
  return { slug, html, ...data };
}
