function checkPasswordMatch() {
  var password = $("#passInput").val();
  var confirmPassword = $("#confInput").val();
  if(password.length>0 && confirmPassword.length>0){
    if (password != confirmPassword ){
      $("#checkMatch").attr('color','red');
      $("#checkMatch").html("Passwords does not match!");
    }
    else
      {
        $("#checkMatch").attr('color','green');
        $("#checkMatch").html("Passwords match.");
      }
  }
  
}

$(document).ready(function () {
  $("#passInput").keyup(checkPasswordMatch);
 $("#confInput").keyup(checkPasswordMatch);
});
