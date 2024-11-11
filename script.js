function submitHandler(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "shraddha" && password === "shraddha") {
        window.location.href = "./dashboard.html";
    } else {
        alert("Invalid username or password");
    }
}

document.querySelector('.login-form').onsubmit = submitHandler;