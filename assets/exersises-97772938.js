import{i as O}from"./vendor-db25513e.js";import{musclesGroup as E,bodyPart as B}from"./api-8d58433a.js";const C=document.querySelector(".exercise-cards-list"),f=document.querySelector(".exercise-cards-list"),h=document.querySelector(".exercise-pages-counter"),M=document.querySelector(".exercise-form"),m=document.querySelector(".exercise-input-button"),v=document.querySelector(".exercise-input"),N=document.querySelectorAll(".exercise-button"),a=document.querySelector(".exercise-parts-list"),x=document.querySelector(".exercise-log-span"),o=document.querySelector(".exercise-title-span");document.querySelector(".exercise-part-button");document.querySelector(".pop-add-fav");document.querySelector(".pop-ex-close-btn");document.querySelector(".pop-backdrop");document.querySelector(".backdrop");document.querySelector(".pop-rating-btn");document.querySelector(".pop-up-close-btn");document.querySelector(".pop-ex-info");document.querySelector(".modal123");document.querySelector(".pop-backdrop.is-open");let u,w="",b=[],y,T=0,q=0,I=0,L=0;localStorage.removeItem("searchInput");localStorage.removeItem("searchQuery");sessionStorage.removeItem("data");C.addEventListener("click",async e=>{e.preventDefault(),b=[],u=1;try{const i=(await E(e)).results;b=[...i],o.innerHTML="",o.textContent=`${i[0].target}`.charAt(0).toUpperCase()+`${i[0].target}`.slice(1),sessionStorage.setItem("data",JSON.stringify({results:i})),T=0;for(let s=0;s<8;s++)T++;if(i.length===0)throw new Error({title:"No Results",message:"No images found. Please try a different search term."});o.style.visibility="visible",f.style.display="none",a.style.display="flex",x.style.visibility="visible",a.innerHTML=i.reduce((s,r,c)=>s+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(r.rating)}</p>
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
        `,"")}catch(t){console.error("Error:",t)}});h.addEventListener("click",async e=>{u=e.target.textContent,console.log(u),y=8;try{const s=JSON.parse(localStorage.getItem("searchQuery")).searchQuery;console.log(s);const r=`https://energyflow.b.goit.study/api/exercises?muscles=${s}&page=${u}&limit=${y}`,c=await fetch(r);if(c.status!==200)throw new Error("Failed to fetch data. Please try again later.");const g=(await c.json()).results;sessionStorage.setItem("data",JSON.stringify({results:g})),q=0;for(let n=0;n<8;n++)q++;a.innerHTML=g.reduce((n,p,k)=>n+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(p.rating)}</p>
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
                <p class="exercise-name-text">${p.name.substring(0,24)+"..."}</p>
                </span>
                <ul class="exercise-describes-list">
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Burned calories:</p>
                    <p class="exercise-describing">${p.burnedCalories} / ${p.time}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Body part:</p>
                    <p class="exercise-describing">${p.bodyPart}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Target:</p>
                    <p class="exercise-describing">${p.target}</p>
                </li>
                </ul>
            </div>
            </li>
        `,"")}catch(i){console.error("Error:",i)}});N.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const i=t.target.textContent;localStorage.removeItem("searchInput"),localStorage.removeItem("searchQuery"),i==="Muscles"?(v.style.display="none",m.style.display="none",a.style.display="none",f.style.display="flex",x.style.visibility="hidden",o.style.visibility="hidden"):i==="Body parts"?(x.style.visibility="hidden",a.innerHTML="",v.style.display="flex",m.style.display="flex",a.style.display="flex",f.style.display="none",h.style.display="none",o.style.visibility="hidden"):(v.style.display="none",m.style.display="none",a.style.display="none",x.style.visibility="hidden",o.style.visibility="hidden")})});M.addEventListener("submit",async function(e){e.preventDefault(),b=[],u=1;try{const t=v.value,s=(await B(t)).results;if(b=[...s],sessionStorage.setItem("data",JSON.stringify({results:s})),s.length===0){a.innerHTML="",console.log(s.length),a.insertAdjacentHTML("beforeend","<li class='no-result-list'><p class='no-result'>Unfortunately,<span class='no-result-span'> no results</span> were found.You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>"),h.style.display="none";return}else{o.innerHTML="",o.textContent=`${s[0].bodyPart}`.charAt(0).toUpperCase()+`${s[0].bodyPart}`.slice(1),o.style.visibility="visible",x.style.visibility="visible",h.style.display="flex",I=0;for(let r=0;r<8;r++)I++;a.innerHTML=s.reduce((r,c,l)=>r+`
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
                <button class="exercise-part-button"  id='${l}'>Start
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
        `,"")}}catch(t){console.error("Error:",t)}});h.addEventListener("click",async e=>{u=e.target.textContent,y=8;try{w=JSON.parse(localStorage.getItem("searchInput")).searchInput;const s=`https://energyflow.b.goit.study/api/exercises?bodypart=${w}&page=${u}&limit=${y}`,r=await fetch(s);if(r.status!==200)throw new Error("Failed to fetch data. Please try again later.");const d=(await r.json()).results;console.log(d.length),sessionStorage.setItem("data",JSON.stringify({results:d})),L=0;for(let g=0;g<8;g++)L++;a.innerHTML=d.reduce((g,n,p)=>g+`
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
                    <a class="exercise-part-link" href="./partials/pop-up-exersise-card.html">
                <button class="exercise-part-button"  id='${p}'>Start
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
        `,"")}catch(i){console.error("Error:",i)}});const P=document.querySelector(".modal123");function H(e){P.innerHTML=`
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
        <h2 class="pop-exercise-name">${e.name}</h2>
        <p class="pop-ex-current-rating">${e.rating}</p>
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
              <use href="./img/icons.svg#icon-heart"></use>
            </svg>
          </button>

          <button class="pop-rating-btn">Give a rating</button>
        </div>
      </div>
    </div>
  </div>
`}function J(e){function t(c){console.log(c.target);const l=JSON.parse(localStorage.getItem("exercises"))||[];console.log(123),l.push(e),localStorage.setItem("exercises",JSON.stringify(l)),[...l];const d=document.querySelector(".pop-add-fav");d&&d.removeEventListener("click",t),document.querySelector(".pop-ex-close-btn"),O.success({title:"Excellent choice!",message:"The exercise has been successfully added to your favorites. Get ready for endless inspiration and great results!",position:"center"})}const i=document.querySelector(".pop-add-fav");i?i.addEventListener("click",t):console.error("Button not found");function s(){P.innerHTML=""}const r=document.querySelector(".pop-ex-close-btn");r?r.addEventListener("click",s):console.error("Close button not found")}a.addEventListener("click",async e=>{e.preventDefault();const t=e.target.id,i=JSON.parse(sessionStorage.getItem("data"));if(e.target.tagName=="BUTTON"&&t==t){const s=i.results[t];H(s),J(s)}});const S=JSON.parse(localStorage.getItem("exercises"));console.log(S);const U=document.querySelector(".fav-list");document.querySelector(".favorites");function $(e){const t=JSON.parse(localStorage.getItem("exercises"));console.log(t),U.innerHTML=t.map(({bodyPart:i,name:s,target:r,burnedCalories:c},l)=>`
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
          <p class="exercise-name-text">${s}</p> 
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
            <p class="exercise-describing">${r}</p>
          </li>
        </ul>
      </div>
    </li>
  `).join(""),A()}$();function A(){document.querySelectorAll(".exercise-trash-button").forEach(t=>{t.addEventListener("click",i=>{const s=i.currentTarget.getAttribute("data-index");S.splice(s,1),localStorage.setItem("exercises",JSON.stringify(S)),$()})})}$();
//# sourceMappingURL=exersises-97772938.js.map
