//Setting up Variables for Selectors
//Buttons
let numButtons = document.querySelectorAll('.num-btn');
let symButtons = document.querySelectorAll('.sym');
let clear = document.querySelector('.clear');
let del = document.querySelector('.del');
let div = document.querySelector('.div');
let mltply = document.querySelector('.mltply');
let minus = document.querySelector('.minus');
let plus = document.querySelector('.pls');
let equals = document.querySelector('.equ');

//Display
let primaryDisplay = document.getElementById("current-val");
let secondaryDisplay = document.getElementById("previous-val");
let oppDisplay = document.getElementById("operation");

//Empty Variables
let currentVal = [];
let SecondVal = 0;
let currentOpperand = '';
let result = 0;

//Display Functions & Inputs

function currentValPrint(num){
  if(currentVal.length > 7){currentVal.pop();}
    currentVal.push(num);
    let numString = currentVal.join("");
    return parseInt(numString);
}

numButtons.forEach((button) =>
  button.addEventListener('click', function(){
    primaryDisplay.innerText = currentValPrint(`${button.textContent}`);
    console.log(primaryDisplay.textContent);
    return;
  }));
 
// Clear Button 
clear.addEventListener('click', function(){
  currentVal = [];
  secondVal = '';
  currentOpperand = '';
  primaryDisplay.innerText = '0';
  secondaryDisplay.innerText = '';
  oppDisplay.innerText = '';
  return;
})

// Delete Button
del.addEventListener('click', function(){
    currentVal.pop();
    let numString = currentVal.join("");
  primaryDisplay.innerText = parseInt(numString);
  return;
  
})
//Getting Opperand
symButtons.forEach((button) =>
button.addEventListener('click', function(){
  SecondVal = parseInt(currentVal.join(""));
  currentVal = [];
  secondaryDisplay.innerText = SecondVal;
  oppDisplay.innerText = `${button.textContent}`;
  primaryDisplay.innerText = "";
  
  currentOpperand = button.textContent;
  console.log(currentOpperand);
  return;

}));

//Individual Symbol button events



//Divide
div.addEventListener('click', function(){
 

});

//Multiply 

mltply.addEventListener('click', function(){

 
});

//Subtract
minus.addEventListener('click', function(){
  

});

//Add
plus.addEventListener('click', function(){
  if(SecondVal != "" && parseInt(currentVal.join(""))!= ""){
    
    result = add(parseInt(currentVal.join("")),SecondVal);
  }
  console.log(result);
  return;
});


//Equals
equals.addEventListener('click', function(){
  if(SecondVal != "" && parseInt(currentVal.join(""))!= ""){
    
    primaryDisplay.innerText = result;
  }
});

  // Calculator Functions

  //Multiply 
  function multiply(a,b){
    return a * b;
  }

  function divide(a,b){
    return a/b;
  }


  function add(a,b){
    return a + b;
  }

  function subtract(a,b){
    return a - b;
  }
