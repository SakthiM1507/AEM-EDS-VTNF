// export default function decorate(block) 
// {
//     const teaser = block.children[0];
//     console.log(teaser);
//     teaser.classList.add('custom-teaser');
//     const firstChild = block.children[0].children[0];
//     console.log(firstChild);
//     firstChild.classList.add('custom-teaser--image');
//     const image = firstChild.querySelector('img');
//     console.log(image);
//     image.classList.add('custom-teaser--image--img');
//     const secondChild = block.children[0].children[1];
//     console.log(secondChild);
//     secondChild.classList.add('custom-teaser--content');
//     const title = secondChild.querySelector('h3');
//     console.log(title);
//     title.classList.add('custom-teaser--content--title');
//     const description = secondChild.querySelector('ul');
//     console.log(description);
//     description.classList.add('custom-teaser--content--description');
//     const button = secondChild.querySelector('p');
//     console.log(button);
//     button.classList.add('custom-teaser--content--button');
//     const link = secondChild.querySelector('a');
//     console.log(link);
//     link.classList.add('custom-teaser--content--link');
    
// }

export default function decorate(block) {
  const teaser = block.children[0];
  teaser.classList.add('custom-teaser');

  const image = teaser.children[0];
  image.classList.add('custom-teaser_image');

  const img = image.querySelector('img');
  img.classList.add('custom-teaser_image--img');

  const content = teaser.children[1];
  content.classList.add('custom-teaser_content');

  const title = content.querySelector('h3');
  title.classList.add('custom-teaser_content--title');

  const description = content.querySelector('ul');
  description.classList.add('custom-teaser_content--description');

  const button = content.querySelector('p');
  button.classList.add('custom-teaser_content--button');

  const link = content.querySelector('a');
  link.classList.add('custom-teaser_content--link');
}