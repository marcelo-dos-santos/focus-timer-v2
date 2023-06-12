export default function() {

const florestSoundButton = document.querySelector(".forest")
const rainSoundButton = document.querySelector(".rain")
const coffeeSoundButton = document.querySelector(".coffee")
const fireplaceSoundButton = document.querySelector(".fireplace")
const florestSound = new Audio("../sounds/Floresta.wav")
const rainSound = new Audio("../sounds/Chuva.wav")
const coffeeSound = new Audio("../sounds/Cafeteria.wav")
const fireplaceSound = new Audio("../sounds/Lareira.wav")
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const switchButton = new Audio("../sounds/lightswitch.mp3")
const volumeForest = document.getElementById("volumeForest");
const volumeRain = document.getElementById("volumeRain");
const volumeCoffee = document.getElementById("volumeCoffee");
const volumeFireplace = document.getElementById("volumeFireplace");
let isChangingVolume = false;



function switchButtonSound() {
    switchButton.play()
}

function pressButton() {
    buttonPressAudio.play()
}

function timeEnd() {
    kitchenTimer.play()
}

function setvolume() {
    florestSound.volume = parseFloat(volumeForest.value);
    rainSound.volume = parseFloat(volumeRain.value);
    coffeeSound.volume = parseFloat(volumeCoffee.value);
    fireplaceSound.volume = parseFloat(volumeFireplace.value);
    isChangingVolume = true;
    
   
}



florestSoundButton.addEventListener('click', function() {
    if (florestSound.paused) {
        florestSound.loop = true
        florestSound.play();
    } else {
        florestSound.pause();
    }
});

rainSoundButton.addEventListener('click', function() {
    if (rainSound.paused) {
        rainSound.loop = true
        rainSound.play();
    } else {
        rainSound.pause();
    }
})

coffeeSoundButton.addEventListener('click', function() {
    if (coffeeSound.paused) {
        coffeeSound.loop = true
        coffeeSound.play();
    } else {
        coffeeSound.pause();
    }
})

fireplaceSoundButton.addEventListener('click', function() {
    if (fireplaceSound.paused) {
        fireplaceSound.loop = true
        fireplaceSound.play();
    } else {
        fireplaceSound.pause();
    }
})

volumeForest.addEventListener("mousemove", setvolume);
volumeRain.addEventListener("mousemove", setvolume);
volumeCoffee.addEventListener("mousemove", setvolume);
volumeFireplace.addEventListener("mousemove", setvolume);

volumeForest.addEventListener('click', function(event) {
    event.stopPropagation();
  });
  
  volumeRain.addEventListener('click', function(event) {
    event.stopPropagation();
  });
  
  volumeCoffee.addEventListener('click', function(event) {
    event.stopPropagation();
  });
  
  volumeFireplace.addEventListener('click', function(event) {
    event.stopPropagation();
  });

return {
    florestSoundButton,
    rainSoundButton,
    coffeeSoundButton,
    fireplaceSoundButton,
    timeEnd,
    pressButton,
    setvolume,
    volumeForest,
    volumeRain,
    volumeCoffee,
    volumeFireplace,
    switchButtonSound,
}

}

