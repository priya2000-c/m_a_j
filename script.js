const form = document.getElementById('myForm');
const error = document.getElementById('error');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (!validateForm()) {
    error.innerText = 'Please correct the errors in the form.';
  } else {
    error.innerText = '';
    form.submit();
  }
});

function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();

  if (name.length < 5) {
    document.getElementById('name').focus();
    return false;
  }

  if (!email.includes('@')) {
    document.getElementById('email').focus();
    return false;
  }

  if (phone === '123456789' || phone.length !== 10) {
    document.getElementById('phone').focus();
    return false;
  }

  if (password.length < 8 || password === 'password' || password === name) {
    document.getElementById('password').focus();
    return false;
  }

  if (password !== confirmPassword) {
    document.getElementById('confirmPassword').focus();
    return false;
  }

  return true;
}
