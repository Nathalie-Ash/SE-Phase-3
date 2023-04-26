
const loginForm = document.querySelector('#login_form');
users = [
	{ "email": "nathalie.elashkar@lau.edu", "password": "SEproject@2023" },
	{ "email": "student@gmail.com", "password": "123Student@2023" },
	{ "email": "ibrahim.elbitar@lau.edu", "password": "BestProject@23" },

]

for(let i = 0;i<4;i++){
console.log(users[i]);}

var flag = false;
var emailValue, passwordValue;

window.onload = function () {
	const storedEmail = localStorage.getItem('email');
	const storedPassword = localStorage.getItem('password');
console.log(storedEmail);
console.log(storedPassword);


	const email = document.querySelector('input[name="email"]');
	const password = document.querySelector('input[name="password"]');
	const loginButton = document.querySelector('#loginBtn');
	const formContainer = document.querySelector('#form-container');

	const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


	loginButton.addEventListener('click', function () {
		const user ={
			email : storedEmail,
			password: storedPassword,
		};
		users.push(user);
		emailValue = email.value;
		passwordValue = password.value;
		for (var i = 0; i < 3; i++) {
			if (emailValue == users[i].email && passwordValue == users[i].password) {
				flag = true;
			}
		}


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
			const passError = document.querySelector('#pass-Error');
			passError.textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.';
			formContainer.style.height = 'auto';
		} else {
			const passError = document.querySelector('#pass-Error');
			passError.textContent = '';
		}

		if (isValidEmail && isValidPassword && (flag == false)) {
			// Redirect to welcome page
			const docError = document.querySelector('#doc-Error');
			docError.textContent = 'Incorrect Email or Password.';

		} else if (isValidEmail && isValidPassword && (flag == true)) {
			window.location.href = 'welcome.html';
		}
	});
}
