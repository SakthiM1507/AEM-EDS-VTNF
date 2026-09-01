/* eslint-disable linebreak-style */
export default function decorate(block) {
  const banners = [...block.children];

  banners.forEach((item) => {
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
