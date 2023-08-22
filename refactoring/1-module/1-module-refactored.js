function getUserMonthInput() {
  const userInput = prompt("Введите число от 1-12");

  if (!userInput || userInput === "0") {
    console.error("Введено невалидное число");
    return null;
  }

  const isValidInput = Number(userInput);

  if (!isValidInput) {
    console.error('Введено невалидное число');
    return null;
  }

  return userInput;
}

const MONTHS = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

function getMonthByNumber(monthNumber) {
  if (!monthNumber) return;

  const monthIndex = monthNumber - 1;
  const month = MONTHS[monthIndex];

  if(!month) {
    console.error(`Месяц по номеру ${monthNumber} не найден`);
    return;
  }

  return month;
}
