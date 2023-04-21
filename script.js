
function add(value1, value2){
    let result = value1 + value2 ;
    return result;    
}
function minus(value1, value2){
    let result = value1 - value2 ;
    return result;
}
function times(value1, value2){
    let result = value1 * value2;
    return result;
}
function divide(value1, value2){
    let result = value1 / value2;
    return result;
}



function input(param){
 console.log(param);
    const prev = document.querySelector('#input-result-type');
    const  output = document.querySelector('#output-result-type');
    if(param=='AC'){
      prev.innerHTML = '';
      output.innerHTML ='';
    }
    else if(param =='DEL'){
      let text = prev.innerHTML;
      let textAr =  text.split('');
      textAr.pop();
      prev.innerHTML = textAr.join('');
    }
    else if(param == '+/-'){
      let text = prev.innerHTML;
      prev.innerHTML = text * -1;  
    }

    else if(param == '='){
      let text = prev.innerHTML;
      let textAr = text.split(/[+-/x]/g);
      let num1 = parseInt(textAr[0]);
      let num2 = parseInt(textAr[1]);
      let op = text.replace(/\d/g, '');
      if(op=='+'){
        output.innerHTML = add(num1, num2);
      }
      else if(op == '-'){
        output.innerHTML = minus(num1, num2);
      }
      else if(op == 'x'){
        output.innerHTML = times(num1, num2);
      }
      else if(op == '/'){
        output.innerHTML = divide(num1, num2);
      }
    
      prev.innerHTML = '';
    
    }
    else{
        output.innerHTML = '';
        prev.innerHTML =  prev.innerHTML +  param;
    }
}

