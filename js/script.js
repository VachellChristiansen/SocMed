var toggleMargin = false;
$('#comment-button').click((event)=>{
  hehe();
});

async function hehe() {
  if(!toggleMargin){
    $('.others').toggleClass('open');
    setTimeout(() => {
      $('.comment').toggle();
      setTimeout(() => {$('.comment').toggleClass('show');}, 100)
    }, 700)
  } else {
    $('.comment').toggleClass('show');
    setTimeout(() => {$('.comment').toggle();}, 700);
    setTimeout(() => {$('.others').toggleClass('open');}, 700);
  }
  toggleMargin=!toggleMargin;
  
}

/* PROFILE NAVBAR */
function menuToggle() {
  const toggleMenu = $('.action');
  toggleMenu.classList.toggle("hidden");
}

