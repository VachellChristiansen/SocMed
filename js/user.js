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