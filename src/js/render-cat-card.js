import { fetchCatByBreed } from './cat-api';
import { getRefs } from './get-refs';

export const renderCatCard = selectedBreed => {
  const refs = getRefs();
  fetchCatByBreed(selectedBreed).then(r => {
    const catObj = r[0];
    const catBreed = catObj.breeds[0];
    const markupCatCard = `<div class="card-container">
    <img class = "card-img" src="${catObj.url}" alt="photo of a ${catBreed.name} cat" />
    <div class="card-info">
    <h2 class = "card-title">${catBreed.name}</h2>
    <p class = "card-description">${catBreed.description}</p>
    <p class = "card-special"><span class = "card-special-s">Temperament: </span>${catBreed.temperament}</p>
    </div>
    </div>`;
    refs.info.innerHTML = markupCatCard;
    refs.pLoader.style.display = 'none';
  });
};
