function showPassword(eye) {
  var password = eye.closest('div').querySelector('input');
  console.log(password);
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

function register() {
  var login = document.getElementById('login');
  var register = document.getElementById('register');
  login.classList.add('disappear');
  setTimeout(() => {
    login.classList.add('hidden');
    register.classList.remove('hidden');
  }, 200);
  setTimeout(() => {
    register.classList.remove('disappear');
  }, 400);
}

function login() {
  var login = document.getElementById('login');
  var register = document.getElementById('register');
  register.classList.add('disappear');
  setTimeout(() => {
    register.classList.add('hidden');
    login.classList.remove('hidden');
  }, 200);
  setTimeout(() => {
    login.classList.remove('disappear');
  }, 400);
}