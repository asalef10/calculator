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


let signe;
let foo;
let foo12;
let foo13;
let foo14;
let foo15;



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
    foo12 = math1.value
    math1.value = ''
    signe = '-'

})


multiplicationButton.addEventListener('click', function () {
    foo12 = math1.value
    math1.value = ''
    signe = '*'
})

Division.addEventListener('click', function () {
    foo12 = math1.value
    math1.value = ''
    signe = '/'
})


result.onclick = function () {

    if (signe == '+') {
        imputTop.innerHTML += foo12
        imputTop.innerHTML += signe
        imputTop.innerHTML += math1.value
        math1.value = Number(math1.value) + Number(foo12)


        console.log(foo12);
    } else if (signe == '*') {
        imputTop.innerHTML += foo12
        imputTop.innerHTML += signe
        imputTop.innerHTML += math1.value
        math1.value = Number(math1.value) * Number(foo12)

    } else if (signe == '-') {
        imputTop.innerHTML += foo12
        imputTop.innerHTML += signe
        imputTop.innerHTML += math1.value
        math1.value = Number(foo12) - Number(math1.value)
    } else if (signe == '/') {
        imputTop.innerHTML += foo12
        imputTop.innerHTML += signe
        imputTop.innerHTML += math1.value
        math1.value = Number(foo12) / Number(math1.value)
    }
}


