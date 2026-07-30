import Link from "next/link";
import { getAllTips } from "@/lib/content";

export const metadata = {
  title: "Tips",
  description: "Short, practical tips for programming students.",
};

export default function TipsIndexPage() {
  const tips = getAllTips();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-display font-bold text-3xl mb-2">Tips</h1>
      <p className="text-chalk-dim mb-10">
        Short, practical posts — mistakes I made, tools that helped, things I wish I knew earlier.
      </p>
      <div className="space-y-1">
        {tips.map((tip) => (
          <Link
            key={tip.slug}
            href={`/tips/${tip.slug}`}
            className="flex items-center justify-between gap-4 p-4 rounded-lg hover:bg-board-raised transition-colors border border-transparent hover:border-board-line"
          >
            <div>
              <h2 className="font-medium text-chalk">{tip.title}</h2>
              <p className="text-sm text-chalk-faint mt-1">{tip.description}</p>
            </div>
            <span className="font-mono text-xs text-chalk-faint whitespace-nowrap">{tip.date}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
