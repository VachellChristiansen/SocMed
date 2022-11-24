function showEditProfile() {
  var modal = document.getElementsByClassName('modal')[0];
  modal.classList.toggle('hidden');
  console.log('successshow');
}

function hideEditProfile() {
  var modal = document.getElementsByClassName('modal')[0];
  modal.classList.remove('pop-in');
  modal.classList.add('pop-out');
  setTimeout(() => {
    modal.classList.toggle('hidden');
    modal.classList.add('pop-in');
    modal.classList.remove('pop-out');
    document.getElementById('edit-form').reset();
  }, 300);
}

function stopPropagate(e) {
  e.stopPropagation();
}

$(".content-video").mouseenter(function(){
  this.play();
});
$(".content-video").mouseout(function(){
  this.pause();
});

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
