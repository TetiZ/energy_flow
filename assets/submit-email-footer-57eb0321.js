import{i as n}from"./vendor-ad859c2f.js";const t=document.querySelector(".subs-form"),s="user-email";t.addEventListener("input",i);function i(o){localStorage.setItem(s,o.target.value)}const r=localStorage.getItem(s);t.elements.email.value=r||"";async function c(o){try{const e=await fetch("https://energyflow.b.goit.study/api/subscription",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o})});if(!e.ok)throw console.error("Код помилки:",e.status),new Error("Мережевий запит не був успішним");const a=await e.json();console.log("Дані успішно відправлені",a),n.success({title:"We are excited to have you on board!",message:"Thank you for subscribing to new exercises on Energy Flow. You have just taken a significant step towards improving your fitness and well-being.",position:"center"})}catch(e){console.error("Помилка при відправленні даних",e)}}t.addEventListener("submit",async o=>{o.preventDefault();const e=localStorage.getItem(s);if(e)try{await c(e),localStorage.removeItem(s),t.reset()}catch{console.log("Помилка при відправленні електронної пошти.")}else console.log("Електронна пошта не введена.")});
//# sourceMappingURL=submit-email-footer-57eb0321.js.map
