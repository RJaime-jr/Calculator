//Setting up Variables for Selectors
//Buttons
let numButtons = document.querySelectorAll('.num-btn');
let symButtons = document.querySelectorAll('.sym');
let clearBtn = document.querySelector('.clear');
let del = document.querySelector('.del');
let div = document.querySelector('.div');
let mltply = document.querySelector('.mltply');
let minus = document.querySelector('.minus');
let plus = document.querySelector('.pls');
let equals = document.querySelector('.equ');
let deci = document.querySelector('.deci');

//Display
let primaryDisplay = document.getElementById("current-val");
let secondaryDisplay = document.getElementById("previous-val");
let oppDisplay = document.getElementById("operation");

//Empty Variables
let displayVal = [];    
let firstVal = null;
let secondVal = 0; 
let tempVal = null;
let currentOpperand = '';
let result = null;
let decimalCount = 0;

//Display Functions & Inputs

function displayValPrint(num){
  if(displayVal.length > 7){displayVal.pop();}
    displayVal.push(num);
    let numString = displayVal.join("");
    firstVal = parseFloat(numString);
    return numString;
}

numButtons.forEach((button) =>
  button.addEventListener('click', function(){
    primaryDisplay.innerText = displayValPrint(`${button.textContent}`);
   
    return;
  }));
 
// Clear Button 
clearBtn.addEventListener('click', function(){
  primaryDisplay.innerText = '0';
 clear();
  return;
})
function clear (){
  displayVal = [];
  firstVal = 0;
  secondVal = 0;
  currentOpperand = '';
  //primaryDisplay.innerText = '0';
  secondaryDisplay.innerText = '';
  oppDisplay.innerText = '';
  result = null;
  tempVal = null;
  decimalCount = 0;

}

// Delete Button
del.addEventListener('click', function(){
    displayVal.pop();
    let numString = displayVal.join("");
    
  primaryDisplay.innerText = numString;
  firstVal = parseFloat(numString);
  return;
  
})

// Decimal Button
deci.addEventListener('click', function(){
  if(decimalCount == 0){
    primaryDisplay.innerText = displayValPrint(".");
    //console.log("hello");
  }
  
  decimalCount += 1;
  //console.log(decimalCount);
  return;
})
//Getting Opperand
symButtons.forEach((button) =>
button.addEventListener('click', function(){
  secondVal = parseFloat(displayVal.join(""));
  //tempVal = firstVal;
  firstVal = null;
  displayVal = [];
  decimalCount = 0;
  
  if(tempVal == null){
    secondaryDisplay.innerText = secondVal;
  }
  else{
    secondaryDisplay.innerText = tempVal;
  }
  oppDisplay.innerText = `${button.textContent}`;
  primaryDisplay.innerText = "";
  
  currentOpperand = button.textContent;

  return;

}));


//Equals
equals.addEventListener('click', function(){
// if result isnt empty
 if(secondVal != null && firstVal != null && tempVal != null){
  if(currentOpperand == "+"){
    result = add(tempVal,firstVal);
  }
  else if(currentOpperand == "-"){
    result = subtract(firstVal, tempVal);
  }
  else if(currentOpperand == "x"){
    result = multiply(tempVal,firstVal);
  }
  else if(currentOpperand == "/"){
    result = divide(firstVal,tempVal);
  }
  
  primaryDisplay.innerText = result;
  tempVal = result;

}

  //If both values arent empty
  else if(secondVal != null && firstVal != null){
    if(currentOpperand == "+"){
      result = add(firstVal,secondVal);
    }
    else if(currentOpperand == "-"){
      result = subtract(firstVal,secondVal);
    }
    else if(currentOpperand == "x"){
      result = multiply(firstVal,secondVal);
    }
    else if(currentOpperand == "/"){
      result = divide(firstVal,secondVal);
    }
    
    primaryDisplay.innerText = result;
    tempVal = result;
    //clear();
  }


  
  return;
});

  // Calculator Functions

  //Multiply 
  function multiply(a,b){
    return a * b;
  }

  function divide(a,b){
    return b/a;
  }


  function add(a,b){
    return a + b;
  }

  function subtract(a,b){
    return b - a;
  }
