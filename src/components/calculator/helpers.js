export const operations = {
    add: "+",
    subtract: "-",
    multiply: "*",
    divide: "/",
  };

export const applyOperation = (firstNum, secondNum, operation) => {
  [firstNum, secondNum] = [firstNum, secondNum].map((num) => parseInt(num));
  switch (operation) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "*":
      return firstNum * secondNum;
    case "/":
      return firstNum / secondNum;
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
};

export const addDigit = (numberString, digit) => {
  if (numberString === "0") {
    if (digit === 0) return numberString;
    return digit.toString();
  } else {
    return numberString + digit.toString();
  }
};
