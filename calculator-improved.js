//cache DOM
var input = document.getElementById('inputTokens');
var button = document.getElementById('button');
var answerBox =  document.getElementById('answer');

function calculator() {
//Create array of acceptable operations (add='+', etc)
    var operators = ["+", "-", "*", "/", "^", "%"];
//Split the input value into an array of separate characters ('1+2' now is and array['1','+','2'])
    var inputTokens = (input.value).replace(/\s/gm,"").split("");
//Use regular exp to delete any whitespace in input field
    console.log(inputTokens);
//Creating Variables to hold first number 'x', second number 'y', and the feature/operator
     var tokenX = 0;
     var tokenY = 0;
     var ops = [];
     var opsPos = [];
     var numbers = [];
     var ans = 0;

     if (inputTokens[0]=="-") {
       i=1;
     } else {
       i=0;
     }
    for(; i<inputTokens.length; i++) {
      if (operators.includes(inputTokens[i])===true) {
        ops.push(inputTokens[i]);
        opsPos.push(i);
      //  console.log('Ops is '+inputTokens[i]+'; i is '+i);
    }
  }
  console.log(opsPos);
  console.log(ops);

//Concate "input tokens" until you reach a "feature", this creates 'x'. ('123+321' will leave 123)
   if (inputTokens[0]=="-") {
     i=1;
   } else {
     i=0;
   }
      for(; inputTokens[i]!==ops[0]; i++){
         if (i >= inputTokens.length) {break;}
         tokenX += inputTokens[i];
       }

  //     console.log('This is i: '+i);
//Turn 'x' string into a number
     if (inputTokens[0]==="-") {
        x = (0-parseFloat(tokenX));
     } else {
        x = parseFloat(tokenX);
     }

     numbers.push(x);
     //console.log('Token X is '+tokenX);
     console.log('x='+numbers[0]);
//Concate "input tokens" after the operator until the end of string. This creates 'y' (123+321 will leave 321)

     //console.log('i = '+i);
     for(j=0; j<ops.length; j++){
       for(i=opsPos[j]+1; i < inputTokens.length; i++){
       if (operators.includes(inputTokens[i])===true) {break};
       tokenY += inputTokens[i];
       }
     y = parseFloat(tokenY);
     tokenY = 0;
     numbers.push(y);
     //console.log('Token Y is '+tokenY);
     console.log('y='+y);
     }
     console.log('numbers array ='+numbers);
//debugger;

//Find the operator
  // if (x >= 0){
  //   var ops = inputTokens[parseFloat(tokenX.length)-1];
  // } else {
  //   var ops = inputTokens[parseFloat(tokenX.length)];
  // }
  //  console.log('The operation is '+ops+' and the opsPos is '+opsPos);
//Run the operation

  function operation(x,y,ops){
    switch (ops[i]){
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

  function equals(x,ops) {
    if (ops[0]===undefined) {
      return x;
     } else {
      ans = x;
   for(i=0; i< ops.length ; i++) {
      var holder = operation(ans,numbers[i+1],ops);
      console.log('Now ans is '+holder);
      ans = holder;
      }
    }
  }
        if (ops=="") {
          answerBox.innerHTML = '<strong>'+numbers[0]+'</strong>';
        } else {
        equals(numbers[0],ops)
        answerBox.innerHTML = inputTokens.join("")+' = <strong>'+ans+'</strong>';
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
