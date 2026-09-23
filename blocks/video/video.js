/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */

/*
 * Video Block
 * Show a video referenced by a link
 * https://www.hlx.live/developer/block-collection/video
 */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/**
 * Determines the video source type from a link
 * @param {string} link - The video link URL
 * @returns {string} - 'youtube', 'vimeo', or 'video'
 */
function getVideoSource(link) {
  if (link.includes('youtube') || link.includes('youtu.be')) return 'youtube';
  if (link.includes('vimeo')) return 'vimeo';
  return 'video';
}

/**
 * Gets a human-readable video type label
 * @param {string} source - The video source type ('youtube', 'vimeo', or 'video')
 * @returns {string} - Human-readable label
 */
function getVideoTypeLabel(source) {
  const labels = {
    youtube: 'YouTube video',
    vimeo: 'Vimeo video',
    video: 'MP4 video',
  };
  return labels[source] || 'video';
}

function embedYoutube(url, autoplay, background) {
  const usp = new URLSearchParams(url.search);
  let suffix = '';
  if (background || autoplay) {
    const suffixParams = {
      autoplay: autoplay ? '1' : '0',
      mute: background ? '1' : '0',
      controls: background ? '0' : '1',
      disablekb: background ? '1' : '0',
      loop: background ? '1' : '0',
      playsinline: background ? '1' : '0',
    };
    suffix = `&${Object.entries(suffixParams).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&')}`;
  }
  let vid = usp.get('v') ? encodeURIComponent(usp.get('v')) : '';
  const embed = url.pathname;
  if (url.origin.includes('youtu.be')) {
    [, vid] = url.pathname.split('/');
  }

  const temp = document.createElement('div');
  temp.innerHTML = `<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;">
      <iframe src="https://www.youtube.com${vid ? `/embed/${vid}?rel=0&v=${vid}${suffix}` : embed}" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" 
      allow="autoplay; fullscreen; picture-in-picture; encrypted-media; accelerometer; gyroscope; picture-in-picture" allowfullscreen="" scrolling="no" title="Content from Youtube" loading="lazy"></iframe>
    </div>`;
  return temp.children.item(0);
}

function embedVimeo(url, autoplay, background) {
  const [, video] = url.pathname.split('/');
  let suffix = '';
  if (background || autoplay) {
    const suffixParams = {
      autoplay: autoplay ? '1' : '0',
      background: background ? '1' : '0',
    };
    suffix = `?${Object.entries(suffixParams).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&')}`;
  }
  const temp = document.createElement('div');
  temp.innerHTML = `<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;">
      <iframe src="https://player.vimeo.com/video/${video}${suffix}" 
      style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" 
      frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen  
      title="Content from Vimeo" loading="lazy"></iframe>
    </div>`;
  return temp.children.item(0);
}

function getVideoElement(source, autoplay, background) {
  const video = document.createElement('video');
  video.setAttribute('controls', '');
  if (autoplay) video.setAttribute('autoplay', '');
  if (background) {
    video.setAttribute('loop', '');
    video.setAttribute('playsinline', '');
    video.removeAttribute('controls');
    video.addEventListener('canplay', () => {
      video.muted = true;
      if (autoplay) video.play();
    });
  }

  const sourceEl = document.createElement('source');
  sourceEl.setAttribute('src', source);
  sourceEl.setAttribute('type', `video/${source.split('.').pop()}`);
  video.append(sourceEl);

  return video;
}

/**
 * appends the player to the container
 * @param {Element} container The element the player is rendered into
 * @param {Element} block The block element, which carries the loaded flag
 * @param {string} link The video URL
 * @param {boolean} autoplay Whether the video starts playing right away
 * @param {boolean} background Whether the video plays muted and looped without controls
 */
function loadVideoEmbed(container, block, link, autoplay, background) {
  if (block.dataset.embedLoaded === 'true') return;

  const url = new URL(link);
  const source = getVideoSource(link);

  if (source === 'youtube' || source === 'vimeo') {
    const embedWrapper = source === 'youtube'
      ? embedYoutube(url, autoplay, background)
      : embedVimeo(url, autoplay, background);
    container.append(embedWrapper);
    embedWrapper.querySelector('iframe').addEventListener('load', () => {
      block.dataset.embedLoaded = true;
    });
  } else {
    const videoEl = getVideoElement(link, autoplay, background);
    container.append(videoEl);
    videoEl.addEventListener('canplay', () => {
      block.dataset.embedLoaded = true;
    });
  }
}

/**
 * builds the poster placeholder and lazy embed inside a container
 * @param {Element} block The block element, which carries the loaded flag
 * @param {Element} container The element the poster and embed are rendered into
 */
function setupVideo(block, container) {
  const anchor = container.querySelector('a');
  if (!anchor) return;

  const link = anchor.href;
  const placeholder = container.querySelector('picture');
  container.textContent = '';
  block.dataset.embedLoaded = false;

  const autoplay = block.classList.contains('autoplay');
  if (placeholder) {
    block.classList.add('placeholder');
    const wrapper = document.createElement('div');
    wrapper.className = 'video-placeholder';
    wrapper.append(placeholder);

    if (!autoplay) {
      const source = getVideoSource(link);
      const videoType = getVideoTypeLabel(source);
      const ariaLabel = `Play ${videoType}`;

      wrapper.insertAdjacentHTML(
        'beforeend',
        `<div class="video-placeholder-play"><button type="button" title="${ariaLabel}" aria-label="${ariaLabel}"></button></div>`,
      );
      wrapper.addEventListener('click', () => {
        wrapper.remove();
        loadVideoEmbed(container, block, link, true, false);
      });
    }
    container.append(wrapper);
  }

  if (!placeholder || autoplay) {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        observer.disconnect();
        const playOnLoad = autoplay && !prefersReducedMotion.matches;
        loadVideoEmbed(container, block, link, playOnLoad, autoplay);
      }
    });
    observer.observe(container);
  }
}

/**
 * decorates the copy beside the video: a heading and a list of talking points
 * @param {Element} cell The content cell
 */
function decorateContent(cell) {
  cell.classList.add('custom-video_content');
  cell.querySelector('h1, h2, h3, h4, h5, h6')?.classList.add('custom-video_title');

  // authors write the points as either plain paragraphs or a bullet list
  const points = [...cell.querySelectorAll(':scope > p, :scope > ul > li, :scope > ol > li')];
  points.forEach((point) => point.classList.add('custom-video_item'));
}

export default async function decorate(block) {
  // authors reach the same layout either as one row of two cells or as two
  // single-cell rows, so collect the cells without assuming a row shape
  const cells = [...block.querySelectorAll(':scope > div > div')];
  const mediaCell = cells.find((cell) => cell.querySelector('a'));
  const contentCell = cells.find((cell) => cell !== mediaCell && cell.textContent.trim());

  if (mediaCell && contentCell) {
    block.classList.add('has-content');
    mediaCell.classList.add('custom-video_media');
    decorateContent(contentCell);

    // normalise both authoring shapes into a single flex row
    const layout = document.createElement('div');
    layout.className = 'custom-video';
    layout.append(mediaCell, contentCell);
    block.textContent = '';
    block.append(layout);

    setupVideo(block, mediaCell);
    return;
  }

  setupVideo(block, block);
}
