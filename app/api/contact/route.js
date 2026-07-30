import { NextResponse } from "next/server";

// Very basic in-memory rate limiting per server instance.
// Fine for a small student project; swap for a real store (e.g. Upstash Redis)
// if traffic grows.
const recentSubmissions = new Map();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (recentSubmissions.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  recentSubmissions.set(ip, timestamps);
  return timestamps.length > MAX_PER_WINDOW;
}

export async function POST(request) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Try again shortly." }, { status: 429 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = body ?? {};

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  // NOTE for deployment: this currently just logs the message server-side.
  // To actually receive these emails, wire up a free email API here, e.g.:
  //   - Resend (resend.com) — generous free tier, a few lines of code
  //   - Or forward to a Google Form / Formspree endpoint instead of this route
  console.log("New contact form submission:", { name, email, message });

  return NextResponse.json({ ok: true }, { status: 200 });
}
