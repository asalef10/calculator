let math1 = document.getElementById('math1')
let math2 = document.getElementById('math2')
let EssayButton = document.getElementById('EssayButton')
let SubtractionButton = document.getElementById('SubtractionButton')
let multiplicationButton = document.getElementById('multiplication')
let Division = document.getElementById('Division')
let h1Answer = document.getElementById('h1Answer')
let numbers = document.getElementById('numbers')
let reset = document.getElementById('reset')
let imputTop = document.getElementById('imputTop')
let i;


let signe;
let foo;
let foo12;
let foo13;
let foo14;
let foo15;
let arrNumber = []



function getInput(num) {

    math1.value += num
    
}

function nekuda(tex) {
    math1.value += tex
}

reset.addEventListener('click', function () {
    math1.value = ''
    imputTop.innerHTML = ''

})

EssayButton.addEventListener('click', function () {
    foo12 = math1.value
    math1.value = ''
    signe = '+'
})

SubtractionButton.addEventListener('click', function () {
    foo14 = math1.value
    math1.value = ''
    signe = '-'

})


multiplicationButton.addEventListener('click', function () {
    foo13 = math1.value
    math1.value = ''
    signe = '*'
})

Division.addEventListener('click', function () {
    foo15 = math1.value
    math1.value = ''
    signe = '/'
})


result.onclick = function () {

    if (signe == '+') {
        imputTop.innerHTML += foo12
        imputTop.innerHTML += signe
        imputTop.innerHTML += math1.value
        math1.value = Number(math1.value) + Number(foo12)
        // alert('+')


        console.log(foo12);
    } else if (signe == '*') {
        imputTop.innerHTML += foo13
        imputTop.innerHTML += signe
        imputTop.innerHTML += math1.value
        math1.value = Number(math1.value) * Number(foo13)

    } else if (signe == '-') {
        imputTop.innerHTML += foo14
        imputTop.innerHTML += signe
        imputTop.innerHTML += math1.value
        math1.value = Number(foo14) - Number(math1.value)
    } else if (signe == '/') {
        imputTop.innerHTML += foo15
        imputTop.innerHTML += signe
        imputTop.innerHTML += math1.value
        math1.value = Number(foo15) / Number(math1.value)
    }
}


