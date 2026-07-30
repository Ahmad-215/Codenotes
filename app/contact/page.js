import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description: "Get in touch with CodeNotes.",
};

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <h1 className="font-display font-bold text-3xl mb-2">Contact</h1>
      <p className="text-chalk-dim mb-8">
        Found a mistake in a note, or have a topic you'd like covered? Send it over.
      </p>
      <ContactForm />
    </div>
  );
}
