"use strict";
(self["webpackChunktodo_app"] = self["webpackChunktodo_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    display: grid;\n    margin: 0;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr 0.5fr minmax(min-content, 5.5fr) 0.5fr;\n    font-family: system-ui;\n}\n\nheader {\n    grid-column: span 2;\n    text-align: center;\n    background-color: #4287f5;\n    box-shadow: 0px 5px 5px grey;\n\n}\n\nh1 {\n    font-weight: bolder;\n    color: cornsilk;\n}\n\nh2 {\n    text-align: center;\n    margin: 10px 0;\n}\n\nh3 {\n    text-align: center;\n    font-size: inherit;\n}\n\nlabel {\n    font-size: small;\n}\n\n#projectBulletList {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-items: center;\n}\n\n#projectBulletList > li {\n    box-shadow: 2px 2px 5px grey;\n    border-radius: 10px;\n    padding: 0 10px;\n    background-color: darkorange;\n    color: black;\n    font-weight: bolder;\n    display: flex;\n}\n\n#projectBulletList > li > button {\n    border-radius: 50%;\n    background-color: red;\n    color: white;\n    border: 1px solid black;\n    font-weight: bolder;\n    margin-left: 15px;\n}\n\n#projectName {\n    width: 150px;\n}\n\n#projectButton {\n    border-radius: 50%;\n    background: green;\n    color: antiquewhite;\n    font-weight: 1000;\n    border: solid black 1px;\n}\n\nfooter {\n    grid-column: span 2;\n}\n\n#project-window {\n    grid-row: 2 / 4;\n    border-right: solid black 2px;\n}\n\n#current-project-window {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#current-project-window > div {\n    box-shadow: 5px 5px 5px grey;\n    border: solid 1px grey;\n    background: #fcf479;\n    border-radius: 5px;\n    display: grid;\n    grid-template-rows: 1fr 2fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n}\n\n#current-project-window > div > h3 {\n    grid-row: 1;\n    grid-column: 1 / span 3;\n}\n\n#current-project-window > div > p:first-of-type {\n    grid-row: 2;\n    grid-column: 1 / 2;\n}\n\n#current-project-window > div > p:nth-of-type(2) {\n    grid-row: 2;\n    grid-column: 3;\n}\n\n#current-project-window > div > button:first-of-type {\n    grid-row: 3;\n    grid-column: 1;\n    justify-self: center;\n    width: fit-content;\n    border-radius: 10px;\n    height: fit-content;\n    align-self: center;\n    background-color: darkgreen;\n    color: antiquewhite;\n    font-weight: bolder;\n    border: 1px solid black;\n}\n\n#current-project-window > div > button:nth-of-type(2) {\n    grid-row: 3;\n    grid-column: 3;\n    border-radius: 50%;\n    background-color: red;\n    color: white;\n    border: 1px solid black;\n    font-weight: bolder;\n    justify-self: center;\n    width: fit-content;\n    height: fit-content;\n    align-self: center;\n}\n\n#new-to-do {\n    border-radius: 50%;\n    box-shadow: 2px 2px 2px grey;\n    background-color: lightsalmon;\n    border: none;\n    width: 50px;\n    height: 50px;\n    position: fixed;\n    bottom: 5px;\n    right: 5px;\n}\n\n#todo-form {\n    border: solid black 1px;\n    position: absolute;\n    top: 45%;\n    right: 7%;\n    width: 500px;\n    height: 300px;\n    background-color: white;\n    flex-direction: column;\n}\n\n#todo-form > div {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.priority {\n    color: red;\n}\n\n.not-priority {\n    color: black;\n}\n\n.completed {\n    color: grey;\n    font-style: italic;\n    text-decoration: line-through;\n}\n\nfooter {\n    border-top: solid black 1px;\n    background-color: #4287f5;\n}\n\n.hidden {\n    display: none;\n}\n\n.visible {\n    display: flex;\n}\n\nfooter > h3 {\n    text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,SAAS;IACT,8BAA8B;IAC9B,8DAA8D;IAC9D,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,yBAAyB;IACzB,4BAA4B;;AAEhC;;AAEA;IACI,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,SAAS;IACT,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,4BAA4B;IAC5B,mBAAmB;IACnB,eAAe;IACf,4BAA4B;IAC5B,YAAY;IACZ,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,4BAA4B;IAC5B,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,+BAA+B;IAC/B,+BAA+B;AACnC;;AAEA;IACI,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,oBAAoB;IACpB,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,2BAA2B;IAC3B,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,qBAAqB;IACrB,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,4BAA4B;IAC5B,6BAA6B;IAC7B,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,eAAe;IACf,WAAW;IACX,UAAU;AACd;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA;IACI,2BAA2B;IAC3B,yBAAyB;AAC7B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["body {\n    display: grid;\n    margin: 0;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr 0.5fr minmax(min-content, 5.5fr) 0.5fr;\n    font-family: system-ui;\n}\n\nheader {\n    grid-column: span 2;\n    text-align: center;\n    background-color: #4287f5;\n    box-shadow: 0px 5px 5px grey;\n\n}\n\nh1 {\n    font-weight: bolder;\n    color: cornsilk;\n}\n\nh2 {\n    text-align: center;\n    margin: 10px 0;\n}\n\nh3 {\n    text-align: center;\n    font-size: inherit;\n}\n\nlabel {\n    font-size: small;\n}\n\n#projectBulletList {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-items: center;\n}\n\n#projectBulletList > li {\n    box-shadow: 2px 2px 5px grey;\n    border-radius: 10px;\n    padding: 0 10px;\n    background-color: darkorange;\n    color: black;\n    font-weight: bolder;\n    display: flex;\n}\n\n#projectBulletList > li > button {\n    border-radius: 50%;\n    background-color: red;\n    color: white;\n    border: 1px solid black;\n    font-weight: bolder;\n    margin-left: 15px;\n}\n\n#projectName {\n    width: 150px;\n}\n\n#projectButton {\n    border-radius: 50%;\n    background: green;\n    color: antiquewhite;\n    font-weight: 1000;\n    border: solid black 1px;\n}\n\nfooter {\n    grid-column: span 2;\n}\n\n#project-window {\n    grid-row: 2 / 4;\n    border-right: solid black 2px;\n}\n\n#current-project-window {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#current-project-window > div {\n    box-shadow: 5px 5px 5px grey;\n    border: solid 1px grey;\n    background: #fcf479;\n    border-radius: 5px;\n    display: grid;\n    grid-template-rows: 1fr 2fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n}\n\n#current-project-window > div > h3 {\n    grid-row: 1;\n    grid-column: 1 / span 3;\n}\n\n#current-project-window > div > p:first-of-type {\n    grid-row: 2;\n    grid-column: 1 / 2;\n}\n\n#current-project-window > div > p:nth-of-type(2) {\n    grid-row: 2;\n    grid-column: 3;\n}\n\n#current-project-window > div > button:first-of-type {\n    grid-row: 3;\n    grid-column: 1;\n    justify-self: center;\n    width: fit-content;\n    border-radius: 10px;\n    height: fit-content;\n    align-self: center;\n    background-color: darkgreen;\n    color: antiquewhite;\n    font-weight: bolder;\n    border: 1px solid black;\n}\n\n#current-project-window > div > button:nth-of-type(2) {\n    grid-row: 3;\n    grid-column: 3;\n    border-radius: 50%;\n    background-color: red;\n    color: white;\n    border: 1px solid black;\n    font-weight: bolder;\n    justify-self: center;\n    width: fit-content;\n    height: fit-content;\n    align-self: center;\n}\n\n#new-to-do {\n    border-radius: 50%;\n    box-shadow: 2px 2px 2px grey;\n    background-color: lightsalmon;\n    border: none;\n    width: 50px;\n    height: 50px;\n    position: fixed;\n    bottom: 5px;\n    right: 5px;\n}\n\n#todo-form {\n    border: solid black 1px;\n    position: absolute;\n    top: 45%;\n    right: 7%;\n    width: 500px;\n    height: 300px;\n    background-color: white;\n    flex-direction: column;\n}\n\n#todo-form > div {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.priority {\n    color: red;\n}\n\n.not-priority {\n    color: black;\n}\n\n.completed {\n    color: grey;\n    font-style: italic;\n    text-decoration: line-through;\n}\n\nfooter {\n    border-top: solid black 1px;\n    background-color: #4287f5;\n}\n\n.hidden {\n    display: none;\n}\n\n.visible {\n    display: flex;\n}\n\nfooter > h3 {\n    text-align: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todoFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoFactory.js */ "./src/todoFactory.js");
/* harmony import */ var _projectFactory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectFactory.js */ "./src/projectFactory.js");
/* harmony import */ var _populateStorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./populateStorage.js */ "./src/populateStorage.js");





//consts for certain divs
const currentProjectWindow = document.getElementById("current-project-window");
const projectBulletList = document.getElementById("projectBulletList");
const projectList = document.getElementById("projectList");

//code for projectArray
const projectArray = [];

//load local storage
if(window.localStorage.length !== 0) {
    const keys = Object.keys(window.localStorage);
    for (let key of keys ) {
        //take the data in local storage and use it to create a new project with those todos
        const object = JSON.parse(window.localStorage.getItem(key));
        //add the projectFactory functionality to the object
        object.addTodo = _projectFactory_js__WEBPACK_IMPORTED_MODULE_2__.projectActions.addTodo;
        object.deleteTodo = _projectFactory_js__WEBPACK_IMPORTED_MODULE_2__.projectActions.deleteTodo;
        projectArray.push(object);
    };
  } else {
    const defaultProject = (0,_projectFactory_js__WEBPACK_IMPORTED_MODULE_2__.createProject)("default");
    projectArray.push(defaultProject);
  };
  
//code for tracking currently selected project
let currentlySelectedProject = projectArray[0];
const currentProjectName = document.createElement("h2");
currentProjectName.textContent = currentlySelectedProject.name;
document.getElementById("current-project-name").appendChild(currentProjectName);

//code for the to do button
document.getElementById("todo-button").addEventListener("click", function () {
    const todoInput = [
        document.getElementById("title").value,
        document.getElementById("description").value,
        document.getElementById("dueDate").value,
        document.getElementById("priority").value
    ];

    const toDo = (0,_todoFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"])(...todoInput);
    eval(projectArray.find(e => e.name == document.getElementById("projectList").value)).addTodo(toDo);
    domUpdater();
    (0,_populateStorage_js__WEBPACK_IMPORTED_MODULE_3__["default"])(projectArray);
    document.getElementById("todo-form").setAttribute("class", "hidden")
});

//code for the project adder form
document.getElementById("project-button").addEventListener("click", function () {
    const newProject = (0,_projectFactory_js__WEBPACK_IMPORTED_MODULE_2__.createProject)(document.getElementById("projectName").value);
    projectArray.push(newProject);
    domUpdater();
    (0,_populateStorage_js__WEBPACK_IMPORTED_MODULE_3__["default"])(projectArray);
});

//code for display to do adder form
document.getElementById("new-to-do").addEventListener("click", function() {
    document.getElementById("todo-form").setAttribute("class", "visible");
});

//code for closing the to do adder form
document.getElementById("close-button").addEventListener("click", function() {
    document.getElementById("todo-form").setAttribute("class", "hidden");
});

//run domUpdater once at start
domUpdater();

//FUNCTION THAT RUNS TO UPDATE DOM
function domUpdater() {
    //code to populate project selection
    while (projectList.firstChild) {
        projectList.removeChild(projectList.firstChild);
    };
    projectArray.forEach(element => {
        let option = document.createElement("option");
        option.setAttribute("value", element.name);
        option.setAttribute("id", element.name);
        option.textContent = element.name;
        document.getElementById("projectList").appendChild(option);
    });

    //code to display toDos of currentlySelected list
    currentProjectName.textContent = currentlySelectedProject.name;
    while (currentProjectWindow.firstChild) {
        currentProjectWindow.removeChild(currentProjectWindow.firstChild);
    };

    currentlySelectedProject.list.forEach(element => {
        let todoDiv = document.createElement("div");
        todoDiv.setAttribute("id", element.title);
        let title = document.createElement("h3");
        title.textContent = element.title;
        let description = document.createElement("p");
        description.textContent = element.description;
        let dueDate = document.createElement("p");
        dueDate.textContent = element.dueDate;
        document.getElementById("current-project-window").appendChild(todoDiv);
        todoDiv.appendChild(title);
        todoDiv.appendChild(description);
        todoDiv.appendChild(dueDate);

        //complete button code 
        let completeButton = document.createElement("button");
        completeButton.innerText = "Mark Completed";
        todoDiv.appendChild(completeButton);
        completeButton.addEventListener("click", function(){
            if (completeButton.innerText == "Mark Completed") {
                todoDiv.classList.add("completed");
                completeButton.innerText = "Mark Uncompleted";
            } else {
                completeButton.innerText = "Mark Completed";
                todoDiv.classList.remove("completed");
                if (element.priority == "Yes") {
                    todoDiv.classList.add("priority");
                } else {
                    todoDiv.classList.add("not-priority");
                };
            };
        });

        //delete button code
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "X";
        todoDiv.appendChild(deleteButton);
        deleteButton.addEventListener("click", function(){
            currentlySelectedProject.deleteTodo(element);
            domUpdater();
            (0,_populateStorage_js__WEBPACK_IMPORTED_MODULE_3__["default"])(projectArray);
        })

        //changes styling depending on priority
        if (element.priority == "Yes") {
            todoDiv.setAttribute("class", "priority");
        } else {todoDiv.setAttribute("class", "not-priority")};

    });

    //code to display projects
    while (projectBulletList.firstChild) {
        projectBulletList.removeChild(projectBulletList.firstChild);
    };
    projectArray.forEach(element => {
        let projectNameBulletPoint = document.createElement("li");    
        let projectNameBulletPointDiv = document.createElement("div");
        projectNameBulletPointDiv.setAttribute("id", element.name + "bullet");
        projectNameBulletPointDiv.textContent = element.name;
        projectBulletList.appendChild(projectNameBulletPoint);
        projectNameBulletPoint.appendChild(projectNameBulletPointDiv);
        projectNameBulletPointDiv.addEventListener("click", function(){
            currentlySelectedProject = projectArray.find(e => this.innerText == e.name);
            domUpdater();
        });

        //project deleter button
        let projectDeleteButton = document.createElement("button");
        projectDeleteButton.innerText = "X";
        projectNameBulletPoint.appendChild(projectDeleteButton);
        projectDeleteButton.addEventListener("click", function(){
            projectArray.splice(projectArray.indexOf(element), 1);
            domUpdater();
            (0,_populateStorage_js__WEBPACK_IMPORTED_MODULE_3__["default"])(projectArray);
        });
    });

}


/***/ }),

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

/***/ }),

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



/***/ }),

/***/ "./src/todoFactory.js":
/*!****************************!*\
  !*** ./src/todoFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTodoItem)
/* harmony export */ });
//Factory function for creating to-do objects
function createTodoItem(title, description, dueDate, priority, finishedState) {
    return {title, description, dueDate, priority, finishedState};
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksK0RBQWU7QUFDM0IsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxVQUFVLE1BQU07O0FBRWhCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLCtEQUFlO0FBQzNCLFNBQVM7QUFDVCxLQUFLOztBQUVMOzs7Ozs7Ozs7Ozs7Ozs7QUN6S2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDZTtBQUNmLFlBQVk7QUFDWiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9fYXBwLy4vc3JjL3BvcHVsYXRlU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy9wcm9qZWN0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy90b2RvRmFjdG9yeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMC41ZnIgbWlubWF4KG1pbi1jb250ZW50LCA1LjVmcikgMC41ZnI7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyODdmNTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggZ3JleTtcXG5cXG59XFxuXFxuaDEge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBjb2xvcjogY29ybnNpbGs7XFxufVxcblxcbmgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuaDMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuXFxubGFiZWwge1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbn1cXG5cXG4jcHJvamVjdEJ1bGxldExpc3Qge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Byb2plY3RCdWxsZXRMaXN0ID4gbGkge1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtvcmFuZ2U7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3Byb2plY3RCdWxsZXRMaXN0ID4gbGkgPiBidXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcblxcbiNwcm9qZWN0TmFtZSB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuI3Byb2plY3RCdXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xcbiAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgICBmb250LXdlaWdodDogMTAwMDtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcblxcbiNwcm9qZWN0LXdpbmRvdyB7XFxuICAgIGdyaWQtcm93OiAyIC8gNDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCBibGFjayAycHg7XFxufVxcblxcbiNjdXJyZW50LXByb2plY3Qtd2luZG93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jY3VycmVudC1wcm9qZWN0LXdpbmRvdyA+IGRpdiB7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IGdyZXk7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XFxuICAgIGJhY2tncm91bmQ6ICNmY2Y0Nzk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG59XFxuXFxuI2N1cnJlbnQtcHJvamVjdC13aW5kb3cgPiBkaXYgPiBoMyB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMztcXG59XFxuXFxuI2N1cnJlbnQtcHJvamVjdC13aW5kb3cgPiBkaXYgPiBwOmZpcnN0LW9mLXR5cGUge1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5cXG4jY3VycmVudC1wcm9qZWN0LXdpbmRvdyA+IGRpdiA+IHA6bnRoLW9mLXR5cGUoMikge1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZ3JpZC1jb2x1bW46IDM7XFxufVxcblxcbiNjdXJyZW50LXByb2plY3Qtd2luZG93ID4gZGl2ID4gYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xcbiAgICBncmlkLXJvdzogMztcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xcbiAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI2N1cnJlbnQtcHJvamVjdC13aW5kb3cgPiBkaXYgPiBidXR0b246bnRoLW9mLXR5cGUoMikge1xcbiAgICBncmlkLXJvdzogMztcXG4gICAgZ3JpZC1jb2x1bW46IDM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNuZXctdG8tZG8ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IGdyZXk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2FsbW9uO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiA1cHg7XFxuICAgIHJpZ2h0OiA1cHg7XFxufVxcblxcbiN0b2RvLWZvcm0ge1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQ1JTtcXG4gICAgcmlnaHQ6IDclO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jdG9kby1mb3JtID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5ub3QtcHJpb3JpdHkge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgYm9yZGVyLXRvcDogc29saWQgYmxhY2sgMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4N2Y1O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnZpc2libGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5mb290ZXIgPiBoMyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLDhEQUE4RDtJQUM5RCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7O0FBRWhDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjVmciBtaW5tYXgobWluLWNvbnRlbnQsIDUuNWZyKSAwLjVmcjtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4N2Y1O1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDVweCBncmV5O1xcblxcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGNvbG9yOiBjb3Juc2lsaztcXG59XFxuXFxuaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG5oMyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcblxcbiNwcm9qZWN0QnVsbGV0TGlzdCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdEJ1bGxldExpc3QgPiBsaSB7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya29yYW5nZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jcHJvamVjdEJ1bGxldExpc3QgPiBsaSA+IGJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuXFxuI3Byb2plY3ROYW1lIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4jcHJvamVjdEJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XFxuICAgIGNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuXFxuI3Byb2plY3Qtd2luZG93IHtcXG4gICAgZ3JpZC1yb3c6IDIgLyA0O1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIGJsYWNrIDJweDtcXG59XFxuXFxuI2N1cnJlbnQtcHJvamVjdC13aW5kb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNjdXJyZW50LXByb2plY3Qtd2luZG93ID4gZGl2IHtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggZ3JleTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcXG4gICAgYmFja2dyb3VuZDogI2ZjZjQ3OTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbn1cXG5cXG4jY3VycmVudC1wcm9qZWN0LXdpbmRvdyA+IGRpdiA+IGgzIHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xcbn1cXG5cXG4jY3VycmVudC1wcm9qZWN0LXdpbmRvdyA+IGRpdiA+IHA6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbiNjdXJyZW50LXByb2plY3Qtd2luZG93ID4gZGl2ID4gcDpudGgtb2YtdHlwZSgyKSB7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBncmlkLWNvbHVtbjogMztcXG59XFxuXFxuI2N1cnJlbnQtcHJvamVjdC13aW5kb3cgPiBkaXYgPiBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGdyaWQtcm93OiAzO1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XFxuICAgIGNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jY3VycmVudC1wcm9qZWN0LXdpbmRvdyA+IGRpdiA+IGJ1dHRvbjpudGgtb2YtdHlwZSgyKSB7XFxuICAgIGdyaWQtcm93OiAzO1xcbiAgICBncmlkLWNvbHVtbjogMztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI25ldy10by1kbyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggZ3JleTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzYWxtb247XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDVweDtcXG4gICAgcmlnaHQ6IDVweDtcXG59XFxuXFxuI3RvZG8tZm9ybSB7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDUlO1xcbiAgICByaWdodDogNyU7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiN0b2RvLWZvcm0gPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLm5vdC1wcmlvcml0eSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCBibGFjayAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Mjg3ZjU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmZvb3RlciA+IGgzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgY3JlYXRlVG9kb0l0ZW0gZnJvbSBcIi4vdG9kb0ZhY3RvcnkuanNcIjtcbmltcG9ydCB7IHByb2plY3RBY3Rpb25zLCBjcmVhdGVQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0RmFjdG9yeS5qcyc7XG5pbXBvcnQgcG9wdWxhdGVTdG9yYWdlIGZyb20gJy4vcG9wdWxhdGVTdG9yYWdlLmpzJztcblxuLy9jb25zdHMgZm9yIGNlcnRhaW4gZGl2c1xuY29uc3QgY3VycmVudFByb2plY3RXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtcHJvamVjdC13aW5kb3dcIik7XG5jb25zdCBwcm9qZWN0QnVsbGV0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdEJ1bGxldExpc3RcIik7XG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdExpc3RcIik7XG5cbi8vY29kZSBmb3IgcHJvamVjdEFycmF5XG5jb25zdCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuLy9sb2FkIGxvY2FsIHN0b3JhZ2VcbmlmKHdpbmRvdy5sb2NhbFN0b3JhZ2UubGVuZ3RoICE9PSAwKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHdpbmRvdy5sb2NhbFN0b3JhZ2UpO1xuICAgIGZvciAobGV0IGtleSBvZiBrZXlzICkge1xuICAgICAgICAvL3Rha2UgdGhlIGRhdGEgaW4gbG9jYWwgc3RvcmFnZSBhbmQgdXNlIGl0IHRvIGNyZWF0ZSBhIG5ldyBwcm9qZWN0IHdpdGggdGhvc2UgdG9kb3NcbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG4gICAgICAgIC8vYWRkIHRoZSBwcm9qZWN0RmFjdG9yeSBmdW5jdGlvbmFsaXR5IHRvIHRoZSBvYmplY3RcbiAgICAgICAgb2JqZWN0LmFkZFRvZG8gPSBwcm9qZWN0QWN0aW9ucy5hZGRUb2RvO1xuICAgICAgICBvYmplY3QuZGVsZXRlVG9kbyA9IHByb2plY3RBY3Rpb25zLmRlbGV0ZVRvZG87XG4gICAgICAgIHByb2plY3RBcnJheS5wdXNoKG9iamVjdCk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IGNyZWF0ZVByb2plY3QoXCJkZWZhdWx0XCIpO1xuICAgIHByb2plY3RBcnJheS5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcbiAgfTtcbiAgXG4vL2NvZGUgZm9yIHRyYWNraW5nIGN1cnJlbnRseSBzZWxlY3RlZCBwcm9qZWN0XG5sZXQgY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdEFycmF5WzBdO1xuY29uc3QgY3VycmVudFByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuY3VycmVudFByb2plY3ROYW1lLnRleHRDb250ZW50ID0gY3VycmVudGx5U2VsZWN0ZWRQcm9qZWN0Lm5hbWU7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtcHJvamVjdC1uYW1lXCIpLmFwcGVuZENoaWxkKGN1cnJlbnRQcm9qZWN0TmFtZSk7XG5cbi8vY29kZSBmb3IgdGhlIHRvIGRvIGJ1dHRvblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRvZG9JbnB1dCA9IFtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZSxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZSxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpLnZhbHVlLFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpLnZhbHVlXG4gICAgXTtcblxuICAgIGNvbnN0IHRvRG8gPSBjcmVhdGVUb2RvSXRlbSguLi50b2RvSW5wdXQpO1xuICAgIGV2YWwocHJvamVjdEFycmF5LmZpbmQoZSA9PiBlLm5hbWUgPT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TGlzdFwiKS52YWx1ZSkpLmFkZFRvZG8odG9Ebyk7XG4gICAgZG9tVXBkYXRlcigpO1xuICAgIHBvcHVsYXRlU3RvcmFnZShwcm9qZWN0QXJyYXkpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtXCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGlkZGVuXCIpXG59KTtcblxuLy9jb2RlIGZvciB0aGUgcHJvamVjdCBhZGRlciBmb3JtXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TmFtZVwiKS52YWx1ZSk7XG4gICAgcHJvamVjdEFycmF5LnB1c2gobmV3UHJvamVjdCk7XG4gICAgZG9tVXBkYXRlcigpO1xuICAgIHBvcHVsYXRlU3RvcmFnZShwcm9qZWN0QXJyYXkpO1xufSk7XG5cbi8vY29kZSBmb3IgZGlzcGxheSB0byBkbyBhZGRlciBmb3JtXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10by1kb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWZvcm1cIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ2aXNpYmxlXCIpO1xufSk7XG5cbi8vY29kZSBmb3IgY2xvc2luZyB0aGUgdG8gZG8gYWRkZXIgZm9ybVxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtXCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGlkZGVuXCIpO1xufSk7XG5cbi8vcnVuIGRvbVVwZGF0ZXIgb25jZSBhdCBzdGFydFxuZG9tVXBkYXRlcigpO1xuXG4vL0ZVTkNUSU9OIFRIQVQgUlVOUyBUTyBVUERBVEUgRE9NXG5mdW5jdGlvbiBkb21VcGRhdGVyKCkge1xuICAgIC8vY29kZSB0byBwb3B1bGF0ZSBwcm9qZWN0IHNlbGVjdGlvblxuICAgIHdoaWxlIChwcm9qZWN0TGlzdC5maXJzdENoaWxkKSB7XG4gICAgICAgIHByb2plY3RMaXN0LnJlbW92ZUNoaWxkKHByb2plY3RMaXN0LmZpcnN0Q2hpbGQpO1xuICAgIH07XG4gICAgcHJvamVjdEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgZWxlbWVudC5uYW1lKTtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGVsZW1lbnQubmFtZSk7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGVsZW1lbnQubmFtZTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TGlzdFwiKS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuXG4gICAgLy9jb2RlIHRvIGRpc3BsYXkgdG9Eb3Mgb2YgY3VycmVudGx5U2VsZWN0ZWQgbGlzdFxuICAgIGN1cnJlbnRQcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGN1cnJlbnRseVNlbGVjdGVkUHJvamVjdC5uYW1lO1xuICAgIHdoaWxlIChjdXJyZW50UHJvamVjdFdpbmRvdy5maXJzdENoaWxkKSB7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0V2luZG93LnJlbW92ZUNoaWxkKGN1cnJlbnRQcm9qZWN0V2luZG93LmZpcnN0Q2hpbGQpO1xuICAgIH07XG5cbiAgICBjdXJyZW50bHlTZWxlY3RlZFByb2plY3QubGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgZWxlbWVudC50aXRsZSk7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBlbGVtZW50LmRlc2NyaXB0aW9uO1xuICAgICAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gZWxlbWVudC5kdWVEYXRlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtcHJvamVjdC13aW5kb3dcIikuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XG4gICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgICAgICAvL2NvbXBsZXRlIGJ1dHRvbiBjb2RlIFxuICAgICAgICBsZXQgY29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjb21wbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSBcIk1hcmsgQ29tcGxldGVkXCI7XG4gICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pO1xuICAgICAgICBjb21wbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChjb21wbGV0ZUJ1dHRvbi5pbm5lclRleHQgPT0gXCJNYXJrIENvbXBsZXRlZFwiKSB7XG4gICAgICAgICAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlQnV0dG9uLmlubmVyVGV4dCA9IFwiTWFyayBVbmNvbXBsZXRlZFwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSBcIk1hcmsgQ29tcGxldGVkXCI7XG4gICAgICAgICAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVkXCIpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnByaW9yaXR5ID09IFwiWWVzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwibm90LXByaW9yaXR5XCIpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICAvL2RlbGV0ZSBidXR0b24gY29kZVxuICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmlubmVyVGV4dCA9IFwiWFwiO1xuICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGN1cnJlbnRseVNlbGVjdGVkUHJvamVjdC5kZWxldGVUb2RvKGVsZW1lbnQpO1xuICAgICAgICAgICAgZG9tVXBkYXRlcigpO1xuICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKHByb2plY3RBcnJheSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy9jaGFuZ2VzIHN0eWxpbmcgZGVwZW5kaW5nIG9uIHByaW9yaXR5XG4gICAgICAgIGlmIChlbGVtZW50LnByaW9yaXR5ID09IFwiWWVzXCIpIHtcbiAgICAgICAgICAgIHRvZG9EaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcmlvcml0eVwiKTtcbiAgICAgICAgfSBlbHNlIHt0b2RvRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibm90LXByaW9yaXR5XCIpfTtcblxuICAgIH0pO1xuXG4gICAgLy9jb2RlIHRvIGRpc3BsYXkgcHJvamVjdHNcbiAgICB3aGlsZSAocHJvamVjdEJ1bGxldExpc3QuZmlyc3RDaGlsZCkge1xuICAgICAgICBwcm9qZWN0QnVsbGV0TGlzdC5yZW1vdmVDaGlsZChwcm9qZWN0QnVsbGV0TGlzdC5maXJzdENoaWxkKTtcbiAgICB9O1xuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdE5hbWVCdWxsZXRQb2ludCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTsgICAgXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZUJ1bGxldFBvaW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdE5hbWVCdWxsZXRQb2ludERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBlbGVtZW50Lm5hbWUgKyBcImJ1bGxldFwiKTtcbiAgICAgICAgcHJvamVjdE5hbWVCdWxsZXRQb2ludERpdi50ZXh0Q29udGVudCA9IGVsZW1lbnQubmFtZTtcbiAgICAgICAgcHJvamVjdEJ1bGxldExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVCdWxsZXRQb2ludCk7XG4gICAgICAgIHByb2plY3ROYW1lQnVsbGV0UG9pbnQuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVCdWxsZXRQb2ludERpdik7XG4gICAgICAgIHByb2plY3ROYW1lQnVsbGV0UG9pbnREaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjdXJyZW50bHlTZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0QXJyYXkuZmluZChlID0+IHRoaXMuaW5uZXJUZXh0ID09IGUubmFtZSk7XG4gICAgICAgICAgICBkb21VcGRhdGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vcHJvamVjdCBkZWxldGVyIGJ1dHRvblxuICAgICAgICBsZXQgcHJvamVjdERlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHByb2plY3REZWxldGVCdXR0b24uaW5uZXJUZXh0ID0gXCJYXCI7XG4gICAgICAgIHByb2plY3ROYW1lQnVsbGV0UG9pbnQuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUJ1dHRvbik7XG4gICAgICAgIHByb2plY3REZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBwcm9qZWN0QXJyYXkuc3BsaWNlKHByb2plY3RBcnJheS5pbmRleE9mKGVsZW1lbnQpLCAxKTtcbiAgICAgICAgICAgIGRvbVVwZGF0ZXIoKTtcbiAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZShwcm9qZWN0QXJyYXkpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKGRhdGEpIHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBkYXRhLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGVsZW1lbnQubmFtZSwgSlNPTi5zdHJpbmdpZnkoZWxlbWVudCkpXG4gICAgfSk7IFxufSIsIi8vYSBmYWN0b3J5IGZ1bmN0aW9uIGZvciBjcmVhdGluZyBwcm9qZWN0c1xuY29uc3QgcHJvamVjdEFjdGlvbnMgPSB7XG4gICAgYWRkVG9kbyhlKSB7XG4gICAgICAgIHRoaXMubGlzdC5wdXNoKGUpO1xuICAgIH0sXG4gICAgZGVsZXRlVG9kbyhlKSB7XG4gICAgICAgIGlmICh0aGlzLmxpc3QuaW5kZXhPZihlKSA9PT0gLTEpIHtjb25zb2xlLmxvZyhcIkVSUk9SXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5saXN0LnNwbGljZSh0aGlzLmxpc3QuaW5kZXhPZihlKSwgMSk7XG4gICAgICAgIH07XG4gICAgfVxufTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gICAgbGV0IHByb2plY3QgPSBPYmplY3QuY3JlYXRlKHByb2plY3RBY3Rpb25zKTtcbiAgICBwcm9qZWN0Lmxpc3QgPSBbXTtcbiAgICBwcm9qZWN0Lm5hbWUgPSBuYW1lOyAgICBcbiAgICByZXR1cm4gcHJvamVjdDtcbn1cblxuZXhwb3J0IHsgcHJvamVjdEFjdGlvbnMsIGNyZWF0ZVByb2plY3QgfTsiLCIvL0ZhY3RvcnkgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIHRvLWRvIG9iamVjdHNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGZpbmlzaGVkU3RhdGUpIHtcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGZpbmlzaGVkU3RhdGV9O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==