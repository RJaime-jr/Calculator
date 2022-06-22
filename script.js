let numButtons = document.querySelectorAll('.num-btn');
let currentVal = [];
let firstVal = '';
let primaryDisplay = document.getElementsByClassName('current-val').innerHtml;

function currentValPrint(num){
    currentVal.push(num);
    let numString = currentVal.join("");
    return parseInt(numString);
}

numButtons.forEach((button) =>
  button.addEventListener('click', function(){
   
   
    primaryDisplay = `${button.textContent}`;
   
    console.log(primaryDisplay);
    return;
  }));
 



/*numButtons.addEventListener('click',function(e){
//currentValPrint(e);
console.log("hello");
document.getElementsByClassName('current-val').innerText = currentValPrint(e);
return
});
*/