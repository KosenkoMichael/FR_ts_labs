"use strict";
function getCurrentDate() {
    console.log(Date.now());
}
window.onload = function () {
    const intervalId = setInterval(getCurrentDate, 5000);
    setTimeout(() => {
        clearInterval(intervalId);
        console.log('Полная загрузка страницы (спустя 1 мин)');
    }, 60000);
};
