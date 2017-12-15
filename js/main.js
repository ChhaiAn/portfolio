
$(document).ready(function(){
  $('.parallax').parallax();
 



/*TYPING EFFECT*/

var typingText = document.getElementById("typing-text");
var i = 0;
var txt = 'HTML CSS JavaScript & PHP....:)'; 
var speed = 80; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    typingText.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();




var secondCircle = document.getElementById('second-circle');
var thirdCircle = document.getElementById('third-circle');
var firstCircle = document.getElementById('circle');

var fall1 = document.getElementById('fall-1');
var spring = document.getElementById('spring');
var fall2 = document.getElementById('fall-2');
//var arrg = text.split("");
// var result = '';





// function typingEffect(text) {

//    if (i <= text.length){
//       var res = text.substr(0,i);
//       typingText.innerHTML = res;
//       setTimeout(function(){
//          typingEffect(text);
//       },150);
//       i++;
//     } else {
//       i = text.length;
//     }
// }
// function delEffect(text) {
//   if (i <= text.length){
//     var res = text.substr(0,j);
//     typingText.innerHTML = res;
//     setTimeout(function(){
//       delEffect(text);
//     },200);
//     j--;
//   }
// }
// typingEffect(text);



window.addEventListener('scroll', function (){
  var ypos = window.pageYOffset;
  console.log(ypos);
  if (ypos > 500){
    document.getElementById('html-progress').classList.add("anim-html");
    document.getElementById('css-progress').classList.add("anim-css");
    document.getElementById('js-progress').classList.add("anim-js");
    document.getElementById('php-progress').classList.add("anim-php");
  }
  if (ypos > 2300){

    setTimeout(function(){
        firstCircle.classList.add("circle");

    },1000);
    setTimeout(function(){
        fall1.classList.add("fall-1");
        fall1.style.visibility = "visible";
    },2500);

    setTimeout(function(){
        secondCircle.classList.add("circle-second");

    },3500);
    setTimeout(function(){
        spring.classList.add("spring");
        spring.style.visibility = "visible";
    },5000);
    setTimeout(function(){
        thirdCircle.classList.add("circle-third");

    },6000);
    setTimeout(function(){
        fall2.classList.add("fall-2");
        fall2.style.visibility = "visible";
    },7000);
  }


});
  
});

