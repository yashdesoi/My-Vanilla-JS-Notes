let blocks = document.querySelectorAll('.block');
let message = document.querySelector('.message');
let reset = document.querySelector('.holder > button');
let gameOn = true;

let continueWithGame = function(){
    let grid = [
        blocks[0].textContent,
        blocks[1].textContent,
        blocks[2].textContent,
        blocks[3].textContent,
        blocks[4].textContent,
        blocks[5].textContent,
        blocks[6].textContent,
        blocks[7].textContent,
        blocks[8].textContent
    ]
    let colorWin = 'lime';
    let colorDraw = 'orange';

    // Row check
    for (let i of [0, 3, 6]) {
        if ((grid[i] === 'X' && grid[i+1] === 'X' && grid[i+2] === 'X') || (grid[i] === 'O' && grid[i+1] === 'O' && grid[i+2] === 'O')) {
            blocks[i].style.color = colorWin;
            blocks[i+1].style.color = colorWin;
            blocks[i+2].style.color = colorWin;
            return false;
        } else {
            continue;
        }
    }

    // Column check
    for (let i of [0, 1, 2]) {
        if ((grid[i] === 'X' && grid[i+3] === 'X' && grid[i+6] === 'X') || (grid[i] === 'O' && grid[i+3] === 'O' && grid[i+6] === 'O')) {
            blocks[i].style.color = colorWin;
            blocks[i+3].style.color = colorWin;
            blocks[i+6].style.color = colorWin;
            return false;
        } else {
            continue;
        }
    }

    // Diagonal check
    if ((grid[0] === 'X' && grid[4] === 'X' && grid[8] === 'X') || (grid[0] === 'O' && grid[4] === 'O' && grid[8] === 'O')) {
        blocks[0].style.color = colorWin;
        blocks[4].style.color = colorWin;
        blocks[8].style.color = colorWin;
        return false;
    } else if ((grid[2] === 'X' && grid[4] === 'X' && grid[6] === 'X') || (grid[2] === 'O' && grid[4] === 'O' && grid[6] === 'O')) {
        blocks[2].style.color = colorWin;
        blocks[4].style.color = colorWin;
        blocks[6].style.color = colorWin;
        return false;
    }

    // Draw check
    if (!grid.includes('')) {
        blocks.forEach(element => {
            element.style.color = colorDraw;
        });
        return false;
    }

    return true;
}

let i = 0;

blocks.forEach(element => {
    element.addEventListener('click', event => {
        if (gameOn) {
            if (event.target.textContent !== '') {
                message.style.color = 'red';
                message.textContent = 'Region already occupied :(';
            } else {
                if (i%2 === 0) {
                    message.textContent = '';
                    event.target.textContent = 'X';
                    i += 1;
                } else {
                    message.textContent = '';
                    event.target.textContent = 'O';
                    i += 1;
                }
            }

            if (!continueWithGame()) {
                message.style.color = 'blue';
                message.textContent = 'Game over :)';
                gameOn = false;
                reset.style.display = 'inline-block';
            }
        } 
    });
});

reset.addEventListener('click', event => {
    gameOn = true;
    blocks.forEach(element => {
        element.style.color = 'black';
        element.textContent = '';
    });
    message.textContent = '';
    event.target.style.display = 'none';
});