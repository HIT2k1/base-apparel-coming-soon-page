let form = document.getElementById('form');
let email = document.querySelector('.email');
let errorIcon = document.querySelector('.error-icon')
let error = document.getElementById('error');

function invalidEmail() {
    if (!email.value.includes('@')) {
        email.classList.add('email--active');
        errorIcon.classList.add('error-icon--active');
        error.innerHTML = 'Please provide a valid email';
    }
};

form.addEventListener('submit', function() {
    event.preventDefault();
    invalidEmail();
})
email.onblur = invalidEmail;
email.onfocus = function() {
    if (email.classList.contains('email--active')) {
        email.classList.remove('email--active');
        errorIcon.classList.remove('error-icon--active')
        error.innerHTML = '';
    }
}