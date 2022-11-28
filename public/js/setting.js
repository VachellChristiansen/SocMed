const editProfileTrigger = document.getElementById("edit-profile-trigger");
const changePasswordTrigger = document.getElementById("change-password-trigger");
const manageAccountTrigger = document.getElementById("manage-account-trigger");
const helpTrigger = document.getElementById("help-trigger");

const editProfileItem = document.getElementById("edit-profile");
const changePasswordItem = document.getElementById("change-password");
const manageAccountItem = document.getElementById("manage-account");
const helpItem = document.getElementById("help");

editProfileTrigger.addEventListener("click", () => {
  editProfileTrigger.classList.add("bold");
  editProfileItem.classList.remove("hidden");

  helpTrigger.classList.remove("bold");
  changePasswordTrigger.classList.remove("bold");
  manageAccountTrigger.classList.remove("bold");

  helpItem.classList.add("hidden");
  changePasswordItem.classList.add("hidden");
  manageAccountItem.classList.add("hidden");
})

changePasswordTrigger.addEventListener("click", () => {
  changePasswordTrigger.classList.add("bold");
  changePasswordItem.classList.remove("hidden");

  helpTrigger.classList.remove("bold");
  editProfileTrigger.classList.remove("bold");
  manageAccountTrigger.classList.remove("bold");

  helpItem.classList.add("hidden");
  editProfileItem.classList.add("hidden");
  manageAccountItem.classList.add("hidden");
})

manageAccountTrigger.addEventListener("click", () => {
  manageAccountTrigger.classList.add("bold");
  manageAccountItem.classList.remove("hidden");

  helpTrigger.classList.remove("bold");
  changePasswordTrigger.classList.remove("bold");
  editProfileTrigger.classList.remove("bold");

  helpItem.classList.add("hidden");
  changePasswordItem.classList.add("hidden");
  editProfileItem.classList.add("hidden");
})

helpTrigger.addEventListener("click", () => {
  helpTrigger.classList.add("bold");
  helpItem.classList.remove("hidden");

  editProfileTrigger.classList.remove("bold");
  changePasswordTrigger.classList.remove("bold");
  manageAccountTrigger.classList.remove("bold");

  editProfileItem.classList.add("hidden");
  changePasswordItem.classList.add("hidden");
  manageAccountItem.classList.add("hidden");
})

/* PROFILE NAVBAR */
$('.master,.profile-menu').mouseover(function(event){
  $('.profile-menu').removeClass("hidden");
  });
  
  $('.profile-menu').mouseout(function(event){
    $('.profile-menu').addClass("hidden");
    });
  
  $('.container').mouseover(function(event){
    $('.profile-menu').addClass("hidden");
    });

    $(document).mouseleave(function () {
      $('.profile-menu').addClass("hidden");
  });

    $('.master').click(function(event) {
    location.href=`/user`;
  });