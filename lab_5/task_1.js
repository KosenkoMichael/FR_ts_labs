function getCurrentDate() {
    console.log(Date.now());
}
window.onload = function () {
    var intervalId = setInterval(getCurrentDate, 5000);
    setTimeout(function () {
        clearInterval(intervalId);
        console.log('Полная загрузка страницы (спустя 1 мин)');
    }, 60000);
};
