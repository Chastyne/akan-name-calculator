document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('akanForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // To prevent form submission

        const birthDateInput = document.getElementById('birthDate');
        const genderSelect = document.getElementById('gender');
        const resultContainer = document.getElementById('result');

        // Get input values
        const birthDateStr = birthDateInput.value;
        const gender = genderSelect.value;

        // Validate date format (DD/MM/YYYY)
        const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
        if (!dateRegex.test(birthDateStr)) {
            alert('Please enter a valid date in the format DD/MM/YYYY.');
            return;
        }

        const [dayOfMonth, month, year] = birthDateStr.split('/').map(Number);

        // Validate day and month ranges
        if (dayOfMonth <= 0 || dayOfMonth > 31 || month <= 0 || month > 12) {
            alert('Please enter a valid day and month.');
            return;
        }

        // Calculate day of the week
        const CC = Math.floor(year / 100);
        const YY = year % 100;
        const MM = month;
        const DD = dayOfMonth;

        const dayOfWeek = ((CC / 4) - (2 * CC - 1) + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD) % 7;

        // Arrays to store Akan names for male and female
        const akanNamesMale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
        const akanNamesFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

        // Based on gender map day of the week to Akan name
        let akanName = '';
        if (gender === 'male') {
            akanName = akanNamesMale[Math.floor(dayOfWeek)];
        } else if (gender === 'female') {
            akanName = akanNamesFemale[Math.floor(dayOfWeek)];
        }

        // Display the Akan name
        resultContainer.textContent = `Your Akan name is ${akanName}.`;
    });
});
