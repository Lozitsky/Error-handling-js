const entitiesSection = document.querySelector('.js-team');
const addForm = document.querySelector('.js-add-sport-team');
const teamIdForm = document.querySelector('.team-id')
const usersUrl = `${APIUrl}/sport-teams`;
const getAllTeams = () => getAllEntities(usersUrl);
const addTeamHandler = e => addEntityHandler(e, usersUrl);
const getTeamHandler = e => getEntityHandler(e, usersUrl, 'team-id');

getAllTeams();

addForm.addEventListener('submit', addTeamHandler);
teamIdForm.addEventListener('submit', getTeamHandler);