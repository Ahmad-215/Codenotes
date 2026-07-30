import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-board-line mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <p className="text-sm text-chalk-faint font-mono">
          © {new Date().getFullYear()} CodeNotes — notes from an ongoing CS degree.
        </p>
        <div className="flex gap-5 text-sm text-chalk-dim">
          <Link href="/privacy" className="hover:text-amber">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-amber">
            Terms
          </Link>
          <Link href="/contact" className="hover:text-amber">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
