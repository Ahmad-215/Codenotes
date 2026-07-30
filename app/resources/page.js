import resources from "@/data/resources";
import CategoryTab from "@/components/CategoryTab";

export const metadata = {
  title: "Resources",
  description: "Curated free resources for learning programming — courses, docs, and tools.",
};

export default function ResourcesPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-display font-bold text-3xl mb-2">Resources</h1>
      <p className="text-chalk-dim mb-10">
        Only things actually worth your time — no padded "top 50" lists.
      </p>

      <div className="space-y-10">
        {resources.map((group) => (
          <div key={group.category}>
            <div className="mb-4">
              <CategoryTab color={group.color}>{group.category}</CategoryTab>
            </div>
            <ul className="space-y-3">
              {group.items.map((item) => (
                <li
                  key={item.url}
                  className="p-4 rounded-lg border border-board-line bg-board-raised"
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-chalk hover:text-amber transition-colors"
                  >
                    {item.title} ↗
                  </a>
                  <p className="text-sm text-chalk-dim mt-1">{item.note}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
