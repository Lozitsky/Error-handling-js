const entitiesSection = document.querySelector('.js-animals');
const addForm = document.querySelector('.js-add-animal');
const animalIdForm = document.querySelector('.animal-id')
const animalsUrl = `${APIUrl}/animals`;
const getAllAnimals = () => getAllEntities(animalsUrl);
const addAnimalHandler = e => addEntityHandler(e, animalsUrl);
const getAnimalHandler = e => getEntityHandler(e, animalsUrl, 'animal-id');

getAllAnimals();

addForm.addEventListener('submit', addAnimalHandler);
animalIdForm.addEventListener('submit', getAnimalHandler);
