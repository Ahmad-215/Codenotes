import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata = {
  metadataBase: new URL("https://codenotes-rho.vercel.app"),
  verification: {
    google: "qM4-s9GBXlXMhESalxo8TEVIQxFQIuRiQlMi2nknyYs",
  },
  title: {
    default: "CodeNotes — Programming Notes, Resources & Tips",
    template: "%s · CodeNotes",
  },
  description:
    "Clear programming notes, curated learning resources, and practical tips for students learning Python, MySQL, Java, and web development.",
  openGraph: {
    title: "CodeNotes — Programming Notes, Resources & Tips",
    description:
      "Clear programming notes, curated learning resources, and practical tips for students learning to code.",
    type: "website",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-board font-body text-chalk antialiased flex flex-col">
        <GoogleAnalytics measurementId="G-FZ8VT68CKC" />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}