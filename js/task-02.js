const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
let total = "";
ingredients.map((el) => {
  const li = document.createElement("li");
  li.innerText = el;
  li.classList.add("item");
  total += li.outerHTML
})
document.querySelector("#ingredients").insertAdjacentHTML("beforeend", total);
