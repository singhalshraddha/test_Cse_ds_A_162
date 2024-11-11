let users = [];

const fetchGithubUsers = async () => {
    try {
        const response = await fetch("https://api.github.com/users");

        if (response.status === 403) {
            throw new Error("Rate limit exceeded. Please try again later.");
        } else if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        users = await response.json();

        users = users.slice(0, 10);
        displayUsers(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        alert(error.message);
    }
};

const displayUsers = (userList) => {
    const userDetailsDiv = document.querySelector('.user-details');
    userDetailsDiv.innerHTML = ""; 

    userList.forEach(user => {
        const userLink = document.createElement('a');
        userLink.href = user.html_url;
        userLink.textContent = user.login;
        userLink.target = "_blank";
        userLink.style.display = "block";

        userDetailsDiv.appendChild(userLink);
    });
};

const sortUsers = () => {
    const order = document.getElementById('order').value;

    if (order === 'ascending') {
        users.sort((a, b) => a.login.localeCompare(b.login));
    } else if (order === 'descending') {
        users.sort((a, b) => b.login.localeCompare(a.login));
    }

    
    displayUsers(users);
};


const logout = () => {
    window.location.href = "./index.html";
}