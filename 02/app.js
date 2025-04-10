console.log('DOM');

const links = document.querySelectorAll(
  'a[data-url]'
);

links.forEach(function (link) {
  const dataUrl = link.getAttribute('data-url');

  if (dataUrl) {
    link.setAttribute('href', dataUrl);
  } else {
    link.addEventListener(
      'click',
      function (event) {
        event.preventDefault();
        alert(
          'Ten link nie ma przypisanego adresu'
        );
      }
    );
  }
});
