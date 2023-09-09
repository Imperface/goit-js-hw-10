import axios from 'axios';
import { API_KEY, BASE_URL } from './cat-api-key-url';
const fetchCats = endpoint => {
  return axios
    .get(`${endpoint}`, {
      headers: {
        'x-api-key': `${API_KEY}`,
      },
    })
    .then(r => {
      if (r.statusText !== 'OK') {
        throw new Error(r.status);
      }
      return r.data;
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
