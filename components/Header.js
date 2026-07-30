import Link from "next/link";

const tabs = [
  { href: "/notes", label: "Notes" },
  { href: "/tips", label: "Tips" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="border-b border-board-line">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-display font-bold text-lg tracking-tight text-chalk">
          Code<span className="text-amber">Notes</span>
        </Link>
        <nav className="hidden sm:flex items-end gap-1">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className="relative -mb-px px-4 py-2 rounded-t-md border border-b-0 border-board-line
                         bg-board-raised text-chalk-dim text-sm font-medium
                         hover:text-chalk hover:bg-board-line transition-colors"
            >
              {tab.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/notes"
          className="sm:hidden text-sm font-medium text-amber border border-amber/40 rounded px-3 py-1.5"
        >
          Browse
        </Link>
      </div>
    </header>
  );
}
