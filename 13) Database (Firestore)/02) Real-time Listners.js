// Code to change the UI
const recipes = document.querySelector('.recipes');

// Adding to UI
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

// Removing from UI
const removeRecipe = function(id) {
    const recipes = document.querySelectorAll('.recipe');

    recipes.forEach(recipe => {
        if (recipe.getAttribute('data-id') === id) {
            recipe.remove();
        }
    });
}

// In previous example we saw how to add, delete and retrieve the data from firestore. But adding and deleting to firestore do not dynamically change our UI, for that we need to refresh our page so that the 'retrieve' script can run and change our UI according to the data present in the firestore (after adding and deleting).
// But to make it dynamic, firebase gives us an event listner which listens to all the changes happening in our database in real-time. That is callback function inside onSnapshot() will run each time when we add/delete from our database. The callback function takes a parameter 'snapshot'.
// This real-time listner is exactly like event-listner in javascript. Whenever it is exectuted in the script it is sent to Web API and immediatley 1st event is triggred, because before everything it scans the firestore for what ever documents are present in the collection. And what ever doccument is present they are considered as added. And after that whenever some change occurs to collection then only it will trigger.
db.collection('recipes').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        const doc = change.doc; // Returns document object
        const data = doc.data(); // Object literal
        const id = doc.id;

        if (change.type === 'added') {
            addRecipe(data, id);
        } else if (change.type === 'removed') {
            removeRecipe(id);
        }
    });
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