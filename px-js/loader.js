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

  const mainImage = document.getElementById('px-img-0129');
  const parentDiv = document.getElementById('0416-rwrapper');
  if (mainImage.complete) {
    applyImageHeight();
  } else {
    mainImage.onload = applyImageHeight;
  }

  function applyImageHeight() {
    const height = mainImage.getBoundingClientRect().height;
    parentDiv.style.height = `${height}px`;
  }
});
