function validateForm() {
    // Clear previous errors
    clearErrors();

    // Get form values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Initialize validity flag
    let isValid = true;

    // Validate Full Name
    if (fullName.length < 5) {
        showError('nameError', 'Full name must be at least 5 characters long');
        isValid = false;
    }

    // Validate Email
    if (!email.includes('@')) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }

    // Validate Phone Number
    if (phone === '1234567890' || phone.length !== 10 || isNaN(phone)) {
        showError('phoneError', 'Please enter a valid 10-digit phone number');
        isValid = false;
    }

    // Validate Password
    if (password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase() || password.length < 8) {
        showError('passwordError', 'Password must be at least 8 characters long and not be "password" or your name');
        isValid = false;
    }

    // Validate Confirm Password
    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match');
        isValid = false;
    }

    // Return form validity
    return isValid;
}

// Function to clear previous error messages
function clearErrors() {
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';
}

// Function to show error messages
function showError(elementId, message) {
    document.getElementById(elementId).innerText = message;
}
