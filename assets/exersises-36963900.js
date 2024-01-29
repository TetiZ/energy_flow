import{i as M}from"./vendor-ad859c2f.js";import{musclesGroup as N,bodyPart as C}from"./api-8d58433a.js";const H=document.querySelector(".exercise-cards-list"),S=document.querySelector(".exercise-cards-list"),u=document.querySelector(".exercise-pages-counter"),U=document.querySelector(".exercise-form"),f=document.querySelector(".exercise-input-button"),h=document.querySelector(".exercise-input"),J=document.querySelectorAll(".exercise-button"),c=document.querySelector(".exercise-parts-list"),g=document.querySelector(".exercise-log-span"),o=document.querySelector(".exercise-title-span");document.querySelector(".exercise-part-button");const $=document.querySelector(".pop-add-fav"),A=document.querySelector(".pop-ex-close-btn");document.querySelector(".pop-backdrop");document.querySelector(".backdrop");document.querySelector(".pop-rating-btn");document.querySelector(".pop-up-close-btn");document.querySelector(".pop-ex-info");const w=document.querySelector(".modal123");document.querySelector(".pop-backdrop.is-open");let d,T="",m=[],v,L=0,I=0,q=0,k=0;localStorage.removeItem("searchInput");localStorage.removeItem("searchQuery");sessionStorage.removeItem("data");H.addEventListener("click",async s=>{s.preventDefault(),m=[],d=1;try{const i=(await N(s)).results;m=[...i],o.innerHTML="",o.textContent=`${i[0].target}`.charAt(0).toUpperCase()+`${i[0].target}`.slice(1),sessionStorage.setItem("data",JSON.stringify({results:i})),L=0;for(let e=0;e<8;e++)L++;if(i.length===0)throw new Error({title:"No Results",message:"No images found. Please try a different search term."});o.style.visibility="visible",S.style.display="none",c.style.display="flex",g.style.visibility="visible",c.innerHTML=i.reduce((e,r,a)=>e+`
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
                <button class="exercise-part-button"  id='${a}'>Start
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
        `,"")}catch(t){console.error("Error:",t)}});u.addEventListener("click",async s=>{d=s.target.textContent,console.log(d),v=8;try{const e=JSON.parse(localStorage.getItem("searchQuery")).searchQuery;console.log(e);const r=`https://energyflow.b.goit.study/api/exercises?muscles=${e}&page=${d}&limit=${v}`,a=await fetch(r);if(a.status!==200)throw new Error("Failed to fetch data. Please try again later.");const p=(await a.json()).results;sessionStorage.setItem("data",JSON.stringify({results:p})),I=0;for(let n=0;n<8;n++)I++;c.innerHTML=p.reduce((n,l,B)=>n+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(l.rating)}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="./img/icons.svg#icon-star"></use>
                    </svg>
                    </span>
                    <a class="exercise-part-link" href="../partials/pop-up-exersise-card.html">
                <button class="exercise-part-button"  id='${B}'>Start
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
                <p class="exercise-name-text">${l.name.substring(0,24)+"..."}</p>
                </span>
                <ul class="exercise-describes-list">
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Burned calories:</p>
                    <p class="exercise-describing">${l.burnedCalories} / ${l.time}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Body part:</p>
                    <p class="exercise-describing">${l.bodyPart}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Target:</p>
                    <p class="exercise-describing">${l.target}</p>
                </li>
                </ul>
            </div>
            </li>
        `,"")}catch(i){console.error("Error:",i)}});J.forEach(s=>{s.addEventListener("click",t=>{t.preventDefault();const i=t.target.textContent;localStorage.removeItem("searchInput"),localStorage.removeItem("searchQuery"),i==="Muscles"?(h.style.display="none",f.style.display="none",c.style.display="none",S.style.display="flex",g.style.visibility="hidden",o.style.visibility="hidden"):i==="Body parts"?(g.style.visibility="hidden",c.innerHTML="",h.style.display="flex",f.style.display="flex",c.style.display="flex",S.style.display="none",u.style.display="none",o.style.visibility="hidden"):(h.style.display="none",f.style.display="none",c.style.display="none",g.style.visibility="hidden",o.style.visibility="hidden")})});U.addEventListener("submit",async function(s){s.preventDefault(),m=[],d=1;try{const t=h.value,e=(await C(t)).results;if(m=[...e],sessionStorage.setItem("data",JSON.stringify({results:e})),e.length===0){c.innerHTML="",console.log(e.length),c.insertAdjacentHTML("beforeend","<li class='no-result-list'><p class='no-result'>Unfortunately,<span class='no-result-span'> no results</span> were found.You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>"),u.style.display="none";return}else{o.innerHTML="",o.textContent=`${e[0].bodyPart}`.charAt(0).toUpperCase()+`${e[0].bodyPart}`.slice(1),o.style.visibility="visible",g.style.visibility="visible",u.style.display="flex",q=0;for(let r=0;r<8;r++)q++;c.innerHTML=e.reduce((r,a,x)=>r+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(a.rating)}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="./img/icons.svg#icon-star"></use>
                    </svg>
                    </span>
                <a class="exercise-part-link" href="../partials/pop-up-exersise-card.html">
                <button class="exercise-part-button"  id='${x}'>Start
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
        `,"")}}catch(t){console.error("Error:",t)}});u.addEventListener("click",async s=>{d=s.target.textContent,v=8;try{T=JSON.parse(localStorage.getItem("searchInput")).searchInput;const e=`https://energyflow.b.goit.study/api/exercises?bodypart=${T}&page=${d}&limit=${v}`,r=await fetch(e);if(r.status!==200)throw new Error("Failed to fetch data. Please try again later.");const b=(await r.json()).results;console.log(b.length),sessionStorage.setItem("data",JSON.stringify({results:b})),k=0;for(let p=0;p<8;p++)k++;c.innerHTML=b.reduce((p,n,l)=>p+`
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
                <button class="exercise-part-button"  id='${l}'>Start
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
        `,"")}catch(i){console.error("Error:",i)}});const O=document.querySelector(".modal123");function R(s){O.innerHTML=`
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
`}function j(s){const t=i=>{if(console.log(i.target),console.log($),$){const e=JSON.parse(localStorage.getItem("exercises"))||[];console.log(123),e.push(s),localStorage.setItem("exercises",JSON.stringify(e)),[...e],w.removeEventListener("click",t),M.success({title:"Excellent choice!",message:"The exercise has been successfully added to your favorites. Get ready for endless inspiration and great results!",position:"center"})}else return};w.addEventListener("click",t)}c.addEventListener("click",async s=>{s.preventDefault();const t=s.target.id,i=JSON.parse(sessionStorage.getItem("data"));if(s.target.tagName=="BUTTON"){if(t==t){const e=i.results[t];R(e),j(e)}w.addEventListener("click",e=>{console.log(e.target),(e.target.tagName=="BUTTON"||e.target.tagName=="SVG"||e.target.tagName=="USE")&&A&&(O.innerHTML="")})}});const y=JSON.parse(localStorage.getItem("exercises"));console.log(y);const P=document.querySelector(".fav-list"),D=document.querySelector(".favorites");function E(s){const t=JSON.parse(localStorage.getItem("exercises"));console.log(t),P.innerHTML=t.map(({bodyPart:i,name:e,target:r,burnedCalories:a},x)=>`
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
            <p class="exercise-describing">${a} / 3 min</p>
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
  `).join(""),F()}E();function F(){document.querySelectorAll(".exercise-trash-button").forEach(t=>{t.addEventListener("click",i=>{const e=i.currentTarget.getAttribute("data-index");y.splice(e,1),localStorage.setItem("exercises",JSON.stringify(y)),E()})})}y.length===0?P.insertAdjacentHTML("beforeend",` <img
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
      <p class='no-card-in-storage'>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>`):D.insertAdjacentHTML("beforeend",`<ul class="exercise-pages-counter">
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
`);
//# sourceMappingURL=exersises-36963900.js.map
