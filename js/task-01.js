const categories = [...document.querySelector("#categories").children];
console.log(`Number of categories: ${categories.length}`);
categories.forEach((item) => {
 const category = item.querySelector('h2').innerText;
  const elementsNumber = item.querySelector('ul').children.length;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${elementsNumber}`);
});