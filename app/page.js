import Link from "next/link";
import { getAllNotes, getAllTips, CATEGORY_META } from "@/lib/content";
import CategoryTab from "@/components/CategoryTab";

export default function HomePage() {
  const notes = getAllNotes().slice(0, 4);
  const tips = getAllTips().slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Hero */}
      <section className="pt-20 pb-16 border-b border-board-line">
        <p className="font-mono text-sm text-teal mb-4">// notes from a CS student, in progress</p>
        <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight max-w-2xl">
          Programming notes that read like{" "}
          <span className="chalk-underline">someone actually learning it</span>.
        </h1>
        <p className="mt-6 text-chalk-dim max-w-xl text-lg">
          No filler, no recycled tutorials. Just clear notes on Python, MySQL, Java,
          and web development — plus the resources and tips that actually helped.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/notes"
            className="bg-amber text-board font-semibold px-5 py-2.5 rounded-md hover:bg-amber/90 transition-colors"
          >
            Browse the notes
          </Link>
          <Link
            href="/resources"
            className="border border-board-line px-5 py-2.5 rounded-md text-chalk hover:bg-board-raised transition-colors"
          >
            See resources
          </Link>
        </div>
      </section>

      {/* Latest notes */}
      <section className="py-16 border-b border-board-line">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-display font-bold text-2xl">Latest notes</h2>
          <Link href="/notes" className="text-sm text-teal hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {notes.map((note) => (
            <Link
              key={`${note.category}-${note.slug}`}
              href={`/notes/${note.category}/${note.slug}`}
              className="block p-5 rounded-lg border border-board-line bg-board-raised hover:border-amber/40 transition-colors"
            >
              <CategoryTab color={CATEGORY_META[note.category]?.color}>
                {CATEGORY_META[note.category]?.label ?? note.category}
              </CategoryTab>
              <h3 className="mt-3 font-display font-semibold text-lg">{note.title}</h3>
              <p className="mt-1.5 text-sm text-chalk-dim">{note.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest tips */}
      <section className="py-16">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-display font-bold text-2xl">Recent tips</h2>
          <Link href="/tips" className="text-sm text-teal hover:underline">
            View all →
          </Link>
        </div>
        <div className="space-y-4">
          {tips.map((tip) => (
            <Link
              key={tip.slug}
              href={`/tips/${tip.slug}`}
              className="flex items-center justify-between p-4 rounded-lg border border-board-line hover:bg-board-raised transition-colors"
            >
              <div>
                <h3 className="font-medium">{tip.title}</h3>
                <p className="text-sm text-chalk-faint mt-1">{tip.description}</p>
              </div>
              <span className="font-mono text-xs text-chalk-faint whitespace-nowrap ml-4">
                {tip.date}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
