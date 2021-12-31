// Animal URL 
const animalsUrl = 'http://localhost:3001/api/v1/animals';
// ----- Query selectors
const animalsSection = document.querySelector('.js-animals');
const form = document.querySelector('.js-add-animal');
// ----- GET request 
const getAllAnimals = () => {
  fetch(animalsUrl)
  .then(response => response.json())
  .then(animals => addAnimalsToPage(animals));
}
//----- Post request 
const addAnimal = (newAnimal) => {
  fetch(animalsUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newAnimal)
  })
  .then(response => response.json())
  .then(animal => addAnimalToPage(animal));
}


// Pick between 1 of the resources available in the api (users, animals, or sports teams), and do the following:
// 1. Make a GET request to get all of the items for a given resource, and log those items to the console.
// 2. Make a POST request to create a new instance of that resource, and log the result to the console.
// 3. Rerun your previous GET fetch request to verify you added the new resource


// Hook it up to the dom!
// 4. On page load, fire off #1 from above and populate the section (.js-collection) with those items
// 5. Add an event listener, so that when you click button.js-add-item, it will make a fetch request to POST that item to the server, AND update the page with the newly updated collection

// EXTRA CREDIT:
// Create a form and event listener so that the user can add an item of their choosing
// Handle the use case where a 422 is given back from the server (this will happen if not all params are sent with the POST)

