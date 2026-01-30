const form = document.getElementById('registration-form');

// Reusable validation functions (Hint 9)
const showError = (input, msg, errorId) => {
    input.classList.add('invalid');
    input.classList.remove('valid');
    document.getElementById(errorId).textContent = msg;
};

const showSuccess = (input, errorId) => {
    input.classList.remove('invalid');
    input.classList.add('valid');
    document.getElementById(errorId).textContent = "";
};

// Validation logic using RegEx (Hint 3)
const validateEmail = (email) => {
    return String(email).toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};

// Event listener for form submission (Hint 5)
form.addEventListener('submit', (e) => {
    let isValid = true;

    // Validate Name
    const name = document.getElementById('username');
    if (name.value.trim().length < 3) {
        showError(name, "Name must be at least 3 characters.", 'name-error');
        isValid = false;
    } else { showSuccess(name, 'name-error'); }

    // Validate Email
    const email = document.getElementById('email');
    if (!validateEmail(email.value)) {
        showError(email, "Please enter a valid email address.", 'email-error');
        isValid = false;
    } else { showSuccess(email, 'email-error'); }

    // Validate Password
    const pass = document.getElementById('password');
    if (pass.value.length < 8) {
        showError(pass, "Password must be at least 8 characters.", 'pass-error');
        isValid = false;
    } else { showSuccess(pass, 'pass-error'); }

    // Confirm Password check
    const confirm = document.getElementById('confirm-pass');
    if (confirm.value !== pass.value || confirm.value === "") {
        showError(confirm, "Passwords do not match.", 'confirm-error');
        isValid = false;
    } else { showSuccess(confirm, 'confirm-error'); }

    // Prevent default browser action if invalid (Hint 5)
    if (!isValid) {
        e.preventDefault();
    } else {
        alert("Form validated successfully!");
    }
});