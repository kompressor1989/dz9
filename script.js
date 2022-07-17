const Calc = function() {
    let firstNumber = 7;
    let secondNumber = 8;
    let result = '';

 
    
    this.plus = function() {
        return console.log(result = firstNumber + secondNumber);
    }

    this.minus = function() {
        result = firstNumber - secondNumber;
        return console.log(result);
     }

    this.multiply = function() {
        console.log(result = firstNumber * secondNumber);
        return;
     }

    this.division = function() {
        console.log(result = firstNumber / secondNumber);
        return;
     }

    this.sqrt = function() {
       console.log(result = Math.sqrt(firstNumber));
    return;
     }


    this.percent = function() {
        console.log(result = (1 / firstNumber));
        return;
     }

    

      let calcElem = document.querySelector('.calc');
  
      let resultBtn = calcElem.querySelector('.function_equals');

      let input = document.querySelector('.value');
  
      resultBtn.addEventListener('click', function() {
         switch (true) {
            case input.value.indexOf('+') !== -1:
                this.plus();
                break;
            case input.value.indexOf('-') !== -1:
                this.minus();
                break;
            case input.value.indexOf('/') !== -1:
               if ((firstNumber == 0) || (secondNumber == 0)) {
                  alert('делить на ноль нельзя');
                  }
                  else {
                     this.division();
                  }
                break;
            case input.value.indexOf('*') !== -1:
                this.multiply();
                break;
             
        } 
        
          input.value = result;
  
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
         document.querySelector('.value').value += '1';
      });
  
      let number2 = calcElem.querySelector('.number2');
      number2.addEventListener('click', function() {
         document.querySelector('.value').value += '2';
      });
  
      let number3 = calcElem.querySelector('.number3');
      number3.addEventListener('click', function() {
         document.querySelector('.value').value += '3';
      });
  
      let number4 = calcElem.querySelector('.number4');
      number4.addEventListener('click', function() {
         document.querySelector('.value').value += '4';
      });
  
      let number5 = calcElem.querySelector('.number5');
      number5.addEventListener('click', function() {
         document.querySelector('.value').value += '5';
      });
  
      let number6 = calcElem.querySelector('.number6');
      number6.addEventListener('click', function() {
         document.querySelector('.value').value += '6';
      });
  
      let number7 = calcElem.querySelector('.number7');
      number7.addEventListener('click', function() {
         document.querySelector('.value').value += '7';
      });
  
      let number8 = calcElem.querySelector('.number8');
      number8.addEventListener('click', function() {
         document.querySelector('.value').value += '8';
      });
  
      let number9 = calcElem.querySelector('.number9');
      number9.addEventListener('click', function() {
         document.querySelector('.value').value += '9';
      });
  
      let clear = calcElem.querySelector('.function_clear');
      clear.addEventListener('click', function() {
         document.querySelector('.value').value = '';
      });
  
      let plus = calcElem.querySelector('.function_plus');
      plus.addEventListener('click', function() {
         document.querySelector('.value').value += '+';
         this.plus();
      });
  
      let minus = calcElem.querySelector('.function_minus');
      minus.addEventListener('click', function() {
         document.querySelector('.value').value += '-';
         this.minus();
      });
  
      let multiply = calcElem.querySelector('.function_multiply');
      multiply.addEventListener('click', function() {
         document.querySelector('.value').value += '*';
         this.multiply();
      });
  
      let sqrt = calcElem.querySelector('.function_sqrt');
      sqrt.addEventListener('click', function() {
         document.querySelector('.value').value += '√';
         this.sqrt();
      });
  
      let devision = calcElem.querySelector('.function_devision');
      devision.addEventListener('click', function() {
         document.querySelector('.value').value += '/';
         this.multiply();
      });
  
      let percent = calcElem.querySelector('.function_percent');
      percent.addEventListener('click', function() {
         document.querySelector('.value').value += '1/x';
         this.percent();
      });
  
  }
  
  
    


let calc1 = new Calc();





