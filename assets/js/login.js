document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Temporary credentials (for demo only)
  if (username === "naveenkumar" && password === "123456") {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "index.html"; // Redirect to your homepage
  }else if (username === "sapoorvik" && password === "123456") {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "index.html"; // Redirect to your homepage
  }
  else if (username === "rishabh" && password === "111111") {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "index.html"; // Redirect to your homepage
  }
  else if (username === "vinayrb" && password === "123456") {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "index.html"; // Redirect to your homepage
  }
  else {
    document.getElementById("error").textContent = "Invalid credentials";
  }
});
