import{musclesGroup as $,bodyPart as w}from"./api-f9182e38.js";const S=document.querySelector(".exercise-cards-list"),b=document.querySelector(".exercise-cards-list");document.querySelectorAll(".exercise-card");const g=document.querySelector(".exercise-pages-counter");document.querySelector(".exercise-parts");const P=document.querySelector(".exercise-form"),v=document.querySelector(".exercise-input-button"),m=document.querySelector(".exercise-input"),E=document.querySelectorAll(".exercise-button"),t=document.querySelector(".exercise-parts-list");let o,f="",x=[],h;localStorage.removeItem("searchInput");localStorage.removeItem("searchQuery");S.addEventListener("click",async i=>{i.preventDefault(),x=[],o=1;try{const e=(await $(i)).results;if(x=[...e],e.length===0)throw new Error({title:"No Results",message:"No images found. Please try a different search term."});b.style.display="none",t.style.display="flex";const s=Math.round(e.rating);t.innerHTML=e.reduce((a,c)=>a+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${s}</p>
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
        `,"")}catch(r){console.error("Error:",r)}});g.addEventListener("click",async i=>{o=i.target.textContent,console.log(o),h=8;try{const s=JSON.parse(localStorage.getItem("searchQuery")).searchQuery;console.log(s);const a=`https://energyflow.b.goit.study/api/exercises?muscles=${s}&page=${o}&limit=${h}`,c=await fetch(a);if(c.status!==200)throw new Error("Failed to fetch data. Please try again later.");const p=(await c.json()).results;console.log(p);const y=Math.round(p.rating);t.innerHTML=p.reduce((l,d)=>l+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${y}</p>
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
                <p class="exercise-name-text">${d.name}</p>
                </span>
                <ul class="exercise-describes-list">
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Burned calories:</p>
                    <p class="exercise-describing">${d.burnedCalories} / ${d.time}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Body part:</p>
                    <p class="exercise-describing">${d.bodyPart}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Target:</p>
                    <p class="exercise-describing">${d.target}</p>
                </li>
                </ul>
            </div>
            </li>
        `,"")}catch(e){console.error("Error:",e)}});E.forEach(i=>{i.addEventListener("click",r=>{r.preventDefault();const e=r.target.textContent;localStorage.removeItem("searchInput"),localStorage.removeItem("searchQuery"),e==="Muscles"?(m.style.display="none",v.style.display="none",t.style.display="none",b.style.display="flex"):e==="Body parts"&&(t.innerHTML="",m.style.display="flex",v.style.display="flex",t.style.display="flex",b.style.display="none",g.style.display="none")})});P.addEventListener("submit",async function(i){i.preventDefault(),x=[],o=1;try{const r=m.value,s=(await w(r)).results;if(x=[...s],console.log(s),s.length===0){console.log(s.length),t.insertAdjacentHTML("beforeend","<li class='no-result-list'><p class='no-result'>Unfortunately,<span class='no-result-span'> no results</span> were found.You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>"),g.style.display="none";return}else{g.style.display="flex";const a=Math.round(s.rating);t.innerHTML=s.reduce((c,n)=>c+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${a}</p>
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
        `,"")}}catch(r){console.error("Error:",r)}});g.addEventListener("click",async i=>{o=i.target.textContent,h=8;try{f=JSON.parse(localStorage.getItem("searchInput")).searchInput;const s=`https://energyflow.b.goit.study/api/exercises?bodypart=${f}&page=${o}&limit=${h}`,a=await fetch(s);if(a.status!==200)throw new Error("Failed to fetch data. Please try again later.");const u=(await a.json()).results;console.log(u.length);const p=Math.round(u.rating);t.innerHTML=u.reduce((y,l)=>y+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${p}</p>
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
        `,"")}catch(e){console.error("Error:",e)}});
//# sourceMappingURL=exersises-75b79093.js.map
