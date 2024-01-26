import{musclesGroup as w,bodyPart as $}from"./api-f9182e38.js";const S=document.querySelector(".exercise-cards-list"),b=document.querySelector(".exercise-cards-list");document.querySelectorAll(".exercise-card");const g=document.querySelector(".exercise-pages-counter");document.querySelector(".exercise-parts");const P=document.querySelector(".exercise-form"),v=document.querySelector(".exercise-input-button"),m=document.querySelector(".exercise-input"),E=document.querySelectorAll(".exercise-button"),a=document.querySelector(".exercise-parts-list");let o,f="",x=[],h;localStorage.removeItem("searchInput");localStorage.removeItem("searchQuery");S.addEventListener("click",async i=>{i.preventDefault(),x=[],o=1;try{const e=(await w(i)).results;if(x=[...e],e.length===0)throw new Error({title:"No Results",message:"No images found. Please try a different search term."});b.style.display="none",a.style.display="flex",a.innerHTML=e.reduce((s,r)=>s+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(r.rating)}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="../img/icons.svg#icon-star"></use>
                    </svg>
                    </span>
                <a class="exercise-part-link" href="../partials/pop-up-exersise-card.html">
                <button class="exercise-part-button">Start   
                <svg class="exercise-btn-icon" width="14" height="14">
                <use href="../img/icons.svg#icon-arrow-right"></use>
                </svg>
                </button>
                </a>
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
        `,"")}catch(c){console.error("Error:",c)}});g.addEventListener("click",async i=>{o=i.target.textContent,console.log(o),h=8;try{const s=JSON.parse(localStorage.getItem("searchQuery")).searchQuery;console.log(s);const r=`https://energyflow.b.goit.study/api/exercises?muscles=${s}&page=${o}&limit=${h}`,p=await fetch(r);if(p.status!==200)throw new Error("Failed to fetch data. Please try again later.");const u=(await p.json()).results;console.log(u);const y=Math.round(u.rating);a.innerHTML=u.reduce((n,l)=>n+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(l.rating)}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="../img/icons.svg#icon-star"></use>
                    </svg>
                    </span>
               <a class="exercise-part-link" href="../partials/pop-up-exersise-card.html">
                <button class="exercise-part-button">Start   
                <svg class="exercise-btn-icon" width="14" height="14">
                <use href="../img/icons.svg#icon-arrow-right"></use>
                </svg>
                </button>
                </a>
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
        `,"")}catch(e){console.error("Error:",e)}});E.forEach(i=>{i.addEventListener("click",c=>{c.preventDefault();const e=c.target.textContent;localStorage.removeItem("searchInput"),localStorage.removeItem("searchQuery"),e==="Muscles"?(m.style.display="none",v.style.display="none",a.style.display="none",b.style.display="flex"):e==="Body parts"&&(a.innerHTML="",m.style.display="flex",v.style.display="flex",a.style.display="flex",b.style.display="none",g.style.display="none")})});P.addEventListener("submit",async function(i){i.preventDefault(),x=[],o=1;try{const c=m.value,s=(await $(c)).results;if(x=[...s],console.log(s),s.length===0){console.log(s.length),a.insertAdjacentHTML("beforeend","<li class='no-result-list'><p class='no-result'>Unfortunately,<span class='no-result-span'> no results</span> were found.You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>"),g.style.display="none";return}else{g.style.display="flex";const r=Math.round(s.rating);a.innerHTML=s.reduce((p,t)=>p+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(t.rating)}</p>
                    <svg class="exercise-rating-icon" width="18" height="18">
                        <use href="../img/icons.svg#icon-star"></use>
                    </svg>
                    </span>
                <a class="exercise-part-link" href="../partials/pop-up-exersise-card.html">
                <button class="exercise-part-button">Start   
                <svg class="exercise-btn-icon" width="14" height="14">
                <use href="../img/icons.svg#icon-arrow-right"></use>
                </svg>
                </button>
                </a>
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
        `,"")}}catch(c){console.error("Error:",c)}});g.addEventListener("click",async i=>{o=i.target.textContent,h=8;try{f=JSON.parse(localStorage.getItem("searchInput")).searchInput;const s=`https://energyflow.b.goit.study/api/exercises?bodypart=${f}&page=${o}&limit=${h}`,r=await fetch(s);if(r.status!==200)throw new Error("Failed to fetch data. Please try again later.");const d=(await r.json()).results;console.log(d.length);const u=Math.round(d.rating);a.innerHTML=d.reduce((y,n)=>y+`
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
              <a class="exercise-part-link" href="../partials/pop-up-exersise-card.html">
                <button class="exercise-part-button">Start   
                <svg class="exercise-btn-icon" width="14" height="14">
                <use href="../img/icons.svg#icon-arrow-right"></use>
                </svg>
                </button>
                </a>
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
        `,"")}catch(e){console.error("Error:",e)}});
//# sourceMappingURL=exersises-d4bba101.js.map
