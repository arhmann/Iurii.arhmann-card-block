"use strict";
//const axios = require("axios");
let buttons = document.querySelectorAll(".btn--buy");
let xhr = new XMLHttpRequest();
let arrayBTN = [];
/*
window.onload = () => {
    buttons.forEach((btn) => {
      if (localStorage.getItem() == localStorage.getItem("userID")) {
        btn.textContent = "В корзине.";
        btn.style.display = "inline";
        console.log(localValue)
          JSON.stringify(arrayBTN)
      }
    });
};
*/

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
    localStorage.setItem("userID", "337848071");

    btn.classList.toggle("loading");
    
    arrayBTN.push(btn.dataset.dataid);
    console.log(arrayBTN);

    setTimeout(function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        btn.classList.toggle("loading");
        btn.textContent = "В корзине.";
        
      }
    }, 1000);
    setAJAX();
    
    
  })
);


