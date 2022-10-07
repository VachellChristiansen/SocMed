function showComments(count) {
  var details = document.getElementsByClassName("post-details")[count];
  var comments = document.getElementsByClassName("post-comments")[count]; 
  
  if(details.classList.contains("hidden")) {
    comments.classList.toggle("opacity-0");
    setTimeout(() => {
      comments.classList.toggle("hidden");
      details.classList.toggle("hidden");
    }, 500);
    details.classList.toggle("opacity-0");
  }
  else {
    details.classList.toggle("opacity-0");
    setTimeout(() => {
      details.classList.toggle("hidden");
      comments.classList.toggle("hidden");
    }, 500);
    comments.classList.toggle("opacity-0");
  }
}