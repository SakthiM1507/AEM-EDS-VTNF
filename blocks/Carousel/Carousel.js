/* eslint-disable indent */
/* eslint-disable linebreak-style */
export default function decorate(block) {
  const items = [...block.children];
  const cards = items;

  const viewport = document.createElement('div');
  viewport.className = 'carousel-viewport';

  const track = document.createElement('div');
  track.className = 'carousel-track';

  // 3 cards = 1 slide
  for (let i = 0; i < cards.length; i += 3) {
    const slide = document.createElement('div');
    slide.className = 'carousel-page';

    cards.slice(i, i + 3).forEach((card) => {
      card.classList.add('carousel-slide');
      slide.appendChild(card);

      const image = card.querySelector('div:first-child');
      image.classList.add('carousel-image');

      const content = card.querySelector('div:nth-child(2)');
      content.classList.add('carousel-content');
    });

    track.appendChild(slide);
  }

  viewport.appendChild(track);
  block.appendChild(viewport);

  const slides = [...track.children];

  const indicators = document.createElement('div');
  indicators.className = 'carousel-indicators';

  slides.forEach((slide, index) => {
    const button = document.createElement('button');

    button.className = 'carousel-indicator';
    button.type = 'button';

    button.addEventListener('click', () => {
      track.style.transform = `translateX(-${index * 100}%)`;

      document
        .querySelectorAll('.carousel-indicator')
        .forEach((item, i) => {
          item.classList.toggle('active', i === index);
        });
    });

    indicators.appendChild(button);
  });

  block.appendChild(indicators);

  // First slide active
  indicators.children[0]?.classList.add('active');

  const profiles = block.querySelectorAll('.carousel-content');

profiles.forEach((profile) => {
  const first = profile.querySelector('p:first-child');
  const second = profile.querySelector('p:last-child');

  const picture = first.querySelector('picture');
  const name = first.textContent.replace(/\s+/g, ' ').trim();

  first.textContent = '';
  first.appendChild(picture);

  const text = document.createElement('div');
  text.className = 'profile-text';

  const nameElement = document.createElement('span');
  nameElement.textContent = name;

  text.append(nameElement, second);

  profile.appendChild(text);
});
}
