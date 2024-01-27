import{musclesGroup as L,bodyPart as O}from"./api-8d58433a.js";const E=document.querySelector(".exercise-cards-list"),I=document.querySelector(".exercise-cards-list"),u=document.querySelector(".exercise-pages-counter"),M=document.querySelector(".exercise-form"),m=document.querySelector(".exercise-input-button"),b=document.querySelector(".exercise-input"),q=document.querySelectorAll(".exercise-button"),a=document.querySelector(".exercise-parts-list"),g=document.querySelector(".exercise-log-span"),l=document.querySelector(".exercise-title-span");document.querySelector(".exercise-part-button");document.querySelector(".is-open");let d,P="",y=[],h,f=0,$=0,S=0,w=0;localStorage.removeItem("searchInput");localStorage.removeItem("searchQuery");sessionStorage.removeItem("data");E.addEventListener("click",async e=>{e.preventDefault(),y=[],d=1;try{const i=(await L(e)).results;console.log(i),y=[...i],l.innerHTML="",l.textContent=`${i[0].target}`,sessionStorage.setItem("data",JSON.stringify({results:i})),f=0;for(let s=0;s<8;s++)console.log(f),f++;if(i.length===0)throw new Error({title:"No Results",message:"No images found. Please try a different search term."});l.style.visibility="visible",I.style.display="none",a.style.display="flex",g.style.visibility="visible",a.innerHTML=i.reduce((s,t,c)=>s+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(t.rating)}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="/img/icons.svg#icon-star"></use>
                    </svg>
                    </span>

                <a class="exercise-part-link" href="../partials/pop-up-exersise-card.html">
                <button class="exercise-part-button"  id='${c}'>Start   
                <svg class="exercise-btn-icon" width="14" height="14">
                <use href="/img/icons.svg#icon-arrow-right"></use>
                </svg>
                </button>
                </a>
                </div>

                <!-- <svg class="exercise-btn-icon">
                <use href="/img/icons.svg#icon-arrow-right"></use>
                </svg> -->
                <span class="exercise-part-name">
                <svg class="exercise-part-icon" width="24" height="24">
                    <use href="/img/icons.svg#icon-running-man"></use>
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
        `,"")}catch(r){console.error("Error:",r)}});u.addEventListener("click",async e=>{d=e.target.textContent,console.log(d),h=8;try{const s=JSON.parse(localStorage.getItem("searchQuery")).searchQuery;console.log(s);const t=`https://energyflow.b.goit.study/api/exercises?muscles=${s}&page=${d}&limit=${h}`,c=await fetch(t);if(c.status!==200)throw new Error("Failed to fetch data. Please try again later.");const o=(await c.json()).results;console.log(o),sessionStorage.setItem("data",JSON.stringify({results:o})),$=0;for(let n=0;n<8;n++)console.log($),$++;a.innerHTML=o.reduce((n,p,T)=>n+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(p.rating)}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="../img/icons.svg#icon-star"></use>
                    </svg>
                    </span>
                <button class="exercise-part-button" id=${T}>Start</button>
                </div>

                <!-- <svg class="exercise-btn-icon">
                <use href="../img/icons.svg#icon-arrow-right"></use>
                </svg> -->
                <span class="exercise-part-name">
                <svg class="exercise-part-icon" width="24" height="24">
                    <use href="../img/icons.svg#icon-running-man"></use>
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
        `,"")}catch(i){console.error("Error:",i)}});q.forEach(e=>{e.addEventListener("click",r=>{r.preventDefault();const i=r.target.textContent;localStorage.removeItem("searchInput"),localStorage.removeItem("searchQuery"),i==="Muscles"?(b.style.display="none",m.style.display="none",a.style.display="none",I.style.display="flex",g.style.visibility="hidden",l.style.visibility="hidden"):i==="Body parts"?(g.style.visibility="hidden",a.innerHTML="",b.style.display="flex",m.style.display="flex",a.style.display="flex",I.style.display="none",u.style.display="none",l.style.visibility="hidden"):(b.style.display="none",m.style.display="none",a.style.display="none",g.style.visibility="hidden",l.style.visibility="hidden")})});M.addEventListener("submit",async function(e){e.preventDefault(),y=[],d=1;try{const r=b.value,s=(await O(r)).results;if(y=[...s],sessionStorage.setItem("data",JSON.stringify({results:s})),console.log(s),s.length===0){a.innerHTML="",console.log(s.length),a.insertAdjacentHTML("beforeend","<li class='no-result-list'><p class='no-result'>Unfortunately,<span class='no-result-span'> no results</span> were found.You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>"),u.style.display="none";return}else{l.innerHTML="",l.textContent=`${s[0].bodyPart}`,l.style.visibility="visible",g.style.visibility="visible",u.style.display="flex",S=0;for(let t=0;t<8;t++)console.log(S),S++;a.innerHTML=s.reduce((t,c,v)=>t+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(c.rating)}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="../img/icons.svg#icon-star"></use>
                    </svg>
                    </span>
                <button class="exercise-part-button" id='${v}'>Start</button>
                </div>

                <!-- <svg class="exercise-btn-icon">
                <use href="../img/icons.svg#icon-arrow-right"></use>
                </svg> -->
                <span class="exercise-part-name">
                <svg class="exercise-part-icon" width="24" height="24">
                    <use href="../img/icons.svg#icon-running-man"></use>
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
        `,"")}}catch(r){console.error("Error:",r)}});u.addEventListener("click",async e=>{d=e.target.textContent,h=8;try{P=JSON.parse(localStorage.getItem("searchInput")).searchInput;const s=`https://energyflow.b.goit.study/api/exercises?bodypart=${P}&page=${d}&limit=${h}`,t=await fetch(s);if(t.status!==200)throw new Error("Failed to fetch data. Please try again later.");const x=(await t.json()).results;console.log(x.length),sessionStorage.setItem("data",JSON.stringify({results:x})),w=0;for(let o=0;o<8;o++)console.log(w),w++;a.innerHTML=x.reduce((o,n,p)=>o+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(n.rating)}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="../img/icons.svg#icon-star"></use>
                    </svg>
                    </span>
                <button class="exercise-part-button" id='${p}'>Start</button>
                </div>

                <!-- <svg class="exercise-btn-icon">
                <use href="../img/icons.svg#icon-arrow-right"></use>
                </svg> -->
                <span class="exercise-part-name">
                <svg class="exercise-part-icon" width="24" height="24">
                    <use href="../img/icons.svg#icon-running-man"></use>
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
        `,"")}catch(i){console.error("Error:",i)}});function B(e){a.innerHTML=`<div class="pop-backdrop is-open">
    <div class="pop-ex-modal">
      <button class="pop-ex-close-btn">
        <svg
          class="pop-ex-close-btn-icon"
          width="24"
          height="24"
          aria-label="close icon"
        >
          <use href="../img/icons.svg#icon-close"></use>
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
        <ul class="pop-ex-stars-list">
          <p class="pop-ex-current-rating">${e.rating}</p>
            <li>
              <svg
                class="pop-ex-rate-icon"
                width="18"
                height="18"
                aria-label="ratting">
                <use href="../img/icons.svg#icon-star"></use>
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
              <use href="../img/icons.svg#icon-heart"></use>
            </svg>
          </button>

          <button class="pop-rating-btn">Give a rating</button>
        </div>
      </div>
    </div>
  </div>
`}a.addEventListener("click",async e=>{e.preventDefault();const r=e.target.id;console.log(r);const i=JSON.parse(sessionStorage.getItem("data"));if(console.log(i),e.target.tagName=="BUTTON"&&r==r){const s=i.results[r];console.log(s),B(s)}});
//# sourceMappingURL=exersises-b7511190.js.map
