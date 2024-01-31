import{i as M}from"./vendor-db25513e.js";import{musclesGroup as H,bodyPart as N}from"./api-8d58433a.js";const A=document.querySelector(".exercise-cards-list"),$=document.querySelector(".exercise-cards-list"),h=document.querySelector(".exercise-pages-counter"),U=document.querySelector(".exercise-form"),S=document.querySelector(".exercise-input-button"),y=document.querySelector(".exercise-input"),B=document.querySelectorAll(".exercise-button"),o=document.querySelector(".exercise-parts-list"),x=document.querySelector(".exercise-log-span"),d=document.querySelector(".exercise-title-span");document.querySelector(".exercise-part-button");document.querySelector(".pop-add-fav");document.querySelector(".pop-ex-close-btn");document.querySelector(".pop-backdrop");document.querySelector(".backdrop");document.querySelector(".pop-rating-btn");document.querySelector(".pop-up-close-btn");document.querySelector(".pop-ex-info");document.querySelector(".modal123");document.querySelector(".pop-backdrop.is-open");let g,T="",m=[],f,k=0,q=0,E=0,I=0;localStorage.removeItem("searchInput");localStorage.removeItem("searchQuery");sessionStorage.removeItem("data");A.addEventListener("click",async e=>{e.preventDefault(),m=[],g=1;try{const r=(await H(e)).results;m=[...r],d.innerHTML="",d.textContent=`${r[0].target}`.charAt(0).toUpperCase()+`${r[0].target}`.slice(1),sessionStorage.setItem("data",JSON.stringify({results:r})),k=0;for(let t=0;t<8;t++)k++;if(r.length===0)throw new Error({title:"No Results",message:"No images found. Please try a different search term."});d.style.visibility="visible",$.style.display="none",o.style.display="flex",x.style.visibility="visible",o.innerHTML=r.reduce((t,i,a)=>t+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(i.rating)}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="/energy_flow/assets/icons-de67b048.svg#icon-star"></use>
                    </svg>
                    </span>

                <a class="exercise-part-link" href="../partials/pop-up-exersise-card.html">
                <button class="exercise-part-button"  id='${a}'>Start
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
                <p class="exercise-name-text">${i.name.substring(0,24)+"..."}</p>
                </span>
                <ul class="exercise-describes-list">
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Burned calories:</p>
                    <p class="exercise-describing">${i.burnedCalories} / ${i.time}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Body part:</p>
                    <p class="exercise-describing">${i.bodyPart}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Target:</p>
                    <p class="exercise-describing">${i.target}</p>
                </li>
                </ul>
            </div>
            </li>
        `,"")}catch(s){console.error("Error:",s)}});h.addEventListener("click",async e=>{g=e.target.textContent,console.log(g),f=8;try{const t=JSON.parse(localStorage.getItem("searchQuery")).searchQuery;console.log(t);const i=`https://energyflow.b.goit.study/api/exercises?muscles=${t}&page=${g}&limit=${f}`,a=await fetch(i);if(a.status!==200)throw new Error("Failed to fetch data. Please try again later.");const n=(await a.json()).results;sessionStorage.setItem("data",JSON.stringify({results:n})),q=0;for(let c=0;c<8;c++)q++;o.innerHTML=n.reduce((c,u,C)=>c+`
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
                    <a class="exercise-part-link" href="../partials/pop-up-exersise-card.html">
                <button class="exercise-part-button"  id='${C}'>Start
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
        `,"")}catch(r){console.error("Error:",r)}});B.forEach(e=>{e.addEventListener("click",s=>{s.preventDefault();const r=s.target.textContent;localStorage.removeItem("searchInput"),localStorage.removeItem("searchQuery"),W(s),r==="Muscles"?(y.style.display="none",S.style.display="none",o.style.display="none",$.style.display="flex",x.style.visibility="hidden",d.style.visibility="hidden"):r==="Body parts"?(x.style.visibility="hidden",o.innerHTML="",y.style.display="flex",S.style.display="flex",o.style.display="flex",$.style.display="none",h.style.display="none",d.style.visibility="hidden"):(y.style.display="none",S.style.display="none",o.style.display="none",x.style.visibility="hidden",d.style.visibility="hidden")})});U.addEventListener("submit",async function(e){e.preventDefault(),m=[],g=1;try{const s=y.value,t=(await N(s)).results;if(m=[...t],sessionStorage.setItem("data",JSON.stringify({results:t})),t.length===0){o.innerHTML="",console.log(t.length),o.insertAdjacentHTML("beforeend","<li class='no-result-list'><p class='no-result'>Unfortunately,<span class='no-result-span'> no results</span> were found.You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>"),h.style.display="none";return}else{d.innerHTML="",d.textContent=`${t[0].bodyPart}`.charAt(0).toUpperCase()+`${t[0].bodyPart}`.slice(1),d.style.visibility="visible",x.style.visibility="visible",h.style.display="flex",E=0;for(let i=0;i<8;i++)E++;o.innerHTML=t.reduce((i,a,p)=>i+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(a.rating)}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="./energy_flow/assets/icons-de67b048.svg#icon-star"></use>
                    </svg>
                    </span>
                <a class="exercise-part-link" href="../partials/pop-up-exersise-card.html">
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
        `,"")}}catch(s){console.error("Error:",s)}});h.addEventListener("click",async e=>{g=e.target.textContent,f=8;try{T=JSON.parse(localStorage.getItem("searchInput")).searchInput;const t=`https://energyflow.b.goit.study/api/exercises?bodypart=${T}&page=${g}&limit=${f}`,i=await fetch(t);if(i.status!==200)throw new Error("Failed to fetch data. Please try again later.");const l=(await i.json()).results;console.log(l.length),sessionStorage.setItem("data",JSON.stringify({results:l})),I=0;for(let n=0;n<8;n++)I++;o.innerHTML=l.reduce((n,c,u)=>n+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(c.rating)}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="/energy_flow/assets/icons-de67b048.svg#icon-star"></use>
                    </svg>
                    </span>
                    <a class="exercise-part-link" href="./partials/pop-up-exersise-card.html">
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
        `,"")}catch(r){console.error("Error:",r)}});const v=document.querySelector(".modal123");function O(e){v.innerHTML=`
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
`}o.addEventListener("click",async e=>{e.preventDefault();const s=e.target.id,r=JSON.parse(sessionStorage.getItem("data"));if(e.target.tagName=="BUTTON"&&s==s){const t=r.results[s];O(t),J(t)}});function J(e){function s(l){console.log(l.target);const n=JSON.parse(localStorage.getItem("exercises"))||[];console.log(123),n.push(e),localStorage.setItem("exercises",JSON.stringify(n)),[...n];const c=document.querySelector(".pop-add-fav");c&&c.removeEventListener("click",s),document.querySelector(".pop-ex-close-btn"),M.success({title:"Excellent choice!",message:"The exercise has been successfully added to your favorites. Get ready for endless inspiration and great results!",position:"center"})}const r=document.querySelector(".pop-add-fav");r?r.addEventListener("click",s):console.error("Button not found");const t=document.querySelector(".pop-backdrop.is-open");async function i(){await O(e),v.innerHTML="",t.classList.remove("is-open")}t&&t.addEventListener("click",i),window.addEventListener("keydown",function(l){l.key==="Escape"&&(v.innerHTML="")});function a(){v.innerHTML=""}const p=document.querySelector(".pop-ex-close-btn");p?p.addEventListener("click",a):console.error("Close button not found")}const b=JSON.parse(localStorage.getItem("exercises"));console.log(b);const L=document.querySelector(".fav-list"),P=document.querySelector(".favorites");function w(e){b.length===0?R():(L.innerHTML=b.slice(0,8).map(({bodyPart:s,name:r,target:t,burnedCalories:i},a)=>`
    <li class="exercise-parts">
      <div class="part-container">
        <div class="exercise-head-container">
          <span class="exercise-badge">WORKOUT</span>
          <button class="exercise-trash-button">
             <svg class="exercise-trash-icon" width="16" height="16">
              <use href="/icons.svg#icon-trash"></use>
            </svg>

          </button>
          <a
            class="exercise-part-link"
            href="./partials/pop-up-exercise-card.html"
          >
            <button class="exercise-part-button">
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
          <p class="exercise-name-text">${r.substring(0,24)+"..."}</p> 
        </span>
        <ul class="exercise-describes-list">
          <li class="exercise-describe">
            <p class="exercise-describe-category">Burned calories:</p>
            <p class="exercise-describing">${i} / 3 min</p>
          </li>
          <li class="exercise-describe">
            <p class="exercise-describe-category">Body part:</p>
            <p class="exercise-describing">${s}</p>
          </li>
          <li class="exercise-describe">
            <p class="exercise-describe-category">Target:</p>
            <p class="exercise-describing">${t}</p>
          </li>
        </ul>
      </div>
    </li>
  `).join(""),_())}w();b.length>8&&D();P.addEventListener("click",function(e){if(e.target.classList.contains("exercise-number-button")){const s=parseInt(e.target.id),r=(s-1)*8,t=s*8;L.innerHTML=b.slice(r,t).map(({bodyPart:i,name:a,target:p,burnedCalories:l},n)=>`
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
                <use href="/energy_flow/assets/icons-de67b048.svg#icon-arrow-right"></use>
              </svg>
            </button>
          </a>
        </div>
        <span class="exercise-part-name">
          <svg class="exercise-part-icon" width="24" height="24">
            <use href="/energy_flow/assets/icons-de67b048.svg#icon-running-man"></use>
          </svg>
          <p class="exercise-name-text">${a.substring(0,24)+"..."}</p> 
        </span>
        <ul class="exercise-describes-list">
          <li class="exercise-describe">
            <p class="exercise-describe-category">Burned calories:</p>
            <p class="exercise-describing">${l} / 3 min</p>
          </li>
          <li class="exercise-describe">
            <p class="exercise-describe-category">Body part:</p>
            <p class="exercise-describing">${i}</p>
          </li>
          <li class="exercise-describe">
            <p class="exercise-describe-category">Target:</p>
            <p class="exercise-describing">${p}</p>
          </li>
        </ul>
      </div>
    </li>
  `).join(""),_()}});function _(){document.querySelectorAll(".exercise-trash-button").forEach((s,r)=>{s.setAttribute("data-index",r),s.addEventListener("click",t=>{const i=t.currentTarget.getAttribute("data-index");b.splice(i,1),localStorage.setItem("exercises",JSON.stringify(b)),w()})})}w();function R(){L.innerHTML=`
      <div class="empty-content-fav">
        <img
        class="dumbbell-favorites-img"
        srcset="

          /energy_flow/blob/main/src/img/favorites/dumbbell-tab-desc.png?raw=true   116w,
          /energy_flow/blob/main/src/img/favorites/dumbbell-tab-desc@2x.png?raw=true    231w,
          /energy_flow/blob/main/src/img/favorites/dumbbell-mob.png?raw=true   85w,
          /energy_flow/blob/main/src/img/favorites/dumbbell-mob@2x.png?raw=true  170w
        "
        src="/energy_flow/blob/main/src/img/favorites/dumbbell-mob.png?raw=true"

        sizes="(min-width: 768px) 116px, (max-width: 767px) 85px"
        alt="dumbbell icon"
      />
      <p class='no-card-in-storage'>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>
      </div>`}function D(){P.insertAdjacentHTML("beforeend",`<ul class="exercise-pages-counter">
  <li class="exercise-page-number">
      <button id="1" class="exercise-number-button first-btn">
      1
    </button>
  </li>
  <li class="exercise-page-number">
    <button id="2" class="exercise-number-button second-btn">
      2
    </button>
  </li>
  <li class="exercise-page-number">
    <button id="3" class="exercise-number-button third-btn">
      3
    </button>
  </li>
</ul>`)}document.addEventListener("DOMContentLoaded",async function(){const e=document.createElementNS("http://www.w3.org/2000/svg","svg"),s=document.createElementNS("http://www.w3.org/2000/svg","use");await s.setAttributeNS("http://www.w3.org/1999/xlink","href","./img/icons.svg#icon-trash"),e.appendChild(s),await w(),document.querySelector(".exercise-trash-button").append(e)});function W(e){B.forEach(s=>{s.classList.remove("exercise-button-active"),e.target.classList.add("exercise-button-active")})}
//# sourceMappingURL=exersises-d8dbd255.js.map
