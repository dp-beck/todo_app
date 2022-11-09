"use strict";
(self["webpackChunktodo_app"] = self["webpackChunktodo_app"] || []).push([["populateStorage"],{

/***/ "./src/populateStorage.js":
/*!********************************!*\
  !*** ./src/populateStorage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ populateStorage)
/* harmony export */ });
function populateStorage(data) {
    localStorage.clear();
    data.forEach(element => {
        localStorage.setItem(element.name, JSON.stringify(element))
    }); 
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/populateStorage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdWxhdGVTdG9yYWdlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy9wb3B1bGF0ZVN0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKGRhdGEpIHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBkYXRhLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGVsZW1lbnQubmFtZSwgSlNPTi5zdHJpbmdpZnkoZWxlbWVudCkpXG4gICAgfSk7IFxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==