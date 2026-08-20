import { createOptimizedPicture } from '../../scripts/aem.js';


//  export default function decorate(block) {
//     const firstChild = block.children[0];
//     const secondChild = block.children[1];
//     const thirdChild = block.children[2];
//     const fourthChild = block.children[3];

//     firstChild.classList.add('custom-card');
//     secondChild.classList.add('custom-card');
//     thirdChild.classList.add('custom-card');
//     fourthChild.classList.add('custom-card');

//     const card1 = block.children[0].children[0];
//     const card2 = block.children[1].children[0];
//     const card3 = block.children[2].children[0];
//     const card4 = block.children[3].children[0];


//     card1.classList.add('custom-card--container');
//     card2.classList.add('custom-card--container');
//     card3.classList.add('custom-card--container');
//     card4.classList.add('custom-card--container');
//    // console.log(firstChild);
//    // const title = firstChild.querySelector('h1');
//    // console.log(title);
//    // title.classList.add('custom-card-number');
//     const title = block.querySelectorAll('h1');
//     title.forEach((title) => {
//     title.classList.add('custom-card-number');
//     });

//     const subtitle = block.querySelectorAll('h2');
//     subtitle.forEach((subtitle) => {
//     subtitle.classList.add('custom-card-heading');
//     });

//     const picture = block.querySelectorAll('picture');
//     // console.log(picture);
//     picture.forEach((pic) => {
//     pic.classList.add('custom-card-picture');
//     });

//     const image = block.querySelectorAll('img');
//     console.log(image);
//     image.forEach((img) => {
//     img.classList.add('custom-card-picture--image');
//     });

//     const description = block.querySelectorAll('p');
//     console.log(description);
//     description.forEach((description) => {
//     description.classList.add('custom-card-description');
//     });
 
   
//  }
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

 