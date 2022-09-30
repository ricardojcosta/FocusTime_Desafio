
/* ----------------------- Cards sounds ------------------------------------- */
const buttonForestOn = document.querySelector('.card-foreston')
const buttonForestOff = document.querySelector('.card-forestoff')
const buttonRainonOn = document.querySelector('.card-rainonon')
const buttonRainonOff = document.querySelector('.card-rainonoff')
const buttonCofeeOn = document.querySelector('.card-cofeeon')
const buttonCofeeOff = document.querySelector('.card-cofeeoff')
const buttonFirePlaceOn = document.querySelector('.card-fireplaceon')
const buttonFirePlaceOff = document.querySelector('.card-fireplaceoff')
let volumeForest = document.querySelector('#sound-forest')
let volumeRainon = document.querySelector('#sound-rainon')
let volumeCoffee = document.querySelector('#sound-coffee')
let volumeFirePlace = document.querySelector('#sound-fireplace')
const audioForest = new Audio("./sounds/Floresta.wav")
const audioRainon = new Audio("./sounds/Chuva.wav")
const audioCofee = new Audio("./sounds/Cafeteria.wav")
const audioFirePlace = new Audio("./sounds/Lareira.wav")

/* ----------------------- Buttons controls ------------------------------------- */
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonMore = document.querySelector('.more')
const buttonLess = document.querySelector('.less')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const sliderForest = document.querySelector('.slider-forest')
const sliderRainon = document.querySelector('.slider-rainon')
const sliderCoffee = document.querySelector('.slider-cofee')
const sliderFirePlace = document.querySelector('.slider-fireplace')

let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)
let timerTimeOut

/* ----------------------- Change mode ------------------------------------- */
const buttonModeDark = document.querySelector('.mode-dark')
const buttonModeLight = document.querySelector('.mode-light')
const main = document.querySelector('.main')
const colorTimer = document.querySelector('.timer')





/* -----------------------Events controls ------------------------------------- */
function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")

}

function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
}


function countDown() {
    timerTimeOut = setTimeout(function () {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        updateTimerDisplay(minutes, 0)

        if (minutes <= 0) {
            return
        }


        if (seconds <= 0) {
            seconds = 60

            --minutes
        }

        updateTimerDisplay(minutes, String(seconds - 1))

        countDown()//recursividade
    }, 1000)
}



buttonPlay.addEventListener('click', function () {
    countDown()

})

buttonStop.addEventListener('click', function () {
    resetTimer()
})

buttonMore.addEventListener('click', function () {
    minutes = minutes + 5
    updateTimerDisplay(minutes, seconds)

})

buttonLess.addEventListener('click', function () {
    minutes = minutes - 5
    updateTimerDisplay(minutes, seconds)

})

/* -----------------------Events sounds ------------------------------------- */
function toggleSound(cardMain, card2, card3, card4) {
    if (cardMain.paused == true) {
        cardMain.play()
        cardMain.loop = true
        card2.pause()
        card3.pause()
        card4.pause()
    } else {
        cardMain.pause()
        card2.pause()
        card3.pause()
        card4.pause()
    }
}

function controlVolume(soundMain, card) {
    soundMain.volume = card.value
}

/* -----------------------Events cards ------------------------------------- */

buttonForestOff.addEventListener('click', function () {
    buttonForestOn.classList.remove('hide')
    buttonForestOff.classList.add('hide')
    buttonRainonOn.classList.add('hide')
    buttonCofeeOn.classList.add('hide')
    buttonFirePlaceOn.classList.add('hide')
    buttonRainonOff.classList.remove('hide')
    buttonCofeeOff.classList.remove('hide')
    buttonFirePlaceOff.classList.remove('hide')
    toggleSound(audioForest, audioRainon, audioCofee, audioFirePlace)
   
})

buttonRainonOff.addEventListener('click', function () {
    buttonRainonOn.classList.remove('hide')
    buttonRainonOff.classList.add('hide')
    buttonCofeeOn.classList.add('hide')
    buttonFirePlaceOn.classList.add('hide')
    buttonForestOn.classList.add('hide')
    buttonCofeeOff.classList.remove('hide')
    buttonFirePlaceOff.classList.remove('hide')
    buttonForestOff.classList.remove('hide')
    toggleSound(audioRainon, audioForest, audioCofee, audioFirePlace)
})

buttonCofeeOff.addEventListener('click', function () {
    buttonCofeeOn.classList.remove('hide')
    buttonCofeeOff.classList.add('hide')
    buttonFirePlaceOn.classList.add('hide')
    buttonForestOn.classList.add('hide')
    buttonRainonOn.classList.add('hide')
    buttonFirePlaceOff.classList.remove('hide')
    buttonForestOff.classList.remove('hide')
    buttonRainonOff.classList.remove('hide')
    toggleSound(audioCofee, audioForest, audioRainon, audioFirePlace)
})

buttonFirePlaceOff.addEventListener('click', function () {
    buttonFirePlaceOn.classList.remove('hide')
    buttonFirePlaceOff.classList.add('hide')
    buttonForestOn.classList.add('hide')
    buttonRainonOn.classList.add('hide')
    buttonCofeeOn.classList.add('hide')
    buttonForestOff.classList.remove('hide')
    buttonRainonOff.classList.remove('hide')
    buttonCofeeOff.classList.remove('hide')
    toggleSound(audioFirePlace, audioForest, audioRainon, audioCofee)
})

buttonForestOn.addEventListener('click', function () {
    buttonForestOn.classList.add('hide')
    buttonForestOff.classList.remove('hide')
    audioForest.pause()  
})

buttonForestOn.addEventListener('input', function () {
    controlVolume(audioForest, volumeForest)
})

buttonRainonOn.addEventListener('click', function () {
    buttonRainonOn.classList.add('hide')
    buttonRainonOff.classList.remove('hide')
    audioRainon.pause()
})

buttonRainonOn.addEventListener('input', function () {
    controlVolume(audioRainon, volumeRainon)
})

buttonCofeeOn.addEventListener('click', function () {
    buttonCofeeOn.classList.add('hide')
    buttonCofeeOff.classList.remove('hide')
    audioCofee.pause()
})

buttonCofeeOn.addEventListener('input', function () {
    controlVolume(audioCofee, volumeCoffee)
})

buttonFirePlaceOn.addEventListener('click', function () {
    buttonFirePlaceOn.classList.add('hide')
    buttonFirePlaceOff.classList.remove('hide')
    audioFirePlace.pause()
})

buttonFirePlaceOn.addEventListener('input', function () {
    controlVolume(audioFirePlace, volumeFirePlace)
})

/* -----------------------Events mode ------------------------------------- */

buttonModeLight.addEventListener('click', function () {
    buttonModeDark.classList.remove('hide')
    buttonModeLight.classList.add('hide')
    main.classList.add('dark')
    colorTimer.classList.add('timer-dark')
    buttonPlay.classList.add('play-dark')
    buttonStop.classList.add('stop-dark')
    buttonMore.classList.add('more-dark')
    buttonLess.classList.add('less-dark')
    buttonForestOff.classList.add('card-forestoff-dark')
    buttonRainonOff.classList.add('card-rainonoff-dark')
    buttonCofeeOff.classList.add('card-cofeeoff-dark')
    buttonFirePlaceOff.classList.add('card-fireplaceoff-dark')
    buttonFirePlaceOn.classList.add('card-fireplaceon-dark')
    buttonCofeeOn.classList.add('card-cofeeon-dark')
    buttonRainonOn.classList.add('card-rainonon-dark')
    buttonForestOn.classList.add('card-foreston-dark')
    buttonForestOff.classList.add('card-forestoff-d')
    buttonRainonOff.classList.add('card-rainonoff-d')
    buttonCofeeOff.classList.add('card-cofeeoff-d')
    buttonFirePlaceOff.classList.add('card-fireplaceoff-d')
    sliderForest.classList.remove('slider-forest')
    sliderForest.classList.add('slider-dark')
    sliderRainon.classList.remove('slider-rainon')
    sliderRainon.classList.add('slider-dark')
    sliderCoffee.classList.remove('slider-cofee')
    sliderCoffee.classList.add('slider-dark')
    sliderFirePlace.classList.remove('slider-fireplace')
    sliderFirePlace.classList.add('slider-dark')
})

buttonModeDark.addEventListener('click', function () {
    buttonModeLight.classList.remove('hide')
    buttonModeDark.classList.add('hide')
    main.classList.remove('dark')
    colorTimer.classList.remove('timer-dark')
    buttonPlay.classList.remove('play-dark')
    buttonStop.classList.remove('stop-dark')
    buttonMore.classList.remove('more-dark')
    buttonLess.classList.remove('less-dark')
    buttonForestOff.classList.remove('card-forestoff-dark')
    buttonRainonOff.classList.remove('card-rainonoff-dark')
    buttonCofeeOff.classList.remove('card-cofeeoff-dark')
    buttonFirePlaceOff.classList.remove('card-fireplaceoff-dark')
    buttonFirePlaceOn.classList.remove('card-fireplaceon-dark')
    buttonCofeeOn.classList.remove('card-cofeeon-dark')
    buttonRainonOn.classList.remove('card-rainonon-dark')
    buttonForestOn.classList.remove('card-foreston-dark')
    buttonForestOff.classList.remove('card-forestoff-d')
    buttonRainonOff.classList.remove('card-rainonoff-d')
    buttonCofeeOff.classList.remove('card-cofeeoff-d')
    buttonFirePlaceOff.classList.remove('card-fireplaceoff-d')
    sliderForest.classList.add('slider-forest')
    sliderForest.classList.remove('slider-dark')
    sliderRainon.classList.add('slider-rainon')
    sliderRainon.classList.remove('slider-dark')
    sliderCoffee.classList.add('slider-cofee')
    sliderCoffee.classList.remove('slider-dark')
    sliderFirePlace.classList.add('slider-fireplace')
    sliderFirePlace.classList.remove('slider-dark')

})