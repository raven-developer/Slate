const isPage = document.body.getAttribute('data-page');

document.addEventListener('DOMContentLoaded', async function () {
  try {
    await loadNav();
    if (isPage === 'home') {
      await loadHome();
    }
    await loadFooter();
  } catch (error) {
    console.error('Error loading components:', error);
  }
});
