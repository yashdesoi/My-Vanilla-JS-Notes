let name = 'John';
let num = 5;

let sentence = `${name} has ${num} apples`;
console.log(sentence);
console.log(typeof sentence);

// Template strings are used to create HTML templates.
let heading = 'Heading 1';
let content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam magni possimus temporibus consequuntur nisi maiores ex distinctio voluptates architecto quo consectetur magnam dolorem, minus alias repellendus a assumenda optio dignissimos?';
let html = `
    <h1>${heading}</h1>
    <p>${content}</p>
`;
console.log(html);