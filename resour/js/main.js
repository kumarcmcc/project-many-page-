$(document).ready(function(){
var mixer =mixitup('.container');


//nav bar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//smoth onscroll
  /*$("a").on('click',function(event){
  if(this.hash !==""){
      event.preventDefault();
    var hash= this.hash;

       $('html,body').animated({
         scrollTop: $(hash).offset().top
       },800,function(){
         window.location.hash=hash;
       });

  }
});  */

});
function openNav() {
  document.getElementById("myNav").style.width ="100%";
}
function closeNav() {
  document.getElementById("myNav").style.width ="0%";
}
