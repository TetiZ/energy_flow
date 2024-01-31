import{i as C}from"./vendor-db25513e.js";import{musclesGroup as _,bodyPart as N}from"./api-8d58433a.js";const H=document.querySelector(".exercise-cards-list"),L=document.querySelector(".exercise-cards-list"),h=document.querySelector(".exercise-pages-counter"),U=document.querySelector(".exercise-form"),S=document.querySelector(".exercise-input-button"),y=document.querySelector(".exercise-input"),I=document.querySelectorAll(".exercise-button"),n=document.querySelector(".exercise-parts-list"),b=document.querySelector(".exercise-log-span"),d=document.querySelector(".exercise-title-span");document.querySelector(".exercise-part-button");document.querySelector(".pop-add-fav");document.querySelector(".pop-ex-close-btn");document.querySelector(".pop-backdrop");document.querySelector(".backdrop");document.querySelector(".pop-rating-btn");document.querySelector(".pop-up-close-btn");document.querySelector(".pop-ex-info");document.querySelector(".modal123");document.querySelector(".pop-backdrop.is-open");let g,T="",m=[],w,q=0,E=0,k=0,B=0;localStorage.removeItem("searchInput");localStorage.removeItem("searchQuery");sessionStorage.removeItem("data");H.addEventListener("click",async e=>{e.preventDefault(),m=[],g=1;try{const t=(await _(e)).results;m=[...t],d.innerHTML="",d.textContent=`${t[0].target}`.charAt(0).toUpperCase()+`${t[0].target}`.slice(1),sessionStorage.setItem("data",JSON.stringify({results:t})),q=0;for(let i=0;i<8;i++)q++;if(t.length===0)throw new Error({title:"No Results",message:"No images found. Please try a different search term."});d.style.visibility="visible",L.style.display="none",n.style.display="flex",b.style.visibility="visible",n.innerHTML=t.reduce((i,r,c)=>i+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(r.rating)}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="/energy_flow/assets/icons-de67b048.svg#icon-star"></use>
                    </svg>
                    </span>
                <button class="exercise-part-button"  id='${c}'>Start
                <svg class="exercise-btn-icon" width="14" height="14">
                <use href="/energy_flow/assets/icons-de67b048.svg#icon-arrow-right"></use>
                </svg>
                </button>
                </a>
                </div>

                <!-- <svg class="exercise-btn-icon">
                <use href="/energy_flow/assets/icons-de67b048.svg#icon-arrow-right"></use>
                </svg> -->
                <span class="exercise-part-name">
                <svg class="exercise-part-icon" width="24" height="24">
                    <use href="/energy_flow/assets/icons-de67b048.svg#icon-running-man"></use>
                </svg>
                <p class="exercise-name-text">${r.name.substring(0,24)+"..."}</p>
                </span>
                <ul class="exercise-describes-list">
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Burned calories:</p>
                    <p class="exercise-describing">${r.burnedCalories} / ${r.time}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Body part:</p>
                    <p class="exercise-describing">${r.bodyPart}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Target:</p>
                    <p class="exercise-describing">${r.target}</p>
                </li>
                </ul>
            </div>
            </li>
        `,"")}catch(s){console.error("Error:",s)}});h.addEventListener("click",async e=>{g=e.target.textContent,console.log(g),w=8;try{const i=JSON.parse(localStorage.getItem("searchQuery")).searchQuery;console.log(i);const r=`https://energyflow.b.goit.study/api/exercises?muscles=${i}&page=${g}&limit=${w}`,c=await fetch(r);if(c.status!==200)throw new Error("Failed to fetch data. Please try again later.");const o=(await c.json()).results;sessionStorage.setItem("data",JSON.stringify({results:o})),E=0;for(let a=0;a<8;a++)E++;n.innerHTML=o.reduce((a,u,O)=>a+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(u.rating)}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="./energy_flow/assets/icons-de67b048.svg#icon-star"></use>
                    </svg>
                    </span>
                    
                <button class="exercise-part-button"  id='${O}'>Start
                <svg class="exercise-btn-icon" width="14" height="14">
                <use href="./energy_flow/assets/icons-de67b048.svg#icon-arrow-right"></use>
                </svg>
                </button>
                </a>
                </div>

                <span class="exercise-part-name">
                <svg class="exercise-part-icon" width="24" height="24">
                    <use href="/energy_flow/assets/icons-de67b048.svg#icon-running-man"></use>
                </svg>
                <p class="exercise-name-text">${u.name.substring(0,24)+"..."}</p>
                </span>
                <ul class="exercise-describes-list">
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Burned calories:</p>
                    <p class="exercise-describing">${u.burnedCalories} / ${u.time}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Body part:</p>
                    <p class="exercise-describing">${u.bodyPart}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Target:</p>
                    <p class="exercise-describing">${u.target}</p>
                </li>
                </ul>
            </div>
            </li>
        `,"")}catch(t){console.error("Error:",t)}});I.forEach(e=>{e.addEventListener("click",s=>{s.preventDefault();const t=s.target.textContent;localStorage.removeItem("searchInput"),localStorage.removeItem("searchQuery"),A(s),t==="Muscles"?(y.style.display="none",S.style.display="none",n.style.display="none",L.style.display="flex",b.style.visibility="hidden",d.style.visibility="hidden"):t==="Body parts"?(b.style.visibility="hidden",n.innerHTML="",y.style.display="flex",S.style.display="flex",n.style.display="flex",L.style.display="none",h.style.display="none",d.style.visibility="hidden"):(y.style.display="none",S.style.display="none",n.style.display="none",b.style.visibility="hidden",d.style.visibility="hidden")})});U.addEventListener("submit",async function(e){e.preventDefault(),m=[],g=1;try{const s=y.value,i=(await N(s)).results;if(m=[...i],sessionStorage.setItem("data",JSON.stringify({results:i})),i.length===0){n.innerHTML="",console.log(i.length),n.insertAdjacentHTML("beforeend","<li class='no-result-list'><p class='no-result'>Unfortunately,<span class='no-result-span'> no results</span> were found.You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>"),h.style.display="none";return}else{d.innerHTML="",d.textContent=`${i[0].bodyPart}`.charAt(0).toUpperCase()+`${i[0].bodyPart}`.slice(1),d.style.visibility="visible",b.style.visibility="visible",h.style.display="flex",k=0;for(let r=0;r<8;r++)k++;n.innerHTML=i.reduce((r,c,p)=>r+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(c.rating)}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="./energy_flow/assets/icons-de67b048.svg#icon-star"></use>
                    </svg>
                    </span>
            
                <button class="exercise-part-button"  id='${p}'>Start
                <svg class="exercise-btn-icon" width="14" height="14">
                <use href="/energy_flow/assets/icons-de67b048.svg#icon-arrow-right"></use>
                </svg>
                </button>
                </a>
                </div>

                <!-- <svg class="exercise-btn-icon">
                <use href="/energy_flow/assets/icons-de67b048.svg#icon-arrow-right"></use>
                </svg> -->
                <span class="exercise-part-name">
                <svg class="exercise-part-icon" width="24" height="24">
                    <use href="/energy_flow/assets/icons-de67b048.svg#icon-running-man"></use>
                </svg>
                <p class="exercise-name-text">${c.name.substring(0,24)+"..."}</p>
                </span>
                <ul class="exercise-describes-list">
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Burned calories:</p>
                    <p class="exercise-describing">${c.burnedCalories} / ${c.time}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Body part:</p>
                    <p class="exercise-describing">${c.bodyPart}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Target:</p>
                    <p class="exercise-describing">${c.target}</p>
                </li>
                </ul>
            </div>
            </li>
        `,"")}}catch(s){console.error("Error:",s)}});h.addEventListener("click",async e=>{g=e.target.textContent,w=8;try{T=JSON.parse(localStorage.getItem("searchInput")).searchInput;const i=`https://energyflow.b.goit.study/api/exercises?bodypart=${T}&page=${g}&limit=${w}`,r=await fetch(i);if(r.status!==200)throw new Error("Failed to fetch data. Please try again later.");const l=(await r.json()).results;console.log(l.length),sessionStorage.setItem("data",JSON.stringify({results:l})),B=0;for(let o=0;o<8;o++)B++;n.innerHTML=l.reduce((o,a,u)=>o+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(a.rating)}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="/energy_flow/assets/icons-de67b048.svg#icon-star"></use>
                    </svg>
                    </span>
                <button class="exercise-part-button"  id='${u}'>Start
                <svg class="exercise-btn-icon" width="14" height="14">
                <use href="/energy_flow/assets/icons-de67b048.svg#icon-arrow-right"></use>
                </svg>
                </button>
                </a>
                </div>

                <span class="exercise-part-name">
                <svg class="exercise-part-icon" width="24" height="24">
                    <use href="/energy_flow/assets/icons-de67b048.svg#icon-running-man"></use>
                </svg>
                <p class="exercise-name-text">${a.name.substring(0,24)+"..."}</p>
                </span>
                <ul class="exercise-describes-list">
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Burned calories:</p>
                    <p class="exercise-describing">${a.burnedCalories} / ${a.time}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Body part:</p>
                    <p class="exercise-describing">${a.bodyPart}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Target:</p>
                    <p class="exercise-describing">${a.target}</p>
                </li>
                </ul>
            </div>
            </li>
        `,"")}catch(t){console.error("Error:",t)}});const f=document.querySelector(".modal123");function P(e){f.innerHTML=`
    <div class="pop-backdrop is-open">
    <div class="pop-ex-modal">
      <button class="pop-ex-close-btn">
        <svg
          class="pop-ex-close-btn-icon"
          width="24"
          height="24"
          aria-label="close icon"
        >
          <use href="/energy_flow/assets/icons-de67b048.svg#icon-close"></use>
        </svg>
      </button>
      <div class="pop-exercises-img">
        <img
          src="${e.gifUrl}"
          class="img-ex"
          width="295"
          height="258"
        />
      </div>

      <div class="pop-ex-content-container">
        <h2 class="pop-exercise-name">${e.name.charAt(0).toUpperCase()+e.name.slice(1)}</h2>
        <ul class="pop-ex-stars-list">
        <li><p class="pop-ex-current-rating">${e.rating}</p></li>
            <li>
              <svg
                class="pop-ex-rate-icon"
                width="18"
                height="18"
                aria-label="ratting">
                <use href="/energy_flow/assets/icons-de67b048.svg#icon-star"></use>
              </svg>
            </li>
        </ul>

        <hr class="decorate-elem" />

        <div class="pop-ex-info">
          <div class="field">
            <span class="value">Target</span>
            <span class="label">${e.target}</span>
          </div>
          <div class="field">
            <span class="value">Body Part</span>
            <span class="label">${e.bodyPart}</span>
          </div>
          <div class="field">
            <span class="value">Equipment</span>
            <span class="label">${e.equipment}</span>
          </div>
          <div class="field">
            <span class="value">Popular</span>
            <span class="label">${e.popularity}</span>
          </div>
          <div class="field">
            <span class="value">Burned Calories</span>
            <span class="label">${e.burnedCalories}</span>
          </div>
        </div>

        <hr class="decorate-elem" />

        <p class="pop-desc-exercise">
          ${e.description}
        </p>

        <div class="pop-btns-container">
          <button class="pop-add-fav">
            Add to favorites<svg class="heart-icon" width="18" height="18">
              <use href="/energy_flow/assets/icons-de67b048.svg#icon-heart"></use>
            </svg>
          </button>

          <button class="pop-rating-btn">Give a rating</button>
        </div>
      </div>
    </div>
  </div>
`}n.addEventListener("click",async e=>{e.preventDefault();const s=e.target.id,t=JSON.parse(sessionStorage.getItem("data"));if(e.target.tagName=="BUTTON"&&s==s){const i=t.results[s];P(i),J(i)}});function J(e){function s(l){console.log(l.target);const o=JSON.parse(localStorage.getItem("exercises"))||[];console.log(123),o.push(e),localStorage.setItem("exercises",JSON.stringify(o)),[...o];const a=document.querySelector(".pop-add-fav");a&&a.removeEventListener("click",s),document.querySelector(".pop-ex-close-btn"),C.success({title:"Excellent choice!",message:"The exercise has been successfully added to your favorites. Get ready for endless inspiration and great results!",position:"center"})}const t=document.querySelector(".pop-add-fav");t?t.addEventListener("click",s):console.error("Button not found");const i=document.querySelector(".pop-backdrop.is-open");async function r(){await P(e),f.innerHTML="",i.classList.remove("is-open")}i&&i.addEventListener("click",r),window.addEventListener("keydown",function(l){l.key==="Escape"&&(f.innerHTML="")});function c(){f.innerHTML=""}const p=document.querySelector(".pop-ex-close-btn");p?p.addEventListener("click",c):console.error("Close button not found")}document.addEventListener("DOMContentLoaded",async function(){const e=document.createElementNS("http://www.w3.org/2000/svg","svg"),s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href",'./img/icons.svg#icon-trash"'),e.appendChild(s),await x(),document.querySelector(".exercise-trash-button").append(e)});function A(e){I.forEach(s=>{s.classList.remove("exercise-button-active"),e.target.classList.add("exercise-button-active")})}const v=JSON.parse(localStorage.getItem("exercises"));console.log(v);const M=document.querySelector(".fav-list");document.querySelector(".favorites");function x(e){const s=JSON.parse(localStorage.getItem("exercises"));console.log(s),M.innerHTML=s.map(({bodyPart:t,name:i,target:r,burnedCalories:c,_id:p},l)=>`
    <li class="exercise-parts">
      <div class="part-container">
        <div class="exercise-head-container">
          <span class="exercise-badge">WORKOUT</span>
          <button class="exercise-trash-button">
            <svg class="exercise-trash-icon" width="16" height="16"viewBox="0 0 32 32">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.6" d="M21.333 8V6.933c0-1.493 0-2.24-.291-2.811a2.666 2.666 0 0 0-1.165-1.165c-.57-.291-1.317-.291-2.811-.291h-2.133c-1.493 0-2.24 0-2.811.291-.502.256-.91.664-1.165 1.165-.291.57-.291 1.317-.291 2.811V8m2.667 7.333V22m5.334-6.667V22M4 8h24m-2.667 0v14.933c0 2.24 0 3.36-.436 4.216a3.9962 3.9962 0 0 1-1.748 1.748c-.856.436-1.976.436-4.216.436h-5.867c-2.24 0-3.36 0-4.216-.436a3.9962 3.9962 0 0 1-1.748-1.748c-.436-.856-.436-1.976-.436-4.216V8"/>
            </svg>
          </button>
            <button class="favorite-button" id="${p}">
              Start
              <svg class="exercise-btn-icon" width="14" height="14">
                <use href="/energy_flow/assets/icons-de67b048.svg#icon-arrow-right"></use>
              </svg>
            </button>
          </a>
        </div>
        <span class="exercise-part-name">
          <svg class="exercise-part-icon" width="24" height="24">
            <use href="/energy_flow/assets/icons-de67b048.svg#icon-running-man"></use>
          </svg>
          <p class="exercise-name-text">${i}</p> 
        </span>
        <ul class="exercise-describes-list">
          <li class="exercise-describe">
            <p class="exercise-describe-category">Burned calories:</p>
            <p class="exercise-describing">${c} / 3 min</p>
          </li>
          <li class="exercise-describe">
            <p class="exercise-describe-category">Body part:</p>
            <p class="exercise-describing">${t}</p>
          </li>
          <li class="exercise-describe">
            <p class="exercise-describe-category">Target:</p>
            <p class="exercise-describing">${r}</p>
          </li>
        </ul>
      </div>
    </li>
  `).join(""),D()}x();const R=document.querySelector(".exercise-pages-counter");function D(){document.querySelectorAll(".exercise-trash-button").forEach(s=>{s.addEventListener("click",t=>{const i=t.currentTarget.getAttribute("data-index");v.splice(i,1),localStorage.setItem("exercises",JSON.stringify(v)),x(),v.length<8&&R.classList.add("visually-hidden")})})}x();const F=document.querySelector(".favorite-button");M.addEventListener("click",async e=>{if(e.target===F){e.preventDefault();const s=e.target.id;for(const t of v)t._id===s&&(console.log(t),V(t))}});const $=document.querySelector(".favorite-modal");function V(e){$.innerHTML=`
    <div class="pop-backdrop is-open">
    <div class="pop-ex-modal">
      <button class="pop-ex-close-btn fav-close-btn">
        <svg
          class="pop-ex-close-btn-icon"
          width="24"
          height="24"
          aria-label="close icon"
        >
          <use href="/energy_flow/assets/icons-de67b048.svg#icon-close"></use>
        </svg>
      </button>
      <div class="pop-exercises-img">
        <img
          src="${e.gifUrl}"
          class="img-ex"
          width="295"
          height="258"
        />
      </div>

      <div class="pop-ex-content-container">
        <h2 class="pop-exercise-name">${e.name}</h2>
        <p class="pop-ex-current-rating">${e.rating}</p>
        <ul class="pop-ex-stars-list">
            <li>
              <svg
                class="pop-ex-rate-icon"
                width="18"
                height="18"
                aria-label="ratting">
                <use href="/energy_flow/assets/icons-de67b048.svg#icon-star"></use>
              </svg>
            </li>
        </ul>

        <hr class="decorate-elem" />

        <div class="pop-ex-info">
          <div class="field">
            <span class="value">Target</span>
            <span class="label">${e.target}</span>
          </div>
          <div class="field">
            <span class="value">Body Part</span>
            <span class="label">${e.bodyPart}</span>
          </div>
          <div class="field">
            <span class="value">Equipment</span>
            <span class="label">${e.equipment}</span>
          </div>
          <div class="field">
            <span class="value">Popular</span>
            <span class="label">${e.popularity}</span>
          </div>
          <div class="field">
            <span class="value">Burned Calories</span>
            <span class="label">${e.burnedCalories}</span>
          </div>
        </div>

        <hr class="decorate-elem" />

        <p class="pop-desc-exercise">
          ${e.description}
        </p>

        <div class="pop-btns-container">
          <button class="pop-add-fav fav-remove-btn">
            Remove from<svg class="heart-icon" width="18" height="18">
              <use href="/energy_flow/assets/icons-de67b048.svg#icon-heart"></use>
            </svg>
          </button>
<button class="pop-rating-btn">Give a rating</button>
        </div>
      </div>
    </div>
  </div>
`,document.querySelector(".fav-remove-btn").addEventListener("click",function(i){console.log("clicked");const r=i.currentTarget.getAttribute("data-index");v.splice(r,1),localStorage.setItem("exercises",JSON.stringify(v)),x(),$.innerHTML=""}),document.querySelector(".fav-close-btn").addEventListener("click",function(){$.innerHTML=""})}
//# sourceMappingURL=exersises-74c541ab.js.map
