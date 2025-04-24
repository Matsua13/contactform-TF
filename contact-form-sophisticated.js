document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form.sophisticated');
    const nameInput = document.getElementById('name-sophisticated');
    const emailInput = document.getElementById('email-sophisticated');
    const subjectInput = document.getElementById('subject-sophisticated');
    const phoneInput = document.getElementById('phone-sophisticated');
    const messageInput = document.getElementById('message-sophisticated');
    const inputs = [nameInput, emailInput, subjectInput, messageInput]; // Champs obligatoires

    form.addEventListener('submit', function(event) {
        let isValid = true;
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                isValid = false;
                displayError(input, `Please enter your ${input.previousElementSibling.textContent.slice(0, -1).toLowerCase()}.`);
            } else {
                clearError(input);
            }
        });

        if (emailInput.value.trim() !== '' && !isValidEmail(emailInput.value.trim())) {
            isValid = false;
            displayError(emailInput, 'Please enter a valid email address.');
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    inputs.forEach(input => {
        input.addEventListener('input', () => clearError(input)); // Efface l'erreur à la saisie
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