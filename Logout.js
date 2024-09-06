function ReturnToSignUp() {
    document.getElementById('logoutText').innerText = 'You have been Logged Out!';
    document.getElementById('logoutText').style.fontSize = '25px';
    document.getElementById('checkIcon').style.display = 'inline';
    document.getElementById('checkIcon').style.fontSize = '50px';
    setTimeout(function () {
        window.location.href = "signup.html";
    }, 2000);

}
function GoToHome() {
    window.location.href = "Home.html";
}