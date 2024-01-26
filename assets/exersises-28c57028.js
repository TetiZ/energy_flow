import{musclesGroup as $,bodyPart as w}from"./api-f9182e38.js";const S=document.querySelector(".exercise-cards-list"),y=document.querySelector(".exercise-cards-list");document.querySelectorAll(".exercise-card");const p=document.querySelector(".exercise-pages-counter");document.querySelector(".exercise-parts");const P=document.querySelector(".exercise-form"),v=document.querySelector(".exercise-input-button"),b=document.querySelector(".exercise-input"),E=document.querySelectorAll(".exercise-button"),a=document.querySelector(".exercise-parts-list");let o,f="",x=[],h;localStorage.removeItem("searchInput");localStorage.removeItem("searchQuery");S.addEventListener("click",async i=>{i.preventDefault(),x=[],o=1;try{const e=(await $(i)).results;if(x=[...e],e.length===0)throw new Error({title:"No Results",message:"No images found. Please try a different search term."});y.style.display="none",a.style.display="flex",a.innerHTML=e.reduce((s,r)=>s+`
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
        `,"")}catch(c){console.error("Error:",c)}});p.addEventListener("click",async i=>{o=i.target.textContent,console.log(o),h=8;try{const s=JSON.parse(localStorage.getItem("searchQuery")).searchQuery;console.log(s);const r=`https://energyflow.b.goit.study/api/exercises?muscles=${s}&page=${o}&limit=${h}`,d=await fetch(r);if(d.status!==200)throw new Error("Failed to fetch data. Please try again later.");const u=(await d.json()).results;console.log(u);const m=Math.round(u.rating);a.innerHTML=u.reduce((n,l)=>n+`
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
        `,"")}catch(e){console.error("Error:",e)}});E.forEach(i=>{i.addEventListener("click",c=>{c.preventDefault();const e=c.target.textContent;localStorage.removeItem("searchInput"),localStorage.removeItem("searchQuery"),e==="Muscles"?(b.style.display="none",v.style.display="none",a.style.display="none",y.style.display="flex"):e==="Body parts"&&(a.innerHTML="",b.style.display="flex",v.style.display="flex",a.style.display="flex",y.style.display="none",p.style.display="none")})});P.addEventListener("submit",async function(i){i.preventDefault(),x=[],o=1;try{const c=b.value,s=(await w(c)).results;if(x=[...s],console.log(s),s.length===0){console.log(s.length),a.insertAdjacentHTML("beforeend","<li class='no-result-list'><p class='no-result'>Unfortunately,<span class='no-result-span'> no results</span> were found.You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>"),p.style.display="none";return}else{p.style.display="flex";const r=Math.round(s.rating);a.innerHTML=s.reduce((d,t)=>d+`
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
        `,"")}}catch(c){console.error("Error:",c)}});p.addEventListener("click",async i=>{o=i.target.textContent,h=8;try{f=JSON.parse(localStorage.getItem("searchInput")).searchInput;const s=`https://energyflow.b.goit.study/api/exercises?bodypart=${f}&page=${o}&limit=${h}`,r=await fetch(s);if(r.status!==200)throw new Error("Failed to fetch data. Please try again later.");const g=(await r.json()).results;console.log(g.length);const u=Math.round(g.rating);a.innerHTML=g.reduce((m,n)=>m+`
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
        `,"")}catch(e){console.error("Error:",e)}});
//# sourceMappingURL=exersises-28c57028.js.map
