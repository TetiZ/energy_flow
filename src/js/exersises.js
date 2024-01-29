import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { bodyPart, equipment, musclesGroup } from './api.js';

const exerciseList = document.querySelector('.exercise-cards-list');
const cardList = document.querySelector('.exercise-cards-list');

const pageCounter = document.querySelector('.exercise-pages-counter');
const exerciseForm = document.querySelector('.exercise-form');

const exerciseInputButton = document.querySelector('.exercise-input-button');
const exerciseInput = document.querySelector('.exercise-input');

const exercise = document.querySelectorAll('.exercise-button');
const exercisePartsList = document.querySelector('.exercise-parts-list');

const spanLog = document.querySelector('.exercise-log-span');
const spanTitle = document.querySelector('.exercise-title-span');

const exerciseBtn = document.querySelector('.exercise-part-button');

const popAddFavButton = document.querySelector('.pop-add-fav');
const exPopClose = document.querySelector('.pop-ex-close-btn');
const exPopUpWindow = document.querySelector('.pop-backdrop');

const ratingPopUpWindow = document.querySelector('.backdrop');
const ratingPopUpOpen = document.querySelector('.pop-rating-btn');
const ratingPopUpClose = document.querySelector('.pop-up-close-btn');

const popExerciseInfo = document.querySelector('.pop-ex-info');
const popModal = document.querySelector('.modal123');
const popBackdrop = document.querySelector('.pop-backdrop.is-open');

let currentPage;
let searchQuery = '';
let searchInput = '';
let allResults = [];
let limit;

let currentId = 0;
let paginationId = 0;

let inputId = 0;
let inputPagination = 0;

localStorage.removeItem('searchInput');
localStorage.removeItem('searchQuery');

sessionStorage.removeItem('data');

exerciseList.addEventListener('click', async event => {
  event.preventDefault();
  allResults = [];
  currentPage = 1;

  try {
    const data = await musclesGroup(event);

    const results = data.results;
    allResults = [...results];
    spanTitle.innerHTML = '';
    spanTitle.textContent =
      `${results[0].target}`.charAt(0).toUpperCase() +
      `${results[0].target}`.slice(1);

    sessionStorage.setItem('data', JSON.stringify({ results }));

    currentId = 0;

    for (let i = 0; i < 8; i++) {
      currentId++;
    }

    if (results.length === 0) {
      throw new Error({
        title: 'No Results',
        message: 'No images found. Please try a different search term.',
      });
    }

    spanTitle.style.visibility = 'visible';
    cardList.style.display = 'none';
    exercisePartsList.style.display = 'flex';
    spanLog.style.visibility = 'visible';

    exercisePartsList.innerHTML = results.reduce(
      (html, result, currentId) =>
        html +
        `
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(
                      result.rating
                    )}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="./img/icons.svg#icon-star"></use>
                    </svg>
                    </span>

                <a class="exercise-part-link" href="../partials/pop-up-exersise-card.html">
                <button class="exercise-part-button"  id='${currentId}'>Start
                <svg class="exercise-btn-icon" width="14" height="14">
                <use href="./img/icons.svg#icon-arrow-right"></use>
                </svg>
                </button>
                </a>
                </div>

                <!-- <svg class="exercise-btn-icon">
                <use href="./img/icons.svg#icon-arrow-right"></use>
                </svg> -->
                <span class="exercise-part-name">
                <svg class="exercise-part-icon" width="24" height="24">
                    <use href="./img/icons.svg#icon-running-man"></use>
                </svg>
                <p class="exercise-name-text">${
                  result.name.substring(0, 24) + '...'
                }</p>
                </span>
                <ul class="exercise-describes-list">
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Burned calories:</p>
                    <p class="exercise-describing">${result.burnedCalories} / ${
          result.time
        }</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Body part:</p>
                    <p class="exercise-describing">${result.bodyPart}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Target:</p>
                    <p class="exercise-describing">${result.target}</p>
                </li>
                </ul>
            </div>
            </li>
        `,
      ''
    );
  } catch (error) {
    console.error('Error:', error);
  }
});

pageCounter.addEventListener('click', async event => {
  const clickedPage = event.target.textContent;
  currentPage = clickedPage;
  console.log(currentPage);
  limit = 8;

  try {
    const localSearch = JSON.parse(localStorage.getItem('searchQuery'));
    const searchQuery = localSearch.searchQuery;
    console.log(searchQuery);
    const url = `https://energyflow.b.goit.study/api/exercises?muscles=${searchQuery}&page=${currentPage}&limit=${limit}`;
    const response = await fetch(url);

    if (response.status !== 200) {
      throw new Error('Failed to fetch data. Please try again later.');
    }

    const resultPromise = response.json();
    const data = await resultPromise;
    const results = data.results;

    sessionStorage.setItem('data', JSON.stringify({ results }));

    paginationId = 0;

    for (let i = 0; i < 8; i++) {
      paginationId++;
    }

    exercisePartsList.innerHTML = results.reduce(
      (html, result, paginationId) =>
        html +
        `
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(
                      result.rating
                    )}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="./img/icons.svg#icon-star"></use>
                    </svg>
                    </span>
                    <a class="exercise-part-link" href="../partials/pop-up-exersise-card.html">
                <button class="exercise-part-button"  id='${paginationId}'>Start
                <svg class="exercise-btn-icon" width="14" height="14">
                <use href="./img/icons.svg#icon-arrow-right"></use>
                </svg>
                </button>
                </a>
                </div>

                <!-- <svg class="exercise-btn-icon">
                <use href="./img/icons.svg#icon-arrow-right"></use>
                </svg> -->
                <span class="exercise-part-name">
                <svg class="exercise-part-icon" width="24" height="24">
                    <use href="./img/icons.svg#icon-running-man"></use>
                </svg>
                <p class="exercise-name-text">${
                  result.name.substring(0, 24) + '...'
                }</p>
                </span>
                <ul class="exercise-describes-list">
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Burned calories:</p>
                    <p class="exercise-describing">${result.burnedCalories} / ${
          result.time
        }</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Body part:</p>
                    <p class="exercise-describing">${result.bodyPart}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Target:</p>
                    <p class="exercise-describing">${result.target}</p>
                </li>
                </ul>
            </div>
            </li>
        `,
      ''
    );
  } catch (error) {
    console.error('Error:', error);
  }
});

exercise.forEach(elem => {
  elem.addEventListener('click', event => {
    event.preventDefault();
    const targetElement = event.target.textContent;
    localStorage.removeItem('searchInput');
    localStorage.removeItem('searchQuery');
    if (targetElement === 'Muscles') {
      exerciseInput.style.display = 'none';
      exerciseInputButton.style.display = 'none';
      exercisePartsList.style.display = 'none';
      cardList.style.display = 'flex';
      spanLog.style.visibility = 'hidden';
      spanTitle.style.visibility = 'hidden';
    } else if (targetElement === 'Body parts') {
      spanLog.style.visibility = 'hidden';
      exercisePartsList.innerHTML = '';
      exerciseInput.style.display = 'flex';
      exerciseInputButton.style.display = 'flex';
      exercisePartsList.style.display = 'flex';
      cardList.style.display = 'none';
      pageCounter.style.display = 'none';
      spanTitle.style.visibility = 'hidden';
    } else {
      exerciseInput.style.display = 'none';
      exerciseInputButton.style.display = 'none';
      exercisePartsList.style.display = 'none';
      spanLog.style.visibility = 'hidden';
      spanTitle.style.visibility = 'hidden';
    }
  });
});

exerciseForm.addEventListener('submit', async function (event) {
  event.preventDefault();
  allResults = [];
  currentPage = 1;

  try {
    const submitedValue = exerciseInput.value;
    const data = await bodyPart(submitedValue);
    const results = data.results;

    allResults = [...results];
    sessionStorage.setItem('data', JSON.stringify({ results }));

    if (results.length === 0) {
      exercisePartsList.innerHTML = '';
      console.log(results.length);
      exercisePartsList.insertAdjacentHTML(
        'beforeend',
        "<li class='no-result-list'><p class='no-result'>Unfortunately,<span class='no-result-span'> no results</span> were found.You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>"
      );
      pageCounter.style.display = 'none';
      return;
    } else {
      spanTitle.innerHTML = '';
      spanTitle.textContent =
        `${results[0].bodyPart}`.charAt(0).toUpperCase() +
        `${results[0].bodyPart}`.slice(1);
      spanTitle.style.visibility = 'visible';
      spanLog.style.visibility = 'visible';
      pageCounter.style.display = 'flex';

      inputId = 0;

      for (let i = 0; i < 8; i++) {
        inputId++;
      }

      exercisePartsList.innerHTML = results.reduce(
        (html, result, inputId) =>
          html +
          `
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(
                      result.rating
                    )}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="./img/icons.svg#icon-star"></use>
                    </svg>
                    </span>
                <a class="exercise-part-link" href="../partials/pop-up-exersise-card.html">
                <button class="exercise-part-button"  id='${inputId}'>Start
                <svg class="exercise-btn-icon" width="14" height="14">
                <use href="./img/icons.svg#icon-arrow-right"></use>
                </svg>
                </button>
                </a>
                </div>

                <!-- <svg class="exercise-btn-icon">
                <use href="./img/icons.svg#icon-arrow-right"></use>
                </svg> -->
                <span class="exercise-part-name">
                <svg class="exercise-part-icon" width="24" height="24">
                    <use href="./img/icons.svg#icon-running-man"></use>
                </svg>
                <p class="exercise-name-text">${
                  result.name.substring(0, 24) + '...'
                }</p>
                </span>
                <ul class="exercise-describes-list">
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Burned calories:</p>
                    <p class="exercise-describing">${result.burnedCalories} / ${
            result.time
          }</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Body part:</p>
                    <p class="exercise-describing">${result.bodyPart}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Target:</p>
                    <p class="exercise-describing">${result.target}</p>
                </li>
                </ul>
            </div>
            </li>
        `,
        ''
      );
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

pageCounter.addEventListener('click', async event => {
  const clickedPage = event.target.textContent;
  currentPage = clickedPage;

  limit = 8;

  try {
    const localSearch = JSON.parse(localStorage.getItem('searchInput'));
    searchInput = localSearch.searchInput;

    const url = `https://energyflow.b.goit.study/api/exercises?bodypart=${searchInput}&page=${currentPage}&limit=${limit}`;
    const response = await fetch(url);

    if (response.status !== 200) {
      throw new Error('Failed to fetch data. Please try again later.');
    }

    const resultPromise = response.json();
    const data = await resultPromise;
    const results = data.results;
    console.log(results.length);

    sessionStorage.setItem('data', JSON.stringify({ results }));

    inputPagination = 0;

    for (let i = 0; i < 8; i++) {
      inputPagination++;
    }

    exercisePartsList.innerHTML = results.reduce(
      (html, result, inputPagination) =>
        html +
        `
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(
                      result.rating
                    )}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="./img/icons.svg#icon-star"></use>
                    </svg>
                    </span>
                    <a class="exercise-part-link" href="./partials/pop-up-exersise-card.html">
                <button class="exercise-part-button"  id='${inputPagination}'>Start
                <svg class="exercise-btn-icon" width="14" height="14">
                <use href="./img/icons.svg#icon-arrow-right"></use>
                </svg>
                </button>
                </a>
                </div>

                <span class="exercise-part-name">
                <svg class="exercise-part-icon" width="24" height="24">
                    <use href="./img/icons.svg#icon-running-man"></use>
                </svg>
                <p class="exercise-name-text">${
                  result.name.substring(0, 24) + '...'
                }</p>
                </span>
                <ul class="exercise-describes-list">
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Burned calories:</p>
                    <p class="exercise-describing">${result.burnedCalories} / ${
          result.time
        }</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Body part:</p>
                    <p class="exercise-describing">${result.bodyPart}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Target:</p>
                    <p class="exercise-describing">${result.target}</p>
                </li>
                </ul>
            </div>
            </li>
        `,
      ''
    );
  } catch (error) {
    console.error('Error:', error);
  }
});

const modal = document.querySelector('.modal123');
function popUp(data) {
  modal.innerHTML = `
    <div class="pop-backdrop is-open">
    <div class="pop-ex-modal">
      <button class="pop-ex-close-btn">
        <svg
          class="pop-ex-close-btn-icon"
          width="24"
          height="24"
          aria-label="close icon"
        >
          <use href="./img/icons.svg#icon-close"></use>
        </svg>
      </button>
      <div class="pop-exercises-img">
        <img
          src="${data.gifUrl}"
          class="img-ex"
          width="295"
          height="258"
        />
      </div>

      <div class="pop-ex-content-container">
        <h2 class="pop-exercise-name">${data.name}</h2>
        <p class="pop-ex-current-rating">${data.rating}</p>
        <ul class="pop-ex-stars-list">
            <li>
              <svg
                class="pop-ex-rate-icon"
                width="18"
                height="18"
                aria-label="ratting">
                <use href="./img/icons.svg#icon-star"></use>
              </svg>
            </li>
        </ul>

        <hr class="decorate-elem" />

        <div class="pop-ex-info">
          <div class="field">
            <span class="value">Target</span>
            <span class="label">${data.target}</span>
          </div>
          <div class="field">
            <span class="value">Body Part</span>
            <span class="label">${data.bodyPart}</span>
          </div>
          <div class="field">
            <span class="value">Equipment</span>
            <span class="label">${data.equipment}</span>
          </div>
          <div class="field">
            <span class="value">Popular</span>
            <span class="label">${data.popularity}</span>
          </div>
          <div class="field">
            <span class="value">Burned Calories</span>
            <span class="label">${data.burnedCalories}</span>
          </div>
        </div>

        <hr class="decorate-elem" />

        <p class="pop-desc-exercise">
          ${data.description}
        </p>

        <div class="pop-btns-container">
          <button class="pop-add-fav">
            Add to favorites<svg class="heart-icon" width="18" height="18">
              <use href="./img/icons.svg#icon-heart"></use>
            </svg>
          </button>

          <button class="pop-rating-btn">Give a rating</button>
        </div>
      </div>
    </div>
  </div>
`;
}

let allfav = [];

function dataToStorage(data) {
  const clickHandler = event => {
    console.log(event.target);
    console.log(popAddFavButton);
    if (popAddFavButton) {
      const localData = JSON.parse(localStorage.getItem('exercises')) || [];
      console.log(123);

      localData.push(data);
      localStorage.setItem('exercises', JSON.stringify(localData));

      allfav = [...localData];

      popModal.removeEventListener('click', clickHandler);

      iziToast.success({
        title: 'Excellent choice!',
        message:
          'The exercise has been successfully added to your favorites. Get ready for endless inspiration and great results!',
        position: 'center',
      });
    } else {
      return;
    }
  };

  popModal.addEventListener('click', clickHandler);
}

exercisePartsList.addEventListener('click', async event => {
  event.preventDefault();
  const currentId = event.target.id;

  const dataStorage = JSON.parse(sessionStorage.getItem('data'));

  if (event.target.tagName != 'BUTTON') {
    return;
  }
  if (currentId == currentId) {
    const data = dataStorage.results[currentId];

    popUp(data);

    dataToStorage(data);
  }

  popModal.addEventListener('click', event => {
    console.log(event.target);
    if (
      event.target.tagName == 'BUTTON' ||
      event.target.tagName == 'SVG' ||
      event.target.tagName == 'USE'
    ) {
      if (exPopClose) {
        modal.innerHTML = '';
      }
    }
  });
});

// FAVORITES

const savedCards = JSON.parse(localStorage.getItem('exercises'));
console.log(savedCards);

const favList = document.querySelector('.fav-list');
const favoritesContainer = document.querySelector('.favorites');

function renderCardsFromStorage(e) {
  const savedCards = JSON.parse(localStorage.getItem('exercises'));
  console.log(savedCards);

  favList.innerHTML = savedCards
    .map(
      ({ bodyPart, name, target, burnedCalories }, index) => `
    <li class="exercise-parts">
      <div class="part-container">
        <div class="exercise-head-container">
          <span class="exercise-badge">WORKOUT</span>
          <button class="exercise-trash-button">
            <svg class="exercise-trash-icon" width="16" height="16">
              <use href="./img/icons.svg#icon-trash"></use>
            </svg>
          </button>
          <a
            class="exercise-part-link"
            href="./partials/pop-up-exercise-card.html"
          >
            <button class="exercise-part-button">
              Start
              <svg class="exercise-btn-icon" width="14" height="14">
                <use href="./img/icons.svg#icon-arrow-right"></use>
              </svg>
            </button>
          </a>
        </div>
        <span class="exercise-part-name">
          <svg class="exercise-part-icon" width="24" height="24">
            <use href="./img/icons.svg#icon-running-man"></use>
          </svg>
          <p class="exercise-name-text">${name}</p> 
        </span>
        <ul class="exercise-describes-list">
          <li class="exercise-describe">
            <p class="exercise-describe-category">Burned calories:</p>
            <p class="exercise-describing">${burnedCalories} / 3 min</p>
          </li>
          <li class="exercise-describe">
            <p class="exercise-describe-category">Body part:</p>
            <p class="exercise-describing">${bodyPart}</p>
          </li>
          <li class="exercise-describe">
            <p class="exercise-describe-category">Target:</p>
            <p class="exercise-describing">${target}</p>
          </li>
        </ul>
      </div>
    </li>
  `
    )
    .join('');

  updateTrashButtonListeners();
}

renderCardsFromStorage();

function updateTrashButtonListeners() {
  const trashBtns = document.querySelectorAll('.exercise-trash-button');

  trashBtns.forEach(trashBtn => {
    trashBtn.addEventListener('click', e => {
      const indexToRemove = e.currentTarget.getAttribute('data-index');
      savedCards.splice(indexToRemove, 1);
      localStorage.setItem('exercises', JSON.stringify(savedCards));
      renderCardsFromStorage();
    });
  });
}

if (savedCards.length === 0) {
  favList.insertAdjacentHTML(
    'beforeend',
    ` <img
      class="dumbbel-favorites-img"
      srcset="
        /src/img/favorites/dumbbell-tab-desc.png  704w,
        /src/img/favorites/dumbbell-tab-desc@2x.png  1408w,
        /src/img/favorites/dumbbell-tab-desc.png     736w,
        /src/img/favorites/dumbbell-tab-desc@2x.png  1472w,
        /src/img/favorites/dumbbell-mob.png    335w,
        /src/img/favorites/dumbbell-mob@2x.png  670w
      "
      src="/src/img/favorites/dumbbell-mob.png"
      sizes="(min-width:
    1440px) 704px, (min-width: 768px) 736px, (max-width: 375px) 335px"
      alt="dumbbell icon"
    />
      <p class='no-card-in-storage'>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>`
  );
} else {
  favoritesContainer.insertAdjacentHTML(
    'beforeend',
    `<ul class="exercise-pages-counter">
         <li class="exercise-page-number">
           <button id="1" class="exercise-number-button">
             1
           </button>
         </li>
         <li class="exercise-page-number">
           <button id="2" class="exercise-number-button">
             2
           </button>
         </li>
         <li class="exercise-page-number">
           <button id="3" class="exercise-number-button">
             3
           </button>
         </li>
       </ul>
`
  );
}
