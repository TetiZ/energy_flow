const c="quote",n="author",l=localStorage.getItem("date"),s=new Date().toDateString();if(l===s){const o=localStorage.getItem(c),t=localStorage.getItem(n);console.log(`Збережена цитата: ${o} - ${t}`),u({quote:o,author:t})}else{async function o(){try{const t=await fetch("https://energyflow.b.goit.study/api/quote");if(t.ok){const e=await t.json(),r=e.quote,a=e.author;localStorage.setItem(c,r),localStorage.setItem(n,a||"автор невідомий"),localStorage.setItem("date",s),console.log(`Нова цитата: ${r} - ${a||"автор невідомий"}`),u({quote:r,author:a||"автор невідомий"})}else throw new Error("Помилка запиту до сервера!")}catch(t){console.error(t)}}o()}function u(o){const t=document.querySelector(".quote-text"),e=document.querySelector(".quote-author");o&&(t.textContent=o.quote,e.textContent=o.author)}
//# sourceMappingURL=quote-64dc1c95.js.map
