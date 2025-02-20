function getCurrentDate(): void {
    console.log(Date.now());
}
window.onload = function (): void {
    const intervalId: number = setInterval(getCurrentDate, 5000);
    setTimeout(() => {
        clearInterval(intervalId);
        console.log('Полная загрузка страницы (спустя 1 мин)');
    }, 60000);
};