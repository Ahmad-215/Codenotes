export const metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 prose prose-invert prose-notes">
      <h1>Terms of Service</h1>
      <p>Last updated: July 2026</p>

      <h2>Use of content</h2>
      <p>
        Notes, tips, and resource links on CodeNotes are provided for
        educational purposes. You're welcome to reference them, but please
        don't republish full articles elsewhere without permission — a link
        back is always appreciated instead.
      </p>

      <h2>No warranty</h2>
      <p>
        Content is provided "as is." While every effort is made to keep notes
        accurate, this site does not guarantee that all information is
        error-free or complete. Always verify against official documentation
        for anything critical.
      </p>

      <h2>External links</h2>
      <p>
        This site links to third-party resources and courses. We are not
        responsible for the content or availability of external sites.
      </p>

      <h2>Changes</h2>
      <p>These terms may be updated occasionally as the site grows.</p>
    </div>
  );
}
