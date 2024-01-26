import { bodyPart, equipment, musclesGroup } from './api.js';

const exerciseList = document.querySelector('.exercise-cards-list');
const cardList = document.querySelector('.exercise-cards-list');
const exerciseCards = document.querySelectorAll('.exercise-card');
const pageCounter = document.querySelector('.exercise-pages-counter');
const exerciseParts = document.querySelector('.exercise-parts');
const exerciseForm = document.querySelector('.exercise-form');
const exerciseInputButton = document.querySelector('.exercise-input-button');
const exerciseInput = document.querySelector('.exercise-input');
const exercise = document.querySelectorAll('.exercise-button');
const exercisePartsList = document.querySelector('.exercise-parts-list');

let currentPage;
let searchQuery = '';
let searchInput = '';
let allResults = [];
let limit;

localStorage.removeItem('searchInput');
localStorage.removeItem('searchQuery');

exerciseList.addEventListener('click', async event => {
  event.preventDefault();
  allResults = [];
  currentPage = 1;
  try {
    const data = await musclesGroup(event);
    const results = data.results;

    allResults = [...results];

    if (results.length === 0) {
      throw new Error({
        title: 'No Results',
        message: 'No images found. Please try a different search term.',
      });
    }

    cardList.style.display = 'none';
    exercisePartsList.style.display = 'flex';

    const rating = Math.round(results.rating);

    exercisePartsList.innerHTML = results.reduce(
      (html, result) =>
        html +
        `
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${rating}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="../img/icons.svg#icon-star"></use>
                    </svg>
                    </span>
                <button class="exercise-part-button">Start</button>
                </div>

                <!-- <svg class="exercise-btn-icon">
                <use href="../img/icons.svg#icon-arrow-right"></use>
                </svg> -->
                <span class="exercise-part-name">
                <svg class="exercise-part-icon" width="24" height="24">
                    <use href="../img/icons.svg#icon-running-man"></use>
                </svg>
                <p class="exercise-name-text">${result.name}</p>
                </span>
                <ul class="exercise-describes-list">
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Burned calories:</p>
                    <p class="exercise-describing">${result.burnedCalories} / ${result.time}</p>
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

    console.log(results);

    const rating = Math.round(results.rating);

    exercisePartsList.innerHTML = results.reduce(
      (html, result) =>
        html +
        `
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${rating}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="../img/icons.svg#icon-star"></use>
                    </svg>
                    </span>
                <button class="exercise-part-button">Start</button>
                </div>

                <!-- <svg class="exercise-btn-icon">
                <use href="../img/icons.svg#icon-arrow-right"></use>
                </svg> -->
                <span class="exercise-part-name">
                <svg class="exercise-part-icon" width="24" height="24">
                    <use href="../img/icons.svg#icon-running-man"></use>
                </svg>
                <p class="exercise-name-text">${result.name}</p>
                </span>
                <ul class="exercise-describes-list">
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Burned calories:</p>
                    <p class="exercise-describing">${result.burnedCalories} / ${result.time}</p>
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
    } else if (targetElement === 'Body parts') {
      exercisePartsList.innerHTML = '';
      exerciseInput.style.display = 'flex';
      exerciseInputButton.style.display = 'flex';
      exercisePartsList.style.display = 'flex';
      cardList.style.display = 'none';
      pageCounter.style.display = 'none';
      try {
      } catch {}
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

    console.log(results);

    if (results.length === 0) {
      console.log(results.length);

      exercisePartsList.insertAdjacentHTML(
        'beforeend',
        "<li class='no-result-list'><p class='no-result'>Unfortunately,<span class='no-result-span'> no results</span> were found.You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>"
      );
      pageCounter.style.display = 'none';
      return;
    } else {
      pageCounter.style.display = 'flex';
      const rating = Math.round(results.rating);

      exercisePartsList.innerHTML = results.reduce(
        (html, result) =>
          html +
          `
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${rating}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="../img/icons.svg#icon-star"></use>
                    </svg>
                    </span>
                <button class="exercise-part-button">Start</button>
                </div>

                <!-- <svg class="exercise-btn-icon">
                <use href="../img/icons.svg#icon-arrow-right"></use>
                </svg> -->
                <span class="exercise-part-name">
                <svg class="exercise-part-icon" width="24" height="24">
                    <use href="../img/icons.svg#icon-running-man"></use>
                </svg>
                <p class="exercise-name-text">${result.name}</p>
                </span>
                <ul class="exercise-describes-list">
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Burned calories:</p>
                    <p class="exercise-describing">${result.burnedCalories} / ${result.time}</p>
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

    const rating = Math.round(results.rating);

    exercisePartsList.innerHTML = results.reduce(
      (html, result) =>
        html +
        `
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${rating}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="../img/icons.svg#icon-star"></use>
                    </svg>
                    </span>
                <button class="exercise-part-button">Start</button>
                </div>

                <!-- <svg class="exercise-btn-icon">
                <use href="../img/icons.svg#icon-arrow-right"></use>
                </svg> -->
                <span class="exercise-part-name">
                <svg class="exercise-part-icon" width="24" height="24">
                    <use href="../img/icons.svg#icon-running-man"></use>
                </svg>
                <p class="exercise-name-text">${result.name}</p>
                </span>
                <ul class="exercise-describes-list">
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Burned calories:</p>
                    <p class="exercise-describing">${result.burnedCalories} / ${result.time}</p>
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
