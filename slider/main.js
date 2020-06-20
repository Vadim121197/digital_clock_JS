'use strict';

const setIntervalNextImg = function (callback, time) {
    const interval = setInterval(callback, time);
    return interval;
};

let interval = setIntervalNextImg(showNextImg, 3000)

const clickPrevBtn = function (e) {
    e.preventDefault();
    showPrevImg();
}

const clickNextBtn = function (e) {
    e.preventDefault();
    showNextImg();
}

const createMainForm = function () {
    const parent = document.querySelector('.slider');
    createButton('<', clickPrevBtn, parent, 'prevBtn');
    createImg(array[data], parent, 'imgSlider');
    createButton('>', clickNextBtn, parent, 'nextBtn');
}
createMainForm();

function showNextImg() {
    clearInterval(interval);
    interval = setIntervalNextImg(showNextImg, 3000);

    let data = localStorage.getItem('index');
    data++;
    if (data > array.length - 1) {
        data = 0;
    }
    
    document.querySelector('.imgSlider').src = array[data];
    localStorage.setItem('index', data);
}

function showPrevImg() {
    clearInterval(interval);
    interval = setIntervalNextImg(showNextImg, 3000);
    let data = localStorage.getItem('index');
    data--;
    if (data < 0) {
        data = array.length - 1;
    }

    document.querySelector('.imgSlider').src = array[data];
    localStorage.setItem('index', data);
}






