//cache DOM
var input = document.getElementById('inputTokens');
var button = document.getElementById('button');
var answerBox =  document.getElementById('answer');

function calculator() {
//Create array of acceptable operations (add='+', etc)
    var operators = ["+", "-", "*", "/", "^", "%"];
//Split the input value into an array of separate characters ('1+2' now is and array['1','+','2'])
    var inputTokens = (input.value).split("");
    console.log(inputTokens);
//Creating Variables to hold first number 'x', second number 'y', and the feature/operator
     var tokenX = 0;
     var tokenY = 0;
     var ops = null;

//Concate "input tokens" until you reach a "feature", this creates 'x'. ('123+321' will leave 123)
      for(i=0; operators.includes(inputTokens[i])!==true; i++){
         if (i >= inputTokens.length) {break;}
         tokenX += inputTokens[i];
       }

//Turn 'x' string into a number
     if (inputTokens[0]==="-") {
       var x = (0-parseFloat(tokenX));
     } else {
     var x = parseFloat(tokenX);
     }
     console.log('x='+x);
//Concate "input tokens" after the operator until the end of string. This creates 'y' (123+321 will leave 321)
     for(i=tokenX.length; i < inputTokens.length; i++){
       tokenY += inputTokens[i];
     }
     var y = parseFloat(tokenY);
     console.log('y='+y);
//Find the operator
     var ops = inputTokens[parseFloat(tokenX.length)-1];
     console.log('The operation is '+ops);
//Run the operation
     function operation(x,y,ops) {
       if (ops===undefined) {
         return x;
       } else {
       switch (ops){
         case ('+'): return x+y;
         case ('-'): return x-y;
         case ('*'): return x*y;
         case ('/'): return x/y;
         case ('^'): return Math.pow(x,y);
         case ('%'): return x%y;
         //case (null): return x;
          default: prompt("Error, Enter Feature or Exit [type 'quit' to exit]?");
        }
      }
      }
        if (ops===undefined) {
          answerBox.innerHTML = '<strong>'+x+'</strong>';
        } else {
        answerBox.innerHTML = +x+ops+y+' = <strong>'+operation(x,y,ops)+'</strong>';
      }
      }

input.addEventListener('mouseover', function(){
  this.focus();
});

input.addEventListener('keypress', function(enter){
  //console.log(enter.which);
  if(enter.which===13) {
    calculator();
    input.value = "";
  }
})
//Clear input when exit or press escape
input.addEventListener('blur', function(){
  answerBox.innerHTML = "";
})


var td = document.getElementsByTagName('td');
for (i=0; i < td.length; i++){
  td[i].addEventListener('click', function(){
   if (this===td[0]) {
     input.focus();
     input.value = "";
   } else if (this===td[18]) {
       calculator();
       input.value = "";
   } else {
    input.focus();
    input.value += this.innerHTML;
  }
});
}
