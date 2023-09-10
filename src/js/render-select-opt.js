import { fetchBreeds } from './cat-api';
import { getRefs } from './get-refs';
import { Report } from 'notiflix/build/notiflix-report-aio';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const addSlimSelect = (ref, data) => {
  const slimSelect = new SlimSelect({
    select: ref,
    data: data,
    showSearch: false,
    placeholder: 'Choose the breed',
  });
};
export const renderSelectOpt = () => {
  fetchBreeds()
    .then(r => {
      const refs = getRefs();
      const dataSelect = [];
      r.map(elem => {
        dataSelect.push({ text: elem.name, value: elem.id });
      });
      addSlimSelect('#selectElement', dataSelect);

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
