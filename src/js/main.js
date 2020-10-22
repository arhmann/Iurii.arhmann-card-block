"use strict";
//const axios = require("axios");
let buttons = document.querySelectorAll(".btn--buy");
//const servResponse = document.querySelector(".response");
let xhr = new XMLHttpRequest();

const getAJAX = () => {
  xhr.open("GET", "https://reqres.in/api/products/3", true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      sendXHR(this.responseText);
    }
  };
};


buttons.forEach(el => 
    el.addEventListener("click", (event) => {
        event.preventDefault();
        el.classList.toggle('loading');

         setTimeout(function(){
          if (xhr.readyState === 4 && xhr.status === 200) {
            el.classList.toggle('loading');
            el.textContent = "В корзине."
            
          }
         },1800);
        
        getAJAX();
      })
    );
 
function sendXHR(data) {
  //just for test!
  console.log(data);
}

