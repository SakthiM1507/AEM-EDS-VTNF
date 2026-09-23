/* eslint-disable indent */
import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);
  // decorate social icons
  const icons = block.querySelectorAll('.icon-facebook, .icon-twitter, .icon-instagram, .icon-linkedin');

  const socialIconsContainer = document.createElement('div');
  socialIconsContainer.className = 'social-icons';

  icons.forEach((icon) => {
    socialIconsContainer.appendChild(icon);
  });

  block.appendChild(socialIconsContainer);

  const customFooter = block.querySelector('.custom-footer');
  const socialIcons = block.querySelector('.social-icons');

  if (customFooter && socialIcons) {
    customFooter.parentElement.appendChild(socialIcons);
  }

  const footerItems = [...block.children];

footerItems.forEach((item) => {
  item.classList.add('customized-footer');

  const footerContent = item.querySelector('div');
  footerContent?.classList.add('custom-footer-content');

  const footerGridExplore = footerContent?.querySelector('div:nth-child(2)');
  footerGridExplore?.classList.add('custom-footer-explore');

  const footerGridInformation = footerContent?.querySelector('div:nth-child(3)');
  footerGridInformation?.classList.add('custom-footer-information');
});
}
