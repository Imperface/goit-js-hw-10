import axios from 'axios';
import { API_KEY, BASE_URL } from './cat-api-key-url';
import { Report } from 'notiflix/build/notiflix-report-aio';
const fetchCats = endpoint => {
  return axios
    .get(`${endpoint}`, {
      headers: {
        'x-api-key': `${API_KEY}`,
      },
    })
    .then(r => {
      return r.data;
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
export const fetchBreeds = () => {
  const endpointBreeds = `${BASE_URL}breeds/`;
  return fetchCats(endpointBreeds);
};

export const fetchCatByBreed = breedId => {
  const endpointSearch = `${BASE_URL}images/search?breed_ids=${breedId}`;
  return fetchCats(endpointSearch);
};
