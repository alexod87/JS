"use strict";

const adminLogin = "admin";
const adminPassword = "m4ng0h4ckz";

let login = prompt("Login", "");
let pass = "";

if (!login) {
  alert("Отменено пользователем!");
} else if (login === adminLogin) {
  pass = prompt("password", "");
  if (!pass) {
    alert("Отменено пользователем!");
  } else {
    if (pass === adminPassword) {
      alert("Добро пожаловать!");
    } else {
      alert("Доступ запрещен, неверный пароль!");
    }
  }
} else {
  alert("Доступ запрещен, неверный логин!");
}
