/* eslint-disable no-undef */
/* eslint-disable indent */

/**
 * Decorates the explore-cards variant
 * @param {Element} block
 */
function decorateExploreCards(block) {
  [...block.children].forEach((item) => {
    item.classList.add('custom-courses');

    const courseCard = item.querySelector(':scope > div');
    courseCard?.classList.add('custom-courses_card');

    const courseTitle = courseCard?.querySelector(':scope > p:first-of-type');
    courseTitle?.classList.add('custom-courses_title');

    const coursePreTitle = item.querySelector('h4');
    coursePreTitle?.classList.add('custom-courses_pre-title');

    const courseImages = item.querySelectorAll('p:has(img)');

    courseImages.forEach((image) => {
      image.classList.add('custom-courses_image');

      const imageElement = image.querySelector('img');
      imageElement?.classList.add('custom-courses_image-element');
    });

    const courseActionContainer = item.querySelector('p:has(a)');
    courseActionContainer?.classList.add(
      'custom-courses__action-container',
    );

    const courseActionLink = item.querySelector('a');
    courseActionLink?.classList.add('custom-courses_action-link');

    const courseContent = courseCard?.querySelectorAll(
      '.custom-courses_image + p',
    );

    courseContent?.forEach((content) => {
      content.classList.add('custom-courses-content');
    });
  });
}

/**
 * Decorates the events variant
 * @param {Element} block
 */
function decorateEvents(block) {
  [...block.children].forEach((item) => {
    item.classList.add('custom-events');

    const eventCard = item.querySelector(':scope > div');
    eventCard?.classList.add('custom-events_card');

    const eventTitle = eventCard?.querySelector(':scope > p:first-of-type');
    eventTitle?.classList.add('custom-events_title');

    const eventPreTitle = item.querySelector('h4');
    eventPreTitle?.classList.add('custom-events_pre-title');

    const eventImages = item.querySelectorAll('p:has(img)');

    eventImages.forEach((image) => {
      image.classList.add('custom-events_image');

      const imageElement = image.querySelector('img');
      imageElement?.classList.add('custom-events_image-element');
    });

    const eventActionContainer = item.querySelector('p:has(a)');
    eventActionContainer?.classList.add(
      'custom-events__action-container',
    );

    const eventActionLink = item.querySelector('a');
    eventActionLink?.classList.add('custom-events_action-link');

    const eventContent = eventCard?.querySelectorAll(
      '.custom-events_image + p',
    );

    eventContent?.forEach((content) => {
      content.classList.add('custom-events-content');
    });
  });
}

/**
 * Loads and decorates the block
 * @param {Element} block
 */
export default function decorate(block) {
  if (block.classList.contains('events')) {
    decorateEvents(block);
    return;
  }

  decorateExploreCards(block);
}
