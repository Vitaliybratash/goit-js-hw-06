function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const color = document.querySelector('.color')
const button = document.querySelector('.change-color')

button.addEventListener('click', () => {
  const randomColor = getRandomHexColor()
  document.body.style.background = randomColor
  color.innerHTML = randomColor
})
