'use strict';

const page = {
    timer: document.querySelector('#timer')
}

const now = new Date();
const newYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);

let timeStart = newYear.getTime() - now.getTime();

setInterval(() => {
    timeStart -= 1000;

    const [date, time] = new Intl.DateTimeFormat('RU-ru',  {
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }).format(timeStart).split(', ');

    const [day, month] = date.split('.');
    const [hour, minute, second] = time.split(':');

    page.timer.innerHTML = `
    ${parseInt(month) - 1} месяцев, 
    ${parseInt(day)} дней, 
    ${parseInt(hour)} часов, 
    ${parseInt(minute)} минут, 
    ${parseInt(second)} секунд
    `;
}, 1000);
