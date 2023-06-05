// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const listEl = document.querySelector('.gallery');

function createGalleryElements(items) {
  let galleryElements = items.map(item => {
    let itemEl = document.createElement('li');
    itemEl.classList.add('gallery__item');

    let linkEl = document.createElement('a');
    linkEl.classList.add('gallery__link');
    linkEl.href = item.original;
    itemEl.appendChild(linkEl);

    let imgEl = document.createElement('img');
    imgEl.classList.add('gallery__image');
    imgEl.src = item.preview;
    imgEl.alt = item.description;
    linkEl.appendChild(imgEl);

    return itemEl;
  });

  listEl.append(...galleryElements);
  return listEl;
}

function initGallery(items) {
  let galleryElements = createGalleryElements(items);
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}
initGallery(galleryItems);
