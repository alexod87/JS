"use strict";
const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attempts = 3;
do {
  let userInput = prompt("Введите пароль");
  if (passwords.includes(userInput)) {
    alert("Добро пожаловать!");
    break;
  }
  if (userInput === null) break;
  attempts -= 1;
  if (attempts > 0) {
    alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
  } else {
    alert("У вас закончились попытки, аккаунт заблокирован!");
  }
} while (attempts !== 0);
