"use strict";

let buttons = document.querySelectorAll(".btn--buy");
let xhr = new XMLHttpRequest();
let btnClose = document.querySelectorAll(".close");
let arrayBTN = [];
let ids = localStorage.getItem("ids");

window.onload = () => {
  let parseIds = JSON.parse(localStorage.getItem("ids"));

    for (let i = 0; i < parseIds.length; i++) {
      if (parseIds.includes('100') || parseIds.includes('200') || parseIds.includes('300')){
         console.log("hello")
         buttons[i].textContent = "В корзине.";
      }
    }
};

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
    arrayBTN.push(btn.getAttribute("dataid"));
    localStorage.setItem("ids", JSON.stringify(arrayBTN));

    btn.classList.toggle("loading");
    setTimeout(function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        btn.classList.toggle("loading");
        btn.textContent = "В корзине.";
      }
    }, 1000);
    setAJAX();
  })
);

btnClose.forEach((btnclose) => {
  btnclose.addEventListener("click", (event) => {
    event.preventDefault();

    buttons.forEach((btn) => {
      btn.textContent = "Купить";
       localStorage.clear(); 
       arrayBTN = [];
    });
  });
});
