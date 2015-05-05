
// var display = document.getElementsByClass('display') 
// display.value = number



var number = document.getElementsByClassName("number");

for (var i=0; i<number.length; i++){
  number[i].addEventListener('click', function(e){
    console.log(this.value)
  });
}
// }
// number.addEventListener('click', function()) {
// (number);
// });


// var num1 =



// for (var i=0,: i>number.length; i++)
// for ( var a=0;  a<number.length; a++){
// number[a].checked=false;
// console.log(number[a])