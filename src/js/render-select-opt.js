import { fetchBreeds } from './cat-api';
import { getRefs } from './get-refs';

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
      refs.pLoader.style.display = 'none';
      refs.select.style.display = 'block';
    })
    .catch(error => {
      console.log(error);
    });
};
