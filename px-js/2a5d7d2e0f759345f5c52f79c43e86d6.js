// Call your function on loader.js

// Load Nav
async function loadNav() {
  try {
    const isNav = await fetch('px-comp/navigation.html');

    if (!isNav.ok) {
      throw new Error(`Failed to load content: ${isNav.status} ${isNav.statusText}`);
    }

    const html = await isNav.text();
    const container = document.getElementById('px-header');

    if (!container) {
      throw new Error('Target container not found');
    }

    container.innerHTML = html;
  } catch (error) {
    console.error('loadHome error:', error);

    const fallback = document.getElementById('px-header');
    if (fallback) fallback.innerHTML = `<p class="error">Failed to load home content. Please try again later.</p>`;
  }
}

// Load Footer
async function loadFooter() {
  try {
    const isFooter = await fetch('px-comp/footer.html');

    if (!isFooter.ok) {
      throw new Error(`Failed to load content: ${isFooter.status} ${isFooter.statusText}`);
    }

    const html = await isFooter.text();
    const container = document.getElementById('px-footer');

    if (!container) {
      throw new Error('Target container not found');
    }

    container.innerHTML = html;
  } catch (error) {
    console.error('loadHome error:', error);

    const fallback = document.getElementById('px-footer');
    if (fallback) fallback.innerHTML = `<p class="error">Failed to load home content. Please try again later.</p>`;
  }
}

// Load Home
async function loadHome() {
  try {
    const isHome = await fetch('home/index.html');

    if (!isHome.ok) {
      throw new Error(`Failed to load content: ${isHome.status} ${isHome.statusText}`);
    }

    const html = await isHome.text();
    const container = document.getElementById('px-main');

    if (!container) {
      throw new Error('Target container not found');
    }

    container.innerHTML = html;
  } catch (error) {
    console.error('loadHome error:', error);

    const fallback = document.getElementById('px-main');
    if (fallback) fallback.innerHTML = `<p class="error">Failed to load home content. Please try again later.</p>`;
  }
}
