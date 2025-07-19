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

  // FOR ACCORDION
  const accordionTriggers = document.querySelectorAll('.px-accordion-trigger');

  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.px-accordion');
      const content = item.querySelector('.px-accordion__content-block');

      document.querySelectorAll('.px-accordion').forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove('is_expand');
          const otherContent = otherItem.querySelector('.px-accordion__content-block');
          otherContent.style.maxHeight = null;
          otherContent.style.paddingTop = '0';
          otherContent.style.paddingBottom = '0';
        }
      });

      item.classList.toggle('is_expand');

      if (item.classList.contains('is_expand')) {
        content.style.paddingBottom = '24px';
      } else {
        content.style.paddingBottom = '0';
      }
    });
  });
});
