const renderInHeader = true;

const headerListClass = 'heder-link-list';
const footerListClass = 'sm-list';

const listClass = renderInHeader ? headerListClass : footerListClass;
const itemClass = renderInHeader ? 'heder-link-item' : 'sm-list-item';
const linkClass = renderInHeader ? 'heder-link' : 'sm-link';
const iconClass = renderInHeader ? 'heder-link-icon' : 'sm-icon';

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
