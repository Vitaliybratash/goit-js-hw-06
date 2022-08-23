const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
ingredients.forEach((el) => {
  const li = document.createElement("li");
  li.innerText = el;
  li.classList.add("item");
  document.querySelector("#ingredients").append(li);
});
