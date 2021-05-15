const input = document.querySelector('input');
const button = document.querySelector('button');
const pre = document.querySelector('pre');
let isLocked = false;

input.addEventListener('input', function(event) {
  if (!isLocked) {
    console.log(event.target);
    console.log(this);
    console.log(event.target === this);
    isLocked = !isLocked;
  }
  pre.textContent = this.value;
});

const colorPalette = ['blue', 'green', 'red', 'yellow', 'orange'];
let i = 0;

button.addEventListener('click', function() {
  if (i > colorPalette.length - 1) {
    i = 0;
  }
  
  if (colorPalette[i] === 'yellow') {
    this.style.color = 'black';
  } else {
    this.style.color = 'white';
  }

  this.style.backgroundColor = colorPalette[i];
  i += 1
});