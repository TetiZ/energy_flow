import{musclesGroup as O,bodyPart as E}from"./api-8d58433a.js";const M=document.querySelector(".exercise-cards-list"),f=document.querySelector(".exercise-cards-list"),u=document.querySelector(".exercise-pages-counter"),B=document.querySelector(".exercise-form"),y=document.querySelector(".exercise-input-button"),h=document.querySelector(".exercise-input"),N=document.querySelectorAll(".exercise-button"),a=document.querySelector(".exercise-parts-list"),g=document.querySelector(".exercise-log-span"),l=document.querySelector(".exercise-title-span");document.querySelector(".exercise-part-button");const $=document.querySelector(".pop-add-fav"),C=document.querySelector(".pop-ex-close-btn");document.querySelector(".pop-backdrop");document.querySelector(".backdrop");document.querySelector(".pop-rating-btn");document.querySelector(".pop-up-close-btn");document.querySelector(".pop-ex-info");const S=document.querySelector(".modal123");document.querySelector(".pop-backdrop.is-open");let d,w="",v=[],b,T=0,I=0,L=0,q=0;localStorage.removeItem("searchInput");localStorage.removeItem("searchQuery");sessionStorage.removeItem("data");M.addEventListener("click",async s=>{s.preventDefault(),v=[],d=1;try{const i=(await O(s)).results;v=[...i],l.innerHTML="",l.textContent=`${i[0].target}`,sessionStorage.setItem("data",JSON.stringify({results:i})),T=0;for(let e=0;e<8;e++)T++;if(i.length===0)throw new Error({title:"No Results",message:"No images found. Please try a different search term."});l.style.visibility="visible",f.style.display="none",a.style.display="flex",g.style.visibility="visible",a.innerHTML=i.reduce((e,t,c)=>e+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(t.rating)}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="./img/icons.svg#icon-star"></use>
                    </svg>
                    </span>

                <a class="exercise-part-link" href="../partials/pop-up-exersise-card.html">
                <button class="exercise-part-button"  id='${c}'>Start
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
                <p class="exercise-name-text">${t.name.substring(0,24)+"..."}</p>
                </span>
                <ul class="exercise-describes-list">
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Burned calories:</p>
                    <p class="exercise-describing">${t.burnedCalories} / ${t.time}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Body part:</p>
                    <p class="exercise-describing">${t.bodyPart}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Target:</p>
                    <p class="exercise-describing">${t.target}</p>
                </li>
                </ul>
            </div>
            </li>
        `,"")}catch(r){console.error("Error:",r)}});u.addEventListener("click",async s=>{d=s.target.textContent,console.log(d),b=8;try{const e=JSON.parse(localStorage.getItem("searchQuery")).searchQuery;console.log(e);const t=`https://energyflow.b.goit.study/api/exercises?muscles=${e}&page=${d}&limit=${b}`,c=await fetch(t);if(c.status!==200)throw new Error("Failed to fetch data. Please try again later.");const p=(await c.json()).results;sessionStorage.setItem("data",JSON.stringify({results:p})),I=0;for(let n=0;n<8;n++)I++;a.innerHTML=p.reduce((n,o,k)=>n+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(o.rating)}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="./img/icons.svg#icon-star"></use>
                    </svg>
                    </span>
                    <a class="exercise-part-link" href="../partials/pop-up-exersise-card.html">
                <button class="exercise-part-button"  id='${k}'>Start
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
                <p class="exercise-name-text">${o.name.substring(0,24)+"..."}</p>
                </span>
                <ul class="exercise-describes-list">
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Burned calories:</p>
                    <p class="exercise-describing">${o.burnedCalories} / ${o.time}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Body part:</p>
                    <p class="exercise-describing">${o.bodyPart}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Target:</p>
                    <p class="exercise-describing">${o.target}</p>
                </li>
                </ul>
            </div>
            </li>
        `,"")}catch(i){console.error("Error:",i)}});N.forEach(s=>{s.addEventListener("click",r=>{r.preventDefault();const i=r.target.textContent;localStorage.removeItem("searchInput"),localStorage.removeItem("searchQuery"),i==="Muscles"?(h.style.display="none",y.style.display="none",a.style.display="none",f.style.display="flex",g.style.visibility="hidden",l.style.visibility="hidden"):i==="Body parts"?(g.style.visibility="hidden",a.innerHTML="",h.style.display="flex",y.style.display="flex",a.style.display="flex",f.style.display="none",u.style.display="none",l.style.visibility="hidden"):(h.style.display="none",y.style.display="none",a.style.display="none",g.style.visibility="hidden",l.style.visibility="hidden")})});B.addEventListener("submit",async function(s){s.preventDefault(),v=[],d=1;try{const r=h.value,e=(await E(r)).results;if(v=[...e],sessionStorage.setItem("data",JSON.stringify({results:e})),e.length===0){a.innerHTML="",console.log(e.length),a.insertAdjacentHTML("beforeend","<li class='no-result-list'><p class='no-result'>Unfortunately,<span class='no-result-span'> no results</span> were found.You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>"),u.style.display="none";return}else{l.innerHTML="",l.textContent=`${e[0].bodyPart}`,l.style.visibility="visible",g.style.visibility="visible",u.style.display="flex",L=0;for(let t=0;t<8;t++)L++;a.innerHTML=e.reduce((t,c,m)=>t+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(c.rating)}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="./img/icons.svg#icon-star"></use>
                    </svg>
                    </span>
                <a class="exercise-part-link" href="../partials/pop-up-exersise-card.html">
                <button class="exercise-part-button"  id='${m}'>Start
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
        `,"")}}catch(r){console.error("Error:",r)}});u.addEventListener("click",async s=>{d=s.target.textContent,b=8;try{w=JSON.parse(localStorage.getItem("searchInput")).searchInput;const e=`https://energyflow.b.goit.study/api/exercises?bodypart=${w}&page=${d}&limit=${b}`,t=await fetch(e);if(t.status!==200)throw new Error("Failed to fetch data. Please try again later.");const x=(await t.json()).results;console.log(x.length),sessionStorage.setItem("data",JSON.stringify({results:x})),q=0;for(let p=0;p<8;p++)q++;a.innerHTML=x.reduce((p,n,o)=>p+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(n.rating)}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="./img/icons.svg#icon-star"></use>
                    </svg>
                    </span>
                    <a class="exercise-part-link" href="../partials/pop-up-exersise-card.html">
                <button class="exercise-part-button"  id='${o}'>Start
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
                <p class="exercise-name-text">${n.name.substring(0,24)+"..."}</p>
                </span>
                <ul class="exercise-describes-list">
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Burned calories:</p>
                    <p class="exercise-describing">${n.burnedCalories} / ${n.time}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Body part:</p>
                    <p class="exercise-describing">${n.bodyPart}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Target:</p>
                    <p class="exercise-describing">${n.target}</p>
                </li>
                </ul>
            </div>
            </li>
        `,"")}catch(i){console.error("Error:",i)}});const P=document.querySelector(".modal123");function H(s){P.innerHTML=`
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
          src="${s.gifUrl}"
          class="img-ex"
          width="295"
          height="258"
        />
      </div>

      <div class="pop-ex-content-container">
        <h2 class="pop-exercise-name">${s.name}</h2>
        <p class="pop-ex-current-rating">${s.rating}</p>
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
            <span class="label">${s.target}</span>
          </div>
          <div class="field">
            <span class="value">Body Part</span>
            <span class="label">${s.bodyPart}</span>
          </div>
          <div class="field">
            <span class="value">Equipment</span>
            <span class="label">${s.equipment}</span>
          </div>
          <div class="field">
            <span class="value">Popular</span>
            <span class="label">${s.popularity}</span>
          </div>
          <div class="field">
            <span class="value">Burned Calories</span>
            <span class="label">${s.burnedCalories}</span>
          </div>
        </div>

        <hr class="decorate-elem" />

        <p class="pop-desc-exercise">
          ${s.description}
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
`}localStorage.removeItem("exercises");function U(s){const r=i=>{if(console.log(i.target),console.log($),$){const e=JSON.parse(localStorage.getItem("exercises"))||[];console.log(123),e.push(s),localStorage.setItem("exercises",JSON.stringify(e)),[...e],S.removeEventListener("click",r)}else return};S.addEventListener("click",r)}a.addEventListener("click",async s=>{s.preventDefault();const r=s.target.id,i=JSON.parse(sessionStorage.getItem("data"));if(s.target.tagName=="BUTTON"){if(r==r){const e=i.results[r];H(e),U(e)}S.addEventListener("click",e=>{console.log(e.target),e.target.tagName=="BUTTON",C&&(P.innerHTML="")})}});const J=document.querySelector(".fav-list"),R=document.querySelector("#Favorites");R.addEventListener("click",F);function F(s){const r=JSON.parse(localStorage.getItem("exercises"));J.innerHTML=r.map(({bodyPart:i,name:e,target:t,burnedCalories:c})=>`
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
          <p class="exercise-name-text">${e}</p> 
        </span>
        <ul class="exercise-describes-list">
          <li class="exercise-describe">
            <p class="exercise-describe-category">Burned calories:</p>
            <p class="exercise-describing">${c} / 3 min</p>
          </li>
          <li class="exercise-describe">
            <p class="exercise-describe-category">Body part:</p>
            <p class="exercise-describing">${i}</p>
          </li>
          <li class="exercise-describe">
            <p class="exercise-describe-category">Target:</p>
            <p class="exercise-describing">${t}</p>
          </li>
        </ul>
      </div>
    </li>
  `).join("")}
//# sourceMappingURL=exersises-6ef85a21.js.map
