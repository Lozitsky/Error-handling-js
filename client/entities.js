const APIUrl = 'http://localhost:3001/api/v1';

// ----- Query selectors
const addErrorField = document.querySelector('.js-add-error');
const getErrorField = document.querySelector('.js-get-error');

const addEntityToPage = entity => {
    entitiesSection.innerHTML += `<p>${entity.name}</p>`;
}

const addEntitiesToPage = entities => {
    entities.forEach(addEntityToPage);
}

// ----- GET request
const getAllEntities = entitiesUrl => {
    fetch(entitiesUrl)
        .then(response => response.json())
        .then(addEntitiesToPage);
}

//Get one entity
const getEntity = (id, entitiesUrl) => {
    fetch(`${entitiesUrl}/${id}`)
        .then(checkForError)
        .then(addEntitiesToPage)
        .catch(displayGetErrorMessage);
}

//----- Post request
const addEntity = (newEntity, entitiesUrl) => {
    fetch(entitiesUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newEntity)
    })
        .then(checkForError)
        .then(addEntityToPage)
        .catch(displayAddErrorMessage);
}

const displayAddErrorMessage = err => {
    displayErrorMessage(err, addErrorField, 'All fields are required!');
};

const displayGetErrorMessage = err => {
    displayErrorMessage(err, getErrorField, 'Try another id.');
};

const displayErrorMessage = (err, errorField, message) => {
    errorField.style = 'color: red';
    errorField.innerText = `${err.message}. ${!err.message.toLowerCase().includes('network') ? message : ''}`;
};

const checkForError = response => {
    addErrorField.innerText = '';
    getErrorField.innerText = '';
    if (!response.ok) {
        return Promise.reject(new Error(response.statusText));
    }
    return response.json();
};

const addEntityHandler = (e, entitiesUrl) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newEntity = {
        id: entitiesSection.childElementCount + 1,
    };
    [...formData.keys()].forEach(key => newEntity[key] = formData.get(key));
    addEntity(newEntity, entitiesUrl);
    e.target.reset();
};

// Here we want to see what happens if we send a wrong id to the server and implement 500 error.
//since the server has only 4 animals if I send id 5 it should return a server error for me.
//add 5 and check your console for the internal server error.
const getEntityHandler = (e, entitiesUrl, idFieldName) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let id = formData.get(idFieldName);
    getEntity(id, entitiesUrl);
    e.target.reset();
};