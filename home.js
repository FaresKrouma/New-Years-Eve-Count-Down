let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");
let containerEl = document.getElementById("countdown-container");

function animationRemove() {
    containerEl.classList.remove("animation");
}
function animation() {      
    containerEl.classList.toggle("animation");
} 

function countdown() {
    let newYears = new Date("2021-12-31 23:59:59");
    let currentDate = new Date();
    let monthsLeft = newYears.getMonth() - currentDate.getMonth();
    let daysLeft = (monthsLeft * 31) - 2 + newYears.getDate() - currentDate.getDate();
    let hoursLeft = (daysLeft * 24) + 1 + newYears.getHours() - currentDate.getHours();
    let minutesLeft = (hoursLeft * 60) + newYears.getMinutes() - currentDate.getMinutes();
    let secondsLeft = (minutesLeft * 60) + newYears.getSeconds() - currentDate.getSeconds();
    daysEl.innerHTML = daysLeft.toString();
    hoursEl.innerHTML = hoursLeft.toString();
    minutesEl.innerHTML = minutesLeft.toString();
    secondsEl.innerHTML = secondsLeft.toString();
}

function countdown2() {
    let newYears = new Date("2021-12-31 23:59:59");
    let currentDate = new Date();
    let totalseconds = Math.floor((newYears - currentDate) / 1000);
    let secondsLeft = Math.floor(totalseconds) % 60;
    let minutesLeft = Math.floor(totalseconds / 60) % 60;
    let hoursLeft = Math.floor(totalseconds / 60 / 60 ) % 24;
    let daysLeft = Math.floor(totalseconds / 60 / 60 / 24);
    hoursEl.innerHTML = hoursLeft.toString().padStart(2,"0");
    minutesEl.innerHTML = minutesLeft.toString().padStart(2,"0");
    secondsEl.innerHTML = secondsLeft.toString().padStart(2,"0");
    daysEl.innerHTML = daysLeft.toString().padStart(2,"0");
}

let clicked = true;
let txt = document.getElementsByClassName("btn-main")[0];
let clearIntervalToken;
function toggle() {
    if (clicked === true) {
        animation();
        setTimeout(animationRemove,300)
        countdown();
        clicked = false;
        txt.innerHTML = "Show Sub Time.";
        clearInterval(clearIntervalToken);
        clearIntervalToken = setInterval(countdown, 1000);
    }
    else {  
        animation();
        setTimeout(animationRemove,300)
        countdown2();
        clicked = true;
        txt.innerHTML = "Show Total Time.";
        clearInterval(clearIntervalToken);
        clearIntervalToken = setInterval(countdown2, 1000);
    }
}

function toggleRed() {
    txt.style.background = "#f14d6e";
}

function defaultColor() {
   setTimeout(() => {
        txt.style.background = "transparent";}, 150);
}
countdown2();
clearIntervalToken = setInterval(countdown2, 1000);
