document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form.retro');
    const nameInput = document.getElementById('name-retro');
    const emailInput = document.getElementById('email-retro');
    const messageInput = document.getElementById('message-retro');
    const inputs = [nameInput, emailInput, messageInput];

    form.addEventListener('submit', function(event) {
        let isValid = true;
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                isValid = false;
                displayError(input, `Player 1, enter your ${input.previousElementSibling.textContent.slice(0, -1).toLowerCase()}!`);
            } else {
                clearError(input);
            }
        });

        if (emailInput.value.trim() !== '' && !isValidEmail(emailInput.value.trim())) {
            isValid = false;
            displayError(emailInput, 'Invalid battle address!');
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    inputs.forEach(input => {
        input.addEventListener('input', () => clearError(input));
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function displayError(inputElement, errorMessage) {
        clearError(inputElement);

        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = errorMessage;
        inputElement.parentNode.insertBefore(errorDiv, inputElement.nextSibling);
        inputElement.classList.add('is-invalid');
        const errorIcon = inputElement.parentNode.querySelector('.validation-icon.error');
        if (errorIcon) {
            errorIcon.style.opacity = 1;
        }
        const successIcon = inputElement.parentNode.querySelector('.validation-icon.success');
        if (successIcon) {
            successIcon.style.opacity = 0;
        }
    }

    function clearError(inputElement) {
        const errorDiv = inputElement.parentNode.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
        inputElement.classList.remove('is-invalid');
        const errorIcon = inputElement.parentNode.querySelector('.validation-icon.error');
        if (errorIcon) {
            errorIcon.style.opacity = 0;
        }
        const successIcon = inputElement.parentNode.querySelector('.validation-icon.success');
        if (successIcon) {
            successIcon.style.opacity = 0;
        }
    }
});