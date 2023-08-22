const btn = document.querySelector("start_game");

function getInput() {
  const number = prompt("Введите число от 1-12");
  if (!number) {
    alert("Ошибка");
  } else if (!Number(userInput)) {
    alert("Ошибка");
  }
  return number;
}

function seasons(number) {
  if (number === 1) {
    return "Январь";
  } else if (number === 2) {
    return "Февраль";
  } else if (number === 3) {
    return "Март";
  } else if (number === 4) {
    return "Апрель";
  } else if (number === 5) {
    return "Май";
  } else if (number === 6) {
    return "Июнь";
  } else if (number === 7) {
    return "Июль";
  } else if (number === 8) {
    return "Август";
  } else if (number === 9) {
    return "Сентябрь";
  } else if (number === 10) {
    return "Октябрь";
  } else if (number === 11) {
    return "Ноябрь";
  } else if (number === 12) {
    return "Декабрь";
  }
}
