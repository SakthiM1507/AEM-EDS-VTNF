/* eslint-disable no-undef */
/* eslint-disable no-multi-spaces */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
export default function decorate(block) { 
  const events = [...block.children];

  events.forEach((item) => {
    item.classList.add('custom-event');

    const eventcontent = item.querySelector(':scope > div:first-child');
    eventcontent?.classList.add('custom-event-content');

    const eventtitle = eventcontent.querySelector('h3');
    eventtitle?.classList.add('custom-event-title');

     const eventitem = item.querySelectorAll('table');
    eventitem?.forEach((service) => {
      service.classList.add('custom-event-item');

      const eventdetails = service.querySelector('td:first-child');
      eventdetails?.classList.add('custom-event-details');

      const eventdate = service.querySelector('td:nth-child(2)');
      eventdate?.classList.add('custom-event-date');

    });
 });
} 