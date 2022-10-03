function showPassword(eye) {
  var password = document.getElementsByClassName('password-input')[0];
  if(password.type === 'password') {
    password.type = 'text';
    eye.classList.remove('fa-eye');
    eye.classList.add('fa-eye-slash');
  }
  else {
    password.type = 'password';
    eye.classList.remove('fa-eye-slash');
    eye.classList.add('fa-eye');
  }

}