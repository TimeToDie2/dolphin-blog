const state = {
  posts: [],
  activeTag: 'all'
};

const tagContainer = document.getElementById('tagFilters');
const postList = document.getElementById('postList');
const yearEl = document.getElementById('year');

function setYear() {
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function initTheme() {
  // Light-only mode.
  document.body.dataset.theme = 'light';
  try { localStorage.removeItem('theme'); } catch {}
}

function renderTags() {
  if (!tagContainer) return;
  tagContainer.innerHTML = '';
  const tags = new Set();
  state.posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  const ordered = ['all', ...Array.from(tags).sort()];

  ordered.forEach((tag) => {
    const button = document.createElement('button');
    button.className = 'tag-button';
    button.textContent = tag === 'all' ? 'All entries' : `#${tag}`;
    button.dataset.tag = tag;
    if (state.activeTag === tag) {
      button.classList.add('active');
    }
    button.addEventListener('click', () => {
      state.activeTag = tag;
      renderTags();
      renderPosts();
    });
    tagContainer.appendChild(button);
  });
}

function createPostCard(post) {
  const card = document.createElement('article');
  card.className = 'post-card';
  if (post.accent) {
    card.style.setProperty('--card-accent', post.accent);
  }
  const template = `
    <div class="post-meta">
      <span>${new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
      <span>${post.readingTime || ''}</span>
    </div>
    <h3><a href="share/${post.slug}.html">${post.title}</a></h3>
    <p>${post.excerpt}</p>
    <div class="post-tags">
      ${post.tags.map((tag) => `<span>#${tag}</span>`).join('')}
    </div>
  `;
  card.innerHTML = template;
  return card;
}

function renderPosts() {
  if (!postList) return;
  postList.innerHTML = '';
  const filtered = state.activeTag === 'all'
    ? state.posts
    : state.posts.filter((post) => post.tags.includes(state.activeTag));

  if (!filtered.length) {
    const empty = document.createElement('p');
    empty.textContent = 'No posts yet for this tag—check back soon.';
    postList.appendChild(empty);
    return;
  }

  filtered.forEach((post) => {
    postList.appendChild(createPostCard(post));
  });
}

async function hydratePosts() {
  try {
    const response = await fetch('posts/index.json');
    if (!response.ok) {
      throw new Error('Unable to load posts');
    }
    state.posts = await response.json();
    renderTags();
    renderPosts();
  } catch (error) {
    postList.innerHTML = `<p>Unable to load posts right now. ${error.message}</p>`;
  }
}

setYear();
initTheme();
hydratePosts();
