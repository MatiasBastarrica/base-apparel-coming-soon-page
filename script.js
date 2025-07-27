const form = document.querySelector("form");
const emailInput = document.querySelector("input[type='email']");
const submitBtn = document.querySelector(".submit-btn");
const errorIcon = document.querySelector(".error-icon-container");
const emptyMessage = document.querySelector(".empty-input-message");
const invalidMessage = document.querySelector(".invalid-input-message");

function showErrorIcon() {
  errorIcon.classList.remove("hide");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!invalidMessage.classList.contains("hide")) {
    invalidMessage.classList.add("hide");
  }
  if (emailInput.value === "") {
    showErrorIcon();
    emptyMessage.classList.remove("hide");
  } else {
    form.submit();
  }
});

emailInput.addEventListener("invalid", (e) => {
  e.preventDefault();
  showErrorIcon();
  if (!emptyMessage.classList.contains("hide")) {
    emptyMessage.classList.add("hide");
  }
  invalidMessage.classList.remove("hide");
});
