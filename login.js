const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const formData = new FormData(loginForm);
  const username = formData.get("username");
  const password = formData.get("password");

  // You need to implement the server-side authentication logic here.
  // For demonstration purposes, let's assume we have hardcoded admin and user credentials.

  if (username === "admin" && password === "admin") {
    window.location.href = "admin_panel.html";
  } else if (username === "user" && password === "user") {
    window.location.href = "user_panel.html";
  } else {
    alert("Invalid credentials. Please try again.");
  }
});
