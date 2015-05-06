
// var display = document.getElementsByClass('display') 
// display.value = number



var number = document.getElementsByClassName("number");
var number1 = "";
var number2 = "";
var operator  = document.getElementsByClassName(operator);


for (var i=0; i<number.length; i++){
  number[i].addEventListener('click', function(e){
    console.log(this.value);
    GetNumber1(this.value);
    GetNumber2(this.value);
  });
}
 
function GetNumber1(number1) {
  number1 = number
  console.log("this number is" + number1);


  if (number1 >0) {  
     GetNumber2();
   }

}

function GetNumber2(number2){
  number2=number
  conole.log("this number is" + number2);
}


for (var i=0; i<number.length; i++){
  operator[i].addEventListener('click', function(e){
    console.log(this.value);
  });











// }
// number.addEventListener('click', function()) {
// (number);
// });


// var num1 =



// for (var i=0,: i>number.length; i++)
// for ( var a=0;  a<number.length; a++){
// number[a].checked=false;
// console.log(number[a])





