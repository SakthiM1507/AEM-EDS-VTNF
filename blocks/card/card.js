import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const cards = [...block.children];

  cards.forEach((card) => {
    card?.classList.add('custom-card');

    const cardContent = card.querySelector('> div');
    cardContent?.classList.add('custom-card_content');

    const cardnumber = card.querySelector('h1');
    cardnumber?.classList.add('custom-card_number');

    const cardheading = card.querySelector('h2');
    cardheading?.classList.add('custom-card_heading');

    const cardpicture = card.querySelector('p:has(img)');
    cardpicture?.classList.add('custom-card_picture');

    const cardimage = card.querySelector('img');
    cardimage?.classList.add('custom-card_image');

    const carddescription = card.querySelector('p:not(:has(img))');
    carddescription?.classList.add('custom-card_description');
  });
}
