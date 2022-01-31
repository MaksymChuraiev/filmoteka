import { galleryArrayMarkup } from './gallery';
import jpg from '../../images/desktop/nothing_find.jpg';

const refs = {
  gallery: document.querySelector('.gallery-list'),
  genres: document.querySelector('.genres'),
  paginationList: document.querySelector('.pagination'),
  topTrands: document.querySelector('.top-trands'),

  watched: document.querySelector('.js-button-watched'),
  queue: document.querySelector('.js-button-queue'),
};

let data = {
  page: 1,
  results: [{}],
};

let queueKey;
let watchedKey;
let isActiveKey;

refs.watched.addEventListener('click', onWatchedClick);
refs.queue.addEventListener('click', onQueueClick);

function onWatchedClick(e) {
  e.preventDefault();
  refs.watched.classList.add('header__button--active');
  refs.queue.classList.remove('header__button--active');
  localStorage.setItem('isActive', 'watched');
  watchedKey = localStorage.getItem('watched');
  if (watchedKey) {
    try {
      data = JSON.parse(watchedKey);
    } catch (e) {
      console.log(e);
    }
  }
  markup(data);
}

function onQueueClick(e) {
  e.preventDefault();
  refs.queue.classList.add('header__button--active');
  refs.watched.classList.remove('header__button--active');
  localStorage.setItem('isActive', 'queue');
  queueKey = localStorage.getItem('queue');
  if (queueKey) {
    try {
      data = JSON.parse(queueKey);
    } catch (e) {
      console.log(e);
    }
  }
  markup(data);
}

function libraryMarkup() {
  refs.paginationList.style.display = 'none';
  refs.genres.style.display = 'none';
  refs.topTrands.style.display = 'none';

  isActiveKey = localStorage.getItem('isActive');

  if (isActiveKey) {
    if (isActiveKey === 'queue') {
      refs.queue.classList.add('header__button--active');
      refs.watched.classList.remove('header__button--active');
      queueKey = localStorage.getItem('queue');
      if (queueKey) {
        try {
          data = JSON.parse(queueKey);
        } catch (e) {
          console.log(e);
        }
      } else {
        localStorage.setItem('queue', JSON.stringify(data));
      }
    } else {
      refs.watched.classList.add('header__button--active');
      refs.queue.classList.remove('header__button--active');
      watchedKey = localStorage.getItem('watched');
      if (watchedKey) {
        try {
          data = JSON.parse(watchedKey);
        } catch (e) {
          console.log(e);
        }
      } else {
        localStorage.setItem('watched', JSON.stringify(data));
      }
    }
  } else {
    isActiveKey = 'watched';
    localStorage.setItem('isActive', isActiveKey);
    refs.watched.classList.add('header__button--active');
    refs.queue.classList.remove('header__button--active');
    localStorage.setItem('watched', JSON.stringify(data));
    localStorage.setItem('queue', JSON.stringify(data));
  }

  markup(data);
}

function markup(data) {
  refs.gallery.innerHTML = '';
  if (data.results.length > 1) {
    galleryArrayMarkup(data);
  } else {
    refs.gallery.insertAdjacentHTML(
      'beforeend',
      ` <div class="gallery-list__poster" href="#">
        <img
          src=${jpg}
          alt="Ничего не найдено"
     
        />
      </div>`,
    );
  }
}

export { libraryMarkup };
