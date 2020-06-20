'use strict';

const array = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpeg', 'images/6.jpeg'];

let index = localStorage.getItem('index') ? localStorage.getItem('index') : 0;
localStorage.setItem('index', index);
const data = localStorage.getItem('index');



