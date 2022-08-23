const decrement = document.querySelector('[data-action="decrement"]')
const increment = document.querySelector('[data-action="increment"]')
const value = document.querySelector('#value')

let counterValue = 0 

decrement.addEventListener('click', () => value.innerText = --counterValue)
increment.addEventListener('click', () => value.innerText = ++counterValue)