const titleEl = document.getElementById('postTitle');
const metaEl = document.getElementById('postMeta');
const contentEl = document.getElementById('postContent');
const tagsEl = document.getElementById('postTags');

function initTheme() {
  // Light-only mode.
  document.body.dataset.theme = 'light';
  try { localStorage.removeItem('theme'); } catch {}
}

function getSlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get('slug');
}

async function loadIndex() {
  const res = await fetch('posts/index.json');
  if (!res.ok) throw new Error('Unable to load post index');
  return res.json();
}

async function loadMarkdown(slug) {
  const res = await fetch(`posts/${slug}.md`);
  if (!res.ok) throw new Error('Unable to load markdown');
  return res.text();
}

function renderMeta(post) {
  const date = new Date(post.date);
  const prettyDate = date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  metaEl.innerHTML = `
    <span>${prettyDate}</span>
    <span>${post.readingTime || ''}</span>
  `;

  tagsEl.innerHTML = post.tags.map((t) => `<span>#${escapeHtml(t)}</span>`).join(' ');
}

function renderMarkdown(md) {
  marked.setOptions({
    gfm: true,
    breaks: false,
  });

  const html = marked.parse(md);
  const safe = window.DOMPurify ? window.DOMPurify.sanitize(html) : html;
  contentEl.innerHTML = safe;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function main() {
  initTheme();

  const slug = getSlug();
  if (!slug) {
    titleEl.textContent = 'Missing ?slug=';
    contentEl.innerHTML = '<p>Please open a post link from the homepage.</p>';
    return;
  }

  try {
    const index = await loadIndex();
    const post = index.find((p) => p.slug === slug);
    if (!post) throw new Error('Post not found in index.json');

    titleEl.textContent = post.title;
    document.title = `Dolphin Notes — ${post.title}`;
    renderMeta(post);

    const md = await loadMarkdown(slug);
    renderMarkdown(md);
  } catch (err) {
    titleEl.textContent = 'Unable to load post';
    contentEl.innerHTML = `<p>${escapeHtml(err.message)}</p>`;
  }
}

main();
