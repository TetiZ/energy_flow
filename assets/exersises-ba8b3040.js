import{i as E}from"./vendor-ad859c2f.js";import{musclesGroup as O,bodyPart as M}from"./api-8d58433a.js";const N=document.querySelector(".exercise-cards-list"),f=document.querySelector(".exercise-cards-list"),u=document.querySelector(".exercise-pages-counter"),B=document.querySelector(".exercise-form"),m=document.querySelector(".exercise-input-button"),h=document.querySelector(".exercise-input"),C=document.querySelectorAll(".exercise-button"),c=document.querySelector(".exercise-parts-list"),g=document.querySelector(".exercise-log-span"),o=document.querySelector(".exercise-title-span");document.querySelector(".exercise-part-button");const $=document.querySelector(".pop-add-fav"),H=document.querySelector(".pop-ex-close-btn");document.querySelector(".pop-backdrop");document.querySelector(".backdrop");document.querySelector(".pop-rating-btn");document.querySelector(".pop-up-close-btn");document.querySelector(".pop-ex-info");const S=document.querySelector(".modal123");document.querySelector(".pop-backdrop.is-open");let d,w="",y=[],v,T=0,I=0,L=0,P=0;localStorage.removeItem("searchInput");localStorage.removeItem("searchQuery");sessionStorage.removeItem("data");N.addEventListener("click",async s=>{s.preventDefault(),y=[],d=1;try{const i=(await O(s)).results;y=[...i],o.innerHTML="",o.textContent=`${i[0].target}`,sessionStorage.setItem("data",JSON.stringify({results:i})),T=0;for(let e=0;e<8;e++)T++;if(i.length===0)throw new Error({title:"No Results",message:"No images found. Please try a different search term."});o.style.visibility="visible",f.style.display="none",c.style.display="flex",g.style.visibility="visible",c.innerHTML=i.reduce((e,r,a)=>e+`
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
                <use href=".img/icons.svg#icon-arrow-right"></use>
                </svg>
                </button>
                </a>
                </div>

                <!-- <svg class="exercise-btn-icon">
                <use href=".img/icons.svg#icon-arrow-right"></use>
                </svg> -->
                <span class="exercise-part-name">
                <svg class="exercise-part-icon" width="24" height="24">
                    <use href=".img/icons.svg#icon-running-man"></use>
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
        `,"")}catch(t){console.error("Error:",t)}});u.addEventListener("click",async s=>{d=s.target.textContent,console.log(d),v=8;try{const e=JSON.parse(localStorage.getItem("searchQuery")).searchQuery;console.log(e);const r=`https://energyflow.b.goit.study/api/exercises?muscles=${e}&page=${d}&limit=${v}`,a=await fetch(r);if(a.status!==200)throw new Error("Failed to fetch data. Please try again later.");const p=(await a.json()).results;sessionStorage.setItem("data",JSON.stringify({results:p})),I=0;for(let n=0;n<8;n++)I++;c.innerHTML=p.reduce((n,l,k)=>n+`
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
                <button class="exercise-part-button"  id='${k}'>Start
                <svg class="exercise-btn-icon" width="14" height="14">
                <use href=".img/icons.svg#icon-arrow-right"></use>
                </svg>
                </button>
                </a>
                </div>

                <!-- <svg class="exercise-btn-icon">
                <use href="./img/icons.svg#icon-arrow-right"></use>
                </svg> -->
                <span class="exercise-part-name">
                <svg class="exercise-part-icon" width="24" height="24">
                    <use href=".img/icons.svg#icon-running-man"></use>
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
        `,"")}catch(i){console.error("Error:",i)}});C.forEach(s=>{s.addEventListener("click",t=>{t.preventDefault();const i=t.target.textContent;localStorage.removeItem("searchInput"),localStorage.removeItem("searchQuery"),i==="Muscles"?(h.style.display="none",m.style.display="none",c.style.display="none",f.style.display="flex",g.style.visibility="hidden",o.style.visibility="hidden"):i==="Body parts"?(g.style.visibility="hidden",c.innerHTML="",h.style.display="flex",m.style.display="flex",c.style.display="flex",f.style.display="none",u.style.display="none",o.style.visibility="hidden"):(h.style.display="none",m.style.display="none",c.style.display="none",g.style.visibility="hidden",o.style.visibility="hidden")})});B.addEventListener("submit",async function(s){s.preventDefault(),y=[],d=1;try{const t=h.value,e=(await M(t)).results;if(y=[...e],sessionStorage.setItem("data",JSON.stringify({results:e})),e.length===0){c.innerHTML="",console.log(e.length),c.insertAdjacentHTML("beforeend","<li class='no-result-list'><p class='no-result'>Unfortunately,<span class='no-result-span'> no results</span> were found.You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>"),u.style.display="none";return}else{o.innerHTML="",o.textContent=`${e[0].bodyPart}`,o.style.visibility="visible",g.style.visibility="visible",u.style.display="flex",L=0;for(let r=0;r<8;r++)L++;c.innerHTML=e.reduce((r,a,b)=>r+`
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
                <button class="exercise-part-button"  id='${b}'>Start
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
        `,"")}}catch(t){console.error("Error:",t)}});u.addEventListener("click",async s=>{d=s.target.textContent,v=8;try{w=JSON.parse(localStorage.getItem("searchInput")).searchInput;const e=`https://energyflow.b.goit.study/api/exercises?bodypart=${w}&page=${d}&limit=${v}`,r=await fetch(e);if(r.status!==200)throw new Error("Failed to fetch data. Please try again later.");const x=(await r.json()).results;console.log(x.length),sessionStorage.setItem("data",JSON.stringify({results:x})),P=0;for(let p=0;p<8;p++)P++;c.innerHTML=x.reduce((p,n,l)=>p+`
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
        `,"")}catch(i){console.error("Error:",i)}});const q=document.querySelector(".modal123");function U(s){q.innerHTML=`
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
`}function J(s){const t=i=>{if(console.log(i.target),console.log($),$){const e=JSON.parse(localStorage.getItem("exercises"))||[];console.log(123),e.push(s),localStorage.setItem("exercises",JSON.stringify(e)),[...e],S.removeEventListener("click",t),E.success({title:"Excellent choice!",message:"The exercise has been successfully added to your favorites. Get ready for endless inspiration and great results!",position:"center"})}else return};S.addEventListener("click",t)}c.addEventListener("click",async s=>{s.preventDefault();const t=s.target.id,i=JSON.parse(sessionStorage.getItem("data"));if(s.target.tagName=="BUTTON"){if(t==t){const e=i.results[t];U(e),J(e)}S.addEventListener("click",e=>{console.log(e.target),(e.target.tagName=="BUTTON"||e.target.tagName=="SVG"||e.target.tagName=="USE")&&H&&(q.innerHTML="")})}});
//# sourceMappingURL=exersises-ba8b3040.js.map
