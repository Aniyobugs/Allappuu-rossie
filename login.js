document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex

    // Validate email format
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Check if fields are empty
    if (!email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Check password length
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // If validation passes, proceed with form submission (this is where you'd send the data)
    console.log('Form submitted:', { email, password });

});