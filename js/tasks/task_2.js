// 1-й способ

// const calculateEngravingPrice = function (message, pricePerWord) {
//   let msgArray = Object.keys(message.split(" ")).length;
//   return msgArray * pricePerWord;
// };

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// );

// ===========================

// 2-й способ

// const calculateEngravingPrice = function (message, pricePerWord) {
//   return message.split(" ").length * pricePerWord;
// };

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// );

//====================================

// 3-й способ

const calculateEngravingPrice = function (message, pricePerWord) {
  debugger;
  let total = 0;
  const gravingElements = message.split(" ");

  for (const element of gravingElements) {
    total = total + pricePerWord;
  }
  return total;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);
