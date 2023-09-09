import { fetchCatByBreed } from './cat-api';
import getRefs from './get-refs';

export const renderCatCard = selectedBreed => {
  const refs = getRefs();
  fetchCatByBreed(selectedBreed).then(r => {
    const catObj = r[0];
    const catBreed = catObj.breeds[0];
    const markupCatCard = `<img src="${catObj.url}" alt="photo of a ${catBreed.name} cat">
    <h1>${catBreed.name}</h1>
    <p>${catBreed.description}</p>
    <p><span>Temperament</span>${catBreed.temperament}</p>`;
    refs.info.innerHTML = markupCatCard;
  });
};
// photo, name, description, temperament
