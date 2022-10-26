function checkPasswordMatch() {
  var password = $("#passInput").val();
  var confirmPassword = $("#confInput").val();
  if(password.length>0 && confirmPassword.length>0){
    if (password != confirmPassword ){
      $("#checkMatch").css('color','#ff0000');
      $("#checkMatch").html("Passwords does not match!");
      $(".submit").attr('disabled','disabled');
    }
    else
      {
        $("#checkMatch").css('color','#00ff84');
        $("#checkMatch").html("Passwords match.");
        $(".submit").removeAttr('disabled');
      }
  }
  
}

$(document).ready(function () {
  $("#passInput").keyup(checkPasswordMatch);
 $("#confInput").keyup(checkPasswordMatch);
});

$('#togglePassword').click((event)=>{
var type=$('#passInput').attr('type');
if(type==="password"){
  $('#passInput').attr('type','text');
} else {
  $('#passInput').attr('type','password');
}
$('#togglePassword').toggleClass("bi-eye bi-eye-slash");
});
$('#toggleConfirm').click((event)=>{
  var type=$('#confInput').attr('type');
  if(type==="password"){
    $('#confInput').attr('type','text');
  } else {
    $('#confInput').attr('type','password');
  }
  $('#toggleConfirm').toggleClass("bi-eye bi-eye-slash");

  });

