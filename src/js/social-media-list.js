const smListFooter = document.querySelector('.sm-list');
const smListHeader = document.querySelector('.heder-link-list');
const isHeader = true; // Задайте значение true, если рендерите в хедер, и false, если в футер

const listClass = isHeader ? 'heder-link-list' : 'sm-list';
const itemClass = isHeader ? 'heder-link-item' : 'sm-list-item';
const linkClass = isHeader ? 'heder-link' : 'sm-link';
const iconClass = isHeader ? 'heder-link-icon' : 'sm-icon';

const listElements = `<li class="${itemClass}">
            <a
              class="${linkClass}"
              href="https://www.facebook.com/goITclub/"
              target="_blank"
            >
              <svg class="${iconClass}" aria-label="facebook icon">
                <use href="./img/icons.svg#icon-facebook"></use>
              </svg>
            </a>
          </li>
          <li class="${itemClass}">
            <a
              class="${linkClass}"
              href="https://www.instagram.com/goitclub/"
              target="_blank"
            >
              <svg class="${iconClass}" aria-label="instagram icon">
                <use href="./img/icons.svg#icon-instagram"></use>
              </svg>
            </a>
          </li>
          <li class="${itemClass}">
            <a
              class="${linkClass}"
              href="https://www.youtube.com/c/GoIT"
              target="_blank"
            >
              <svg class="${iconClass}" aria-label="youtube icon">
                <use href="./img/icons.svg#icon-youtube"></use>
              </svg>
            </a>
          </li>`;

document.querySelector(`.${listClass}`).innerHTML = listElements;
