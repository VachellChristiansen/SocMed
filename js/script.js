$('#comment-button').click((event)=>{
  $('.comment').toggle();
});

function redirectLogin(){

console.log("A");
};

$('.log-in').click((event)=>{
  console.log("A");
  window.location.href="../html/signin.html";
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
