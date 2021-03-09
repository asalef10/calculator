let math1 = document.getElementById('math1')
let math2 = document.getElementById('math2')
let EssayButton = document.getElementById('EssayButton')
let SubtractionButton = document.getElementById('SubtractionButton')
let multiplicationButton = document.getElementById('multiplication')
let Division = document.getElementById('Division')
let h1Answer = document.getElementById('h1Answer')
let numbers = document.getElementById('numbers')
let reset = document.getElementById('reset')
let result = document.getElementById('result')
let foo12;
let signe;

function getInput(num){
math1.value = num

}


EssayButton.onclick = function(){
foo12= math1.value
math1.value = ''
signe = '+'
}


SubtractionButton.onclick =function(){
    foo12 = math1.value
    math1.value = ''
    signe = '-'
}
multiplicationButton.onclick = function(){
    foo12 = math1.value
    math1.value = ''
    signe = '*'
}
Division.onclick = function(){
    foo12 = math1.value
    math1.value = ''
    signe = '/'
}


result.onclick = function(){
    if(signe == '+'){
            math1.value = Number(math1.value) + Number(foo12)

    }else if (signe == '-'){
        math1.value = Number(foo12 - math1.value)
    }else if (signe == '*'){
        math1.value = Number(math1.value * foo12)
    }else if (signe == '/')
    math1.value = Number(foo12 / math1.value )
}
reset.addEventListener('click',function(){
    math1.value = ''
})

function nekuda(tex){
math1.value += tex
}

class student{
    name;
    lastName;
    age;
    constructor(name,lastName,age){
    this.name = name;
    this.lastName = lastName;
    this.age = age
    }
    get Answer(){
        return this.printinFormTION()
    }
   
    printinFormTION(){
    return `your name is ${this.name} your lastName is ${this.lastName} your age is ${this.age}`
    }
}
let OneStudent = new student('Asalef','Alena',21)
console.log(OneStudent);
console.log(OneStudent.Answer)






























