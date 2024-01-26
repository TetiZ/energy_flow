const e=document.querySelector(".subs-form"),t="user-email";let o,a=[];e.elements.email.value=localStorage.getItem(t)??"";e.addEventListener("input",r);function r(l){localStorage.setItem(t,l.target.value),o=localStorage.getItem(t)}e.addEventListener("submit",l=>{l.preventDefault(),a.push(o),console.log(a),localStorage.removeItem(t),e.reset()});
//# sourceMappingURL=formFooter-7378164b.js.map
