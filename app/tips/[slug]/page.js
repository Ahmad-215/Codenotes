import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllTips, getTip } from "@/lib/content";

export async function generateStaticParams() {
  return getAllTips().map((tip) => ({ slug: tip.slug }));
}

export async function generateMetadata({ params }) {
  const tip = getTip(params.slug);
  if (!tip) return {};
  return { title: tip.title, description: tip.description };
}

export default function TipPage({ params }) {
  const tip = getTip(params.slug);
  if (!tip) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/tips" className="text-sm text-teal hover:underline">
        ← All tips
      </Link>
      <p className="font-mono text-xs text-chalk-faint mt-6">{tip.date}</p>
      <h1 className="font-display font-bold text-3xl sm:text-4xl mt-2">{tip.title}</h1>
      <div
        className="prose prose-invert prose-notes max-w-none mt-10"
        dangerouslySetInnerHTML={{ __html: tip.html }}
      />
    </article>
  );
}
