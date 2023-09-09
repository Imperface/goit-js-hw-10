import { fetchBreeds } from './cat-api';
import getRefs from './get-refs';

export const renderSelectOpt = () => {
  const refs = getRefs();
  fetchBreeds()
    .then(r => {
      const markupSelectOpt = r
        .map(item => {
          return `<option class = "option" value="${item.id}">${item.name}</option>`;
        })
        .join('');
      refs.select.insertAdjacentHTML('beforeend', markupSelectOpt);
    })
    .catch(error => {
      console.log(error);
    });
};
