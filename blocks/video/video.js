/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
export default function decorate(block) { 
  const video = [...block.children];

  video.forEach((item) => {
    item.classList.add('custom-video');

    const videoimage = item.querySelector(':scope > div:first-child');
    videoimage?.classList.add('custom-video_image');

    const videoContent = item.querySelector(':scope > div:nth-child(2)');
    videoContent?.classList.add('custom-video_content');

    const imageElement = item.querySelector('img');
    imageElement?.classList.add('custom-video_image-element');

    const videotitle = videoContent.querySelector('h4');
    videotitle?.classList.add('custom-video_title');

    const videowrapper = videoimage.querySelector('p');
    videowrapper?.classList.add('custom-video__image-wrapper');
  });
}