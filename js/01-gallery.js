import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  galleryList: document.querySelector('.gallery'), //общий родитель картинок
};

const createGalleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src=${preview}
          data-source=${original}
          alt=${description}
        />
      </a>
    </div>`,
  )
  .join('');

refs.galleryList.insertAdjacentHTML('beforeend', createGalleryMarkup);

function createModal(e) {}

console.log(galleryItems);
