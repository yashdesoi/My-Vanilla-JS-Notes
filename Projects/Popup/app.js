const button = document.querySelector('.activate');
const popupWrapper = document.querySelector('.popup-wrapper');

button.addEventListener('click', () => {
    popupWrapper.style.display = 'block';
});


// const cross = document.querySelector('.popup__close');

// cross.addEventListener('click', event => {
//     popupWrapper.style.display = 'none';
//     event.stopPropagation();
// });


popupWrapper.addEventListener('click', event => {
    
    if (event.target.className === 'popup-wrapper' || event.target.className === 'popup__close') {
        popupWrapper.style.display = 'none';
    }
});