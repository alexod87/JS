"use strict";

const sharm = 15;
const hurgada = 25;
const taba = 6;

let ask = prompt("Сколько Вас тут понаехало???", "");
if (!ask) {
  alert("Куда пошел?? А-ну вернись!!!");
} else {
  if (!Number.isNaN(Number(ask))) {
    if (ask <= sharm && ask <= hurgada && ask <= taba) {
      if (confirm(`Есть доступные места в sharm, hurgada, taba`)) {
        alert("Погнали");
      } else {
        alert(`Не погнали ='(`);
      }
    }
    if (ask <= sharm && ask <= hurgada && ask > taba) {
      if (confirm(`Есть доступные места в sharm, hurgada`)) {
        alert("Поехали");
      } else {
        alert("Не поехали =`(");
      }
    }
    if (ask > sharm && ask <= hurgada && ask > taba) {
      if (confirm(`Есть доступные места в hurgada`)) {
        alert("Полетели");
      } else {
        alert("Не полетели =(");
      }
    }
    if (ask > sharm && ask > hurgada && ask > taba) {
      alert(`Таким табуном вы в самолет не влезете!`);
    }
  } else {
    alert("Цифрами напиши, я машина, я буквами не понимаю!");
  }
}
