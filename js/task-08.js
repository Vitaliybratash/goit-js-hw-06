const form = document.querySelector(".login-form");
const inputs = [...form.elements];
const button = inputs.pop();

const submitHandler = (event) => {
  event.preventDefault();
  const isValid = inputs.filter(input => input.value !== '').length === inputs.length
  if(isValid) {
    const user = {} 
    user.email = inputs[0].value
    user.password = inputs[1].value
    console.log(user)
  } else {
    alert( 'всі поля повинні бути заповнені.')
  }

};

form.addEventListener("submit" , submitHandler);
