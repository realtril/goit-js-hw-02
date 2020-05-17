// Напиши фукцнию findLongestWord(string),
// которая принимает параметром произвольную
// строку(в строке будут только слова и пробелы)
// и возвращает самое длинное слово в этой строке.

const findLongestWord = function (string) {
  const wordsArray = string.split(" ");
  let maxWord = wordsArray[0];

  for (let word of wordsArray) {
    if (maxWord.length < word.length) {
      maxWord = word;
    }
  }
  return maxWord;
};

console.log(findLongestWord("Как и блок инициализации"));
