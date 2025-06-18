    function isValidEmail(email) {
        return email.endsWith('@det.nsw.edu.au');
    }

    function showRegister() {
        document.getElementById('login').style.display = 'none';
        document.getElementById('register').style.display = 'flex';
        document.getElementById('registerError').style.display = 'none';
    }

    function showLogin() {
        document.getElementById('register').style.display = 'none';
        document.getElementById('login').style.display = 'flex';
        document.getElementById('loginError').style.display = 'none';
    }

    function getUsers() {
        const users = localStorage.getItem('users');
        return users ? JSON.parse(users) : [];
    }

    function saveUsers(users) {
        localStorage.setItem('users', JSON.stringify(users));
    }

    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('regName').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;
        const errorDiv = document.getElementById('registerError');

        errorDiv.style.display = 'none';
        errorDiv.textContent = '';

        if (!isValidEmail(email)) {
            errorDiv.textContent = 'Please use a @det.nsw.edu.au email';
            errorDiv.style.display = 'block';
            return;
        }

        if (password !== confirmPassword) {
            errorDiv.textContent = 'Passwords do not match';
            errorDiv.style.display = 'block';
            return;
        }

        const users = getUsers();

        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            errorDiv.textContent = 'An account with this email already exists';
            errorDiv.style.display = 'block';
            return;
        }

        users.push({ name, email, password });
        saveUsers(users);

        alert('Account created successfully! Please sign in.');
        showLogin();
        document.getElementById('loginEmail').value = email;
    });

    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        const errorDiv = document.getElementById('loginError');

        errorDiv.style.display = 'none';
        errorDiv.textContent = '';

        if (!isValidEmail(email)) {
            errorDiv.textContent = 'Please use a @det.nsw.edu.au email';
            errorDiv.style.display = 'block';
            return;
        }

        const users = getUsers();

        const user = users.find(user => user.email === email && user.password === password);
        if (!user) {
            errorDiv.textContent = 'Invalid email or password';
            errorDiv.style.display = 'block';
            return;
        }

        alert('Login successful!');
        window.location.href = 'Home.html';
    });

    document.getElementById('loginEmail').addEventListener('input', function() {
        document.getElementById('loginError').style.display = 'none';
    });

    document.getElementById('regEmail').addEventListener('input', function() {
        document.getElementById('registerError').style.display = 'none';
    });
