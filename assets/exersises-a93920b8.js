import{musclesGroup as n}from"./api-355b4ca2.js";const i=document.querySelector(".exercise-cards-list"),a=document.querySelector(".exercise-cards-list"),d=document.querySelectorAll(".exercise-card"),u=document.querySelector(".exercise-pages-counter");let l=1,c=[];i.addEventListener("click",async r=>{r.preventDefault(),c=[],l=1,a.innerHTML="";try{const e=(await n(r)).results;if(console.log(e),c=[...e],console.log(c),d.forEach(t=>{t.style.display="none"}),e.length===0)throw new Error({title:"No Results",message:"No images found. Please try a different search term."});a.innerHTML=e.reduce((t,o)=>t+`
        <li><p>${o.target}</p></li>
        `,"")}catch(s){console.error("Error:",s)}});u.addEventListener("click",async r=>{l=r.target.id,console.log(l);try{const s=await n(r);if(response.status!==200)throw new Error("Failed to fetch more data. Please try again later.");const e=s.results;c=[...results,...e],a.innerHTML=results.reduce((t,o)=>t+`
        <li><p>${o.target}</p></li>
        `,"")}catch{}});
//# sourceMappingURL=exersises-a93920b8.js.map
