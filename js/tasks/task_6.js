let input;
const numbers = [];
let total;

do {
  input = prompt("Пожалуйста, введите число.");
  if (input === null) {
    if (numbers.length > 0) {
      alert(`Общая сумма чисел равна ${total}`);
    }
    break;
  }
  input = parseInt(input);
  if (isNaN(input)) {
    continue;
  } else {
    numbers.push(input);
  }
  total = 0;
  for (const [i, v] of numbers.entries()) {
    total = total + v;
  }
} while (input !== null);
