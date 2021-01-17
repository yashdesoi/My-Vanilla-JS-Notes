// Code to change the UI
const recipes = document.querySelector('.recipes');

const addRecipe = function(recipe, id) {
    const title = recipe.title;
    const author = recipe.author;
    const date = new Date(recipe.created_at.toMillis());

    const html = `
        <li class="recipe" data-id="${id}">
            <div class="date">${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}</div>
            <div class="title">${title}</div>
            <div class="author">${author}</div>
            <button class="delete">Delete</button>
        </li>
    `;

    recipes.innerHTML += html;
};

// Retrieving data from firestore database
const promise = db.collection('recipes').get(); // Promise

promise
    .then(collection => {
        // Collection --> Document
        const documents = collection.docs; // Array

        documents.forEach(doc => {
            const data = doc.data();  // Object literal
            const id = doc.id;
            addRecipe(data, id);
        });
    })
    .catch(error => {
        console.log(error);
    });


// Adding data to firestore database
// Following do not add anything to the UI, so we need to refresh in order to get all the data (including new one) from the database
const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const now = new Date();

    const recipe = {
        title: form.newRecipe.value,
        author: 'Yash',
        // Creatting JavaScript date object to firestore date object :)
        created_at: firebase.firestore.Timestamp.fromDate(now)
    };

    const promise = db.collection('recipes').add(recipe) // Promise

    promise
        .then(() => console.log('Recipe added successfully :)'))
        .catch(() => console.log('Opps! Failed to add the recipe :('));

    form.reset();
});


// Deleting from firestore
// Following do not delete anything from the UI, so we need to refresh in order to remove the data from the UI
recipes.addEventListener('click', event => {
    event.stopPropagation();

    if (event.target.className === 'delete') {
        const id = event.target.parentElement.getAttribute('data-id');

        const promise = db.collection('recipes').doc(id).delete();

        promise
            .then(() => console.log('Recipe deleted'))
            .catch(() => console.log('Failed to delete, Something went wrong :('));
    }
});

