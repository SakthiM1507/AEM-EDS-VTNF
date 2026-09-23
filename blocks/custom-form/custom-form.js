/* eslint-disable linebreak-style */
export default async function decorate(block) {
  const link = block.querySelector('a');
  console.log('link',link);
  if (!link) return;

  const response = await fetch(link.href);
  console.log(response,'response');
  const data = await response.json();
  console.log(data,'data');

  const emailField = data.data.find((item) => item.field === 'Email');
  console.log(emailField,'emailField');
  if (!emailField) return;

  const form = document.createElement('form');
  form.className = 'newsletter-form';

  const input = document.createElement('input');

  input.type = 'email';
  input.name = emailField.field;
  input.placeholder = emailField.label;
  input.required = String(emailField.required).toLowerCase() === 'true';

  const button = document.createElement('button');

  button.type = 'submit';
  button.textContent = 'Subscribe';

  form.append(input, button);

  // Remove only the authored form data/table rows
  block.querySelectorAll(':scope > div').forEach((row) => {
    if (!row.querySelector('img')) {
      row.remove();
    }
  });

  block.append(form);
}