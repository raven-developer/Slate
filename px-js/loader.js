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

  const mainImages = document.querySelectorAll('.px-image-back');
  const parentDivs = document.querySelectorAll('.px-image-block--stacked');

  mainImages.forEach((img, index) => {
    const parent = parentDivs[index];
    if (!img || !parent) return;

    if (img.complete) {
      applyImageSize(img, parent);
    } else {
      img.onload = () => applyImageSize(img, parent);
      img.onload = () => applyImageSize(img, parent);
    }
  });

  function applyImageSize(image, parent) {
    const { width, height } = image.getBoundingClientRect();
    parent.style.height = `${height}px`;
    parent.style.width = `${width}px`;
  }
});
