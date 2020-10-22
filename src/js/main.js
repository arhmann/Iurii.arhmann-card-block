"use strict";
//const axios = require("axios");
let buttons = document.querySelectorAll(".btn--buy");
let xhr = new XMLHttpRequest();
let btnClose = document.querySelectorAll(".close");
let arrayBTN = [];
let btnId = 0;

window.onload = () => {

    buttons.forEach((btn) => {
      if (localStorage.getItem("ID") == '337848071') {
        //btn.textContent = "В корзине.";
        //btn.style.display = "inline";
      }
    });
};

btnClose.forEach((btnclose) => {
  btnclose.addEventListener("click", (event) => {
    event.preventDefault();
    
    buttons.forEach((btn) => {
      btn.textContent = "Купить";
      arrayBTN = [];
    });
  });
});

const setAJAX = () => {
  xhr.open("GET", "https://reqres.in/api/products/3", true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      this.responseText;
    }
  };
};

buttons.forEach((btn) =>
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    localStorage.setItem("ID", "337848071");

    btn.classList.toggle("loading");

    arrayBTN.push(btn.getAttribute('dataid'));
    btnId = btn.getAttribute('dataid');

    setTimeout(function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        btn.classList.toggle("loading");
        btn.textContent = "В корзине.";
      }
    }, 1000);
    setAJAX();
  })
);
