export const metadata = {
  title: "About",
  description: "Why CodeNotes exists and who writes it.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="font-display font-bold text-3xl mb-6">About CodeNotes</h1>
      <div className="space-y-4 text-chalk-dim leading-relaxed">
        <p>
          CodeNotes is written by a Software Engineering student, currently a few
          semesters into the degree, learning Python, MySQL, Java, and full-stack
          web development.
        </p>
        <p>
          Everything published here started as personal study notes. Instead of
          letting them sit in a notebook, they're cleaned up and shared here —
          partly to reinforce the learning, and partly because the explanation
          that would have helped past-me might help someone else too.
        </p>
        <p>
          There's no claim to being an expert. Just someone documenting the climb,
          one topic at a time, and linking to the free resources that actually helped
          along the way.
        </p>
      </div>
    </div>
  );
}
