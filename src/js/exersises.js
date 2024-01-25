import { musclesGroup } from './api.js';

const exerciseList = document.querySelector('.exercise-cards-list');
const cardList = document.querySelector('.exercise-cards-list');
const exerciseCards = document.querySelectorAll('.exercise-card');
const pageCounter = document.querySelector('.exercise-pages-counter');

let currentPage = 1;
const perPage = 40;
let searchQuery = '';
let allResults = [];
let isFirstLoad = true;

exerciseList.addEventListener('click', async event => {
  event.preventDefault();
  allResults = [];
  currentPage = 1;
  cardList.innerHTML = '';

  try {
    const data = await musclesGroup(event);
    const results = data.results;
    console.log(results);

    allResults = [...results];
    console.log(allResults);

    exerciseCards.forEach(card => {
      card.style.display = 'none';
    });

    if (results.length === 0) {
      throw new Error({
        title: 'No Results',
        message: 'No images found. Please try a different search term.',
      });
    }

    cardList.innerHTML = results.reduce(
      (html, result) =>
        html +
        `
        <li><p>${result.target}</p></li>
        `,
      ''
    );
  } catch (error) {
    console.error('Error:', error);
  }
});

pageCounter.addEventListener('click', async event => {
  currentPage = event.target.id;
  console.log(currentPage);

  try {
    const data = await musclesGroup(event);

    if (response.status !== 200) {
      throw new Error('Failed to fetch more data. Please try again later.');
    }

    const additionalResults = data.results;
    allResults = [...results, ...additionalResults];

    cardList.innerHTML = results.reduce(
      (html, result) =>
        html +
        `
        <li><p>${result.target}</p></li>
        `,
      ''
    );
  } catch {}
});
