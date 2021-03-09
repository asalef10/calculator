let math1 = document.getElementById('math1')
let math2 = document.getElementById('math2')
let EssayButton = document.getElementById('EssayButton')
let SubtractionButton = document.getElementById('SubtractionButton')
let multiplicationButton = document.getElementById('multiplicationButton')
let Division = document.getElementById('Division')
let h1Answer = document.getElementById('h1Answer')
let numbers = document.getElementById('numbers')
let i;



let foo;
let foo12;
let foo13;
let foo14;
let arrNumber = []



function getInput(num) {
    math1.value += num
}
EssayButton.addEventListener('click', function () {
    foo12 = math1.value
    math1.value = ''
})

result.onclick = function () {
  if(math1.value = Number(math1.value) + Number(foo12)){  

}else if(math1.value = Number(math1.value * foo13)){
    alert('*')

}
}

// multiplicationButton.addEventListener('click',function(){
//   foo13 = math1.value
//   math1.value = ''
  
// })



















































//  let answerEssay = Number(math1.value) + Number(math2.value)
//  h1Answer.innerHTML = `The Anwer is ${answerEssay}`
// }

// SubtractionButton.onclick = function EssayFunction(){

//  let answerEssay = Number(math1.value) - Number(math2.value)
//  h1Answer.innerHTML = `The Anwer is ${answerEssay}`
// }

// multiplication.onclick = function EssayFunction(){

//  let answerEssay = Number(math1.value) * Number(math2.value)
//  h1Answer.innerHTML = `The Anwer is ${answerEssay}`
// }

// Division.onclick = function EssayFunction(){

//  let answerEssay = Number(math1.value) / Number(math2.value)
//  h1Answer.innerHTML = `The Anwer is ${answerEssay}`
// }



// let buttonId1 = document.getElementById('buttonId1')

// buttonId1.onclick = function(){
//     math1.innerHTML = buttonId1.value
// }




// for(i =0; i<=10;i++){
//     foo12 = `<button class="mathNumber" id="numbers${i}">${i}</button>`
//     foo13 = document.getElementById(`numbers${i}`) 
// numbers.innerHTML += foo12
// console.log(i);

// foo = document.getElementById(`numbers${i}`)



// function color1(){
// }
// color1()
// }
