"use strict";
(self["webpackChunktodo_app"] = self["webpackChunktodo_app"] || []).push([["projectFactory"],{

/***/ "./src/projectFactory.js":
/*!*******************************!*\
  !*** ./src/projectFactory.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "projectActions": () => (/* binding */ projectActions)
/* harmony export */ });
//a factory function for creating projects
const projectActions = {
    addTodo(e) {
        this.list.push(e);
    },
    deleteTodo(e) {
        if (this.list.indexOf(e) === -1) {console.log("ERROR");
        }
        else {
            this.list.splice(this.list.indexOf(e), 1);
        };
    }
};

function createProject(name) {
    let project = Object.create(projectActions);
    project.list = [];
    project.name = name;    
    return project;
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/projectFactory.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdEZhY3RvcnkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL3Byb2plY3RGYWN0b3J5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vYSBmYWN0b3J5IGZ1bmN0aW9uIGZvciBjcmVhdGluZyBwcm9qZWN0c1xuY29uc3QgcHJvamVjdEFjdGlvbnMgPSB7XG4gICAgYWRkVG9kbyhlKSB7XG4gICAgICAgIHRoaXMubGlzdC5wdXNoKGUpO1xuICAgIH0sXG4gICAgZGVsZXRlVG9kbyhlKSB7XG4gICAgICAgIGlmICh0aGlzLmxpc3QuaW5kZXhPZihlKSA9PT0gLTEpIHtjb25zb2xlLmxvZyhcIkVSUk9SXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5saXN0LnNwbGljZSh0aGlzLmxpc3QuaW5kZXhPZihlKSwgMSk7XG4gICAgICAgIH07XG4gICAgfVxufTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gICAgbGV0IHByb2plY3QgPSBPYmplY3QuY3JlYXRlKHByb2plY3RBY3Rpb25zKTtcbiAgICBwcm9qZWN0Lmxpc3QgPSBbXTtcbiAgICBwcm9qZWN0Lm5hbWUgPSBuYW1lOyAgICBcbiAgICByZXR1cm4gcHJvamVjdDtcbn1cblxuZXhwb3J0IHsgcHJvamVjdEFjdGlvbnMsIGNyZWF0ZVByb2plY3QgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=