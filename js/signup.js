//ONCLICK OF SEND OTP AND NEXT BUTTON
let sendOtpNext = document.querySelector("#sendOtpNext");
sendOtpNext.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("step-2")) {
    let signupRow = document.querySelector("#signupRow");
    signupRow.classList.add("hidden");

    let signupOnSuccess = document.querySelector("#signupOnSuccess");
    signupOnSuccess.classList.remove("hidden");

    setTimeout(() => {
      window.location.href = "/profile-setup.html";
    }, 5000);
  }
  //SHOW CHANGE BUTTON
  let changeBtn = document.querySelector("#changeBtn");
  let otpPasswordDiv = document.querySelector("#otpPasswordDiv");
  let errorDiv = document.querySelector("#errorDiv");

  changeBtn.classList.remove("hidden");
  otpPasswordDiv.classList.remove("hidden");
  errorDiv.innerHTML = "";

  evt.target.classList.add("step-2");

  showLoading(evt);

  //CREATE SPINNER
  setTimeout(() => {
    hideLoading(evt);
  }, 500);
});

//ONCLICK OF CHANGE EMAIL BUTTON
let changeBtn = document.querySelector("#changeBtn");
changeBtn.addEventListener("click", function (evt) {
  // history.back();

  let changeBtn = document.querySelector("#changeBtn");
  let otpPasswordDiv = document.querySelector("#otpPasswordDiv");
  let errorDiv = document.querySelector("#errorDiv");
  let email = document.querySelector("#email");
  email.focus();
  email.select();

  changeBtn.classList.add("hidden");
  otpPasswordDiv.classList.add("hidden");
  errorDiv.innerHTML = "";
  sendOtpNext.classList.remove("step-2");
  sendOtpNext.classList.add("step-1");
});

function showLoading(evt) {
  let span = document.createElement("span");
  span.className = "spinner-grow spinner-grow-sm";
  span.role = "status";
  span.areaHidden = true;
  //INSERT SPINNER AND DISABLED BUTTON TO AVOID RECLICK
  evt.target.insertBefore(span, evt.target.firstChild);
  evt.target.setAttribute("disabled", true);
}

function hideLoading(evt) {
  evt.target.firstElementChild.remove();
  evt.target.removeAttribute("disabled");
}
