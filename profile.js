const profileCard = document.getElementById("profile-card");
const unauthorizedMenu = document.getElementById("unauthorized");
const profileMenu = document.getElementById("profile-menu");
const signInModal = document.getElementById("signInModal");

function logout() {
  profileMenu.innerHTML = unauthorizedMenu.innerHTML;
}

function login() {
  profileMenu.innerHTML = profileCard.innerHTML;
  signInModal.close();
}

logout();
