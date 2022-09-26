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