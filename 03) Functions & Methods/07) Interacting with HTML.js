let ul = document.querySelector(".items");

let items = ['Toothbrush', 'Jar', 'Keys', 'Phone', 'Bag'];
let color = ['red', 'blue', 'gold', 'green', 'purple'];
let html = ``;

items.forEach(function(item,i){
    html += `<li style="color: ${color[i]};">${item}</li>`;
});

// To display the "html" content on console.
console.log(html);

// To display the "html" content on HTML page.
console.log(ul.innerHTML);
ul.innerHTML += html;