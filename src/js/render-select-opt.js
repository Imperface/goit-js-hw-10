import { fetchBreeds } from './cat-api';
import { getRefs } from './get-refs';
import { Report } from 'notiflix/build/notiflix-report-aio';
import Choices from 'choices.js';

const addChoicesSelect = ref => {
  const choices = new Choices(ref, {
    searchEnabled: false,
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

      addChoicesSelect(refs.select);
      refs.pLoader.style.display = 'none';
      refs.select.style.display = 'block';
    })
    .catch(error => {
      Report.failure(
        'Oops! Something went wrong!',
        'Try reloading the page',
        'Okay'
      );
    });
};
