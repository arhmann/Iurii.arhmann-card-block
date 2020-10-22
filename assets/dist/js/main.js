/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval(" //const axios = require(\"axios\");\n\nvar buttons = document.querySelectorAll(\".btn--buy\");\nvar xhr = new XMLHttpRequest();\nvar btnClose = document.querySelectorAll(\".close\");\nvar arrayBTN = [];\nvar btnId = 0;\n\nwindow.onload = function () {\n  buttons.forEach(function (btn) {\n    if (localStorage.getItem(\"ID\") == '337848071') {//btn.textContent = \"В корзине.\";\n      //btn.style.display = \"inline\";\n    }\n  });\n};\n\nbtnClose.forEach(function (btnclose) {\n  btnclose.addEventListener(\"click\", function (event) {\n    event.preventDefault();\n    buttons.forEach(function (btn) {\n      btn.textContent = \"Купить\";\n      arrayBTN = [];\n    });\n  });\n});\n\nvar setAJAX = function setAJAX() {\n  xhr.open(\"GET\", \"https://reqres.in/api/products/3\", true);\n  xhr.send();\n\n  xhr.onreadystatechange = function () {\n    if (this.readyState === 4 && this.status === 200) {\n      this.responseText;\n    }\n  };\n};\n\nbuttons.forEach(function (btn) {\n  return btn.addEventListener(\"click\", function (event) {\n    event.preventDefault();\n    localStorage.setItem(\"ID\", \"337848071\");\n    btn.classList.toggle(\"loading\");\n    arrayBTN.push(btn.getAttribute('dataid'));\n    btnId = btn.getAttribute('dataid');\n    setTimeout(function () {\n      if (xhr.readyState === 4 && xhr.status === 200) {\n        btn.classList.toggle(\"loading\");\n        btn.textContent = \"В корзине.\";\n      }\n    }, 1000);\n    setAJAX();\n  });\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });