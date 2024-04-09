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
        // Calculate day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
        const dayOfWeek = birthDate.getDay();

        // Based on gender map day of the week to Akan name
        let akanName = '';
        if (gender === 'male') {
            switch (dayOfWeek) {
                case 0: akanName = 'Kwasi'; break; // Sunday
                case 1: akanName = 'Kwadwo'; break; // Monday
                case 2: akanName = 'Kwabena'; break; // Tuesday
                case 3: akanName = 'Kwaku'; break; // Wednesday
                case 4: akanName = 'Yaw'; break; // Thursday
                case 5: akanName = 'Kofi'; break; // Friday
                case 6: akanName = 'Kwame'; break; // Saturday
            }
        } else if (gender === 'female') {
            switch (dayOfWeek) {
                case 0: akanName = 'Akosua'; break; // Sunday
                case 1: akanName = 'Adwoa'; break; // Monday
                case 2: akanName = 'Abenaa'; break; // Tuesday
                case 3: akanName = 'Akua'; break; // Wednesday
                case 4: akanName = 'Yaa'; break; // Thursday
                case 5: akanName = 'Afua'; break; // Friday
                case 6: akanName = 'Ama'; break; // Saturday
            }
        }

        // Display the Akan name
        resultContainer.textContent = `Your Akan name is ${akanName}.`;
    });
});        
