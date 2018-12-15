"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  login.split("");
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = (allLogins, login) => !allLogins.includes(login);

const addLogin = function(allLogins, login) {
  //   _______________
  // Vanya
  //   if (isLoginValid(login)) {
  //     if (isLoginUnique(allLogins, login)) {
  //       console.log("Логин успешно добавлен!");
  //       return logins.push(login);
  //     } else {
  //       return console.log("Такой логин уже используется!");
  //     }
  //   } else {
  //     return console.log("Ошибка! Логин должен быть от 4 до 16 символов");
  //   }
  //   ______________
  //   Lucas
  //   if (!isLoginValid(login)) {
  //     console.log("Ошибка! Логин должен быть от 4 до 16 символов");
  //     return;
  //   } else if (!isLoginUnique(allLogins, login)) {
  //     console.log("Такой логин уже используется!");
  //     return;
  //   }
  //   logins.push(login) && console.log("Логин успешно добавлен!");
  //   __________________
  //   Alex_OD;
  if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    return logins.push(login) && console.log("Логин успешно добавлен!");
  } else if (!isLoginValid(login)) {
    return console.log("Ошибка! Логин должен быть от 4 до 16 символов");
  } else return console.log("Такой логин уже используется!");
};

// // Вызовы функции для проверки
addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, "BaliK");
addLogin(logins, "BaliK");
console.log(logins);
