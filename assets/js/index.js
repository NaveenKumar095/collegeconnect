if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "login.html";
    }
const loginLogoutItem = document.getElementById('login-logout-item');
    if (localStorage.getItem("isLoggedIn") === "true") {
        loginLogoutItem.innerHTML = `<a class="dropdown-item" href="#" id="logout-link">Logout</a>`;
        document.getElementById('logout-link').onclick = function() {
        localStorage.removeItem("isLoggedIn");
        window.location.href = "login.html";
        };
    } else {
        loginLogoutItem.innerHTML = `<a class="dropdown-item" href="../../login.html">Login</a>`;
    }