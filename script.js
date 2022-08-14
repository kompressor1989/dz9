
const Calc = function() {
    let firstNumber = '';
    let secondNumber = '';
    let result = '';
    let operation = '';

 
    
    this.plus = function() {
        return result = firstNumber + secondNumber;
    }

    this.minus = function() {
        result = firstNumber - secondNumber;
        return result;
     }

    this.multiply = function() {
        result = firstNumber * secondNumber;
        return result;
     }

    this.division = function() {
        result = firstNumber / secondNumber;
        return result;
     }

    this.sqrt = function() {
         result = Math.sqrt(firstNumber);
         return result;
     }


    this.percent = function() {
         result = (1 / firstNumber);
         return result;
     }

    

      let calcElem = document.querySelector('.calc');
  
      let resultBtn = calcElem.querySelector('.function_equals');

      let input = document.querySelector('.value');
  
      resultBtn.addEventListener('click', () => {
         secondNumber = +input.value;
         switch (operation) {
            case '+':
                this.plus();
                break;
            case '-':
                this.minus();
                break;
            case '/':
               if ((firstNumber == 0) || (secondNumber == 0)) {
                  alert('Делить на ноль нельзя!!!');
                  }
                  else 
                  this.division();
                  break;
                
            case '*':
                this.multiply();
                break;

            case '√':
               secondNumber = '';
               this.sqrt();
               break;
            case '1/x':
               this.percent();
               break;
             
        } 
        
          input.value = result;
  
      });

      let number = calcElem.querySelector('.number');
      number.addEventListener('click', function() { 
         input.value += '-';
      });
  
      let number0 = calcElem.querySelector('.number0');
      number0.addEventListener('click', function() {
         input.value += '0';
      });
  
      let numberBack = calcElem.querySelector('.numberback');
      numberBack.addEventListener('click', function() {
         let exp = input.value
         input.value = exp.substring(0,exp.length-1);
      });
  
      let number1 = calcElem.querySelector('.number1');
      number1.addEventListener('click', function() {
         input.value += '1';
      });
  
      let number2 = calcElem.querySelector('.number2');
      number2.addEventListener('click', function() {
         input.value += '2';
      });
  
      let number3 = calcElem.querySelector('.number3');
      number3.addEventListener('click', function() {
         input.value += '3';
      });
  
      let number4 = calcElem.querySelector('.number4');
      number4.addEventListener('click', function() {
         input.value += '4';
      });
  
      let number5 = calcElem.querySelector('.number5');
      number5.addEventListener('click', function() {
         input.value += '5';
      });
  
      let number6 = calcElem.querySelector('.number6');
      number6.addEventListener('click', function() {
         input.value += '6';
      });
  
      let number7 = calcElem.querySelector('.number7');
      number7.addEventListener('click', function() {
         input.value += '7';
      });
  
      let number8 = calcElem.querySelector('.number8');
      number8.addEventListener('click', function() {
         input.value += '8';
      });
  
      let number9 = calcElem.querySelector('.number9');
      number9.addEventListener('click', function() {
         input.value += '9';
      });
  
      let clear = calcElem.querySelector('.function_clear');
      clear.addEventListener('click', function() {
         input.value = '';
      });
  
      let plus = calcElem.querySelector('.function_plus');
      plus.addEventListener('click', function() {
         operation = '+';
         firstNumber = +input.value;
         input.value = '';
      });
  
      let minus = calcElem.querySelector('.function_minus');
      minus.addEventListener('click', function() {
         operation = '-'
         firstNumber = +input.value;
         input.value = '';
      });
  
      let multiply = calcElem.querySelector('.function_multiply');
      multiply.addEventListener('click', function() {
         operation = '*';
         firstNumber = +input.value;
         input.value = '';
      });
  
      let sqrt = calcElem.querySelector('.function_sqrt');
      sqrt.addEventListener('click', function() {
         operation = '√';
         firstNumber = +input.value;
         //input.value = '';
      });
  
      let devision = calcElem.querySelector('.function_devision');
      devision.addEventListener('click', function() {
         operation = '/';
         firstNumber = +input.value;
         input.value = '';
      });
  
      let percent = calcElem.querySelector('.function_percent');
      percent.addEventListener('click', function() {
         operation = '1/x';
         firstNumber = +input.value;
         //input.value += '';
         
      });
  
  }
  
  
    


let calc1 = new Calc();





