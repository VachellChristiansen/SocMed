$(".content-video").mouseenter(function(){
  this.play();
});
$(".content-video").mouseout(function(){
  this.pause();
});
//will integrate later
function redirectUser(profile) {
  location.replace(`profiles/${profile}.html`);
}

//back to top
// Get the button:
let buttonTop = document.getElementById("button-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    buttonTop.style.display = "block";
  } else {
    buttonTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}