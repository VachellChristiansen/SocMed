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


$('.log-in').click((event)=>{
  window.location.href="../html/signin.html";
});

$('.sign-up').click((event)=>{
  window.location.href="../html/register.html";
});

/* add button micro */
const btnEl = document.querySelector('.btn');
const iconEl = document.querySelector('.icons');
const toggleOptions = () => {
    const wrapper = document.querySelector('.wrapper');
    console.log(iconEl);
    wrapper.classList.toggle('active');
    if (iconEl.classList.contains('fa-share-alt')) {
        iconEl.classList.replace('fa-share-alt','fa-close');
    } else {
        iconEl.classList.replace('fa-close', 'fa-share-alt');
    }
};
btnEl.addEventListener('click', toggleOptions);
