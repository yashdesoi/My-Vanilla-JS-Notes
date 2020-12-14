let addTodoForm = document.querySelector('.add-todo');
let todos = document.querySelector('.todos');

// Adding a todo
addTodoForm.addEventListener('submit', event => {
    event.preventDefault();
    let text = addTodoForm.addedTodo.value.trim();

    if (text.length > 0) {
        // Creating brand new elements
        let todo = document.createElement('li');
        let description = document.createElement('span');
        let del = document.createElement('i');

        // Adding a text inside description element
        description.textContent = text;

        // Giving class(es) to todo, description and del elements
        todo.classList.add('todo');
        description.classList.add('description');
        del.classList.add('delete', 'fas', 'fa-trash-alt');

        // Appending description and del element inside todo element
        todo.append(description);
        todo.append(del);

        // Appending todo element inside todos element
        todos.append(todo);

        // Re-setting input field inside form
        // addTodoForm.addedTodo.value = ''; // Method 1
        addTodoForm.reset(); // Method 2
    }
});


// Deleting a todo
todos.addEventListener('click', event => {
    event.stopPropagation();

    // console.log(event.target.classList.contains('delete'));

    if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
    }
});


// Searching a todo
let searchTodoForm = document.querySelector('.search-todo');

searchTodoForm.addEventListener('keyup', event => {
    let descriptions = document.querySelectorAll('.description');

    descriptions.forEach(description => {
        if (!description.textContent.toLowerCase().includes(event.target.value.trim().toLowerCase())) {
            description.parentElement.style.display = 'none';
        } else {
            description.parentElement.style.display = 'block';
        }
    });

});


// Method 2:- using filter
// let searchField = document.querySelector('.search-todo > input');

// searchField.addEventListener('keyup', () => {
//     let description = searchField.value.trim().toLowerCase();
    
//     Array.from(todos.children)
//         .filter(todo => !todo.textContent.toLowerCase().includes(description))
//         .forEach(todo => {
//             todo.style.display = 'none';
//         });
    
//     Array.from(todos.children)
//     .filter(todo => todo.textContent.toLowerCase().includes(description))
//     .forEach(todo => {
//         todo.style.display = 'block';
//     });
// });

searchTodoForm.addEventListener('submit', event => {
    event.preventDefault();

    // let descriptions = document.querySelectorAll('.description');

    // descriptions.forEach(description => {
    //     description.parentElement.style.display = 'block';
    // });

    // // Re-setting input field inside form
    // searchTodoForm.reset();
});



