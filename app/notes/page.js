import Link from "next/link";
import { getAllCategories, getNotesByCategory, CATEGORY_META } from "@/lib/content";
import CategoryTab from "@/components/CategoryTab";

export const metadata = {
  title: "Notes",
  description: "Programming notes organized by subject — Python, MySQL, Java, and web development.",
};

export default function NotesIndexPage() {
  const categories = getAllCategories();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="font-display font-bold text-3xl mb-2">Notes</h1>
      <p className="text-chalk-dim mb-10">Organized by subject. Pick one to dive in.</p>

      <div className="grid sm:grid-cols-2 gap-6">
        {categories.map((category) => {
          const notes = getNotesByCategory(category);
          const meta = CATEGORY_META[category] ?? { label: category, color: "amber" };
          return (
            <div key={category} className="rounded-lg border border-board-line bg-board-raised p-5">
              <div className="flex items-center justify-between mb-4">
                <CategoryTab color={meta.color}>{meta.label}</CategoryTab>
                <span className="text-xs text-chalk-faint font-mono">{notes.length} notes</span>
              </div>
              <ul className="space-y-2">
                {notes.map((note) => (
                  <li key={note.slug}>
                    <Link
                      href={`/notes/${category}/${note.slug}`}
                      className="text-chalk hover:text-amber transition-colors"
                    >
                      {note.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
