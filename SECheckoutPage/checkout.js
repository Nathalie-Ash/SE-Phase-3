const checkoutform = document.querySelector('#checkout_form');

let isValid = true;

window.onload = function () {
    const formContainer = document.querySelector('#form-container');
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const addressInput = document.querySelector('input[name="address"]');
    const cityInput = document.querySelector('input[name="city"]');
    const stateInput = document.querySelector('input[name="state"]');
    const zipInput = document.querySelector('input[name="zip code"]');
    const cardNameInput = document.querySelector('input[name="card name"]');
    const cardNumberInput = document.querySelector('input[name="card number"]');
    const monthInput = document.querySelector('input[name="month"]');
    const yearInput = document.querySelector('input[name="year"]');
    const cvvInput = document.querySelector('input[name="CCV"]');
    const checkoutButton = document.querySelector('#check');

    checkoutButton.addEventListener('click', function (event) {
        //event.preventDefault();
        console.log("hello");

        if (nameInput.value == "") {
            isValid = false;
            nameInput.classList.add("error");
        } else {
            nameInput.classList.remove("error");
        }

        if (emailInput.value == "" || !isValidEmail(emailInput.value)) {
            isValid = false;
            emailInput.classList.add("error");
            const emailError = document.querySelector('#email-error');
            emailError.textContent = 'Please enter a valid email address.';
            formContainer.style.height = 'auto';
        } else {
            emailInput.classList.remove("error");
            const emailError = document.querySelector('#email-error');
            emailError.textContent = '';
        }

        if (addressInput.value == "") {
            isValid = false;
            addressInput.classList.add("error");
        } else {
            addressInput.classList.remove("error");
        }

        if (cityInput.value == "") {
            isValid = false;
            cityInput.classList.add("error");
        } else {
            cityInput.classList.remove("error");
        }

        if (stateInput.value == "") {
            isValid = false;
            stateInput.classList.add("error");
        } else {
            stateInput.classList.remove("error");
        }

        if (zipInput.value == "") {
            isValid = false;
            zipInput.classList.add("error");
        } else {
            zipInput.classList.remove("error");
        }

        if (cardNameInput.value == "") {
            isValid = false;
            cardNameInput.classList.add("error");
        } else {
            cardNameInput.classList.remove("error");
        }

        if (cardNumberInput.value == "" || !isValidCreditCardNumber(cardNumberInput.value)) {
            isValid = false;
            cardNumberInput.classList.add("error");
        } else {
            cardNumberInput.classList.remove("error");
        }

        if (monthInput.value == "") {
            isValid = false;
            monthInput.classList.add("error");
        } else {
            monthInput.classList.remove("error");
        }

        if (yearInput.value.trim == "" || !isValidExpirationDate(monthInput.value, yearInput.value)) {
            isValid = false;
            yearInput.classList.add("error");
        } else {
            yearInput.classList.remove("error");
        }

        if (cvvInput.value == "") {
            isValid = false;
            cvvInput.classList.add("error");
        } else {
            cvvInput.classList.remove("error");
        }

        if (isValid == true) {
            window.location.href = 'welcome.html';
        } else {
            alert("Please fill out all required fields correctly.");
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidCreditCardNumber(cardNumber) {
        const cardNumberRegex = /^[0-9]{16}$/;
        return cardNumberRegex.test(cardNumber);
    }

    function isValidExpirationDate(month, year) {
        const now = new Date();
        const expirationDate = new Date(year, month, 0);

    }

}