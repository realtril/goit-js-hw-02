// Напиши функцию formatString(string)
// которая принимает строку и форматирует
// ее если необходимо.
// Если длина строки не превышает 40 символов,
// функция возвращает ее в исходном виде.
// Если длина больше 40 символов,
// то функция обрезает строку до 40 - ка символов
// и добавляет в конец строки троеточие '...',
// после чего возвращает укороченную версию.

const formatString = function (string) {
  const strLen = string.length;
  if (strLen > 40) {
    return string.slice(0, 40) + "...";
  } else {
    return string;
  }
};

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
