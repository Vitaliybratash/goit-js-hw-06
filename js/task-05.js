const nameInput = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')

nameInput.addEventListener('keyup', (event) => {
    nameOutput.innerHTML = event.target.value.trim() ? event.target.value : 'Anonymous'
})