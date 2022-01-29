// const refs = {
//     galleryCard: document.querySelector('.gallery-list__item'),
//     modal: document.querySelector('[data-modal]'),
// };

// refs.galleryCard.addEventListener('click', toggleModal);

// function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
// };
// import itemsTemplate from '../../template/index.hbs';
// import * as basicLightbox from 'basiclightbox';

// const galleryListRef = document.querySelector('.gallery-list');
// galleryListRef.addEventListener('click', onLargeImageClick);

// function onLargeImageClick(e) {
//   e.preventDefault();

//   const isImgEl = e.target.classList.contains('gallery__image');

//   if (!isImgEl) {
//     return;
//   }

//   const instance = basicLightbox.create(itemsTemplate(), {
//     onClose: () => {
//       window.removeEventListener('keydown', onCloseLargeImg);
//     },
//   });

//   instance.show();

//   window.addEventListener('keydown', onCloseLargeImg);

//   function onCloseLargeImg(event) {
//     if (event.code !== 'Escape') {
//       return;
//     }

//     instance.close();
//   }
// }
