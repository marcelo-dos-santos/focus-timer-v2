import Sound from "./sounds.js"

const playButton = document.querySelector(".start")
const pauseButton = document.querySelector(".pause")
const stopButton = document.querySelector(".stop")
const plusButton = document.querySelector(".plus")
const minusButton = document.querySelector(".minus")
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const florestButton = document.querySelector(".forestcontainer")
const rainButton = document.querySelector(".raincontainer")
const coffeeButton = document.querySelector(".coffeecontainer")
const fireplaceButton = document.querySelector(".fireplacecontainer")
const whiteModeButton = document.querySelector('.whiteModeButton');
const darkModeButton = document.querySelector('.darkModeButton');
const body = document.body;
const input = document.querySelector('input[type="range"]')
let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)
let timerTimeOut
let isFinished

const sound = Sound()

function updateDisplay(newMinutes, newSeconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    newSeconds = newSeconds === undefined ? seconds : newSeconds;

    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(newSeconds).padStart(2, "0");
}

function countdown() {
    timerTimeOut = setTimeout(function() {
    
        let currentSeconds = Number(secondsDisplay.textContent);
        let currentMinutes = Number(minutesDisplay.textContent);
        let isFinished = currentMinutes <= 0 && currentSeconds <= 0;

        if (isFinished) {
            updateDisplay()
            sound.timeEnd()
            playButton.classList.remove("hide")
            pauseButton.classList.add("hide")
            return
        }
    
        if (currentSeconds <= 0) {
            currentSeconds = 59;
            --currentMinutes;
        } else {
            --currentSeconds;
        }
    
         updateDisplay(currentMinutes, currentSeconds)

            countdown()
        }, 1000)
}


playButton.addEventListener('click', function() {
    if (isFinished) {
        return
    }
    sound.pressButton()
    countdown()
    playButton.classList.add("hide")
    pauseButton.classList.remove("hide")
})

pauseButton.addEventListener('click', function() {
    sound.pressButton()
    clearTimeout(timerTimeOut)
    playButton.classList.remove("hide")
    pauseButton.classList.add("hide")
})

stopButton.addEventListener('click', function() {
    sound.pressButton()
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
    timerTimeOut = null;
    playButton.classList.remove("hide")
    pauseButton.classList.add("hide")
})

plusButton.addEventListener('click', function() {
    sound.pressButton()
    let currentMinutes = Number(minutesDisplay.textContent);
    currentMinutes += 5;
    updateDisplay(currentMinutes);
})

minusButton.addEventListener('click', function() {
    let currentMinutes = Number(minutesDisplay.textContent);
    let currentSeconds = Number(secondsDisplay.textContent);

    if (currentMinutes === 0 && currentSeconds === 0) {
        return;
    }
    if (currentMinutes >= 5) {
        currentMinutes -= 5;
    } else {
        currentMinutes = 0;
    }
    updateDisplay(currentMinutes);
    sound.pressButton()
});


florestButton.addEventListener('click', () => {
    if (florestButton.classList.contains('enable')) {
        florestButton.classList.remove('enable')
        return;
    } else {
        florestButton.classList.add('enable')
    }
})

rainButton.addEventListener('click', () => {
    if (rainButton.classList.contains('enable')) {
        rainButton.classList.remove('enable')
        return;
    } else {
        rainButton.classList.add('enable')
    }
})

coffeeButton.addEventListener('click', () => {
    if (coffeeButton.classList.contains('enable')) {
        coffeeButton.classList.remove('enable')
        return;
    } else {
        coffeeButton.classList.add('enable')
    }
})

fireplaceButton.addEventListener('click', () => {
    if (fireplaceButton.classList.contains('enable')) {
        fireplaceButton.classList.remove('enable')
        return;
    } else {
        fireplaceButton.classList.add('enable')
    }
})

whiteModeButton.addEventListener('click', () => {
    darkModeButton.classList.remove('hide');
    whiteModeButton.classList.add('hide');
    body.classList.add('dark-mode');
    input.classList.add('dark-mode');
    sound.switchButtonSound()
})

darkModeButton.addEventListener('click', () => {
    whiteModeButton.classList.remove('hide');
    darkModeButton.classList.add('hide');
    body.classList.remove('dark-mode');
    input.classList.remove('dark-mode');
    sound.switchButtonSound()
})

