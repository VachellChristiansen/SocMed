var toggleMargin = false;
$('#comment-button').click((event)=>{
  if(!toggleMargin){
    $('.others').css('margin','0px');
  
   } else {
    $('.others').css('margin','auto');
   }
   toggleMargin=!toggleMargin;

  $('.comment').toggle();
});


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
