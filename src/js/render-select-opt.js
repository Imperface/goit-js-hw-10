import { fetchBreeds } from './cat-api';
import { getRefs } from './get-refs';
import { Report } from 'notiflix/build/notiflix-report-aio';

import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const refs = getRefs();
const addSlimSelect = ref => {
  new SlimSelect({
    select: ref,
  });
};
export const renderSelectOpt = () => {
  fetchBreeds()
    .then(r => {
      const refs = getRefs();
      const markupSelectOpt = r
        .map(item => {
          return `<option class = "option" value="${item.id}">${item.name}</option>`;
        })
        .join('');
      refs.select.insertAdjacentHTML('beforeend', markupSelectOpt);
      addSlimSelect('#selectElement');
      refs.pLoader.style.display = 'none';
      refs.select.style.display = 'block';
    })
    .catch(error => {
      Report.failure(
        'Oops! Something went wrong!',
        'Try reloading the page',
        'Okay'
      );
      refs.pLoader.style.display = 'none';
      refs.pError.style.display = 'block';
    });
};
