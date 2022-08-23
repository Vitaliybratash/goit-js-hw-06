const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("change", () => {
  const size = fontSizeControl.valueAsNumber;
  text.style.fontSize = size + "px";
});
