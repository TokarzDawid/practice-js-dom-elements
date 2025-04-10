console.log('DOM');

const item = document.querySelector(
  '.comments__item.comments__item--newest'
);

if (item) {
  const dataElements = item.querySelectorAll(
    '[data-info]'
  );
  console.log(
    'Znaleziono elementów z data-info:',
    dataElements.length
  );
}
