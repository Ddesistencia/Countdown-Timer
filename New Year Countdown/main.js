'use strict';

const formatDecimal = (decimal) => `0${decimal}`.slice(-2);
const formatSentence = (sentence) => `0${sentence}`.slice(1);

const refresh = (time) => {
    const seconds = document.getElementById('seconds');
    const minutes = document.getElementById('minutes');
    const hours = document.getElementById('hours');
    const days = document.getElementById('days');

    const limitSeconds = time % 60;
    const limitMinutes = Math.floor((time % (60 * 60)) / 60);
    const limitHours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
    const limitDays = Math.floor(time / (60 * 60 * 24));

    seconds.textContent = formatDecimal(limitSeconds);
    minutes.textContent = formatDecimal(limitMinutes);
    hours.textContent = formatDecimal(limitHours);
    days.textContent = formatSentence(limitDays);
}


const regressiveCountdown = (time) => {
    const stopCountdown = () => clearInterval (id);
    const callback = () => {
        if (time == 0 ){
            stopCountdown();
        }
        refresh (time);
        time--;
    }
    const id = setInterval(callback,1000);
}

const NewYear = () => {
    const dateEvent = new Date ('2022-12-31 23:59:59');
    const Today = Date.now();
    return Math.floor((dateEvent - Today) / 1000);
}

regressiveCountdown(NewYear());