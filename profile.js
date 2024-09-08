const profileCard = document.getElementById("profile-card");
const unauthorizedMenu = document.getElementById("unauthorized");
const profileMenu = document.getElementById("profile-menu");
const signInModal = document.getElementById("signInModal");

const usernameInput = document.getElementById("username-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");

function logout() {
  profileMenu.innerHTML = unauthorizedMenu.innerHTML;
}

function login() {
  profileMenu.innerHTML = profileCard.innerHTML;

  const usernameDisplay = document.getElementById("username-display");
  const emailDisplay = document.getElementById("email-display");

  usernameDisplay.innerHTML = usernameInput.value;
  emailDisplay.innerHTML = emailInput.value;

  signInModal.close();
}

logout();
