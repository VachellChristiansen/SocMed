function checkPasswordMatch() {
  var password = $("#passInput").val();
  var confirmPassword = $("#confInput").val();
  if(password.length>0 && confirmPassword.length>0){
    if (password != confirmPassword ){
      $("#checkMatch").css('color','#ff0000');
      $("#checkMatch").html("Passwords does not match!");
    }
    else
      {
        $("#checkMatch").css('color','#00ff84');
        $("#checkMatch").html("Passwords match.");
      }
  }
  
}

$(document).ready(function () {
  $("#passInput").keyup(checkPasswordMatch);
 $("#confInput").keyup(checkPasswordMatch);
});
