# CodeNotes

A programming notes, resources, and tips website — built with Next.js, deployable for free.

## What's inside

- **Frontend + pages:** Home, Notes, Tips, Resources, About, Contact, Privacy, Terms
- **Backend:** `/api/contact` route (Node.js) — handles the contact form
- **Content:** Markdown files for notes and tips — no database needed
- **SEO:** auto-generated sitemap.xml and robots.txt, proper meta tags per page

## Running it locally

You'll need [Node.js](https://nodejs.org/) (v18 or newer) installed.

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Adding a new note

1. Go to `content/notes/<category>/` (e.g. `content/notes/python/`).
   - To add a brand-new category (e.g. `java`), just create the folder — it shows up automatically.
2. Create a new `.md` file, e.g. `content/notes/python/decorators.md`
3. Add frontmatter + your content:

```md
---
title: "Python Decorators Explained"
description: "One-line summary shown on cards and previews."
order: 2
---

Your note content here, in normal Markdown — headings, code blocks, lists all work.
```

4. If it's a brand-new category, also add it to `CATEGORY_META` in `lib/content.js` so it gets a label and color:

```js
export const CATEGORY_META = {
  python: { label: "Python", color: "amber" },
  mysql: { label: "MySQL", color: "teal" },
  webdev: { label: "Web Dev", color: "coral" },
  java: { label: "Java", color: "dust" },
  // your new category:
  cpp: { label: "C++", color: "amber" },
};
```

That's it — no rebuild step needed while running `npm run dev`; it just appears.

## Adding a new tip

Same idea, but flatter — just drop a file directly in `content/tips/`:

```md
---
title: "Your Tip Title"
description: "One-line summary."
date: "2026-08-01"
---

Your tip content here.
```

## Adding/editing resource links

Edit `data/resources.js` directly — it's a plain JavaScript array, easy to add new categories or links.

## Deploying for free — step by step

### 1. Push the project to GitHub

```bash
cd codenotes
git init
git add .
git commit -m "Initial commit"
```

Then create a new repository on [github.com](https://github.com/new) (don't initialize it with a README), and follow the "push an existing repository" instructions it shows you — something like:

```bash
git remote add origin https://github.com/<your-username>/codenotes.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel (free)

1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account.
2. Click **"Add New Project"**, select your `codenotes` repository.
3. Leave all settings as default (Vercel auto-detects Next.js) and click **Deploy**.
4. In a minute or two, you'll get a live URL like `codenotes-yourname.vercel.app` — your site is now live, for free.

### 3. Update your real domain in the SEO files

Before/after you add a custom domain, update the placeholder URL in two files:
- `app/sitemap.js` — change `BASE_URL`
- `app/robots.js` — change `BASE_URL`
- `app/layout.js` — change `metadataBase` in the `metadata` export

### 4. (Optional) Add a custom domain

- Buy a domain (~$10-12/year) from Namecheap, Porkbun, or similar.
- In your Vercel project settings → Domains, add it and follow the DNS instructions shown.

### 5. Submit to Google

1. Go to [Google Search Console](https://search.google.com/search-console), add your property (domain or URL prefix).
2. Verify ownership (Vercel makes this easy via a DNS TXT record or HTML file).
3. Submit your sitemap: `https://yourdomain.com/sitemap.xml`
4. Use "Request Indexing" on your homepage to speed up first crawl.

### 6. Add Google Analytics (optional, recommended)

Create a free [Google Analytics](https://analytics.google.com) property and add the tracking snippet to `app/layout.js` — happy to help wire this in when you're ready.

## Before applying for AdSense

- Aim for 20-30 published notes/tips with real content (you have 6 to start — see the roadmap we discussed).
- Make sure Privacy Policy, Terms, About, and Contact pages are all live (they already are).
- Apply once you have some organic traffic — even a little. A completely unvisited brand-new site is a common rejection reason.
