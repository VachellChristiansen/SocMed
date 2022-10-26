const modaloverlay=document.getElementById("atg")
const fileinput=document.getElementById("file-input")
const fileinputbtn=document.getElementById("file-input-btn")
const image=document.getElementById("pp")
const navProfilePic=document.getElementById('user1')
const profilePic=document.getElementById('profile-pic')

const DEFAULT_PROFILE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMOLFh-kJkRhlV9JbswP1tLoOrfiTgicVmblx-txQD6-FLgqxuZnC5DLfHvk9nGOqXw1Q&usqp=CAU"

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
  console.log('successhide');
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

$("#atg").click(function(){
  $("#pp").attr("src", DEFAULT_PROFILE)
  navProfilePic.src = DEFAULT_PROFILE
  profilePic.src = DEFAULT_PROFILE
})

fileinputbtn.addEventListener("click",() => {
    fileinput.click()
})

fileinput.addEventListener("change",() => {
    const file=fileinput.files[0]
    if (!file)return
    const url=URL.createObjectURL(file)
    navProfilePic.src = url
    profilePic.src = url
    image.src=url
})

$('#edit-form').submit(function (e) {
  e.preventDefault()
  const data = $(this).serializeArray()
  data.forEach(({ name, value }) => {
    if(!value) return 
    $(`#${name}`).text(value)
  })
  hideEditProfile()
})
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
