document.getElementById('inputForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    const ConfPassword = document.getElementById('confpass').value;
    const namePattern = /^[a-zA-Z0-9]+(?:\s[a-zA-Z0-9]+)*$/;
    const emailPattern = /^\w+@(gmail|hotmail|yahoo)\.(com|net)\.eg$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    let isFormValid = true;
    if (!namePattern.test(name)) {
        document.getElementById('nameError').innerText = 'Name is not valid. Only letters are allowed.';
        isFormValid = false;
    } else {
        document.getElementById('nameError').innerText = '';
    }
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Email is not valid.';
        isFormValid = false;
    } else {
        document.getElementById('emailError').innerText = '';
    }
    if (!passwordPattern.test(password)) {
        document.getElementById('passError').innerText = 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.';
        isFormValid = false;
    } else {
        document.getElementById('passError').innerText = '';
    }
    if (ConfPassword != password) {
        document.getElementById('passConfError').innerText = 'Password do not match.';
        isFormValid = false;
    } else {
        document.getElementById('passConfError').innerText = '';
    }
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = storedUsers.some(user => user.email === email);

    if (userExists && isFormValid) {
        alert("An account with this email already exists.Please try another email or log in.");
    } else if (!userExists && isFormValid) {
        storedUsers.push({ name: name, email: email, password: password });
        localStorage.setItem('users', JSON.stringify(storedUsers));
        alert("Registration successful!");
        window.location.href = "Home.html";
        this.onsubmit();
    }
});

