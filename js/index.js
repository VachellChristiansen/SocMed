function comment(count) {
  var bubbles = document.getElementsByClassName("interactive-bubble")[count];
  var music = document.getElementsByClassName("music")[count];
  var userCaption = document.getElementsByClassName("user-caption")[count];

  userCaption.classList.toggle("hidden");
  music.classList.toggle("hidden");
  bubbles.classList.toggle("small");

  var comment = document.getElementsByClassName("comment-container")[count];
  var captionComment = document.getElementsByClassName("caption-comment")[count];

  comment.classList.toggle("hidden");
  captionComment.classList.toggle("show-comments");
}

// $('.user').click(function(event) {
//   var status = $(this).attr('id');
//  if(status===""){

//  } else {
//  location.href=`profiles/${status}.html`;
//  }
// });

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
