/* eslint-disable linebreak-style */
export default function decorate(block) {
  const courses = [...block.children];

  courses.forEach((item) => {
    item.classList.add('custom-courses');

    const coursecard = item.querySelector(':scope > div');
    coursecard?.classList.add('custom-courses_card');

    // const courseTitle = item.querySelector('p:first-child');
    // courseTitle?.classList.add('custom-courses_title');

    const courseTitle = coursecard?.querySelector(':scope > p:first-of-type');
    courseTitle?.classList.add('custom-courses_title');

    const coursePreTitle = item.querySelector('h4');
    coursePreTitle?.classList.add('custom-courses_pre-title');

    const courseImage = item.querySelectorAll('p:has(img)');
    courseImage?.forEach((image) => {
      image.classList.add('custom-courses_image');

      const courseImageElement = image.querySelector('img');
      courseImageElement?.classList.add('custom-courses_image-element');
    });

    // const courseDescription = item.querySelectorAll('p:not(:has(img))');
    // courseDescription?.forEach((description) => {
    //   description.classList.add('custom-courses_description');
    // });

    const courseActionContainer = item.querySelector('p:has(a)');
    courseActionContainer?.classList.add('custom-courses__action-container');

    const courseActionLink = item.querySelector('a');
    courseActionLink?.classList.add('custom-courses_action-link');

    const courseContent = coursecard?.querySelectorAll('.custom-courses_image + p');

    courseContent?.forEach((content) => {
      content.classList.add('custom-courses-content');
    });
  });
}
