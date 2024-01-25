import { bodyPart, equipment, musclesGroup } from './api.js';

const exerciseList = document.querySelector('.exercise-cards-list');
const cardList = document.querySelector('.exercise-cards-list');
const exerciseCards = document.querySelectorAll('.exercise-card');
const pageCounter = document.querySelector('.exercise-pages-counter')
const exerciseParts = document.querySelector('.exercise-parts')
const exerciseForm = document.querySelector('.exercise-form')
const exerciseInputButton = document.querySelector('.exercise-input-button')
const exerciseInput = document.querySelector('.exercise-input')
const exercise = document.querySelectorAll('.exercise-button')


let currentPage ;
let searchQuery = '';
let searchInput = '';
let allResults = [];
let limit;

localStorage.removeItem('searchInput');
localStorage.removeItem('searchQuery');

exerciseList.addEventListener('click', async (event) => {
    event.preventDefault();
    allResults = [];
    currentPage = 1;
    cardList.innerHTML = '';
    try {
        const data = await musclesGroup(event);
        const results = data.results;

        allResults = [...results];

        exerciseCards.forEach((card) => {
            card.style.display = 'none';
        });

        if (results.length === 0) {
            throw new Error({
                title: 'No Results',
                message: 'No images found. Please try a different search term.',
            });
        }


        

        cardList.innerHTML = results.reduce((html, result) => html + `
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${result.rating}</p>
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
        `, '');
    } catch (error) {
        console.error('Error:', error);
    }
});

pageCounter.addEventListener('click', async (event) => {
    const clickedPage = event.target.textContent;
    currentPage = clickedPage
    console.log(currentPage);
    limit = 8;
  try {
        const localSearch = JSON.parse(localStorage.getItem('searchQuery'));
        const searchQuery = localSearch.searchQuery
        console.log(searchQuery);
        const url = `https://energyflow.b.goit.study/api/exercises?muscles=${searchQuery}&page=${currentPage}&limit=${limit}`;
        const response = await fetch(url);
            
        if (response.status !== 200) {
            throw new Error('Failed to fetch data. Please try again later.');
            }

        const resultPromise = response.json();
        const data = await resultPromise;
        const results = data.results

        console.log(results);  
        
        cardList.innerHTML = results.reduce((html, result) => html + `
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${result.rating}</p>
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
        `, '');
        } catch (error) {
            console.error('Error:', error);
        }
    
});



exercise.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        event.preventDefault();
        const targetElement = event.target.textContent
        localStorage.removeItem('searchInput')
        localStorage.removeItem('searchQuery')
        if (targetElement === 'Muscles') {
            exerciseInput.style.display = 'none';
            exerciseInputButton.style.display = 'none';
            exerciseCards.forEach((card) => {
                card.style.display = 'flex';
            });
            exerciseParts.forEach((parts) => {
                parts.style.display = 'none';
            });
            
        } else if (targetElement === 'Body parts') {
            exerciseInput.style.display = 'flex';
            exerciseInputButton.style.display = 'flex';
            exerciseCards.forEach((card) => {
                card.style.display = 'none';
            });
            try {
            } catch {
                
            }
        }
    })
})

exerciseForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    allResults = [];
    currentPage = 1;
    cardList.innerHTML = '';

    try {
        const submitedValue = exerciseInput.value
        const data = await bodyPart(submitedValue)
        const results = data.results;

        allResults = [...results];

        console.log(results);
      if (results.length === 0) {
            throw new Error({
                title: 'No Results',
                message: 'No images found. Please try a different search term.',
            });
        }


        

        cardList.innerHTML = results.reduce((html, result) => html + `
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${result.rating}</p>
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
        `, '');
    } catch (error) {
        console.error('Error:', error);
    }

});

pageCounter.addEventListener('click', async (event) => {
    const clickedPage = event.target.textContent;
    currentPage = clickedPage

    limit = 8

    try {

        const localSearch = JSON.parse(localStorage.getItem('searchInput'));
        searchInput = localSearch.searchInput
        
        const url = `https://energyflow.b.goit.study/api/exercises?bodypart=${searchInput}&page=${currentPage}&limit=${limit}`;
        const response = await fetch(url);
            
        if (response.status !== 200) {
            throw new Error('Failed to fetch data. Please try again later.');
            }

        const resultPromise = response.json();
        const data = await resultPromise;
        const results = data.results

        console.log(results);  

        cardList.innerHTML = results.reduce((html, result) => html + `
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${result.rating}</p>
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
        `, '');
        } catch (error) {
            console.error('Error:', error);
        }
    
});