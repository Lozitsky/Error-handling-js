const entitiesSection = document.querySelector('.js-users');
const addForm = document.querySelector('.js-add-user');
const userIdForm = document.querySelector('.user-id')
const usersUrl = `${APIUrl}/users`;
const getAllAnimals = () => getAllEntities(usersUrl);
const addUserHandler = e => addEntityHandler(e, usersUrl);
const getUserHandler = e => getEntityHandler(e, usersUrl, 'user-id');

getAllAnimals();

addForm.addEventListener('submit', addUserHandler);
userIdForm.addEventListener('submit', getUserHandler);