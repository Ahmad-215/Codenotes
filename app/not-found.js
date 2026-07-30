import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-6 py-32 text-center">
      <p className="font-mono text-teal text-sm mb-3">// 404</p>
      <h1 className="font-display font-bold text-3xl mb-4">This page hasn't been written yet.</h1>
      <p className="text-chalk-dim mb-8">
        The note or page you're looking for doesn't exist — maybe it moved, or maybe it's still on the list.
      </p>
      <Link href="/" className="text-amber hover:underline">
        ← Back to home
      </Link>
    </div>
  );
}
