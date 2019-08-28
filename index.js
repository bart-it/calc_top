console.log('hello world');

const CALCBODY = document.querySelector('.calc-numbers');
const CALC_OPERATORS = document.querySelector('.calc-operators');
const OPERATORS = ['-', '+', '/', '*'];

const buildCalc = function(){
    for(i = 1; i < 10; i++){
        CALCBODY.innerHTML += `<div class="number box">${i}</div>`
    }
    CALCBODY.innerHTML += `<div class="number box">0</div>`;
    OPERATORS.forEach( operator => {
        CALC_OPERATORS.innerHTML += `<div class="operator box">${operator}</div>`;
    })
}

buildCalc();

document.querySelectorAll('.number').forEach(number => {
    number.addEventListener('click', function(){
        if(this.innerHTML === '0' && document.querySelector('.input').innerHTML === ''){
            document.querySelector('.input').innerHTML += '';
        } else {
            document.querySelector('.input').innerHTML += this.innerHTML;
        }
    })
})

document.querySelectorAll('.operator').forEach(operator => {
    operator.addEventListener('click', function(){
        document.querySelector('.input').innerHTML += ' ' + this.innerHTML + ' ';
    })
})

document.querySelector('.calc-calculate').addEventListener('click', function(){
    let inputArray = document.querySelector('.input').innerHTML.split(' ');
    
    let calculated = 0;
    
    inputArray.forEach((item, index) => {
        if(item === '-'){
            console.log(inputArray[index - 1] - inputArray[index + 1])
        }
    })
})


