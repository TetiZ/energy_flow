/* empty css                  */const e=JSON.parse(localStorage.getItem("exercises"));console.log(e);const a=document.querySelector(".fav-list");document.querySelector("#Favorites");function t(n){a.innerHTML=e.map(({bodyPart:s,name:i,target:c,burnedCalories:r})=>`
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
          <p class="exercise-name-text">${i}</p> 
        </span>
        <ul class="exercise-describes-list">
          <li class="exercise-describe">
            <p class="exercise-describe-category">Burned calories:</p>
            <p class="exercise-describing">${r} / 3 min</p>
          </li>
          <li class="exercise-describe">
            <p class="exercise-describe-category">Body part:</p>
            <p class="exercise-describing">${s}</p>
          </li>
          <li class="exercise-describe">
            <p class="exercise-describe-category">Target:</p>
            <p class="exercise-describing">${c}</p>
          </li>
        </ul>
      </div>
    </li>
  `).join("")}t();
//# sourceMappingURL=favorites-bba66da6.js.map
