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
        
       // Validate date and month
        const dayOfMonth = birthDate.getDate();
        const month = birthDate.getMonth() + 1; // Month is zero-based

        if (dayOfMonth <= 0 || dayOfMonth > 31 || month <= 0 || month > 12) {
            alert('Please enter a valid date and month.');
            return;
        }

        // Calculate day of the week
        const CC = parseInt(birthDate.getFullYear().toString().slice(0, 2));
        const YY = parseInt(birthDate.getFullYear().toString().slice(2));
        const MM = month;
        const DD = dayOfMonth;

        const dayOfWeek = ((CC / 4) - (2 * CC - 1) + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD) % 7;


        // Based on gender map day of the week to Akan name
        let akanName = '';
        if (gender === 'male') {
            switch (Math.floor(dayOfWeek)) {
                case 0: akanName = 'Kwasi'; break; // Sunday
                case 1: akanName = 'Kwadwo'; break; // Monday
                case 2: akanName = 'Kwabena'; break; // Tuesday
                case 3: akanName = 'Kwaku'; break; // Wednesday
                case 4: akanName = 'Yaw'; break; // Thursday
                case 5: akanName = 'Kofi'; break; // Friday
                case 6: akanName = 'Kwame'; break; // Saturday
            }
        } else if (gender === 'female') {
            switch (Math.floor(dayOfWeek)) {
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
