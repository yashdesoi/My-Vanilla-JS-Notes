const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const tick = function(){
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    if (h < 10) {
        h = `0${h}`;
    } else {
        h = String(h);
    }

    if (m < 10) {
        m = `0${m}`;
    } else {
        m = String(m);
    }

    if (s < 10) {
        s = `0${s}`;
    } else {
        s = String(s);
    }
    

    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;
};

setInterval(tick, 1000);