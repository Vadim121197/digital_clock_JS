'use strict';

function setTimeoutDate() {
    setTimeout(function () {
        const date = new Date();

        createTime(date.getHours(), 'firstHourDigit', 'secondHourDigit');
        createTime(date.getMinutes(), 'firstMinuteDigit', 'secondMinuteDigit');
        createTime(date.getSeconds(), 'firstDigit', 'secondDigit');
    })
}

setTimeoutDate()


function setIntervalSeconds() {
    setInterval(function () {
        const date = new Date();
        const secArr = String(date.getSeconds()).split('');
        const minuteArr = String(date.getMinutes()).split('');
        const hourArr = String(date.getHours()).split('');

        if (secArr.length === 1) {
            secArr.unshift(0);
        }

        if (minuteArr.length === 1) {
            minuteArr.unshift(0);
        }

        if (hourArr.length === 1) {
            hourArr.unshift(0);
        }

        createField(Number(secArr[1]), 'secondDigit');

        if (Number(secArr[1]) === 0) {
            createField(Number(secArr[0]), 'firstDigit')
        }

        if (Number(secArr[0]) === 0 && Number(secArr[1]) === 0) {
            createField(Number(minuteArr[1]), 'secondMinuteDigit')
        }

        if (Number(minuteArr[1]) === 0) {
            createField(Number(minuteArr[0]), 'firstMinuteDigit')
        }

        if (Number(minuteArr[0]) === 0 && Number(minuteArr[1]) === 0) {
            createField(Number(hourArr[1]), 'secondHourDigit')
        }
        if (Number((hourArr[1])) === 0) {
            createField(Number(hourArr[0]), 'firstHourDigit')

        }
    })
}
setIntervalSeconds()

function checkValues(value, parent) {
    switch (value) {
        case 1:
            createImg(digits[1], parent);
            break;
        case 2:
            createImg(digits[2], parent);
            break;
        case 3:
            createImg(digits[3], parent);
            break;
        case 4:
            createImg(digits[4], parent);
            break;
        case 5:
            createImg(digits[5], parent);
            break;
        case 6:
            createImg(digits[6], parent);
            break;
        case 7:
            createImg(digits[7], parent);
            break;
        case 8:
            createImg(digits[8], parent);
            break;
        case 9:
            createImg(digits[9], parent);
            break;
        case 0:
            createImg(digits[0], parent);
            break;
    }
    return value;
}

function createTime(time, firstDigit, secondDigit) {
    const arr = String(time).split('');
    if (arr.length === 1) {
        arr.unshift(0);
    }
    createField(Number(arr[0]), firstDigit)
    createField(Number(arr[1]), secondDigit)
}

function createField(value, parentSelector) {
    const parent = document.querySelector('.' + parentSelector);
    parent.innerHTML = '';
    checkValues(value, parent);
}