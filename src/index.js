document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('akanForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // To prevent form submission

        const birthDateInput = document.getElementById('birthDate');
        const genderSelect = document.getElementById('gender');
        const resultContainer = document.getElementById('result');

        // Get input values
        const birthDate = new Date(birthDateInput.value);
        const gender = genderSelect.value;
        // Validate date
        if (isNaN(birthDate.getTime())) {
            resultContainer.textContent = 'Please enter a valid birth date.';
            return;
        }
    });
});        