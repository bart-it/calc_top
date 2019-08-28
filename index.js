console.log('hello world');

const CALCBODY = document.querySelector('.calc-numbers');
const OPERATORS = ['-', '+', '/', '*'];

let a = 0;

const buildCalc = function(){
    for(i = 1; i < 10; i++){
        CALCBODY.innerHTML += `<div class="numbers">${i}</div>`
    }
    CALCBODY.innerHTML += `<div class="numbers">0</div>`;

}

buildCalc();

console.log(a);