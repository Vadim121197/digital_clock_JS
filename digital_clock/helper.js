'use strict';

const createElement = function ({
    attrs = {},
    styles = {},
    handlers = {},
    data = {},
    type = "div",
    text,
    html,
    className,
    id,
}) {
    const element = document.createElement(type);

    for (const attr in attrs) {
        element[attr] = attrs[attr];
    }

    for (const style in styles) {
        element.style[style] = styles[style];
    }

    for (const handler in handlers) {
        element.addEventListener(handler, handlers[handler].bind(element));
    }

    for (const attr in data) {
        element.dataset[attr] = data[attr];
    }

    if (id) element.id = id;
    if (className) element.className = className;
    if (text) element.innerText = text;
    if (html) element.innerHTML = html;

    return element;
};

function createImg(img, parent, className) {
    const element = createElement({
        className: className,
        type: "img"
    });
    parent.appendChild(element);
    element.src = img;
    return element;
}


function createDiv(text, parent, className) {
    const element = createElement({
        className: className,
        html: text,
    });
    parent.appendChild(element);
    return element;
}
function createParagraph(text, parent, className) {
    const element = createElement({
        className: className,
        html: text,
        type: "a",
    });
    parent.appendChild(element);
    return element;
}





// function getDate() {

    //     setInterval(function () {
    //         const date = new Date();
    //         const second = date.getSeconds();
    //         createSecondField(date);
    //     }, 1000);
    
    // }
    
    // getDate();
    
    // function createSecondField(date) {
    //     const parent = document.querySelector('.secondDigit');
    //     parent.innerHTML = '';
    //     let arr = String(date.getSeconds()).split('');
    //     if (arr.length === 1) {
    //         arr.unshift('0');
    //     }
    //     console.log(arr);
    //     parent.innerHTML = ''
    //     const secondDigit = checkValues(arr[1], parent, 'secondDigitImg');
    //     if (arr[1] === '0') {
    //         createFirstField(arr[0])
    //     }
    //     if(arr[0] && arr[1] === '0'){
    //     createSecondMinuteDigit(String(date.getMinutes()).split('')[1])
    //     }
    // }
    
    // function createFirstField(value) {
    //     const parent = document.querySelector('.firstDigit');
    //     parent.innerHTML = '';
    //     checkValues(value, parent, 'secondDigitImg');
    // }
    
    // function createSecondMinuteDigit(value) {
    //     const parent = document.querySelector('.secondMinuteDigit');
    //     parent.innerHTML = '';
    //     checkValues(value, parent, 'secondMinuteDigitImg');
    // }
    
    // function createFirstMinuteDigit(value){
    
    // }
    