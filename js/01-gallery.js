import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

let modalImage;

const createGalleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`,
  )
  .join('');

galleryList.insertAdjacentHTML('beforeend', createGalleryMarkup);

// document.getElementsByTagName('body')[0].onclick = function (event) {
//   if (event.target.nodeName === "IMG") {
//       console.log('do something');
//   }
// }

function onImageClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') return;

  onOpenModal(e.target.dataset.source);
}
galleryList.addEventListener('click', onImageClick);

const onCreateModal = image =>
  basicLightbox.create(`<img src = '${image}' width = '2100' alt = '${image}'>`);

const onOpenModal = image => {
  modalImage = onCreateModal(image);
  modalImage.show();
  console.log('Open modal');
  document.addEventListener('keyup', onKeyPress);
};

const onKeyPress = e => {
  if (e.code === 'Escape') modalImage.close();
  console.log('Close modal with escape');
  document.removeEventListener('keyup', onKeyPress);
  console.log(e);
};

// console.log(galleryItems);
