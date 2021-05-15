// Get request
const getPostsButton = document.querySelector('button.get-posts');
getPostsButton.addEventListener('click', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        console.log(posts);
    } catch(error) {
        console.log(error);
    } finally {
        alert('Check your console');
    }
});


// Post request
const postForm = document.forms.sendPostForm;
postForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: this.title.value,
                body: this.body.value,
                userId: 2
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    } finally {
        alert('Check your console');
        this.reset();
    }
});


// Put request
const updateForm = document.forms.updatePostForm;
updateForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/8', {
            method: 'PUT',
            body: JSON.stringify({
                title: this.title.value,
                body: this.body.value,
                userId: 2
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    } finally {
        alert('Check your console');
        this.reset();
    }
});


// Delete request
const deletePostButton = document.querySelector('button.delete-post');
deletePostButton.addEventListener('click', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/25', { method: 'DELETE' });
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    } finally {
        alert('Check your console');
    }
});