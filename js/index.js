import { portfolioItems } from './portfolio-items.js';
import { refs } from './refs.js';

window.onload = () => {
  createPortfolioMarkup(portfolioItems);
  refs.filterBtn.addEventListener('click', handleFilter);
};

function handleFilter(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  const currentEl = document.querySelector('.filter__btn--current');
  const isSelectedEl = evt.target;
  const isSelectedElValue = isSelectedEl.dataset.value;

  currentEl
    ? currentEl.classList.remove('filter__btn--current')
    : isSelectedEl.classList.add('filter__btn--current');

  clearPortfolioContainer();
  if (isSelectedElValue === 'all') {
    createPortfolioMarkup(portfolioItems);
    return;
  }
  filterPortfolio(isSelectedElValue);
}

function filterPortfolio(selectedType) {
  const filteredItems = portfolioItems.filter(item => item.type === selectedType);
  console.log('filteredItems', filteredItems);
  createPortfolioMarkup(filteredItems);
}

function createPortfolioMarkup(items) {
  const markupCard = items
    .map(({ imageURL, imageURL1200, imageURL768, imageURL480, alt, title, descr, group }) => {
      return `<li class="portfolio-card">
                <a href="#" class="portfolio-card__link">
                    <div class="portfolio-card__thumb">
                        <picture>
                            <source
                                srcset="${imageURL1200}"
                                media="(min-width: 1200px)">
                            <source
                                srcset="${imageURL768}"
                                media="(min-width: 768px)">
                            <source
                                srcset="${imageURL480}"
                                media="(max-width: 767px)">
                            <img class="img" src="${imageURL}"
                                alt="${alt}">
                        </picture>
                        <div class="overlay">
                            <p class="overlay__text">${descr}</p>
                        </div>
                    </div>
                    <div class="portfolio-card__body">
                        <h2 class="portfolio-card__title">${title}</h2>
                        <p class="portfolio-card__text">${group}</p>
                    </div>
                </a>
            </li>`;
    })
    .join('');

  refs.gallery.insertAdjacentHTML('beforeend', markupCard);
}

function clearPortfolioContainer() {
  refs.gallery.innerHTML = '';
}
