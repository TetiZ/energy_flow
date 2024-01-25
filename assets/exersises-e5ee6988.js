import{musclesGroup as f,bodyPart as $}from"./api-f9182e38.js";const w=document.querySelector(".exercise-cards-list"),o=document.querySelector(".exercise-cards-list"),x=document.querySelectorAll(".exercise-card"),y=document.querySelector(".exercise-pages-counter"),S=document.querySelector(".exercise-parts"),E=document.querySelector(".exercise-form"),b=document.querySelector(".exercise-input-button"),h=document.querySelector(".exercise-input"),P=document.querySelectorAll(".exercise-button");let n,m="",p=[],d;localStorage.removeItem("searchInput");localStorage.removeItem("searchQuery");w.addEventListener("click",async i=>{i.preventDefault(),p=[],n=1,o.innerHTML="";try{const s=(await f(i)).results;if(p=[...s],x.forEach(e=>{e.style.display="none"}),s.length===0)throw new Error({title:"No Results",message:"No images found. Please try a different search term."});o.innerHTML=s.reduce((e,r)=>e+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${r.rating}</p>
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
                <p class="exercise-name-text">${r.name}</p>
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
        `,"")}catch(c){console.error("Error:",c)}});y.addEventListener("click",async i=>{n=i.target.textContent,console.log(n),d=8;try{const e=JSON.parse(localStorage.getItem("searchQuery")).searchQuery;console.log(e);const r=`https://energyflow.b.goit.study/api/exercises?muscles=${e}&page=${n}&limit=${d}`,a=await fetch(r);if(a.status!==200)throw new Error("Failed to fetch data. Please try again later.");const g=(await a.json()).results;console.log(g),o.innerHTML=g.reduce((t,l)=>t+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${l.rating}</p>
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
                <p class="exercise-name-text">${l.name}</p>
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
        `,"")}catch(s){console.error("Error:",s)}});P.forEach(i=>{i.addEventListener("click",c=>{c.preventDefault();const s=c.target.textContent;localStorage.removeItem("searchInput"),localStorage.removeItem("searchQuery"),s==="Muscles"?(h.style.display="none",b.style.display="none",x.forEach(e=>{e.style.display="flex"}),S.forEach(e=>{e.style.display="none"})):s==="Body parts"&&(h.style.display="flex",b.style.display="flex",x.forEach(e=>{e.style.display="none"}))})});E.addEventListener("submit",async function(i){i.preventDefault(),p=[],n=1,o.innerHTML="";try{const c=h.value,e=(await $(c)).results;if(p=[...e],console.log(e),e.length===0)throw new Error({title:"No Results",message:"No images found. Please try a different search term."});o.innerHTML=e.reduce((r,a)=>r+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${a.rating}</p>
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
                <p class="exercise-name-text">${a.name}</p>
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
        `,"")}catch(c){console.error("Error:",c)}});y.addEventListener("click",async i=>{n=i.target.textContent,d=8;try{m=JSON.parse(localStorage.getItem("searchInput")).searchInput;const e=`https://energyflow.b.goit.study/api/exercises?bodypart=${m}&page=${n}&limit=${d}`,r=await fetch(e);if(r.status!==200)throw new Error("Failed to fetch data. Please try again later.");const u=(await r.json()).results;console.log(u),o.innerHTML=u.reduce((g,t)=>g+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${t.rating}</p>
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
                <p class="exercise-name-text">${t.name}</p>
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
        `,"")}catch(s){console.error("Error:",s)}});
//# sourceMappingURL=exersises-e5ee6988.js.map
