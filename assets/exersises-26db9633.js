import{i as C}from"./vendor-db25513e.js";import{musclesGroup as H,bodyPart as N}from"./api-8d58433a.js";const U=document.querySelector(".exercise-cards-list"),$=document.querySelector(".exercise-cards-list"),y=document.querySelector(".exercise-pages-counter"),A=document.querySelector(".exercise-form"),S=document.querySelector(".exercise-input-button"),m=document.querySelector(".exercise-input"),J=document.querySelectorAll(".exercise-button"),l=document.querySelector(".exercise-parts-list"),x=document.querySelector(".exercise-log-span"),p=document.querySelector(".exercise-title-span");document.querySelector(".exercise-part-button");document.querySelector(".pop-add-fav");document.querySelector(".pop-ex-close-btn");document.querySelector(".pop-backdrop");document.querySelector(".backdrop");document.querySelector(".pop-rating-btn");document.querySelector(".pop-up-close-btn");document.querySelector(".pop-ex-info");document.querySelector(".modal123");document.querySelector(".pop-backdrop.is-open");let b,L="",h=[],f,k=0,q=0,I=0,E=0;localStorage.removeItem("searchInput");localStorage.removeItem("searchQuery");sessionStorage.removeItem("data");U.addEventListener("click",async e=>{e.preventDefault(),h=[],b=1;try{const t=(await H(e)).results;h=[...t],p.innerHTML="",p.textContent=`${t[0].target}`.charAt(0).toUpperCase()+`${t[0].target}`.slice(1),sessionStorage.setItem("data",JSON.stringify({results:t})),k=0;for(let s=0;s<8;s++)k++;if(t.length===0)throw new Error({title:"No Results",message:"No images found. Please try a different search term."});p.style.visibility="visible",$.style.display="none",l.style.display="flex",x.style.visibility="visible",l.innerHTML=t.reduce((s,i,a)=>s+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(i.rating)}</p>
                    
                    </span>

                <a class="exercise-part-link" href="../partials/pop-up-exersise-card.html">
                <button class="exercise-part-button"  id='${a}'>Start
              
                </button>
                </a>
                </div>

                <span class="exercise-part-name">
               
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
        `,"")}catch(r){console.error("Error:",r)}});y.addEventListener("click",async e=>{b=e.target.textContent,console.log(b),f=8;try{const s=JSON.parse(localStorage.getItem("searchQuery")).searchQuery;console.log(s);const i=`https://energyflow.b.goit.study/api/exercises?muscles=${s}&page=${b}&limit=${f}`,a=await fetch(i);if(a.status!==200)throw new Error("Failed to fetch data. Please try again later.");const n=(await a.json()).results;sessionStorage.setItem("data",JSON.stringify({results:n})),q=0;for(let c=0;c<8;c++)q++;l.innerHTML=n.reduce((c,u,M)=>c+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(u.rating)}</p>
                    
                    </span>
                    <a class="exercise-part-link" href="../partials/pop-up-exersise-card.html">
                <button class="exercise-part-button"  id='${M}'>Start
               
                </button>
                </a>
                </div>

                <span class="exercise-part-name">
                
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
        `,"")}catch(t){console.error("Error:",t)}});J.forEach(e=>{e.addEventListener("click",r=>{r.preventDefault();const t=r.target.textContent;localStorage.removeItem("searchInput"),localStorage.removeItem("searchQuery"),t==="Muscles"?(m.style.display="none",S.style.display="none",l.style.display="none",$.style.display="flex",x.style.visibility="hidden",p.style.visibility="hidden"):t==="Body parts"?(x.style.visibility="hidden",l.innerHTML="",m.style.display="flex",S.style.display="flex",l.style.display="flex",$.style.display="none",y.style.display="none",p.style.visibility="hidden"):(m.style.display="none",S.style.display="none",l.style.display="none",x.style.visibility="hidden",p.style.visibility="hidden")})});A.addEventListener("submit",async function(e){e.preventDefault(),h=[],b=1;try{const r=m.value,s=(await N(r)).results;if(h=[...s],sessionStorage.setItem("data",JSON.stringify({results:s})),s.length===0){l.innerHTML="",console.log(s.length),l.insertAdjacentHTML("beforeend","<li class='no-result-list'><p class='no-result'>Unfortunately,<span class='no-result-span'> no results</span> were found.You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>"),y.style.display="none";return}else{p.innerHTML="",p.textContent=`${s[0].bodyPart}`.charAt(0).toUpperCase()+`${s[0].bodyPart}`.slice(1),p.style.visibility="visible",x.style.visibility="visible",y.style.display="flex",I=0;for(let i=0;i<8;i++)I++;l.innerHTML=s.reduce((i,a,d)=>i+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(a.rating)}</p>
                    
                    </span>
                <a class="exercise-part-link" href="../partials/pop-up-exersise-card.html">
                <button class="exercise-part-button"  id='${d}'>Start
                
                </button>
                </a>
                </div>

                <span class="exercise-part-name">
             
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
        `,"")}}catch(r){console.error("Error:",r)}});y.addEventListener("click",async e=>{b=e.target.textContent,f=8;try{L=JSON.parse(localStorage.getItem("searchInput")).searchInput;const s=`https://energyflow.b.goit.study/api/exercises?bodypart=${L}&page=${b}&limit=${f}`,i=await fetch(s);if(i.status!==200)throw new Error("Failed to fetch data. Please try again later.");const o=(await i.json()).results;console.log(o.length),sessionStorage.setItem("data",JSON.stringify({results:o})),E=0;for(let n=0;n<8;n++)E++;l.innerHTML=o.reduce((n,c,u)=>n+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(c.rating)}</p>
                   
                    </span>
                    <a class="exercise-part-link" href="./partials/pop-up-exersise-card.html">
                <button class="exercise-part-button"  id='${u}'>Start
               
                </button>
                </a>
                </div>

                <span class="exercise-part-name">
               
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
        `,"")}catch(t){console.error("Error:",t)}});const v=document.querySelector(".modal123");function P(e){v.innerHTML=`
    <div class="pop-backdrop is-open">
    <div class="pop-ex-modal">
      <button class="pop-ex-close-btn">
      
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
            Add to favorites
          </button>

          <button class="pop-rating-btn">Give a rating</button>
        </div>
      </div>
    </div>
  </div>
`}l.addEventListener("click",async e=>{e.preventDefault();const r=e.target.id,t=JSON.parse(sessionStorage.getItem("data"));if(e.target.tagName=="BUTTON"&&r==r){const s=t.results[r];P(s),R(s)}});function R(e){function r(o){console.log(o.target);const n=JSON.parse(localStorage.getItem("exercises"))||[];console.log(123),n.push(e),localStorage.setItem("exercises",JSON.stringify(n)),[...n];const c=document.querySelector(".pop-add-fav");c&&c.removeEventListener("click",r),document.querySelector(".pop-ex-close-btn"),C.success({title:"Excellent choice!",message:"The exercise has been successfully added to your favorites. Get ready for endless inspiration and great results!",position:"center"})}const t=document.querySelector(".pop-add-fav");t?t.addEventListener("click",r):console.error("Button not found");const s=document.querySelector(".pop-backdrop.is-open");async function i(){await P(e),v.innerHTML="",s.classList.remove("is-open")}s&&s.addEventListener("click",i),window.addEventListener("keydown",function(o){o.key==="Escape"&&(v.innerHTML="")});function a(){v.innerHTML=""}const d=document.querySelector(".pop-ex-close-btn");d?d.addEventListener("click",a):console.error("Close button not found")}const g=JSON.parse(localStorage.getItem("exercises"));console.log(g);const w=document.querySelector(".fav-list"),B=document.querySelector(".favorites");function T(e){g.length===0?D():(w.innerHTML=g.slice(0,8).map(({bodyPart:r,name:t,target:s,burnedCalories:i},a)=>`
    <li class="exercise-parts">
      <div class="part-container">
        <div class="exercise-head-container">
          <span class="exercise-badge">WORKOUT</span>
          <button class="exercise-trash-button">
         
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
          <p class="exercise-name-text">${t.substring(0,24)+"..."}</p> 
        </span>
        <ul class="exercise-describes-list">
          <li class="exercise-describe">
            <p class="exercise-describe-category">Burned calories:</p>
            <p class="exercise-describing">${i} / 3 min</p>
          </li>
          <li class="exercise-describe">
            <p class="exercise-describe-category">Body part:</p>
            <p class="exercise-describing">${r}</p>
          </li>
          <li class="exercise-describe">
            <p class="exercise-describe-category">Target:</p>
            <p class="exercise-describing">${s}</p>
          </li>
        </ul>
      </div>
    </li>
  `).join(""),O())}T();g.length>8&&W();B.addEventListener("click",function(e){if(e.target.classList.contains("exercise-number-button")){const r=parseInt(e.target.id),t=(r-1)*8,s=r*8;w.innerHTML=g.slice(t,s).map(({bodyPart:i,name:a,target:d,burnedCalories:o},n)=>`
    <li class="exercise-parts">
      <div class="part-container">
        <div class="exercise-head-container">
          <span class="exercise-badge">WORKOUT</span>
          <button class="exercise-trash-button">
            <svg class="exercise-trash-icon" width="16" height="16">
              <use href="/energy_flow/assets/icons-de67b048.svg#icon-trash"></use>
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
            <p class="exercise-describing">${o} / 3 min</p>
          </li>
          <li class="exercise-describe">
            <p class="exercise-describe-category">Body part:</p>
            <p class="exercise-describing">${i}</p>
          </li>
          <li class="exercise-describe">
            <p class="exercise-describe-category">Target:</p>
            <p class="exercise-describing">${d}</p>
          </li>
        </ul>
      </div>
    </li>
  `).join(""),O()}});function O(){document.querySelectorAll(".exercise-trash-button").forEach((r,t)=>{r.setAttribute("data-index",t),r.addEventListener("click",s=>{const i=s.currentTarget.getAttribute("data-index");g.splice(i,1),localStorage.setItem("exercises",JSON.stringify(g)),T()})})}T();function D(){w.innerHTML=`
      <div class="empty-content-fav">
        <img
        class="dumbbell-favorites-img"
        srcset="
          ./img/favorites/dumbbell-tab-desc.png     116w,
          ./img/favorites/dumbbell-tab-desc@2x.png  231w,
          src/img/favorites/dumbbell-mob.png   85w,
          ./img/favorites/dumbbell-mob@2x.png  170w
        "
        src="src/img/favorites/dumbbell-mob.png"
        sizes="(min-width: 768px) 116px, (max-width: 767px) 85px"
        alt="dumbbell icon"
      />
      <p class='no-card-in-storage'>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>
      </div>`}function W(){B.insertAdjacentHTML("beforeend",`<ul class="exercise-pages-counter">
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
</ul>`)}
//# sourceMappingURL=exersises-26db9633.js.map
