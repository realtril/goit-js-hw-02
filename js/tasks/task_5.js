const checkForSpam = function (message) {
  let messageLow = message.toLowerCase();
  switch (messageLow.includes("spam") || messageLow.includes("sale")) {
    case true:
      return true;
    case false:
      return false;
  }
};

const message = "[SPAM] How to earn fast money?!";
console.log(checkForSpam(message));
