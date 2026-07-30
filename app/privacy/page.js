export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 prose prose-invert prose-notes">
      <h1>Privacy Policy</h1>
      <p>Last updated: July 2026</p>

      <p>
        This Privacy Policy explains how CodeNotes ("we", "this site") handles
        information when you visit.
      </p>

      <h2>Information we collect</h2>
      <p>
        If you use the contact form, we collect the name, email address, and
        message you provide, solely to respond to your inquiry. We do not sell
        or share this information with third parties.
      </p>

      <h2>Cookies and advertising</h2>
      <p>
        This site may display advertisements served by Google AdSense. Google
        and its partners may use cookies to serve ads based on your prior
        visits to this or other websites. You can opt out of personalized
        advertising by visiting{" "}
        <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
          Google Ads Settings
        </a>
        .
      </p>

      <h2>Analytics</h2>
      <p>
        We may use analytics tools (such as Google Analytics) to understand
        how visitors use this site. These tools collect anonymized usage data
        such as pages visited and time spent on the site.
      </p>

      <h2>Your choices</h2>
      <p>
        You can disable cookies through your browser settings at any time.
        Doing so may affect some site functionality.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy can be sent through the{" "}
        <a href="/contact">contact page</a>.
      </p>
    </div>
  );
}
