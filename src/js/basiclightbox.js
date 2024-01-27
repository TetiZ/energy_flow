import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const exPopUpWindow = document.querySelector('.pop-backdrop');

// exPopUpWindow.addEventListener("click", function () {

//     const modal = basicLightbox.create(exPopUpWindow, {
//         onShow: (instance) => {
//             instance.exPopUpWindow.onclick = instance.close;
//             // exPopUpWindow.classList.remove('is-open');
//     },
//         onClose: () => {
//             exPopUpWindow.classList.remove('is-open');
//         },
//     })
//     modal.show();
// })

// exPopUpWindow.addEventListener("click", (event) => {
//     event.preventDefault();

//     const instance = basicLightbox.create(exPopUpWindow, {
//     onShow: (instance) => {
//         instance.element().querySelector('.pop-ex-close-btn').onclick = instance.close
//     }
// })

// instance.show()
// })