// Retrieve username from localStorage
var username = localStorage.getItem('ThreadSpace-current-user');
var userType = "";

if (username === "cucumber9090") {
  userType = " (Developer)";
}

// Display the username at the top right of the page
document.getElementById('usernameDisplay').textContent = username + userType;

// Dark theme function
document.getElementById('themeButton').addEventListener('click', function() {
  var currentTheme = document.getElementById('pagestyle').getAttribute("href");
  
  if (currentTheme === "light.css") {
    document.getElementById('pagestyle').setAttribute("href", "dark.css");
  } else {
    document.getElementById('pagestyle').setAttribute("href", "light.css");
  }
});

// Change password function
document.getElementById('changePasswordButton').addEventListener('click', function() {
  // Redirect to change password page
  window.location.href = "changepassword.html";
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('logoutButton').addEventListener('click', function() {
        let currentUser = localStorage.getItem('ThreadSpace-current-user');
        let confirmLogout = confirm("Вы точно хотите выйти из учетной записи " + currentUser + "?");
        if (confirmLogout) {
            localStorage.removeItem('ThreadSpace-current-user');
            window.location.href = 'login.html';
        }
    });
});
