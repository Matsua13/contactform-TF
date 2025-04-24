document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Validation du nom
        if (nameInput.value.trim() === '') {
            isValid = false;
            displayError(nameInput, 'Please enter your name.');
        } else {
            clearError(nameInput);
        }

        // Validation de l'email
        if (emailInput.value.trim() === '') {
            isValid = false;
            displayError(emailInput, 'Please enter your email address.');
        } else if (!isValidEmail(emailInput.value.trim())) {
            isValid = false;
            displayError(emailInput, 'Please enter a valid email address.');
        } else {
            clearError(emailInput);
        }

        // Validation du message
        if (messageInput.value.trim() === '') {
            isValid = false;
            displayError(messageInput, 'Please enter your message.');
        } else {
            clearError(messageInput);
        }

        if (!isValid) {
            event.preventDefault(); // Empêche la soumission du formulaire si des erreurs existent
        }
    });

    function isValidEmail(email) {
        // Expression régulière simple pour la validation d'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function displayError(inputElement, errorMessage) {
        clearError(inputElement); // Supprime toute erreur précédente

        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = errorMessage;
        inputElement.parentNode.insertBefore(errorDiv, inputElement.nextSibling);
        inputElement.classList.add('is-invalid'); // Ajoute une classe pour le style d'erreur
    }

    function clearError(inputElement) {
        const errorDiv = inputElement.parentNode.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
        inputElement.classList.remove('is-invalid'); // Supprime la classe d'erreur
    }
});