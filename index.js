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
        if(this.innerHTML === '0' && document.querySelector('.input').innerHTML.length > 0 && document.querySelector('.input').innerHTML === '0') {
            document.querySelector('.input').innerHTML += '';
        } else if(this.innerHTML === '0' && document.querySelector('.input').innerHTML === '0'){
            document.querySelector('.input').innerHTML += '';
        } else {
            document.querySelector('.input').innerHTML += this.innerHTML;
        }
    })
})

document.querySelectorAll('.operator').forEach(operator => {
    operator.addEventListener('click', function(){
        if(OPERATORS.includes(document.querySelector('.input').innerHTML.charAt(document.querySelector('.input').innerHTML.length-2))){

        } else {
          document.querySelector('.input').innerHTML += ' ' + this.innerHTML + ' ';
        }    

    })
})

document.querySelector('.calc-calculate').addEventListener('click', function(){
    let inputArray = document.querySelector('.input').innerHTML.split(' ');
    let calculate = [];

    do{
        if(inputArray.includes('/')){
          let index = inputArray.indexOf('/');
          calculate = inputArray.splice(index - 1, 3);
          calculate.forEach((a, i) =>{
              if(a === '/'){ inputArray.splice(index -1 , 0, Number(calculate[i - 1]) / Number(calculate[i + 1]))}
          })
        } else if(inputArray.includes('*')){
          let index = inputArray.indexOf('*');
          calculate = inputArray.splice(index - 1, 3);
          calculate.forEach((a, i) =>{
              if(a === '*'){ inputArray.splice(index -1 , 0, Number(calculate[i - 1]) * Number(calculate[i + 1]))}
          })
        } else {
        calculate = inputArray.splice(0, 3)
        console.log(inputArray)
        calculate.forEach((a, i) =>{
            if(a === '-'){ inputArray.unshift(Number(calculate[i - 1]) - Number(calculate[i + 1]))}
            else if(a === '+'){ inputArray.unshift(Number(calculate[i - 1]) + Number(calculate[i + 1]))}
            else if(a === '/'){ inputArray.unshift(Number(calculate[i - 1]) / Number(calculate[i + 1]))}
            else if(a === '*'){ inputArray.unshift(Number(calculate[i - 1]) * Number(calculate[i + 1]))}
        })
      }

        console.log(inputArray)
    } while((inputArray.length > 1))


    document.querySelector('.input').innerHTML = inputArray.pop();


})
