const getTodos = async function() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error("Couldn't fetch the data :(");
        //                           ^
        //                        message
    }
};

getTodos()
    .then(result => console.log(result))
    .catch(message => console.log(message));