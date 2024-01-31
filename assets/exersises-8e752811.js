import{i as C}from"./vendor-db25513e.js";import{musclesGroup as j,bodyPart as N}from"./api-8d58433a.js";const U=document.querySelector(".exercise-cards-list"),M=document.querySelector(".exercise-cards-list"),x=document.querySelector(".exercise-pages-counter"),A=document.querySelector(".exercise-form"),k=document.querySelector(".exercise-input-button"),b=document.querySelector(".exercise-input"),I=document.querySelectorAll(".exercise-button"),n=document.querySelector(".exercise-parts-list"),h=document.querySelector(".exercise-log-span"),d=document.querySelector(".exercise-title-span");document.querySelector(".exercise-part-button");document.querySelector(".pop-add-fav");document.querySelector(".pop-ex-close-btn");document.querySelector(".pop-backdrop");document.querySelector(".backdrop");document.querySelector(".pop-rating-btn");document.querySelector(".pop-up-close-btn");document.querySelector(".pop-ex-info");document.querySelector(".modal123");document.querySelector(".pop-backdrop.is-open");let f,B="",y=[],w,L=0,T=0,q=0,E=0;localStorage.removeItem("searchInput");localStorage.removeItem("searchQuery");sessionStorage.removeItem("data");U.addEventListener("click",async e=>{e.preventDefault(),y=[],f=1;try{const s=(await j(e)).results;y=[...s],d.innerHTML="",d.textContent=`${s[0].target}`.charAt(0).toUpperCase()+`${s[0].target}`.slice(1),sessionStorage.setItem("data",JSON.stringify({results:s})),L=0;for(let t=0;t<8;t++)L++;if(s.length===0)throw new Error({title:"No Results",message:"No images found. Please try a different search term."});d.style.visibility="visible",M.style.display="none",n.style.display="flex",h.style.visibility="visible",n.innerHTML=s.reduce((t,i,a)=>t+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(i.rating)}</p>
                    <svg class="exercise-rating-icon" width="18" height="18" viewBox="0 0 34 32">
      <path d="M15.24 1.561c.504-1.552 2.699-1.552 3.204 0l2.558 7.872c.225.694.872 1.164 1.602 1.164h8.277c1.632 0 2.31 2.088.99 3.047l-6.696 4.865c-.59.429-.837 1.189-.612 1.883l2.558 7.872c.504 1.552-1.272 2.842-2.592 1.883l-6.696-4.865a1.684 1.684 0 0 0-1.98 0l-6.696 4.865c-1.32.959-3.096-.331-2.592-1.883l2.558-7.872a1.6855 1.6855 0 0 0-.612-1.883l-6.696-4.865c-1.32-.959-.642-3.047.99-3.047h8.277c.73 0 1.376-.47 1.602-1.164l2.558-7.872z"/>
                    </svg>
                    </span>

                <a class="exercise-part-link" href="../partials/pop-up-exersise-card.html">
                <button class="exercise-part-button"  id='${a}'>Start
                <svg class="exercise-btn-icon" width="14" height="14" viewBox="0 0 32 32">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.6" d="m15 28 13-13m0 0L15 2m13 13H2"/>
                </svg>
                </button>
                </a>
                </div>
                <span class="exercise-part-name">
                <svg class="exercise-part-icon" width="24" height="24" viewBox="0 0 34 32">
<path fill="#f6f6f6" style="fill: var(--color1, #f6f6f6)" opacity="0.1" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
<path fill="#f6f6f6" style="fill: var(--color1, #f6f6f6)" d="M24.729 11.907c-0.268-0.313-0.746-0.354-1.066-0.093l-2.099 1.723-0.965-2.337c-0.034-0.088-0.086-0.161-0.146-0.226-0.197-0.429-0.54-0.797-1.012-1.011-0.205-0.091-0.417-0.14-0.628-0.164-0.047-0.024-0.089-0.055-0.142-0.071l-3.694-1.006c-0.207-0.055-0.416-0.020-0.586 0.078-0.203 0.067-0.377 0.211-0.46 0.42l-1.391 3.495c-0.151 0.38 0.042 0.809 0.432 0.959 0.388 0.147 0.828-0.042 0.98-0.423l1.175-2.951 1.683 0.457c-0.041 0.065-0.085 0.126-0.119 0.195l-2.157 4.568c-0.031 0.067-0.048 0.135-0.070 0.205l-2.621 4.294-4.387 1.434c-0.497 0.363-0.602 1.046-0.235 1.531 0.369 0.486 1.071 0.589 1.566 0.231l4.489-1.511c0.137-0.098 0.237-0.225 0.313-0.363 0.056-0.058 0.121-0.105 0.164-0.178l1.563-2.56 2.774 2.31-2.968 3.268c-0.409 0.451-0.368 1.145 0.095 1.543 0.462 0.402 1.17 0.36 1.582-0.093l3.704-4.078c0.115-0.126 0.184-0.271 0.23-0.422 0.028-0.082 0.028-0.168 0.034-0.253 0-0.043 0.017-0.082 0.013-0.122-0.010-0.299-0.134-0.589-0.385-0.796l-2.553-2.127c0.184-0.171 0.34-0.375 0.453-0.614l1.654-3.499 0.53 1.379c0.022 0.122 0.064 0.243 0.153 0.343 0.080 0.093 0.182 0.155 0.29 0.198 0.011 0.005 0.024 0.007 0.038 0.010 0.069 0.024 0.139 0.047 0.211 0.050 0.085 0.008 0.172-0.003 0.259-0.027 0.002-0.001 0.003-0.001 0.003-0.001 0.023-0.005 0.047-0.001 0.070-0.011 0.123-0.046 0.217-0.122 0.298-0.212l3.013-2.498c0.32-0.263 0.185-0.729-0.084-1.042z"></path>
<path fill="#f6f6f6" style="fill: var(--color1, #f6f6f6)" d="M20.919 10.126c1.166 0 2.111-0.924 2.111-2.063s-0.945-2.063-2.111-2.063c-1.166 0-2.111 0.924-2.111 2.063s0.945 2.063 2.111 2.063z"></path>

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
        `,"")}catch(c){console.error("Error:",c)}});x.addEventListener("click",async e=>{f=e.target.textContent,console.log(f),w=8;try{const t=JSON.parse(localStorage.getItem("searchQuery")).searchQuery;console.log(t);const i=`https://energyflow.b.goit.study/api/exercises?muscles=${t}&page=${f}&limit=${w}`,a=await fetch(i);if(a.status!==200)throw new Error("Failed to fetch data. Please try again later.");const l=(await a.json()).results;sessionStorage.setItem("data",JSON.stringify({results:l})),T=0;for(let r=0;r<8;r++)T++;n.innerHTML=l.reduce((r,g,O)=>r+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(g.rating)}</p>
                    <svg class="exercise-rating-icon" width="18" height="18" viewBox="0 0 34 32">
      <path d="M15.24 1.561c.504-1.552 2.699-1.552 3.204 0l2.558 7.872c.225.694.872 1.164 1.602 1.164h8.277c1.632 0 2.31 2.088.99 3.047l-6.696 4.865c-.59.429-.837 1.189-.612 1.883l2.558 7.872c.504 1.552-1.272 2.842-2.592 1.883l-6.696-4.865a1.684 1.684 0 0 0-1.98 0l-6.696 4.865c-1.32.959-3.096-.331-2.592-1.883l2.558-7.872a1.6855 1.6855 0 0 0-.612-1.883l-6.696-4.865c-1.32-.959-.642-3.047.99-3.047h8.277c.73 0 1.376-.47 1.602-1.164l2.558-7.872z"/>
                    </svg>
                    </span>
                    <a class="exercise-part-link" href="../partials/pop-up-exersise-card.html">
                <button class="exercise-part-button"  id='${O}'>Start
                <svg class="exercise-btn-icon" width="14" height="14" viewBox="0 0 32 32">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.6" d="m15 28 13-13m0 0L15 2m13 13H2"/>
    
                </svg>
                </button>
                </a>
                </div>

                <span class="exercise-part-name">
                <svg class="exercise-part-icon" width="24" height="24"  viewBox="0 0 34 32">
<path fill="#f6f6f6" style="fill: var(--color1, #f6f6f6)" opacity="0.1" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
<path fill="#f6f6f6" style="fill: var(--color1, #f6f6f6)" d="M24.729 11.907c-0.268-0.313-0.746-0.354-1.066-0.093l-2.099 1.723-0.965-2.337c-0.034-0.088-0.086-0.161-0.146-0.226-0.197-0.429-0.54-0.797-1.012-1.011-0.205-0.091-0.417-0.14-0.628-0.164-0.047-0.024-0.089-0.055-0.142-0.071l-3.694-1.006c-0.207-0.055-0.416-0.020-0.586 0.078-0.203 0.067-0.377 0.211-0.46 0.42l-1.391 3.495c-0.151 0.38 0.042 0.809 0.432 0.959 0.388 0.147 0.828-0.042 0.98-0.423l1.175-2.951 1.683 0.457c-0.041 0.065-0.085 0.126-0.119 0.195l-2.157 4.568c-0.031 0.067-0.048 0.135-0.070 0.205l-2.621 4.294-4.387 1.434c-0.497 0.363-0.602 1.046-0.235 1.531 0.369 0.486 1.071 0.589 1.566 0.231l4.489-1.511c0.137-0.098 0.237-0.225 0.313-0.363 0.056-0.058 0.121-0.105 0.164-0.178l1.563-2.56 2.774 2.31-2.968 3.268c-0.409 0.451-0.368 1.145 0.095 1.543 0.462 0.402 1.17 0.36 1.582-0.093l3.704-4.078c0.115-0.126 0.184-0.271 0.23-0.422 0.028-0.082 0.028-0.168 0.034-0.253 0-0.043 0.017-0.082 0.013-0.122-0.010-0.299-0.134-0.589-0.385-0.796l-2.553-2.127c0.184-0.171 0.34-0.375 0.453-0.614l1.654-3.499 0.53 1.379c0.022 0.122 0.064 0.243 0.153 0.343 0.080 0.093 0.182 0.155 0.29 0.198 0.011 0.005 0.024 0.007 0.038 0.010 0.069 0.024 0.139 0.047 0.211 0.050 0.085 0.008 0.172-0.003 0.259-0.027 0.002-0.001 0.003-0.001 0.003-0.001 0.023-0.005 0.047-0.001 0.070-0.011 0.123-0.046 0.217-0.122 0.298-0.212l3.013-2.498c0.32-0.263 0.185-0.729-0.084-1.042z"></path>
<path fill="#f6f6f6" style="fill: var(--color1, #f6f6f6)" d="M20.919 10.126c1.166 0 2.111-0.924 2.111-2.063s-0.945-2.063-2.111-2.063c-1.166 0-2.111 0.924-2.111 2.063s0.945 2.063 2.111 2.063z"></path>

                </svg>
                <p class="exercise-name-text">${g.name.substring(0,24)+"..."}</p>
                </span>
                <ul class="exercise-describes-list">
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Burned calories:</p>
                    <p class="exercise-describing">${g.burnedCalories} / ${g.time}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Body part:</p>
                    <p class="exercise-describing">${g.bodyPart}</p>
                </li>
                <li class="exercise-describe">
                    <p class="exercise-describe-category">Target:</p>
                    <p class="exercise-describing">${g.target}</p>
                </li>
                </ul>
            </div>
            </li>
        `,"")}catch(s){console.error("Error:",s)}});I.forEach(e=>{e.addEventListener("click",c=>{c.preventDefault();const s=c.target.textContent;localStorage.removeItem("searchInput"),localStorage.removeItem("searchQuery"),R(c),s==="Muscles"?(b.style.display="none",k.style.display="none",n.style.display="none",M.style.display="flex",h.style.visibility="hidden",d.style.visibility="hidden"):s==="Body parts"?(h.style.visibility="hidden",n.innerHTML="",b.style.display="flex",k.style.display="flex",n.style.display="flex",M.style.display="none",x.style.display="none",d.style.visibility="hidden"):(b.style.display="none",k.style.display="none",n.style.display="none",h.style.visibility="hidden",d.style.visibility="hidden")})});A.addEventListener("submit",async function(e){e.preventDefault(),y=[],f=1;try{const c=b.value,t=(await N(c)).results;if(y=[...t],sessionStorage.setItem("data",JSON.stringify({results:t})),t.length===0){n.innerHTML="",console.log(t.length),n.insertAdjacentHTML("beforeend","<li class='no-result-list'><p class='no-result'>Unfortunately,<span class='no-result-span'> no results</span> were found.You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>"),x.style.display="none";return}else{d.innerHTML="",d.textContent=`${t[0].bodyPart}`.charAt(0).toUpperCase()+`${t[0].bodyPart}`.slice(1),d.style.visibility="visible",h.style.visibility="visible",x.style.display="flex",q=0;for(let i=0;i<8;i++)q++;n.innerHTML=t.reduce((i,a,u)=>i+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(a.rating)}</p>
                    <svg class="exercise-rating-icon" width="18" height="18" viewBox="0 0 34 32">
      <path d="M15.24 1.561c.504-1.552 2.699-1.552 3.204 0l2.558 7.872c.225.694.872 1.164 1.602 1.164h8.277c1.632 0 2.31 2.088.99 3.047l-6.696 4.865c-.59.429-.837 1.189-.612 1.883l2.558 7.872c.504 1.552-1.272 2.842-2.592 1.883l-6.696-4.865a1.684 1.684 0 0 0-1.98 0l-6.696 4.865c-1.32.959-3.096-.331-2.592-1.883l2.558-7.872a1.6855 1.6855 0 0 0-.612-1.883l-6.696-4.865c-1.32-.959-.642-3.047.99-3.047h8.277c.73 0 1.376-.47 1.602-1.164l2.558-7.872z"/>
                    </svg>
                    </span>
                <a class="exercise-part-link" href="../partials/pop-up-exersise-card.html">
                <button class="exercise-part-button"  id='${u}'>Start
                <svg class="exercise-btn-icon" width="14" height="14" viewBox="0 0 32 32">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.6" d="m15 28 13-13m0 0L15 2m13 13H2"/>
                </button>
                </a>
                </div>
                <span class="exercise-part-name">
                <svg class="exercise-part-icon" width="24" height="24"  viewBox="0 0 34 32">
<path fill="#f6f6f6" style="fill: var(--color1, #f6f6f6)" opacity="0.1" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
<path fill="#f6f6f6" style="fill: var(--color1, #f6f6f6)" d="M24.729 11.907c-0.268-0.313-0.746-0.354-1.066-0.093l-2.099 1.723-0.965-2.337c-0.034-0.088-0.086-0.161-0.146-0.226-0.197-0.429-0.54-0.797-1.012-1.011-0.205-0.091-0.417-0.14-0.628-0.164-0.047-0.024-0.089-0.055-0.142-0.071l-3.694-1.006c-0.207-0.055-0.416-0.020-0.586 0.078-0.203 0.067-0.377 0.211-0.46 0.42l-1.391 3.495c-0.151 0.38 0.042 0.809 0.432 0.959 0.388 0.147 0.828-0.042 0.98-0.423l1.175-2.951 1.683 0.457c-0.041 0.065-0.085 0.126-0.119 0.195l-2.157 4.568c-0.031 0.067-0.048 0.135-0.070 0.205l-2.621 4.294-4.387 1.434c-0.497 0.363-0.602 1.046-0.235 1.531 0.369 0.486 1.071 0.589 1.566 0.231l4.489-1.511c0.137-0.098 0.237-0.225 0.313-0.363 0.056-0.058 0.121-0.105 0.164-0.178l1.563-2.56 2.774 2.31-2.968 3.268c-0.409 0.451-0.368 1.145 0.095 1.543 0.462 0.402 1.17 0.36 1.582-0.093l3.704-4.078c0.115-0.126 0.184-0.271 0.23-0.422 0.028-0.082 0.028-0.168 0.034-0.253 0-0.043 0.017-0.082 0.013-0.122-0.010-0.299-0.134-0.589-0.385-0.796l-2.553-2.127c0.184-0.171 0.34-0.375 0.453-0.614l1.654-3.499 0.53 1.379c0.022 0.122 0.064 0.243 0.153 0.343 0.080 0.093 0.182 0.155 0.29 0.198 0.011 0.005 0.024 0.007 0.038 0.010 0.069 0.024 0.139 0.047 0.211 0.050 0.085 0.008 0.172-0.003 0.259-0.027 0.002-0.001 0.003-0.001 0.003-0.001 0.023-0.005 0.047-0.001 0.070-0.011 0.123-0.046 0.217-0.122 0.298-0.212l3.013-2.498c0.32-0.263 0.185-0.729-0.084-1.042z"></path>
<path fill="#f6f6f6" style="fill: var(--color1, #f6f6f6)" d="M20.919 10.126c1.166 0 2.111-0.924 2.111-2.063s-0.945-2.063-2.111-2.063c-1.166 0-2.111 0.924-2.111 2.063s0.945 2.063 2.111 2.063z"></path>

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
        `,"")}}catch(c){console.error("Error:",c)}});x.addEventListener("click",async e=>{f=e.target.textContent,w=8;try{B=JSON.parse(localStorage.getItem("searchInput")).searchInput;const t=`https://energyflow.b.goit.study/api/exercises?bodypart=${B}&page=${f}&limit=${w}`,i=await fetch(t);if(i.status!==200)throw new Error("Failed to fetch data. Please try again later.");const p=(await i.json()).results;console.log(p.length),sessionStorage.setItem("data",JSON.stringify({results:p})),E=0;for(let l=0;l<8;l++)E++;n.innerHTML=p.reduce((l,r,g)=>l+`
        <li class="exercise-parts">
            <div class="part-container">
                <div class="exercise-head-container">
                    <span class="exercise-badge">WORKOUT</span>
                    <span class="exercise-part-rating">
                    <p class="exercise-rating-number">${Math.round(r.rating)}</p>
                    <svg class="exercise-rating-icon" width="18" height="18" viewBox="0 0 34 32">
      <path d="M15.24 1.561c.504-1.552 2.699-1.552 3.204 0l2.558 7.872c.225.694.872 1.164 1.602 1.164h8.277c1.632 0 2.31 2.088.99 3.047l-6.696 4.865c-.59.429-.837 1.189-.612 1.883l2.558 7.872c.504 1.552-1.272 2.842-2.592 1.883l-6.696-4.865a1.684 1.684 0 0 0-1.98 0l-6.696 4.865c-1.32.959-3.096-.331-2.592-1.883l2.558-7.872a1.6855 1.6855 0 0 0-.612-1.883l-6.696-4.865c-1.32-.959-.642-3.047.99-3.047h8.277c.73 0 1.376-.47 1.602-1.164l2.558-7.872z"/>
                    </svg>
                    </span>
                    <a class="exercise-part-link" href="./partials/pop-up-exersise-card.html">
                <button class="exercise-part-button"  id='${g}'>Start
                <svg class="exercise-btn-icon" width="14" height="14" viewBox="0 0 32 32">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.6" d="m15 28 13-13m0 0L15 2m13 13H2"/>
                </svg>
                </button>
                </a>
                </div>

                <span class="exercise-part-name">
                <svg class="exercise-part-icon" width="24" height="24"  viewBox="0 0 34 32">
<path fill="#f6f6f6" style="fill: var(--color1, #f6f6f6)" opacity="0.1" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
<path fill="#f6f6f6" style="fill: var(--color1, #f6f6f6)" d="M24.729 11.907c-0.268-0.313-0.746-0.354-1.066-0.093l-2.099 1.723-0.965-2.337c-0.034-0.088-0.086-0.161-0.146-0.226-0.197-0.429-0.54-0.797-1.012-1.011-0.205-0.091-0.417-0.14-0.628-0.164-0.047-0.024-0.089-0.055-0.142-0.071l-3.694-1.006c-0.207-0.055-0.416-0.020-0.586 0.078-0.203 0.067-0.377 0.211-0.46 0.42l-1.391 3.495c-0.151 0.38 0.042 0.809 0.432 0.959 0.388 0.147 0.828-0.042 0.98-0.423l1.175-2.951 1.683 0.457c-0.041 0.065-0.085 0.126-0.119 0.195l-2.157 4.568c-0.031 0.067-0.048 0.135-0.070 0.205l-2.621 4.294-4.387 1.434c-0.497 0.363-0.602 1.046-0.235 1.531 0.369 0.486 1.071 0.589 1.566 0.231l4.489-1.511c0.137-0.098 0.237-0.225 0.313-0.363 0.056-0.058 0.121-0.105 0.164-0.178l1.563-2.56 2.774 2.31-2.968 3.268c-0.409 0.451-0.368 1.145 0.095 1.543 0.462 0.402 1.17 0.36 1.582-0.093l3.704-4.078c0.115-0.126 0.184-0.271 0.23-0.422 0.028-0.082 0.028-0.168 0.034-0.253 0-0.043 0.017-0.082 0.013-0.122-0.010-0.299-0.134-0.589-0.385-0.796l-2.553-2.127c0.184-0.171 0.34-0.375 0.453-0.614l1.654-3.499 0.53 1.379c0.022 0.122 0.064 0.243 0.153 0.343 0.080 0.093 0.182 0.155 0.29 0.198 0.011 0.005 0.024 0.007 0.038 0.010 0.069 0.024 0.139 0.047 0.211 0.050 0.085 0.008 0.172-0.003 0.259-0.027 0.002-0.001 0.003-0.001 0.003-0.001 0.023-0.005 0.047-0.001 0.070-0.011 0.123-0.046 0.217-0.122 0.298-0.212l3.013-2.498c0.32-0.263 0.185-0.729-0.084-1.042z"></path>
<path fill="#f6f6f6" style="fill: var(--color1, #f6f6f6)" d="M20.919 10.126c1.166 0 2.111-0.924 2.111-2.063s-0.945-2.063-2.111-2.063c-1.166 0-2.111 0.924-2.111 2.063s0.945 2.063 2.111 2.063z"></path>

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
        `,"")}catch(s){console.error("Error:",s)}});const m=document.querySelector(".modal123");function P(e){m.innerHTML=`
    <div class="pop-backdrop is-open">
    <div class="pop-ex-modal">
      <button class="pop-ex-close-btn">
        <svg
          class="pop-ex-close-btn-icon"
          width="24"
          height="24"
          aria-label="close icon"
         viewBox="0 0 32 32">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.2" d="M24 8 8 24M8 8l16 16"/>
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
                aria-label="ratting" viewBox="0 0 34 32">
      <path d="M15.24 1.561c.504-1.552 2.699-1.552 3.204 0l2.558 7.872c.225.694.872 1.164 1.602 1.164h8.277c1.632 0 2.31 2.088.99 3.047l-6.696 4.865c-.59.429-.837 1.189-.612 1.883l2.558 7.872c.504 1.552-1.272 2.842-2.592 1.883l-6.696-4.865a1.684 1.684 0 0 0-1.98 0l-6.696 4.865c-1.32.959-3.096-.331-2.592-1.883l2.558-7.872a1.6855 1.6855 0 0 0-.612-1.883l-6.696-4.865c-1.32-.959-.642-3.047.99-3.047h8.277c.73 0 1.376-.47 1.602-1.164l2.558-7.872z"/>
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
            Add to favorites<svg class="heart-icon" width="18" height="18" viewBox="0 0 32 32">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.6667" d="M27.788 6.147c-.681-.681-1.49-1.222-2.38-1.591s-1.844-.559-2.807-.559c-.963 0-1.917.19-2.807.559s-1.699.909-2.38 1.591L16.001 7.56l-1.413-1.413c-1.376-1.376-3.241-2.148-5.187-2.148s-3.811.773-5.187 2.148c-1.376 1.376-2.148 3.241-2.148 5.187s.773 3.811 2.148 5.187l11.787 11.787 11.787-11.787a7.3288 7.3288 0 0 0 2.149-5.187c0-.963-.19-1.917-.558-2.807a7.3292 7.3292 0 0 0-1.591-2.38z"/>
            </svg>
          </button>

          <button class="pop-rating-btn">Give a rating</button>
        </div>
      </div>
    </div>
  </div>
`}n.addEventListener("click",async e=>{e.preventDefault();const c=e.target.id,s=JSON.parse(sessionStorage.getItem("data"));if(e.target.tagName=="BUTTON"&&c==c){const t=s.results[c];P(t),J(t)}});function J(e){function c(p){console.log(p.target);const l=JSON.parse(localStorage.getItem("exercises"))||[];console.log(123),l.push(e),localStorage.setItem("exercises",JSON.stringify(l)),[...l];const r=document.querySelector(".pop-add-fav");r&&r.removeEventListener("click",c),document.querySelector(".pop-ex-close-btn"),C.success({title:"Excellent choice!",message:"The exercise has been successfully added to your favorites. Get ready for endless inspiration and great results!",position:"center"})}const s=document.querySelector(".pop-add-fav");s?s.addEventListener("click",c):console.error("Button not found");const t=document.querySelector(".pop-backdrop.is-open");async function i(){await P(e),m.innerHTML="",t.classList.remove("is-open")}t&&t.addEventListener("click",i),window.addEventListener("keydown",function(p){p.key==="Escape"&&(m.innerHTML="")});function a(){m.innerHTML=""}const u=document.querySelector(".pop-ex-close-btn");u?u.addEventListener("click",a):console.error("Close button not found")}function R(e){I.forEach(c=>{c.classList.remove("exercise-button-active"),e.target.classList.add("exercise-button-active")})}const o=JSON.parse(localStorage.getItem("exercises"));console.log(o);const S=document.querySelector(".fav-list"),z=document.querySelector(".favorites");function v(e){o.length===0?W():(S.innerHTML=o.slice(0,8).map(({bodyPart:c,name:s,target:t,burnedCalories:i},a)=>`
    <li class="exercise-parts">
      <div class="part-container">
        <div class="exercise-head-container">
          <span class="exercise-badge">WORKOUT</span>
          <button class="exercise-trash-button">
             <svg class="exercise-trash-icon" width="16" height="16" viewBox="0 0 32 32">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.6" d="M21.333 8V6.933c0-1.493 0-2.24-.291-2.811a2.666 2.666 0 0 0-1.165-1.165c-.57-.291-1.317-.291-2.811-.291h-2.133c-1.493 0-2.24 0-2.811.291-.502.256-.91.664-1.165 1.165-.291.57-.291 1.317-.291 2.811V8m2.667 7.333V22m5.334-6.667V22M4 8h24m-2.667 0v14.933c0 2.24 0 3.36-.436 4.216a3.9962 3.9962 0 0 1-1.748 1.748c-.856.436-1.976.436-4.216.436h-5.867c-2.24 0-3.36 0-4.216-.436a3.9962 3.9962 0 0 1-1.748-1.748c-.436-.856-.436-1.976-.436-4.216V8"/>
            </svg>

          </button>
            <button class="exercise-part-button">
              Start
              <svg class="exercise-btn-icon" width="14" height="14" viewBox="0 0 32 32">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.6" d="m15 28 13-13m0 0L15 2m13 13H2"/>
              </svg>
            </button>
          </a>
        </div>
        <span class="exercise-part-name">
          <svg class="exercise-part-icon" width="24" height="24" viewBox="0 0 34 32">
<path fill="#f6f6f6" style="fill: var(--color1, #f6f6f6)" opacity="0.1" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
<path fill="#f6f6f6" style="fill: var(--color1, #f6f6f6)" d="M24.729 11.907c-0.268-0.313-0.746-0.354-1.066-0.093l-2.099 1.723-0.965-2.337c-0.034-0.088-0.086-0.161-0.146-0.226-0.197-0.429-0.54-0.797-1.012-1.011-0.205-0.091-0.417-0.14-0.628-0.164-0.047-0.024-0.089-0.055-0.142-0.071l-3.694-1.006c-0.207-0.055-0.416-0.020-0.586 0.078-0.203 0.067-0.377 0.211-0.46 0.42l-1.391 3.495c-0.151 0.38 0.042 0.809 0.432 0.959 0.388 0.147 0.828-0.042 0.98-0.423l1.175-2.951 1.683 0.457c-0.041 0.065-0.085 0.126-0.119 0.195l-2.157 4.568c-0.031 0.067-0.048 0.135-0.070 0.205l-2.621 4.294-4.387 1.434c-0.497 0.363-0.602 1.046-0.235 1.531 0.369 0.486 1.071 0.589 1.566 0.231l4.489-1.511c0.137-0.098 0.237-0.225 0.313-0.363 0.056-0.058 0.121-0.105 0.164-0.178l1.563-2.56 2.774 2.31-2.968 3.268c-0.409 0.451-0.368 1.145 0.095 1.543 0.462 0.402 1.17 0.36 1.582-0.093l3.704-4.078c0.115-0.126 0.184-0.271 0.23-0.422 0.028-0.082 0.028-0.168 0.034-0.253 0-0.043 0.017-0.082 0.013-0.122-0.010-0.299-0.134-0.589-0.385-0.796l-2.553-2.127c0.184-0.171 0.34-0.375 0.453-0.614l1.654-3.499 0.53 1.379c0.022 0.122 0.064 0.243 0.153 0.343 0.080 0.093 0.182 0.155 0.29 0.198 0.011 0.005 0.024 0.007 0.038 0.010 0.069 0.024 0.139 0.047 0.211 0.050 0.085 0.008 0.172-0.003 0.259-0.027 0.002-0.001 0.003-0.001 0.003-0.001 0.023-0.005 0.047-0.001 0.070-0.011 0.123-0.046 0.217-0.122 0.298-0.212l3.013-2.498c0.32-0.263 0.185-0.729-0.084-1.042z"></path>
<path fill="#f6f6f6" style="fill: var(--color1, #f6f6f6)" d="M20.919 10.126c1.166 0 2.111-0.924 2.111-2.063s-0.945-2.063-2.111-2.063c-1.166 0-2.111 0.924-2.111 2.063s0.945 2.063 2.111 2.063z"></path>

          </svg>
          <p class="exercise-name-text">${s.substring(0,24)+"..."}</p> 
        </span>
        <ul class="exercise-describes-list">
          <li class="exercise-describe">
            <p class="exercise-describe-category">Burned calories:</p>
            <p class="exercise-describing">${i} / 3 min</p>
          </li>
          <li class="exercise-describe">
            <p class="exercise-describe-category">Body part:</p>
            <p class="exercise-describing">${c}</p>
          </li>
          <li class="exercise-describe">
            <p class="exercise-describe-category">Target:</p>
            <p class="exercise-describing">${t}</p>
          </li>
        </ul>
      </div>
    </li>
  `).join(""),H())}v();o.length>8&&F();z.addEventListener("click",function(e){if(e.target.classList.contains("exercise-number-button")){const c=parseInt(e.target.id),s=(c-1)*8,t=c*8;S.innerHTML=o.slice(s,t).map(({bodyPart:i,name:a,target:u,burnedCalories:p},l)=>`
    <li class="exercise-parts">
      <div class="part-container">
        <div class="exercise-head-container">
          <span class="exercise-badge">WORKOUT</span>
          <button class="exercise-trash-button">
            <svg class="exercise-trash-icon" width="16" height="16"  viewBox="0 0 32 32">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.6" d="M21.333 8V6.933c0-1.493 0-2.24-.291-2.811a2.666 2.666 0 0 0-1.165-1.165c-.57-.291-1.317-.291-2.811-.291h-2.133c-1.493 0-2.24 0-2.811.291-.502.256-.91.664-1.165 1.165-.291.57-.291 1.317-.291 2.811V8m2.667 7.333V22m5.334-6.667V22M4 8h24m-2.667 0v14.933c0 2.24 0 3.36-.436 4.216a3.9962 3.9962 0 0 1-1.748 1.748c-.856.436-1.976.436-4.216.436h-5.867c-2.24 0-3.36 0-4.216-.436a3.9962 3.9962 0 0 1-1.748-1.748c-.436-.856-.436-1.976-.436-4.216V8"/>
    
            </svg>

          </button>
            <button class="exercise-part-button">
              Start
              <svg class="exercise-btn-icon" width="14" height="14"  viewBox="0 0 32 32">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.6" d="m15 28 13-13m0 0L15 2m13 13H2"/>
    
              </svg>
            </button>
          </a>
        </div>
        <span class="exercise-part-name">
          <svg class="exercise-part-icon" width="24" height="24" viewBox="0 0 34 32">
<path fill="#f6f6f6" style="fill: var(--color1, #f6f6f6)" opacity="0.1" d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path>
<path fill="#f6f6f6" style="fill: var(--color1, #f6f6f6)" d="M24.729 11.907c-0.268-0.313-0.746-0.354-1.066-0.093l-2.099 1.723-0.965-2.337c-0.034-0.088-0.086-0.161-0.146-0.226-0.197-0.429-0.54-0.797-1.012-1.011-0.205-0.091-0.417-0.14-0.628-0.164-0.047-0.024-0.089-0.055-0.142-0.071l-3.694-1.006c-0.207-0.055-0.416-0.020-0.586 0.078-0.203 0.067-0.377 0.211-0.46 0.42l-1.391 3.495c-0.151 0.38 0.042 0.809 0.432 0.959 0.388 0.147 0.828-0.042 0.98-0.423l1.175-2.951 1.683 0.457c-0.041 0.065-0.085 0.126-0.119 0.195l-2.157 4.568c-0.031 0.067-0.048 0.135-0.070 0.205l-2.621 4.294-4.387 1.434c-0.497 0.363-0.602 1.046-0.235 1.531 0.369 0.486 1.071 0.589 1.566 0.231l4.489-1.511c0.137-0.098 0.237-0.225 0.313-0.363 0.056-0.058 0.121-0.105 0.164-0.178l1.563-2.56 2.774 2.31-2.968 3.268c-0.409 0.451-0.368 1.145 0.095 1.543 0.462 0.402 1.17 0.36 1.582-0.093l3.704-4.078c0.115-0.126 0.184-0.271 0.23-0.422 0.028-0.082 0.028-0.168 0.034-0.253 0-0.043 0.017-0.082 0.013-0.122-0.010-0.299-0.134-0.589-0.385-0.796l-2.553-2.127c0.184-0.171 0.34-0.375 0.453-0.614l1.654-3.499 0.53 1.379c0.022 0.122 0.064 0.243 0.153 0.343 0.080 0.093 0.182 0.155 0.29 0.198 0.011 0.005 0.024 0.007 0.038 0.010 0.069 0.024 0.139 0.047 0.211 0.050 0.085 0.008 0.172-0.003 0.259-0.027 0.002-0.001 0.003-0.001 0.003-0.001 0.023-0.005 0.047-0.001 0.070-0.011 0.123-0.046 0.217-0.122 0.298-0.212l3.013-2.498c0.32-0.263 0.185-0.729-0.084-1.042z"></path>
<path fill="#f6f6f6" style="fill: var(--color1, #f6f6f6)" d="M20.919 10.126c1.166 0 2.111-0.924 2.111-2.063s-0.945-2.063-2.111-2.063c-1.166 0-2.111 0.924-2.111 2.063s0.945 2.063 2.111 2.063z"></path>

          </svg>
          <p class="exercise-name-text">${a.substring(0,24)+"..."}</p> 
        </span>
        <ul class="exercise-describes-list">
          <li class="exercise-describe">
            <p class="exercise-describe-category">Burned calories:</p>
            <p class="exercise-describing">${p} / 3 min</p>
          </li>
          <li class="exercise-describe">
            <p class="exercise-describe-category">Body part:</p>
            <p class="exercise-describing">${i}</p>
          </li>
          <li class="exercise-describe">
            <p class="exercise-describe-category">Target:</p>
            <p class="exercise-describing">${u}</p>
          </li>
        </ul>
      </div>
    </li>
  `).join(""),H()}});v();const V=document.querySelector(".exercise-pages-counter");function H(){document.querySelectorAll(".exercise-trash-button").forEach(c=>{c.addEventListener("click",s=>{const t=s.currentTarget.getAttribute("data-index");o.splice(t,1),localStorage.setItem("exercises",JSON.stringify(o)),v(),o.length<8&&V.classList.add("visually-hidden")})})}v();const D=document.querySelector(".favorite-button");S.addEventListener("click",async e=>{if(e.target===D){e.preventDefault();const c=e.target.id;for(const s of o)s._id===c&&(console.log(s),K(s))}});function W(){S.innerHTML=`
      <div class="empty-content-fav">
        <img
        class="dumbbell-favorites-img"
        srcset="

          ../img/favorites/dumbbell-tab-desc.png   116w,
          ../img/favorites/dumbbell-tab-desc@2x.png    231w,
          ../img/favorites/dumbbell-mob.png   85w,
          ../img/favorites/dumbbell-mob@2x.png  170w
        "
        src="../img/favorites/dumbbell-mob.png"

        sizes="(min-width: 768px) 116px, (max-width: 767px) 85px"
        alt="dumbbell icon"
      />
      <p class='no-card-in-storage'>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>
      </div>`}function F(){z.insertAdjacentHTML("beforeend",`<ul class="exercise-pages-counter">
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
</ul>`)}const $=document.querySelector(".favorite-modal");function K(e){$.innerHTML=`
    <div class="pop-backdrop is-open">
    <div class="pop-ex-modal">
      <button class="pop-ex-close-btn fav-close-btn">
        <svg
          class="pop-ex-close-btn-icon"
          width="24"
          height="24"
          aria-label="close icon"
    viewBox="0 0 32 32">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.2" d="M24 8 8 24M8 8l16 16"/>
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
        <p class="pop-ex-current-rating">${e.rating}</p>
        <ul class="pop-ex-stars-list">
            <li>
              <svg
                class="pop-ex-rate-icon"
                width="18"
                height="18"
                aria-label="ratting" viewBox="0 0 34 32">
      <path d="M15.24 1.561c.504-1.552 2.699-1.552 3.204 0l2.558 7.872c.225.694.872 1.164 1.602 1.164h8.277c1.632 0 2.31 2.088.99 3.047l-6.696 4.865c-.59.429-.837 1.189-.612 1.883l2.558 7.872c.504 1.552-1.272 2.842-2.592 1.883l-6.696-4.865a1.684 1.684 0 0 0-1.98 0l-6.696 4.865c-1.32.959-3.096-.331-2.592-1.883l2.558-7.872a1.6855 1.6855 0 0 0-.612-1.883l-6.696-4.865c-1.32-.959-.642-3.047.99-3.047h8.277c.73 0 1.376-.47 1.602-1.164l2.558-7.872z"/>
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
          <button class="pop-add-fav fav-remove-btn">
            Remove from<svg class="heart-icon" width="18" height="18" viewBox="0 0 32 32">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.6667" d="M27.788 6.147c-.681-.681-1.49-1.222-2.38-1.591s-1.844-.559-2.807-.559c-.963 0-1.917.19-2.807.559s-1.699.909-2.38 1.591L16.001 7.56l-1.413-1.413c-1.376-1.376-3.241-2.148-5.187-2.148s-3.811.773-5.187 2.148c-1.376 1.376-2.148 3.241-2.148 5.187s.773 3.811 2.148 5.187l11.787 11.787 11.787-11.787a7.3288 7.3288 0 0 0 2.149-5.187c0-.963-.19-1.917-.558-2.807a7.3292 7.3292 0 0 0-1.591-2.38z"/>
    
            </svg>
          </button>
  <button class="pop-rating-btn">Give a rating</button>
        </div>
      </div>
    </div>
  </div>
`,document.querySelector(".fav-remove-btn").addEventListener("click",function(t){console.log("clicked");const i=t.currentTarget.getAttribute("data-index");o.splice(i,1),localStorage.setItem("exercises",JSON.stringify(o)),v(),$.innerHTML=""}),document.querySelector(".fav-close-btn").addEventListener("click",function(){$.innerHTML=""})}
//# sourceMappingURL=exersises-8e752811.js.map
