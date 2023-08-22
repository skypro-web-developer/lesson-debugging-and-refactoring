function onClick() {
  if (inputsAreEmpty()) {
    label.textContent = "Error: one or both inputs are empty.";
    return;
  }
  updateLabel();
}

function inputsAreEmpty() {
  if (getNumber1() === "" || getNumber2() === "") {
    return true;
  } else {
    return false;
  }
}

function updateLabel() {
  const addend1 = getNumber1();
  const addend2 = getNumber2();
  const sum = addend1 + addend2;
  label.textContent = addend1 + " + " + addend2 + " = " + sum;
}

function getNumber1() {
  return inputs[0].value;
}
function getNumber2() {
  return inputs[1].value;
}

const inputs = document.querySelectorAll("input");
const label = document.querySelector("p");
const button = document.querySelector("button");

button.addEventListener("click", onClick);
