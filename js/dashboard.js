let chatUsers = document.querySelector(".chat-users");
let chatPopup = document.querySelector(".chat-popup");
let chatPopupBack = document.querySelector(".chat-popup-back");
let friendDrawer = document.querySelector(".friend-drawer");

chatPopupBack.addEventListener("click", function (evt) {
  chatUsers.classList.remove("hidden");
  chatPopup.classList.add("hidden");
});

friendDrawer.addEventListener("click", function (evt) {
  chatUsers.classList.add("hidden");
  chatPopup.classList.remove("hidden");
});
