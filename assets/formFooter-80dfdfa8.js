const o=document.querySelector(".subs-form");o.addEventListener("input",a);o.addEventListener("submit",u);function a(e){e.preventDefault();const s=o.querySelector(".subs-input").value.trim();if(!i(s))return;const n=JSON.stringify({email:s}),r="subscription-form-state";localStorage.setItem(r,n)}function i(e){return/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e)}window.addEventListener("load",l);function l(e){e.preventDefault();const t=localStorage.getItem("subscription-form-state");if(t){const s=JSON.parse(t);o.querySelector(".subs-input").value=s.email}else o.querySelector(".subs-input").value=""}function u(e){e.preventDefault();const t=localStorage.getItem("subscription-form-state"),s=o.querySelector(".subs-input");if(t){const n=JSON.parse(t);console.log(n)}else console.log({email:s.value.trim()});localStorage.removeItem("subscription-form-state"),o.reset()}
//# sourceMappingURL=formFooter-80dfdfa8.js.map
