const coachButtons = document.querySelectorAll(".btnCoach");
const coachSection = document.getElementById('top-rated');
const togglePassword = document.getElementById('toggle-password');
const passwordInput = document.getElementById('password-input');
// Home page Coach buttons
coachButtons.forEach(btn => {
  btn.addEventListener('click', ()=> {
  coachSection.scrollIntoView({ behavior: "smooth" });
});
});
//eye password
togglePassword.addEventListener('click', ()=> {
  if (passwordInput.getAttribute("type") === "password") {
    passwordInput.setAttribute("type", "text");
  } else {
    passwordInput.setAttribute("type", "password");
  }
});

  var lock = new Auth0Lock('9DglPubtCO6ye0Rttpjyy5pFN3V4d53Y', 'dev-0jx3x4zkcixcnlbl.us.auth0.com', {
    auth: {
      params: { scope: 'openid profile email' } // Specify required scopes
    }
  });

  document.getElementById('loginButton').addEventListener('click', function() {
    lock.show(); // Open the Auth0 Lock widget
  });

  // Listen for the authenticated event
  lock.on('authenticated', function(authResult) {
    // Use authResult to access user data
    console.log(authResult.accessToken);
    if(authResult.accessToken){
      handleAuthenticationSuccess();
    }
  });

  // Assume this code is inside your authentication success callback
function handleAuthenticationSuccess() {
  // Redirect the user to the desired page after successful authentication
  window.location.href = 'https://https-github-com-nourmansour911.github.io/Frontend/'; // Replace '/dashboard' with your desired URL
}