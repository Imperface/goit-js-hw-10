// import Handlebars from 'handlebars';
// import breedSelect from './templates/breed-select.hbs';
import { renderSelectOpt } from './js/render-select-opt';
import { renderCatCard } from './js/render-cat-card';
import { getRefs } from './js/get-refs';

const refs = getRefs();
renderSelectOpt();
refs.select.style.display = 'none';
refs.pError.style.display = 'none';

const onSelectInput = e => {
  refs.info.innerHTML = '';
  refs.pLoader.style.display = 'block';
  const selectedOptionValue = e.target.value;
  renderCatCard(selectedOptionValue);
};
refs.select.addEventListener('input', onSelectInput);
