const buttonForestOn = document.querySelector('.card-foreston')
const buttonForestOff = document.querySelector('.card-forestoff')
const buttonRainonOn = document.querySelector('.card-rainonon')
const buttonRainonOff = document.querySelector('.card-rainonoff')
const buttonCofeeOn = document.querySelector('.card-cofeeon')
const buttonCofeeOff = document.querySelector('.card-cofeeoff')
const buttonFirePlaceOn = document.querySelector('.card-fireplaceon')
const buttonFirePlaceOff = document.querySelector('.card-fireplaceoff')




buttonForestOff.addEventListener('click' , function () {
    buttonForestOn.classList.remove('hide')
    buttonForestOff.classList.add('hide')
    buttonRainonOn.classList.add('hide')
    buttonCofeeOn.classList.add('hide')
    buttonFirePlaceOn.classList.add('hide')
    buttonRainonOff.classList.remove('hide')
    buttonCofeeOff.classList.remove('hide')
    buttonFirePlaceOff.classList.remove('hide')
    

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
})

buttonCofeeOff.addEventListener('click', function (){
    buttonCofeeOn.classList.remove('hide')
    buttonCofeeOff.classList.add('hide')
    buttonFirePlaceOn.classList.add('hide')
    buttonForestOn.classList.add('hide')
    buttonRainonOn.classList.add('hide')
    buttonFirePlaceOff.classList.remove('hide')
    buttonForestOff.classList.remove('hide')
    buttonRainonOff.classList.remove('hide')
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
})

buttonForestOn.addEventListener('click' , function () {
    buttonForestOn.classList.add('hide')
    buttonForestOff.classList.remove('hide')

})

buttonRainonOn.addEventListener('click', function () {
    buttonRainonOn.classList.add('hide')
    buttonRainonOff.classList.remove('hide')
})

buttonCofeeOn.addEventListener('click', function (){
    buttonCofeeOn.classList.add('hide')
    buttonCofeeOff.classList.remove('hide')
})

buttonFirePlaceOn.addEventListener('click', function () {
    buttonFirePlaceOn.classList.add('hide')
    buttonFirePlaceOff.classList.remove('hide')
})