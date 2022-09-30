function comment(count) {
  var bubbles = document.getElementsByClassName("interactive-bubble")[count];
  var music = document.getElementsByClassName("music")[count];
  var userCaption = document.getElementsByClassName("user-caption")[count];

  userCaption.classList.toggle("hidden");
  music.classList.toggle("hidden");
  bubbles.classList.toggle("small");

  var comment = document.getElementsByClassName("comment-container")[count];
  var captionComment = document.getElementsByClassName("caption-comment")[count];
  var commentAdd = document.getElementsByClassName("comment-add")[count];

  comment.classList.toggle("hidden");
  commentAdd.classList.toggle("hidden");
  captionComment.classList.toggle("show-comments");
}

function share(count){
  var share = $('.share-container')[count];
share.classList.toggle("hidden");
};

$('.like').click(function(event){
  $(this).find('i').toggleClass("fa-solid");
});

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

  // $('.share').click(function(event){
  //   if($('.share-container').hasClass("hidden")){
  //     $('.share-container').removeClass("hidden");
  //   } else {
  //     $('.share-container').addClass("hidden");
  //   }

  // });