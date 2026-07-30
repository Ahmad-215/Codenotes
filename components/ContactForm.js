"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const payload = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="p-4 rounded-lg border border-teal/30 bg-teal/10 text-teal">
        Message sent — thanks for reaching out.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-chalk-dim mb-1.5" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-md bg-board-raised border border-board-line px-3.5 py-2.5 text-chalk focus:border-amber outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-chalk-dim mb-1.5" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-md bg-board-raised border border-board-line px-3.5 py-2.5 text-chalk focus:border-amber outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-chalk-dim mb-1.5" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-md bg-board-raised border border-board-line px-3.5 py-2.5 text-chalk focus:border-amber outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-amber text-board font-semibold px-5 py-2.5 rounded-md hover:bg-amber/90 transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "error" && (
        <p className="text-coral text-sm">Something went wrong — please try again.</p>
      )}
    </form>
  );
}
