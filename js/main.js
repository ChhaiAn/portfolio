
$(document).ready(function(){


  // $('.fixed-action-btn').floatingActionButton({
  //   direction: 'top', // Direction menu comes out
  //   hoverEnabled: true, // Hover enabled
  //   toolbarEnabled: false // Toolbar transition enabled
  // });






/* SCROLLING EFFECT */

$('.scroll-link').click(function(e){
  if (this.hash !== ""){
    e.preventDefault();
  }
  var hash = this.hash;

  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 1000, function(){
  });
});






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

var badgesBox = document.getElementById('badges-box');
var floatNav = document.getElementById('float-nav');
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
    floatNav.classList.add("show");
    setTimeout(function(){
      badgesBox.classList.add("show");
    },2000);



  }
  else if(ypos < 600){
    floatNav.classList.remove("show");
  }
  if (ypos > 2300){

    setTimeout(function(){
        firstCircle.classList.add("circle");

    },1000);
    setTimeout(function(){
        fall1.classList.add("fall-1");
        fall1.style.visibility = "visible";
    },1900);

    setTimeout(function(){
        secondCircle.classList.add("circle-second");

    },2100);
    setTimeout(function(){
        spring.classList.add("spring");
        spring.style.visibility = "visible";
    },2600);
    setTimeout(function(){
        thirdCircle.classList.add("circle-third");

    },2800);
    setTimeout(function(){
        fall2.classList.add("fall-2");
        fall2.style.visibility = "visible";
    },3000);
  }


});

});
