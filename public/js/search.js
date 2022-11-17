$(".content-video").mouseenter(function(){
  this.play();
});
$(".content-video").mouseout(function(){
  this.pause();
});


$('.user').click(function(event) {
  var status = $(this).attr('id');
 if(status===""){  
 } else {
 location.href=`/user/otherUser`; // need to be changed to other user username
 }
});

$('.user-star').click(function(event) {
  var status = $(this).attr('id');
 if(status===""){

 } else {
  location.href=`/user/otherUser`;
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

$('.user-follow').click(function(event) {
  if($(this).hasClass("follow")){
    $(this).removeClass("follow").addClass("followed");
    $(this).text("Followed");
  } else {
    $(this).removeClass("followed unfollow").addClass("follow");
    $(this).text("Follow");
  }
  });
  
  $('.user-follow').mouseenter(function(event) {
      if($(this).hasClass("followed")){
        $(this).text("Unfollow");
      $(this).addClass("unfollow");
      } 
    });
    
    
  $('.user-follow').mouseout(function(event) {
    if($(this).hasClass("unfollow")){
      $(this).text("Followed");
      $(this).removeClass("unfollow");
    }
    });

    
/* PROFILE NAVBAR */
$('.master,.profile-menu').mouseover(function(event){
  $('.profile-menu').removeClass("hidden");
  });
  
  $('.profile-menu').mouseout(function(event){
    $('.profile-menu').addClass("hidden");
    });
  
  $('.main').mouseover(function(event){
    $('.profile-menu').addClass("hidden");
    });

    $(document).mouseleave(function () {
      $('.profile-menu').addClass("hidden");
  });