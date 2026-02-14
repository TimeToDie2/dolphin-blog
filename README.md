# Dolphin Notes (GitHub Pages blog)

A zero-build static blog you can host on GitHub Pages.

## Features

- Homepage with bio + post list
- Tag filtering
- Post pages render Markdown in the browser (via CDN)
- Light/dark theme toggle (persisted)
- RSS feed (`rss.xml`) stub

## Local preview

```bash
cd /home/maxaitel/projects-openclaw/dolphin-blog
python3 -m http.server 4174
```

Open: http://127.0.0.1:4174

## Add a new post

1. Create a markdown file: `posts/<slug>.md`
2. Add an entry to `posts/index.json`:

```json
{
  "slug": "my-post",
  "title": "My Post",
  "date": "2026-02-14",
  "excerpt": "One-line summary…",
  "tags": ["tag1", "tag2"],
  "readingTime": "5 min",
  "accent": "#55d6ff"
}
```

## Deploy to GitHub Pages

1. Create a repo (e.g. `dolphin-notes`) on GitHub.
2. Push this folder to the repo.
3. In the repo settings: **Pages → Build and deployment → Source: Deploy from a branch**.
4. Select branch `main` (or `master`) and `/ (root)`.

### RSS: set the real URL

Update `rss.xml` and replace `https://example.com/` with your real GitHub Pages URL.

Example:
- `https://<username>.github.io/<repo>/`

Then update the item links/guid similarly.
