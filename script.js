const deadLine = '2022-02-16';

function getTimeRemaining(endtime) {
    const tech = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(tech / (1000 * 60 * 60 * 24)),
        hours = Math.floor((tech / (1000 * 60 * 60)) % 24),
        minutes = Math.floor((tech / 1000 / 60) % 60),
        seconds = Math.floor((tech / 1000) % 60);

    return {
        'total': tech,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0 ${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endtime) {
    const timer__container = document.querySelector(selector),
        days = timer__container.querySelector("#days"),
        hours = timer__container.querySelector("#hours"),
        minutes = timer__container.querySelector("#minutes"),
        seconds = timer__container.querySelector("#seconds"),
        timeInterval = setInterval(updateClock, 1000);


    updateClock();

    function updateClock() {
        const tech = getTimeRemaining(endtime);

        days.innerHTML = getZero(tech.days);
        hours.innerHTML = getZero(tech.hours);
        minutes.innerHTML = getZero(tech.minutes);
        seconds.innerHTML = getZero(tech.seconds);

        if (tech.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}
setClock('.timer__container', deadLine);