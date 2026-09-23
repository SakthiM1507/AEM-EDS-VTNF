/* eslint-disable indent */
/* eslint-disable linebreak-style */

/**
 * decorates the default teaser: one large banner with copy beside an image
 * @param {Element} block The block element
 */
function decorateBanner(block) {
  [...block.children].forEach((item) => {
    item.classList.add('custom-banner');

    const bannerContent = item.querySelector(':scope > div:first-child');
    bannerContent?.classList.add('custom-banner_content');

    const bannerPreTitle = item.querySelector('h2');
    bannerPreTitle?.classList.add('custom-banner_pre-title');

    const bannerActionContainer = item.querySelector('p:has(a)');
    bannerActionContainer?.classList.add('custom-banner__action-container');

    const bannerActionLink = item.querySelector('a');
    bannerActionLink?.classList.add('custom-banner_action-link');

    const image = item.querySelector(':scope > div:nth-child(2)');
    image?.classList.add('custom-banner_image');

    const imageElement = item.querySelector('img');
    imageElement?.classList.add('custom-banner_image-element');
  });
}

/**
 * decorates the features variant: a grid of icon + title + copy
 * @param {Element} block The block element
 */
function decorateFeatures(block) {
  [...block.children].forEach((item) => {
    item.classList.add('custom-feature');

    const cells = [...item.children];
    const media = cells.find((cell) => cell.querySelector('picture, img'));
    const description = cells.find((cell) => cell !== media);

    media?.classList.add('custom-feature_media');
    media?.querySelector('img')?.classList.add('custom-feature_icon');

    if (!description) return;
    description.classList.add('custom-feature_description');

    [...description.querySelectorAll(':scope > p')].forEach((paragraph, i) => {
      paragraph.classList.add(i === 0 ? 'custom-feature_name' : 'custom-feature_text');
      if (paragraph.querySelector('a')) {
      paragraph.classList.remove('custom-feature_name');
      paragraph.classList.add('custom-feature_buttons');
    }
    });
  });
}

/**
 * loads and decorates the block
 * @param {Element} block The block element
 */
export default function decorate(block) {
  if (block.classList.contains('features')) {
    decorateFeatures(block);
    return;
  }
  decorateBanner(block);
}
