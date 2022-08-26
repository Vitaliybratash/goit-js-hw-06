const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("blur", () => {
  const dataLength = +[...validationInput.attributes].find(attribut => attribut.name === 'data-length').value
  if (validationInput.value.length === dataLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
