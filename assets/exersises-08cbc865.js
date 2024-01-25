import{musclesGroup as f,bodyPart as $}from"./api-f9182e38.js";const w=document.querySelector(".exercise-cards-list"),o=document.querySelector(".exercise-cards-list"),d=document.querySelectorAll(".exercise-card"),y=document.querySelector(".exercise-pages-counter"),S=document.querySelector(".exercise-parts"),E=document.querySelector(".exercise-form"),b=document.querySelector(".exercise-input-button"),u=document.querySelector(".exercise-input"),P=document.querySelectorAll(".exercise-button");let l,m="",g=[],x;localStorage.removeItem("searchInput");localStorage.removeItem("searchQuery");w.addEventListener("click",async a=>{a.preventDefault(),g=[],l=1,o.innerHTML="";try{const r=(await f(a)).results;if(g=[...r],d.forEach(e=>{e.style.display="none"}),r.length===0)throw new Error({title:"No Results",message:"No images found. Please try a different search term."});o.innerHTML=r.reduce((e,c)=>e+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${c.rating}</p>
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
                <p class="exercise-name-text">${c.name}</p>
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
        `,"")}catch(s){console.error("Error:",s)}});y.addEventListener("click",async a=>{l=a.target.textContent,console.log(l),x=8;try{const e=JSON.parse(localStorage.getItem("searchQuery")).searchQuery;console.log(e);const c=`https://energyflow.b.goit.study/api/exercises?muscles=${e}&page=${l}&limit=${x}`,i=await fetch(c);if(i.status!==200)throw new Error("Failed to fetch data. Please try again later.");const t=(await i.json()).results;console.log(t),o.innerHTML=t.reduce((v,n)=>v+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${n.rating}</p>
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
                <p class="exercise-name-text">${n.name}</p>
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
        `,"")}catch(r){console.error("Error:",r)}});P.forEach(a=>{a.addEventListener("click",s=>{s.preventDefault();const r=s.target.textContent;localStorage.removeItem("searchInput"),localStorage.removeItem("searchQuery"),r==="Muscles"?(u.style.display="none",b.style.display="none",d.forEach(e=>{e.style.display="flex"}),S.forEach(e=>{e.style.display="none"})):r==="Body parts"&&(u.style.display="flex",b.style.display="flex",d.forEach(e=>{e.style.display="none"}))})});E.addEventListener("submit",async function(a){a.preventDefault(),g=[],l=1,o.innerHTML="";try{const s=u.value,e=(await $(s)).results;if(g=[...e],console.log(e),e.length===0)throw new Error({title:"No Results",message:"No images found. Please try a different search term."});o.innerHTML=e.reduce((c,i)=>c+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${i.rating}</p>
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
                <p class="exercise-name-text">${i.name}</p>
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
        `,"")}catch(s){console.error("Error:",s)}});y.addEventListener("click",async a=>{try{m=JSON.parse(localStorage.getItem("searchInput")).searchInput,console.log(m);const r=`https://energyflow.b.goit.study/api/exercises?muscles=''&page=${l}&limit=${x}`,e=await fetch(r);if(e.status!==200)throw new Error("Failed to fetch data. Please try again later.");const p=(await e.json()).results;console.log(p),o.innerHTML=p.reduce((h,t)=>h+`
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
//# sourceMappingURL=exersises-08cbc865.js.map
