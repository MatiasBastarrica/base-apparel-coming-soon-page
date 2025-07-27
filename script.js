const form = document.querySelector("form");
const emailInput = document.querySelector("input[type='email']");
const submitBtn = document.querySelector(".submit-btn");
const erroIcon = document.querySelector(".error-icon");
const emptyMessage = document.querySelector(".empty-input-message");
const invalidMessage = document.querySelector(".invalid-input-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!invalidMessage.classList.contains("hide")) {
    invalidMessage.classList.add("hide");
  }
  if (emailInput.value === "") {
    emptyMessage.classList.remove("hide");
  } else {
    form.submit();
  }
});

emailInput.addEventListener("invalid", (e) => {
  e.preventDefault();
  if (!emptyMessage.classList.contains("hide")) {
    emptyMessage.classList.add("hide");
  }
  invalidMessage.classList.remove("hide");
});
