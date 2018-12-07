"use strict";

const numbers = [];
let total = 0;
let userInput;

while (true) {
  userInput = prompt("введите число");
  if (userInput === null) break;
  userInput = Number(userInput);

  if (!userInput) {
    alert("Ощибка ввода");
  } else {
    numbers.push(userInput);
    console.log(userInput);
  }
}

console.log("numbers", numbers);

for (let i = 0; i < numbers.length; i += 1) {
  const currentNumber = numbers[i];

  total = currentNumber + total;
}

console.log("total: ", total);

if (numbers.length >= 1) {
  alert(
    `Сумма введенных чисел - ${total}, Если поделим её на количество введённых чисел (${
      numbers.length
    }), то получим "Среднестатистическое гипермагическое число", и это - ${total /
      numbers.length}`
  );
} else {
  const sadFace = ":(";
  alert(`Скучный ты человек, не приходи сюда больше ${sadFace}`);
}
