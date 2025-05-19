    // Utility function to validate DET NSW email format
    function isValidEmail(email) {
        return email.endsWith('@det.nsw.edu.au');
    }

    // Function to display the registration form
    function showRegister() {
        document.getElementById('login').style.display = 'none';
        document.getElementById('register').style.display = 'flex';
        document.getElementById('registerError').style.display = 'none';
    }

    // Function to display the login form
    function showLogin() {
        document.getElementById('register').style.display = 'none';
        document.getElementById('login').style.display = 'flex';
        document.getElementById('loginError').style.display = 'none';
    }

    // Function to retrieve users from localStorage
    function getUsers() {
        const users = localStorage.getItem('users');
        return users ? JSON.parse(users) : [];
    }

    // Function to save users to localStorage
    function saveUsers(users) {
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Handle registration form submission
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('regName').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;
        const errorDiv = document.getElementById('registerError');

        // Reset error message
        errorDiv.style.display = 'none';
        errorDiv.textContent = '';

        // Validate email format
        if (!isValidEmail(email)) {
            errorDiv.textContent = 'Please use a @det.nsw.edu.au email';
            errorDiv.style.display = 'block';
            return;
        }

        // Validate password match
        if (password !== confirmPassword) {
            errorDiv.textContent = 'Passwords do not match';
            errorDiv.style.display = 'block';
            return;
        }

        // Retrieve existing users
        const users = getUsers();

        // Check if email already exists
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            errorDiv.textContent = 'An account with this email already exists';
            errorDiv.style.display = 'block';
            return;
        }

        // Add new user
        users.push({ name, email, password });
        saveUsers(users);

        alert('Account created successfully! Please sign in.');
        showLogin();
        document.getElementById('loginEmail').value = email;
    });

    // Handle login form submission
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        const errorDiv = document.getElementById('loginError');

        // Reset error message
        errorDiv.style.display = 'none';
        errorDiv.textContent = '';

        // Validate email format
        if (!isValidEmail(email)) {
            errorDiv.textContent = 'Please use a @det.nsw.edu.au email';
            errorDiv.style.display = 'block';
            return;
        }

        // Retrieve existing users
        const users = getUsers();

        // Find user with matching credentials
        const user = users.find(user => user.email === email && user.password === password);
        if (!user) {
            errorDiv.textContent = 'Invalid email or password';
            errorDiv.style.display = 'block';
            return;
        }

        // Successful login
        alert('Login successful!');
        window.location.href = 'Home.html';
    });

    // Clear error messages on input
    document.getElementById('loginEmail').addEventListener('input', function() {
        document.getElementById('loginError').style.display = 'none';
    });

    document.getElementById('regEmail').addEventListener('input', function() {
        document.getElementById('registerError').style.display = 'none';
    });
