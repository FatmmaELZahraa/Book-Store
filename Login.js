document.getElementById('inputForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    var adminEmail = "Admin@gmail.com";
    var adminPassword = "Admin@2024";

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = storedUsers.some(user => user.email === email && user.password === password);

    if (email == adminEmail) {
        alert("Login successful! Welcome back, Admin!");
        window.location.href = "Admin.html";
    }
    else {
        if (userExists) {
            alert("Login successful!");
            window.location.href = "Home.html";
        } else if (!userExists) {
            alert("Incorrect email or password. Please try again.");
        }
    }
});

