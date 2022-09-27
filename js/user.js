$(".content-video").mouseenter(function(){
  this.play();
});
$(".content-video").mouseout(function(){
  this.pause();
});


//this works but no parameter
// $('.user-star').click(()=>{
//   // var destination=this.attr('id');
//   // console.log(destination);
//   location.replace(`profiles/user1.html`);
// });
// function redirectUser(profile) {
  
// }

$('.user-star').click(function(event) {
  var status = $(this).attr('id');
 if(status===""){

 } else {
  location.replace(`profiles/${status}.html`);
 }
});

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