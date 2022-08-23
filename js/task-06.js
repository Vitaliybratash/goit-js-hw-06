const validationInput = document.querySelector("#validation-input");
const dataLength = 6;
validationInput.addEventListener("blur", () => {
  if (validationInput.value.length === dataLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
