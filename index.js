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
    let calculate = [];

    do{
        calculate = inputArray.splice(0, 3)
        console.log(inputArray)
        calculate.forEach((a, i) =>{
            if(a === '-'){ inputArray.unshift(Number(calculate[i - 1]) - Number(calculate[i + 1]))}
            else if(a === '+'){ inputArray.unshift(Number(calculate[i - 1]) + Number(calculate[i + 1]))}
            else if(a === '/'){ inputArray.unshift(Number(calculate[i - 1]) / Number(calculate[i + 1]))}
            else if(a === '*'){ inputArray.unshift(Number(calculate[i - 1]) * Number(calculate[i + 1]))}
        })
    
        console.log(inputArray)
    } while((inputArray.length > 1))




    
})



