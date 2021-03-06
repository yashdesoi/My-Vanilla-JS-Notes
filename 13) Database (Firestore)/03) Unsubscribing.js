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

// Following real-time listner .onSnapshot() return a function, uppon calling that function we can remove this functionality of listning to changes in databases.
// Note:- We still can make changes to database by adding/removing from it, but after unsubscribing we are no longer able to listen to those changes inside our script. Hence our UI will remain same like in our previous to previous example, we need to refresh the HTML to see those changes.
const unsubscribe = db.collection('recipes').onSnapshot(snapshot => {
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


// Unsubscribing
let i = 0;
document.querySelector('.unsubscribe').addEventListener('click', event => {
    event.stopPropagation();
    if (i < 1) {
        unsubscribe();
        console.log('Unsubscribed!');
    }

    i += 1;
});