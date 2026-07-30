import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllCategories,
  getNotesByCategory,
  getNote,
  CATEGORY_META,
} from "@/lib/content";
import CategoryTab from "@/components/CategoryTab";

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.flatMap((category) =>
    getNotesByCategory(category).map((note) => ({
      category,
      slug: note.slug,
    }))
  );
}

export async function generateMetadata({ params }) {
  const note = getNote(params.category, params.slug);
  if (!note) return {};
  return {
    title: note.title,
    description: note.description,
  };
}

export default function NotePage({ params }) {
  const note = getNote(params.category, params.slug);
  if (!note) notFound();

  const meta = CATEGORY_META[params.category] ?? { label: params.category, color: "amber" };

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/notes" className="text-sm text-teal hover:underline">
        ← All notes
      </Link>
      <div className="mt-6 mb-3">
        <CategoryTab color={meta.color}>{meta.label}</CategoryTab>
      </div>
      <h1 className="font-display font-bold text-3xl sm:text-4xl">{note.title}</h1>
      {note.description && (
        <p className="mt-3 text-chalk-dim text-lg">{note.description}</p>
      )}
      <div
        className="prose prose-invert prose-notes max-w-none mt-10"
        dangerouslySetInnerHTML={{ __html: note.html }}
      />
    </article>
  );
}
