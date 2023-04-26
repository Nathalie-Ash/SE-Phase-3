const signupForm = document.querySelector('#form');
const users = JSON.parse(localStorage.getItem('users')) || []; // initialize an empty array of users
let emailValue, passwordValue, confirmPasswordValue, ageValue, phoneValue;

window.onload = function() {
	
	const age = document.querySelector('input[name="age"]');
    const phone = document.querySelector('input[name="phone"]');
	const signupButton = document.querySelector('#signup');
	const email = document.querySelector('input[name="email"]');
	const password = document.querySelector('input[name="password"]');
	const confirmPassword = document.querySelector('input[name="confirmPassword"]');
	const formContainer = document.querySelector('#form-container');
	
	const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   // document.addEventListener('DOMContentLoaded', function() {
	signupButton.addEventListener('click', function() {
		ageValue = age.value;
		console.log(ageValue);
        phoneValue = phone.value;
		emailValue = email.value;
		passwordValue = password.value;
		confirmPasswordValue = confirmPassword.value;
        localStorage.setItem('email',emailValue);
        localStorage.setItem('password',passwordValue)
        let isValidAge = false;
        let isValidPhone = false;
        
		let isValidEmail = emailValue.match(emailFormat);
		let isValidPassword = passwordValue.length >= 8 && passwordValue.search(/[a-z]/) >= 0 && passwordValue.search(/[A-Z]/) >= 0 && passwordValue.search(/[0-9]/) >= 0;

		if (!isValidEmail) {
			const emailError = document.querySelector('#email-error');
			emailError.textContent = 'Please enter a valid email address.';
			formContainer.style.height = 'auto';
		} else {
			const emailError = document.querySelector('#email-error');
			emailError.textContent = '';
		}
 
		if (!isValidPassword) {
			const passError = document.querySelector('#pass-error');
			passError.textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.';
			formContainer.style.height = 'auto';
		} else {
			const passError = document.querySelector('#pass-error');
			passError.textContent = '';
		}

		if (passwordValue !== confirmPasswordValue) {
			const confirmPassError = document.querySelector('#confirm-pass-error');
			confirmPassError.textContent = 'Passwords do not match.';
			formContainer.style.height = 'auto';
		} else {
			const confirmPassError = document.querySelector('#confirm-pass-error');
			confirmPassError.textContent = '';
		}
        if (ageValue >= 16) {
            isValidAge = true;
          } else {
            const ageError = document.querySelector('#age-error');
            ageError.textContent = 'You must be at least 16 years old to sign up.';
          }
        
          // Validate phone number
          const phoneFormat = /^\d{10}$/;
          if (phoneValue.match(phoneFormat)) {
            isValidPhone = true;
          } else {
            const phoneError = document.querySelector('#phone-error');
            phoneError.textContent = 'Please enter a valid 10-digit phone number.';
          }

		if (isValidPhone && isValidAge && isValidEmail && isValidPassword && passwordValue === confirmPasswordValue) {
			// Add user to the array of users
			users.push({
				email: emailValue,
				password: passwordValue
			});
			// Redirect to welcome page
            localStorage.setItem('users', JSON.stringify(users));
			window.location.href = 'welcome.html';
		}
	});
}
// });

// }


  