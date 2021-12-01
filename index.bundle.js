/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Prompt:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n    WHOLE PAGE BASIC STRUCTURE STYLES.\n*/\nbody {\n    margin: 0;\n    height: 100vh;\n    width: 100%;\n\n    font-family: 'Prompt', sans-serif;\n    color: white;\n}\n\n.container-total {\n    margin: 0;\n    height: 100%;\n    width: 100%;\n}\n\n.header-page {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n\n    background-color: #607196;\n\n    height: 15vh;\n\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n\n    position: absolute;\n    left: 0;\n    bottom: 0;\n\n    height: 85vh;\n    width: 38vh;\n\n    background-color: #BABFD1;\n    color:rgb(29, 29, 29);\n    font-size: 24px;\n\n    overflow-y: overlay;\n}\n\n.lists-container {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 38vh;\n\n    height: 85vh;\n\n    background-color: #E8E9ED;\n\n    overflow: hidden;\n    overflow-y: overlay;\n}\n\n.logo {\n    width: 64px;\n    height: 64px;\n\n    margin-left: 10px;\n    margin-right: 10px;\n}\n\n.title-page {\n    font-size: 38px;\n    font-weight: 700;\n\n    border-bottom: 2px solid white;\n}\n\n.span-sidebar:first-of-type {\n    margin-top: 50px;\n}\n\n.span-sidebar {\n    margin: 10px;\n    cursor: pointer;\n    transition: 0.2s ease-in-out;\n\n    font-size: 1.9rem;\n}\n\n.span-sidebar:hover {\n    transform: scale(1.1);\n    color: black;\n\n    text-shadow: 0 0 1px #666;\n}\n\n/* ACTIVE MENU ITEM */\n.active-project {\n    transform: scale(1.3);\n    color: black;\n\n    text-shadow: 0 0 1px rgb(0, 0, 0);\n}\n\n/*projects title*/\n.span-projects {\n    margin: 10px;\n    font-size: 1.9rem;\n}\n\n/*projects title and delete container*/\n.container-span-project {\n    display: flex;\n    justify-content: space-between;\n\n    width: 170px;\n}\n\n/*projects delete button*/\n.delete-span-project {\n    font-size: 1.2rem;\n    color: rgb(126, 22, 22);\n\n    align-self: center;\n\n    transition: 0.3s ease-in-out;\n}\n\n.delete-span-project:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n}\n\n\n/*\n#############################\n    TODOS STYLING\n#############################\n*/\n\n.container-todo {\n    height: 1rem;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 1rem;\n    margin: 0.7rem;\n    background-color: #dde1f0;\n    color: black;\n    opacity:1;\n\n    border: 2px solid #999;\n    border-radius: 5px;\n\n    overflow: hidden;\n    transition: all .3s;\n    -webkit-transition: all .3s;\n    -moz-transition: all .3s;\n}\n\n.side-div {\n    display: flex;\n    align-items: center;\n}\n\n.checkbox-todo {\n    width: 20px;\n    height: 20px;\n    margin-right: 20px;\n\n    border-radius: 50%;\n    border: 1px solid black;\n    border-color: #333;\n\n    transition: background-color 0.3s;\n}\n\n.checkbox-todo:hover {\n    background-color: rgb(70, 133, 70);\n}\n\n.title-todo {\n    font-size: 24px;\n}\n\n.details-todo {\n    padding: 4px;\n    \n    color: rgb(41, 122, 41);\n    font-size: 14px;\n\n    border-radius: 5px;\n    border: 1px solid rgb(41, 122, 41);\n\n    transition: 0.3s ease-in-out;\n}\n\n.date-todo {\n    margin-left: 20px;\n    font-size: 12px;\n}\n\n.delete-todo {\n    padding: 4px;\n    width: 25px;\n    height: 25px;\n\n    margin-left: 10px;\n\n    transition: 0.3s ease-in-out;\n}\n\n.details-todo:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n}\n\n.delete-todo:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n}\n\n/*single project*/\n.span-project {\n    margin: 5px;\n    padding-left: 10px;\n    font-size: 1.2rem;\n    color: #333;\n    transition: 0.2s ease-in-out;\n}\n\n.span-project:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n\n    text-shadow: 0 0 1px #666;\n}\n\n.new-project {\n    margin: 5px;\n    margin-top: 1px;\n    padding: 5px;\n    cursor: pointer;\n    transition: border 1s;\n\n    font-size: 1rem;\n    color: #666;\n    border: 0.2px #999;\n    border-style: dashed solid;\n}\n\n.new-project:hover {\n    text-shadow: 0 0 2px #999;\n}\n\n/* STYLING BUTTON TO ADD TODOS */\n.button-todo {\n    position: fixed;\n    bottom: 40px;\n    right: 40px;\n\n    text-align: center;\n\n    width: 60px;\n    height: 60px;\n\n    border-radius: 50%;\n\n    background-color: #607196;\n\n    overflow: hidden;\n}\n\n.inner-button {\n    position:relative;\n    top: -30px;\n    right: 1px;\n\n    height: 60px;\n    width: 60px;\n\n    font-size: 5rem;\n    font-weight: 800;\n\n    transition: 0.2s ease-in-out;\n}\n\n.inner-button:hover {\n    cursor: pointer;\n    text-shadow: 0 0 5px #333;\n}\n\n/*\n##################################\n    MODAL TO ADD A NEW PROJECT STYLING\n##################################\n*/\n.backdrop-modal {\n    display: none;\n    position: fixed;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    background: rgba(0, 0, 0, 0.4);\n    z-index: 1;\n}\n\n.modal-project {\n    position: fixed;\n    top: 10%;\n    left: 25%;\n    z-index: 1;\n\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n\n    width: 50vw;\n    height: 300px;\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n    border-radius: 10px;\n}\n\n.title-project {\n    font-size: 24px;\n    margin-top: 30px;\n}   \n\n.input-title {\n    width: 80%;\n    height: 2rem;\n\n    font-size: 18px;\n\n    padding: 5px;\n    margin: 30px;\n}\n\n.button-title {\n    margin-top: 30px;\n\n    border: 0.3px solid #666;\n    border-color: rgb(41, 122, 41);\n\n    color: rgb(41, 122, 41);\n    padding: 10px;\n\n    transition: 0.2s ease-in-out;\n}\n\n.button-title:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n}\n\n/*\n#####################\n    STYLE TODO MODAL\n#####################\n*/\n\n.modal-todo {\n    position: absolute;\n    top: 100px;\n    left: 37%;\n    overflow: hidden;\n\n    background-color: white;\n    color: black;\n    font-size: 24px;\n\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    width: 30%;\n\n    border: 1px solid black;\n    border-radius: 10px;\n\n    z-index: 1;\n}\n\n.todo-label {\n    font-size: 24px;\n    font-weight: 700;\n\n    margin-top: 20px;\n    margin-bottom: 0;\n\n    padding: 5px;\n}\n\n.inputDesc-todo {\n    resize: none;\n}\n\n.buttonModal-todo {\n    margin-bottom: 20px;\n    border: 0.3px solid #666;\n    border-color: rgb(41, 122, 41);\n    color: rgb(41, 122, 41);\n    padding: 5px;\n    transition: 0.2s ease-in-out;\n    align-self: center;\n    justify-self: center;\n}\n\n.buttonModal-todo:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n}\n\nselect:last-of-type {\n    margin-bottom: 20px;\n}\n\n/*\n#######################################\n    STYLING MODAL DETAILS\n#######################################\n*/\n\n.modal-details {\n    position: absolute;\n    top: 100px;\n    left: 37%;\n    overflow: hidden;\n\n    background-color: white;\n    color: black;\n    font-size: 24px;\n\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    width: 30%;\n\n    border: 1px solid black;\n    border-radius: 10px;\n\n    z-index: 1;\n}\n\n.label-details {\n    font-size: 20px;\n    font-weight: 700;\n\n    margin-top: 20px;\n    margin-bottom: 0;\n    padding: 3px;\n\n    flex-direction: row;\n}\n\n.content-details {\n    font-size: 16px;\n    \n    margin-top: 0;\n}\n\n.exit-details {\n    color: #e05355;\n    font-size: 20px;\n    font-weight: 800;\n\n    position: absolute;\n    top: 10px;\n    right: 10px;\n\n    transition: 0.4s;\n}\n\n.exit-details:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@300&display=swap');\n\n/*\n    WHOLE PAGE BASIC STRUCTURE STYLES.\n*/\nbody {\n    margin: 0;\n    height: 100vh;\n    width: 100%;\n\n    font-family: 'Prompt', sans-serif;\n    color: white;\n}\n\n.container-total {\n    margin: 0;\n    height: 100%;\n    width: 100%;\n}\n\n.header-page {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n\n    background-color: #607196;\n\n    height: 15vh;\n\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n\n    position: absolute;\n    left: 0;\n    bottom: 0;\n\n    height: 85vh;\n    width: 38vh;\n\n    background-color: #BABFD1;\n    color:rgb(29, 29, 29);\n    font-size: 24px;\n\n    overflow-y: overlay;\n}\n\n.lists-container {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 38vh;\n\n    height: 85vh;\n\n    background-color: #E8E9ED;\n\n    overflow: hidden;\n    overflow-y: overlay;\n}\n\n.logo {\n    width: 64px;\n    height: 64px;\n\n    margin-left: 10px;\n    margin-right: 10px;\n}\n\n.title-page {\n    font-size: 38px;\n    font-weight: 700;\n\n    border-bottom: 2px solid white;\n}\n\n.span-sidebar:first-of-type {\n    margin-top: 50px;\n}\n\n.span-sidebar {\n    margin: 10px;\n    cursor: pointer;\n    transition: 0.2s ease-in-out;\n\n    font-size: 1.9rem;\n}\n\n.span-sidebar:hover {\n    transform: scale(1.1);\n    color: black;\n\n    text-shadow: 0 0 1px #666;\n}\n\n/* ACTIVE MENU ITEM */\n.active-project {\n    transform: scale(1.3);\n    color: black;\n\n    text-shadow: 0 0 1px rgb(0, 0, 0);\n}\n\n/*projects title*/\n.span-projects {\n    margin: 10px;\n    font-size: 1.9rem;\n}\n\n/*projects title and delete container*/\n.container-span-project {\n    display: flex;\n    justify-content: space-between;\n\n    width: 170px;\n}\n\n/*projects delete button*/\n.delete-span-project {\n    font-size: 1.2rem;\n    color: rgb(126, 22, 22);\n\n    align-self: center;\n\n    transition: 0.3s ease-in-out;\n}\n\n.delete-span-project:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n}\n\n\n/*\n#############################\n    TODOS STYLING\n#############################\n*/\n\n.container-todo {\n    height: 1rem;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 1rem;\n    margin: 0.7rem;\n    background-color: #dde1f0;\n    color: black;\n    opacity:1;\n\n    border: 2px solid #999;\n    border-radius: 5px;\n\n    overflow: hidden;\n    transition: all .3s;\n    -webkit-transition: all .3s;\n    -moz-transition: all .3s;\n}\n\n.side-div {\n    display: flex;\n    align-items: center;\n}\n\n.checkbox-todo {\n    width: 20px;\n    height: 20px;\n    margin-right: 20px;\n\n    border-radius: 50%;\n    border: 1px solid black;\n    border-color: #333;\n\n    transition: background-color 0.3s;\n}\n\n.checkbox-todo:hover {\n    background-color: rgb(70, 133, 70);\n}\n\n.title-todo {\n    font-size: 24px;\n}\n\n.details-todo {\n    padding: 4px;\n    \n    color: rgb(41, 122, 41);\n    font-size: 14px;\n\n    border-radius: 5px;\n    border: 1px solid rgb(41, 122, 41);\n\n    transition: 0.3s ease-in-out;\n}\n\n.date-todo {\n    margin-left: 20px;\n    font-size: 12px;\n}\n\n.delete-todo {\n    padding: 4px;\n    width: 25px;\n    height: 25px;\n\n    margin-left: 10px;\n\n    transition: 0.3s ease-in-out;\n}\n\n.details-todo:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n}\n\n.delete-todo:hover {\n    transform: scale(1.1);\n    cursor: pointer;\n}\n\n/*single project*/\n.span-project {\n    margin: 5px;\n    padding-left: 10px;\n    font-size: 1.2rem;\n    color: #333;\n    transition: 0.2s ease-in-out;\n}\n\n.span-project:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n\n    text-shadow: 0 0 1px #666;\n}\n\n.new-project {\n    margin: 5px;\n    margin-top: 1px;\n    padding: 5px;\n    cursor: pointer;\n    transition: border 1s;\n\n    font-size: 1rem;\n    color: #666;\n    border: 0.2px #999;\n    border-style: dashed solid;\n}\n\n.new-project:hover {\n    text-shadow: 0 0 2px #999;\n}\n\n/* STYLING BUTTON TO ADD TODOS */\n.button-todo {\n    position: fixed;\n    bottom: 40px;\n    right: 40px;\n\n    text-align: center;\n\n    width: 60px;\n    height: 60px;\n\n    border-radius: 50%;\n\n    background-color: #607196;\n\n    overflow: hidden;\n}\n\n.inner-button {\n    position:relative;\n    top: -30px;\n    right: 1px;\n\n    height: 60px;\n    width: 60px;\n\n    font-size: 5rem;\n    font-weight: 800;\n\n    transition: 0.2s ease-in-out;\n}\n\n.inner-button:hover {\n    cursor: pointer;\n    text-shadow: 0 0 5px #333;\n}\n\n/*\n##################################\n    MODAL TO ADD A NEW PROJECT STYLING\n##################################\n*/\n.backdrop-modal {\n    display: none;\n    position: fixed;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    background: rgba(0, 0, 0, 0.4);\n    z-index: 1;\n}\n\n.modal-project {\n    position: fixed;\n    top: 10%;\n    left: 25%;\n    z-index: 1;\n\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n\n    width: 50vw;\n    height: 300px;\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n    border-radius: 10px;\n}\n\n.title-project {\n    font-size: 24px;\n    margin-top: 30px;\n}   \n\n.input-title {\n    width: 80%;\n    height: 2rem;\n\n    font-size: 18px;\n\n    padding: 5px;\n    margin: 30px;\n}\n\n.button-title {\n    margin-top: 30px;\n\n    border: 0.3px solid #666;\n    border-color: rgb(41, 122, 41);\n\n    color: rgb(41, 122, 41);\n    padding: 10px;\n\n    transition: 0.2s ease-in-out;\n}\n\n.button-title:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n}\n\n/*\n#####################\n    STYLE TODO MODAL\n#####################\n*/\n\n.modal-todo {\n    position: absolute;\n    top: 100px;\n    left: 37%;\n    overflow: hidden;\n\n    background-color: white;\n    color: black;\n    font-size: 24px;\n\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    width: 30%;\n\n    border: 1px solid black;\n    border-radius: 10px;\n\n    z-index: 1;\n}\n\n.todo-label {\n    font-size: 24px;\n    font-weight: 700;\n\n    margin-top: 20px;\n    margin-bottom: 0;\n\n    padding: 5px;\n}\n\n.inputDesc-todo {\n    resize: none;\n}\n\n.buttonModal-todo {\n    margin-bottom: 20px;\n    border: 0.3px solid #666;\n    border-color: rgb(41, 122, 41);\n    color: rgb(41, 122, 41);\n    padding: 5px;\n    transition: 0.2s ease-in-out;\n    align-self: center;\n    justify-self: center;\n}\n\n.buttonModal-todo:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n}\n\nselect:last-of-type {\n    margin-bottom: 20px;\n}\n\n/*\n#######################################\n    STYLING MODAL DETAILS\n#######################################\n*/\n\n.modal-details {\n    position: absolute;\n    top: 100px;\n    left: 37%;\n    overflow: hidden;\n\n    background-color: white;\n    color: black;\n    font-size: 24px;\n\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    width: 30%;\n\n    border: 1px solid black;\n    border-radius: 10px;\n\n    z-index: 1;\n}\n\n.label-details {\n    font-size: 20px;\n    font-weight: 700;\n\n    margin-top: 20px;\n    margin-bottom: 0;\n    padding: 3px;\n\n    flex-direction: row;\n}\n\n.content-details {\n    font-size: 16px;\n    \n    margin-top: 0;\n}\n\n.exit-details {\n    color: #e05355;\n    font-size: 20px;\n    font-weight: 800;\n\n    position: absolute;\n    top: 10px;\n    right: 10px;\n\n    transition: 0.4s;\n}\n\n.exit-details:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n}"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
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

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./src/bin.svg":
/*!*********************!*\
  !*** ./src/bin.svg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b58ce51e1717496aec26.svg";

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9042f32a770ca2311d0e.svg";

/***/ }),

/***/ "./src/new-project-modal.js":
/*!**********************************!*\
  !*** ./src/new-project-modal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewProjectModal": () => (/* binding */ createNewProjectModal)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


function createNewProjectModal () {
  const body = document.querySelector('body')

  const backdrop = document.createElement('div')// for the modal
  const modal = document.createElement('div')
  const title = document.createElement('h2')
  const input = document.createElement('input')
  const buttonAccept = document.createElement('span')

  input.setAttribute('type', 'text')
  input.setAttribute('placeholder', 'Write your project title here...')
  title.classList.add('title-project')
  input.classList.add('input-title')
  buttonAccept.classList.add('button-title')
  backdrop.classList.add('backdrop-modal')
  modal.classList.add('modal-project')

  title.textContent = 'Set your project name: '
  buttonAccept.textContent = 'Confirm'

  modal.appendChild(title)
  modal.appendChild(input)
  modal.appendChild(buttonAccept)
  body.appendChild(backdrop)
  body.appendChild(modal)
}




/***/ }),

/***/ "./src/new-todo-modal.js":
/*!*******************************!*\
  !*** ./src/new-todo-modal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeOptions": () => (/* binding */ removeOptions),
/* harmony export */   "createOptions": () => (/* binding */ createOptions),
/* harmony export */   "createNewTodoModal": () => (/* binding */ createNewTodoModal),
/* harmony export */   "showDetailsModal": () => (/* binding */ showDetailsModal),
/* harmony export */   "createDetailsModal": () => (/* binding */ createDetailsModal)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


function createNewTodoModal() {
    const body = document.querySelector('body');

    const modal = document.createElement('div');

    const title = document.createElement('h2');
    const inputTitle = document.createElement('input');

    const description = document.createElement('h2');
    const inputDesc = document.createElement('textarea');

    const date = document.createElement('h2');
    const inputDate = document.createElement('input');

    const priority = document.createElement('h2');
    const inputPrio = document.createElement('select');

    const project = document.createElement('h2');
    const inputProject = document.createElement('select');

    const buttonAccept = document.createElement('span');

    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('placeholder',"Write your project title here...");
    title.classList.add('todo-label');
    inputTitle.classList.add('inputTitle-todo');

    inputDesc.setAttribute('placeholder',"Write your project description here...");
    description.classList.add('todo-label');
    inputDesc.classList.add('inputDesc-todo');
    
    inputDate.setAttribute('type','date');
    inputDate.classList.add('inputDate-todo');
    date.classList.add('todo-label');
    let today = new Date().toISOString().slice(0, 10); // get current date and set it to the minimum date
    inputDate.setAttribute('min', today);

    priority.classList.add('todo-label');
    inputPrio.classList.add('inputPrio-todo');

    project.classList.add('todo-label');
    inputProject.classList.add('inputProject-todo');

    buttonAccept.classList.add('buttonModal-todo');
    modal.classList.add('modal-todo');

    title.textContent = "Todo name: ";
    description.textContent = "Description: ";
    date.textContent = "Target date: ";
    priority.textContent = "Priority: ";
    project.textContent = "Project: ";
    buttonAccept.textContent = "Confirm";

    modal.appendChild(title);
    modal.appendChild(inputTitle);

    modal.appendChild(description);
    modal.appendChild(inputDesc);

    modal.appendChild(date);
    modal.appendChild(inputDate);

    modal.appendChild(priority);
    modal.appendChild(inputPrio);

    modal.appendChild(project);
    modal.appendChild(inputProject);

    modal.appendChild(buttonAccept);
    body.appendChild(modal);
}

function showDetailsModal(titleTodo) {
    let todos = JSON.parse(localStorage.getItem("allEntries"));
    let indexTitle = todos.findIndex(el => el["Title"] === titleTodo);

    let labels = document.querySelectorAll('.label-details');
    let content = document.querySelectorAll('.content-details');
    
    let arrayLabels = ["Title: ", "Description: ", "Target Date: ", "Priority: ", "Title: "];
    let arrayContents = [todos[indexTitle]['Title'], todos[indexTitle]['Description'] , todos[indexTitle]['Date'] , todos[indexTitle]['Priority'] , todos[indexTitle]['Project']];

    labels = Array.from(labels);
    content = Array.from(content);

    labels.forEach((label,index) => {
        label.textContent = arrayLabels[index];
    });

    content.forEach((content,index) => {
        content.textContent = arrayContents[index];
    });
}

function createDetailsModal() {

    let body = document.querySelector('body');
    let modalDetails = document.createElement('div');

    let title = document.createElement('h2');
    let titleContent = document.createElement('p');

    let desc = document.createElement('h2');
    let descContent = document.createElement('p');
    
    let date = document.createElement('h2');
    let dateContent = document.createElement('p');

    let prio = document.createElement('h2');
    let prioContent = document.createElement('p');

    let project = document.createElement('h2');
    let projectContent = document.createElement('p');

    let exit = document.createElement('div');

    modalDetails.classList.add('modal-details');
    title.classList.add('label-details');
    titleContent.classList.add('content-details');
    desc.classList.add('label-details');
    descContent.classList.add('content-details');
    date.classList.add('label-details');
    dateContent.classList.add('content-details');
    prio.classList.add('label-details');
    prioContent.classList.add('content-details');
    project.classList.add('label-details');
    projectContent.classList.add('content-details');
    exit.classList.add('exit-details');

    exit.textContent = "X";

    modalDetails.appendChild(title);
    modalDetails.appendChild(titleContent);

    modalDetails.appendChild(desc);
    modalDetails.appendChild(descContent);

    modalDetails.appendChild(date);
    modalDetails.appendChild(dateContent);

    modalDetails.appendChild(prio);
    modalDetails.appendChild(prioContent);

    modalDetails.appendChild(project);
    modalDetails.appendChild(projectContent);

    modalDetails.appendChild(exit);
    body.appendChild(modalDetails);

}

function createOptions() {
    const select = document.querySelector('.inputProject-todo');
    const selectPrio = document.querySelector('.inputPrio-todo');

    let prios = ['High','Medium','Low'];
    let colors = ['#e05355', '#CCCA3A', '#4a8f51'];

    // NO PROJECT OPTION
    const optionEmpty = document.createElement('option');
    optionEmpty.textContent = "no project";

    select.appendChild(optionEmpty);

    let projects = JSON.parse(localStorage.getItem("allProjects"));
    if(projects === null) projects = [];

    for(let i = 0; i < projects.length; i++) {
        let name = projects[i];

        const option = document.createElement('option');
        option.textContent = name;

        select.appendChild(option);
    }

    for(let i = 0; i < 3; i++) {
        const option = document.createElement('option');
        option.textContent = prios[i];
        option.style.backgroundColor = 'black';
        option.style.color = colors[i];

        selectPrio.appendChild(option);
    }
}

function removeOptions() {
    const select = document.querySelector('.inputProject-todo');
    const selectPrio = document.querySelector('.inputPrio-todo');

    while(select.firstChild) {
        select.removeChild(select.firstChild);
    }

    while(selectPrio.firstChild) {
        selectPrio.removeChild(selectPrio.firstChild);
    }
}



/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentLoader": () => (/* binding */ contentLoader)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.svg */ "./src/logo.svg");
/* harmony import */ var _sidebar_load_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-load.js */ "./src/sidebar-load.js");
/* harmony import */ var _todos_load_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todos-load.js */ "./src/todos-load.js");
/* harmony import */ var _projects_load__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects-load */ "./src/projects-load.js");
/* harmony import */ var _new_project_modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-project-modal.js */ "./src/new-project-modal.js");
/* harmony import */ var _new_todo_modal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-todo-modal.js */ "./src/new-todo-modal.js");








/*
    ##
    THIS FUNCTION TAKES CARE OF ALL THE BASIC HTML STRUCTURE WITH THE ITEMS THAT WILL
    ALWAYS BE THERE.
    ##
*/

function contentLoader() {

    //ADD THE CONTAINER OF THE WHOLE PAGE
    const body = document.querySelector('body');

    const containerTotal = document.createElement('div');
    containerTotal.classList.add('container-total');
    body.appendChild(containerTotal);

    //ADDS THE PAGE HEADER WITH ALL ITS CONTENT
    const header = document.createElement('header');
    const titlePage = document.createElement('p');
    const myIcon = new Image();

    myIcon.src = _logo_svg__WEBPACK_IMPORTED_MODULE_1__;
    header.classList.add('header-page');
    myIcon.classList.add('logo');
    titlePage.classList.add('title-page');
    myIcon.setAttribute('alt', 'Icon by https://freeicons.io/profile/823 - Muhammad Haq');
    titlePage.textContent = 'TODO LIST!';

    header.appendChild(myIcon);
    header.appendChild(titlePage);
    containerTotal.appendChild(header);

    //ADDS THE PAGE SIDEBAR
    const sidebar = document.createElement('div');

    sidebar.classList.add('sidebar');

    containerTotal.appendChild(sidebar);

    //loads the sidebar with the text that will always be there
    (0,_sidebar_load_js__WEBPACK_IMPORTED_MODULE_2__.sidebarLoad)();

    //ADDS THE PAGE LISTS CONTENT HOLDER
    const lists = document.createElement('div');

    lists.classList.add('lists-container');

    containerTotal.appendChild(lists);

    //this lines first render the todo's then the 'button' to add new projects 
    //and then the projects already created and the button to add new todos
    (0,_todos_load_js__WEBPACK_IMPORTED_MODULE_3__.showTodos)();
    (0,_projects_load__WEBPACK_IMPORTED_MODULE_4__.addNewProjectLoad)();
    (0,_projects_load__WEBPACK_IMPORTED_MODULE_4__.projectsNameLoad)();
    (0,_todos_load_js__WEBPACK_IMPORTED_MODULE_3__.addTodoButton)();

    //Creates the modal for when the new project button is clicked
    (0,_new_project_modal_js__WEBPACK_IMPORTED_MODULE_5__.createNewProjectModal)();
    (0,_new_todo_modal_js__WEBPACK_IMPORTED_MODULE_6__.createNewTodoModal)();
    (0,_new_todo_modal_js__WEBPACK_IMPORTED_MODULE_6__.createDetailsModal)();

}



/***/ }),

/***/ "./src/projects-load.js":
/*!******************************!*\
  !*** ./src/projects-load.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createdProject": () => (/* binding */ createdProject),
/* harmony export */   "addNewProjectLoad": () => (/* binding */ addNewProjectLoad),
/* harmony export */   "projectsNameLoad": () => (/* binding */ projectsNameLoad)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _projects_module_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-module.js */ "./src/projects-module.js");
/* harmony import */ var _todos_load_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos-load.js */ "./src/todos-load.js");
/* harmony import */ var _todos_module_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todos-module.js */ "./src/todos-module.js");





function addNewProjectLoad() {
    const sidebar = document.querySelector('.sidebar');
    const newProject = document.createElement('span');

    newProject.classList.add('new-project');

    newProject.textContent = 'Add a new project';

    sidebar.appendChild(newProject);
}

function projectsNameLoad() {

    let projects = JSON.parse(localStorage.getItem("allProjects"));

    if(projects === null) projects = [];

    //CREATES A PROJECT SPAN FOR EVERY UNIQUE PROJECT NAME
    for(let i = 0; i < projects.length; i++) {
      const sidebar = document.querySelector('.sidebar');
      const containerSpan = document.createElement('span');
      const projectSpan = document.createElement('span');
      const deleteSpan = document.createElement('span');

      projectSpan.classList.add('span-project');
      deleteSpan.classList.add('delete-span-project');
      containerSpan.classList.add('container-span-project');

      projectSpan.textContent = '• ' + projects[i];
      deleteSpan.textContent = 'X';

      projectSpan.addEventListener('click', () => {
        (0,_todos_load_js__WEBPACK_IMPORTED_MODULE_2__.loadProjectTodo)(projects[i]);

        //TAKES CARE OF THE ACTIVE MENU ITEM STYLING
        const everyProject = document.querySelectorAll('.span-project');
        const everyDefaultProject = document.querySelectorAll('.span-sidebar');

        Array.from(everyProject).forEach((project) => {
          if(project.classList[1] === 'active-project') {
            project.classList.remove('active-project');
          }
        });

        Array.from(everyDefaultProject).forEach((project) => {
          if(project.classList[1] === 'active-project') {
            project.classList.remove('active-project');
          }
        });

        projectSpan.classList.add("active-project");
      });
    
      deleteSpan.addEventListener('click', () => {
        _projects_module_js__WEBPACK_IMPORTED_MODULE_1__.myProjects.removeProject(projects[i]);
        _todos_module_js__WEBPACK_IMPORTED_MODULE_3__.myTodos.removeToDos(projects[i]);
        sidebar.removeChild(deleteSpan.parentNode);
        location.reload();
      });

      containerSpan.appendChild(projectSpan);
      containerSpan.appendChild(deleteSpan);
      sidebar.appendChild(containerSpan);
    }
}

function createdProject(projectName) {
  const sidebar = document.querySelector('.sidebar');
  const projectSpan = document.createElement('span');
  const containerSpan = document.createElement('span');
  const deleteSpan = document.createElement('span');

  projectSpan.classList.add('span-project');
  deleteSpan.classList.add('delete-span-project');
  containerSpan.classList.add('container-span-project');

  projectSpan.textContent = '• ' + projectName;
  deleteSpan.textContent = 'X';

  projectSpan.addEventListener('click', () => {

    (0,_todos_load_js__WEBPACK_IMPORTED_MODULE_2__.loadProjectTodo)(projectName);

    //TAKES CARE OF THE ACTIVE MENU ITEM STYLING
    const everyProject = document.querySelectorAll('.span-project');
    const everyDefaultProject = document.querySelectorAll('.span-sidebar');

    Array.from(everyProject).forEach((project) => {
      if(project.classList[1] === 'active-project') {
        project.classList.remove('active-project');
      }
    });

    Array.from(everyDefaultProject).forEach((project) => {
      if(project.classList[1] === 'active-project') {
        project.classList.remove('active-project');
      }
    });
    
    projectSpan.classList.add("active-project");
  });

  deleteSpan.addEventListener('click', () => {
    _projects_module_js__WEBPACK_IMPORTED_MODULE_1__.myProjects.removeProject(projectName);
    _todos_module_js__WEBPACK_IMPORTED_MODULE_3__.myTodos.removeToDos(projectName);
    sidebar.removeChild(deleteSpan.parentNode);

    location.reload();
  });

  containerSpan.appendChild(projectSpan);
  containerSpan.appendChild(deleteSpan);
  sidebar.appendChild(containerSpan);
}



/***/ }),

/***/ "./src/projects-module.js":
/*!********************************!*\
  !*** ./src/projects-module.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "myProjects": () => (/* binding */ myProjects)
/* harmony export */ });
const myProjects = (function() {

    function removeProject(title) {
        let projects = JSON.parse(localStorage.getItem("allProjects"));

        let index = projects.indexOf(title);
        projects.splice(index, 1);

        localStorage.setItem("allProjects", JSON.stringify(projects));
    }

    function checkIfRepeated(title) {
        let projects = JSON.parse(localStorage.getItem("allProjects"));

        if(projects === null) {
            projects = [];
        }
        for(let i = 0; i < projects.length; i++) {
            if(projects[i] == title) {
                return true;
            }
        }
        return false;
    }

    function saveInLocalStorage(title) {
        if (typeof(Storage) !== 'undefined') {

            //CODE COPIED FROM https://stackoverflow.com/questions/19635077/adding-objects-to-array-in-localstorage
            let existingEntries = JSON.parse(localStorage.getItem("allProjects"));

            if(existingEntries === null) existingEntries = [];
            
            let entry = title;

            localStorage.setItem("entryProject", JSON.stringify(entry));
            existingEntries.push(entry);
            localStorage.setItem("allProjects", JSON.stringify(existingEntries));

        } else {
            return;
        }
    }

    return { removeProject , checkIfRepeated , saveInLocalStorage};
})(); 



/***/ }),

/***/ "./src/sidebar-load.js":
/*!*****************************!*\
  !*** ./src/sidebar-load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sidebarLoad": () => (/* binding */ sidebarLoad)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


function sidebarLoad() {
    const sidebar = document.querySelector('.sidebar');

    const homeBar = document.createElement('span');
    const todayBar = document.createElement('span');
    const weekBar = document.createElement('span');
    const projectsBar = document.createElement('span');

    homeBar.classList.add('span-sidebar');
    homeBar.setAttribute('id', 'home-bar');
    todayBar.classList.add('span-sidebar');
    todayBar.setAttribute('id', 'today-bar');
    weekBar.classList.add('span-sidebar');
    weekBar.setAttribute('id', 'week-bar');
    projectsBar.classList.add('span-projects');

    homeBar.textContent = 'Home';
    todayBar.textContent = 'Today';
    weekBar.textContent = 'Week';
    projectsBar.textContent = 'Projects';

    let things = [homeBar,todayBar,weekBar];
    
    things.map((span) => {
        span.addEventListener('click', () => {
            const projects = document.querySelectorAll('.span-project');

            Array.from(projects).forEach((project) => {
                if(project.classList[1] === 'active-project'){
                    project.classList.remove('active-project');
                }
            });

            things.map((span) => {
                if(span.classList[1] === 'active-project') {
                    span.classList.remove('active-project');
                }
            });

            span.classList.add('active-project');
        });
    });

    sidebar.appendChild(homeBar);
    sidebar.appendChild(todayBar);
    sidebar.appendChild(weekBar);
    sidebar.appendChild(projectsBar);
}



/***/ }),

/***/ "./src/todos-load.js":
/*!***************************!*\
  !*** ./src/todos-load.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodoButton": () => (/* binding */ addTodoButton),
/* harmony export */   "showTodos": () => (/* binding */ showTodos),
/* harmony export */   "loadProjectTodo": () => (/* binding */ loadProjectTodo),
/* harmony export */   "loadTodayTodos": () => (/* binding */ loadTodayTodos),
/* harmony export */   "loadThisWeekTodos": () => (/* binding */ loadThisWeekTodos)
/* harmony export */ });
/* harmony import */ var _todos_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos-module.js */ "./src/todos-module.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _bin_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bin.svg */ "./src/bin.svg");
/* harmony import */ var _new_todo_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-todo-modal.js */ "./src/new-todo-modal.js");
/* eslint-disable no-use-before-define */





function showTodos() {

    const everyTodo = document.querySelectorAll('.container-todo');
    Array.from(everyTodo).forEach(element => {
        element.parentNode.removeChild(element);
    });

    let todos = JSON.parse(localStorage.getItem("allEntries"));
    if(todos === null) todos = [];

    for(let i = 0; i < todos.length; i++) {
        createTheWholeTodo(i);
    }
}

function addTodoButton() {
    const containerTodos = document.querySelector('.lists-container');

    const buttonTodo = document.createElement('div');
    const innerButton = document.createElement('div');

    buttonTodo.classList.add('button-todo');
    innerButton.classList.add('inner-button');

    innerButton.textContent = "+";

    buttonTodo.appendChild(innerButton);
    containerTodos.appendChild(buttonTodo);
}

function loadTodayTodos() {

    const everyTodo = document.querySelectorAll('.container-todo');
    Array.from(everyTodo).forEach(element => {
        element.parentNode.removeChild(element);
    });

    let today = new Date().toISOString().slice(0, 10);
    let todos = JSON.parse(localStorage.getItem("allEntries"));

    if(todos === null) todos = [];

    for(let i = 0; i < todos.length; i++) {

        let isToday = todos[i]['Date'].split('-');
        let isToday2 = today.split('-');

        // CHECKS THE LAST VALUE OF THE DATE WHICH IS THE DAY, IF THAT IS THE SAME, THE TODO SHOWS
        if(isToday[2] == isToday2[2]) {
            createTheWholeTodo(i);
        }
    }
}

function loadThisWeekTodos() {

    const everyTodo = document.querySelectorAll('.container-todo');
    Array.from(everyTodo).forEach(element => {
        element.parentNode.removeChild(element);
    });

    let today = new Date().toISOString().slice(0, 10);
    let todos = JSON.parse(localStorage.getItem("allEntries"));
    if(todos === null) todos = [];

    for(let i = 0; i < todos.length; i++) {

        let isToday = todos[i]['Date'].split('-');
        let isToday2 = today.split('-');

        // CHECKS THE LAST VALUE OF THE DATE WHICH IS THE DAY, IF THAT IS THE SAME, THE TODO SHOWS
        if(isToday[1] == isToday2[1]) {
            if(isToday[2] > isToday2[2]) {
                if(parseInt(isToday[2]) - parseInt(isToday2[2]) <= 7) {
                    createTheWholeTodo(i);
                }
            }else if(isToday[2] < isToday2[2]) {
                if(parseInt(isToday2[2]) - parseInt(isToday[2]) <= 7) {
                    createTheWholeTodo(i);
                }
            } else {
                createTheWholeTodo(i);
            }
        } else if((parseInt(isToday[1]) + 1 ) == isToday2[1] || (parseInt(isToday2[1]) + 1 ) == isToday[1]) {
            if(isToday[2] > isToday2[2]) {
                if(parseInt(isToday[2]) - parseInt(isToday2[2]) <= 7) {
                    createTheWholeTodo(i);
                }
            }else if(isToday[2] < isToday2[2]) {
                if(parseInt(isToday2[2]) - parseInt(isToday[2]) <= 7) {
                    createTheWholeTodo(i);
                }
            } else {
                createTheWholeTodo(i);
            }
        }
    }
}

function loadProjectTodo(project) {
    
    const everyTodo = document.querySelectorAll('.container-todo');
    Array.from(everyTodo).forEach(element => {
        element.parentNode.removeChild(element);
    });

    let todos = JSON.parse(localStorage.getItem("allEntries"));

    if(todos === null) {
        todos = [];
    }

    for(let i = 0; i < todos.length; i++) {
        if(project == todos[i]['Project']) {
          createTheWholeTodo(i);
        }
    }
}

function createTheWholeTodo(index) {
    const containerTodos = document.querySelector('.lists-container');

    let todos = JSON.parse(localStorage.getItem("allEntries"));
    if(todos === null) todos = [];

    const totalContainer = document.createElement('div');
    const leftSideDiv = document.createElement('div');
    const rigthSideDiv = document.createElement('div');
    const checkbox = document.createElement('div');
    const title = document.createElement('div');
    const dateDiv = document.createElement('div');
    const detailsDiv = document.createElement('div');
    const editDiv = document.createElement('div');

    totalContainer.classList.add('container-todo');
    leftSideDiv.classList.add('side-div');
    rigthSideDiv.classList.add('side-div');
    checkbox.classList.add('checkbox-todo');
    title.classList.add('title-todo');
    dateDiv.classList.add('date-todo');
    detailsDiv.classList.add('details-todo');
    editDiv.classList.add('edit-todo');

    title.textContent = todos[index]["Title"];
    dateDiv.textContent = todos[index]["Date"];
    detailsDiv.textContent = 'DETAILS';

    const myIcon = new Image();
    myIcon.src = _bin_svg__WEBPACK_IMPORTED_MODULE_2__;
    myIcon.classList.add('delete-todo');
    myIcon.setAttribute('alt', 'Icons made by https://www.flaticon.com/authors/ddara - dDara');
    
    // DELETE ICON BUTTON.
    myIcon.addEventListener('click', () => {
        _todos_module_js__WEBPACK_IMPORTED_MODULE_0__.myTodos.removeToDo(myIcon.parentNode.firstChild.lastChild.textContent);
        containerTodos.removeChild(myIcon.parentNode.parentNode);
    });

    // THIS EVENT LISTENER IS COPIED FROM https://stackoverflow.com/questions/39513705/make-html-element-disappear-with-css-animation
    // IT TAKES CARE OF THE DISAPPEAR ANIMATION WHEN THE USER CHECKS THE BOX.
    checkbox.addEventListener('click', () => {
        checkbox.parentElement.parentElement.style.opacity = '0';
        window.setTimeout( function removethis() {
            checkbox.parentElement.parentElement.style.display='none';
        }, 300);
        window.setTimeout(() => {
            _todos_module_js__WEBPACK_IMPORTED_MODULE_0__.myTodos.removeToDo(checkbox.nextSibling.textContent);
            containerTodos.removeChild(checkbox.parentElement.parentElement);
        }, 300);
    });

    // DETAILS EVENT LISTENER.
    detailsDiv.addEventListener('click', () => {
        const backdrop = document.querySelector('.backdrop-modal');
        const modalTodo = document.querySelector('.modal-details');
        const exit = document.querySelector('.exit-details');

        let titleSelected = detailsDiv.parentElement.previousElementSibling.lastChild.textContent;
        (0,_new_todo_modal_js__WEBPACK_IMPORTED_MODULE_3__.showDetailsModal)(titleSelected);

        backdrop.style.display = 'block';
        modalTodo.style.display = 'flex';

        backdrop.addEventListener('click', () => {
            backdrop.style.display = 'none';
            modalTodo.style.display = 'none';
        });

        exit.addEventListener('click', () => {
            backdrop.style.display = 'none';
            modalTodo.style.display = 'none';
        });
    });

    // THIS MAKES THE BORDER THE SPECIFIC COLOR IT NEEDS TO BE ACORDING TO THE PRIO.
    (todos[index]['Priority'] === 'High') ? totalContainer.style.border = '2px solid #e05355' :
    (todos[index]['Priority'] === 'Medium') ? totalContainer.style.border = '2px solid #CCCA3A' :
    totalContainer.style.border = '2px solid #4a8f51';

    leftSideDiv.appendChild(checkbox);
    leftSideDiv.appendChild(title);
    rigthSideDiv.appendChild(detailsDiv);
    rigthSideDiv.appendChild(dateDiv);
    rigthSideDiv.appendChild(editDiv);
    rigthSideDiv.appendChild(myIcon);

    totalContainer.appendChild(leftSideDiv);
    totalContainer.appendChild(rigthSideDiv);

    containerTodos.appendChild(totalContainer);
}



/***/ }),

/***/ "./src/todos-module.js":
/*!*****************************!*\
  !*** ./src/todos-module.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "myTodos": () => (/* binding */ myTodos)
/* harmony export */ });
const myTodos = (function() {
    /*

    THE MISTAKES WERE DONE BY FIRST STARTING TO WORK WITH A LOCAL ARRAY
    AND THEN TRYING TO WORK WITH LOCAL STORAGE WHEN I NEVER USED IT :)

    WORKING DIRECTLY WITH LOCAL STORAGE INSTEAD OF USING THIS LOCAL ARRAY : let todo = [];
    MADE EVERYTHING EASIER AND ALL THANKS TO THE STACKOVERFLOW QUESTION I PASTED BELOW.

    */
    function removeToDo(title) {
        let todos = JSON.parse(localStorage.getItem("allEntries"));
        if(todos === null) todos = [];
        let index = todos.indexOf(title);
        todos.splice(index, 1);
        localStorage.setItem("allEntries", JSON.stringify(todos));
    }

    function findToDo(title) {
        let todos = JSON.parse(localStorage.getItem("allEntries"));
        if(todos === null) todos = [];
        let index = todos.indexOf(title);
        return index;
    }

    function removeToDos(projectName) {
        let todos = JSON.parse(localStorage.getItem("allEntries"));
        if(todos === null) todos = [];
        
        todos.map((object,i) => {
            if(object['Project'] === projectName) todos.splice(i,1);
        });

        localStorage.setItem("allEntries", JSON.stringify(todos));
    }

    /* FUNCTION TO BE IMPLEMENTED
    function editTodo(prop, content, index) {
        let todos = JSON.parse(localStorage.getItem("allEntries"));

        todos[index][prop] = content;

        localStorage.setItem("allEntries", JSON.stringify(todos));
    }
    */

    function checkIfRepeated(title) {
        let todos = JSON.parse(localStorage.getItem("allEntries"));
        if(todos === null) {
            todos = [];
        }
        for(let i = 0; i < todos.length; i++) {
            if(todos[i]['Title'] == title) {
                return true;
            }
        }
        return false;
    }

    function saveInLocalStorage(title,desc,date,prio,pro) {
        if (typeof(Storage) !== 'undefined') {

            // CODE COPIED FROM https://stackoverflow.com/questions/19635077/adding-objects-to-array-in-localstorage
            let existingEntries = JSON.parse(localStorage.getItem("allEntries"));

            if(existingEntries === null) existingEntries = [];
            
            let entry = {
                Title: title,
                Description: desc,
                Date: date,
                Priority: prio,
                Project: pro
            }

            localStorage.setItem("entry", JSON.stringify(entry));
            existingEntries.push(entry);
            localStorage.setItem("allEntries", JSON.stringify(existingEntries));

        } else {
            return;
        }
    }

    return { removeToDo , findToDo , removeToDos , checkIfRepeated , saveInLocalStorage};
})(); 



/***/ }),

/***/ "./src/validations.js":
/*!****************************!*\
  !*** ./src/validations.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkIfValid": () => (/* binding */ checkIfValid)
/* harmony export */ });
/* harmony import */ var _todos_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos-module.js */ "./src/todos-module.js");


function checkIfValid(title) {
    if(title.length > 10) {
        return 1;
    }
    if(title.split('').every(elem => elem == ' ') || title == undefined) {
        return 3;
    }
    if(_todos_module_js__WEBPACK_IMPORTED_MODULE_0__.myTodos.checkIfRepeated(title) == true) {
        return 4; 
    }

    return 0;
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-load.js */ "./src/page-load.js");
/* harmony import */ var _validations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validations.js */ "./src/validations.js");
/* harmony import */ var _projects_load_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects-load.js */ "./src/projects-load.js");
/* harmony import */ var _projects_module_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects-module.js */ "./src/projects-module.js");
/* harmony import */ var _new_todo_modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-todo-modal.js */ "./src/new-todo-modal.js");
/* harmony import */ var _todos_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todos-module */ "./src/todos-module.js");
/* harmony import */ var _todos_load__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todos-load */ "./src/todos-load.js");
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */









// FUTURE IDEAS:
/*
    ADD A FUNCTION TO EDIT A TODO FROM THE DETAILS TAB, AND TO EDIT A PROJECT NAME.
    ADD A DIV TO THE SIDEBAR TO SHOW THE PROJECTS NAME MORE COMPACT.
    ADD A LITTLE MORE RESPONSIVENESS, AND ADD A MOBILE VERSION.
    MAKE THE CODE LESS MESSY.
*/

// loads the whole page content
(0,_page_load_js__WEBPACK_IMPORTED_MODULE_1__.contentLoader)()

/*
#################################################

    ALL THE LOGIC OF THE ADD NEW PROJECT BUTTON

#################################################
*/
const buttonNewProject = document.querySelector('.new-project')
const buttonConfirmProject = document.querySelector('.button-title')

// this function is called in the confirm button event listener
function projectConfirmed () {
  const backdrop = document.querySelector('.backdrop-modal')
  const modal = document.querySelector('.modal-project')

  const titleValue = document.querySelector('.input-title').value

  if ((0,_validations_js__WEBPACK_IMPORTED_MODULE_2__.checkIfValid)(titleValue) === 1) {
    alert(`The project title "${titleValue}" is too long(10 characters max).`)
  } else if (_projects_module_js__WEBPACK_IMPORTED_MODULE_4__.myProjects.checkIfRepeated(titleValue) === true) {
    alert(`The project title "${titleValue}" already exists.`)
  } else if ((0,_validations_js__WEBPACK_IMPORTED_MODULE_2__.checkIfValid)(titleValue) === 3) {
    alert('The project title is empty.')
  } else {
    (0,_projects_load_js__WEBPACK_IMPORTED_MODULE_3__.createdProject)(titleValue)
    backdrop.style.display = 'none'
    modal.style.display = 'none'
    _projects_module_js__WEBPACK_IMPORTED_MODULE_4__.myProjects.saveInLocalStorage(titleValue)
    buttonConfirmProject.removeEventListener('click', projectConfirmed)
  }
}

buttonNewProject.addEventListener('click', () => {
  // sets the modal to visible
  const backdrop = document.querySelector('.backdrop-modal')
  const modal = document.querySelector('.modal-project')

  backdrop.style.display = 'block'
  modal.style.display = 'flex'

  // adds a event listener on the button to confirm the title selected
  buttonConfirmProject.addEventListener('click', projectConfirmed)

  // adds a event listener on the backdrop to get out of the modal
  backdrop.addEventListener('click', () => {
    backdrop.style.display = 'none'
    modal.style.display = 'none'
  })
})

/*
#################################################

    ALL THE LOGIC OF THE ADD NEW TODO BUTTON

#################################################
*/
const buttonTodo = document.querySelector('.inner-button')
const buttonConfirmTodo = document.querySelector('.buttonModal-todo')

function todoConfirmed () {
  const backdrop = document.querySelector('.backdrop-modal')
  const modal = document.querySelector('.modal-todo')

  const title = document.querySelector('.inputTitle-todo').value
  const desc = document.querySelector('.inputDesc-todo').value
  const date = document.querySelector('.inputDate-todo').value
  const prio = document.querySelector('.inputPrio-todo').value
  const project = document.querySelector('.inputProject-todo').value

  if ((0,_validations_js__WEBPACK_IMPORTED_MODULE_2__.checkIfValid)(title) == 1) {
    alert(`The project title "${title}" is too long(10 characters max).`)
    return
  } else if ((0,_validations_js__WEBPACK_IMPORTED_MODULE_2__.checkIfValid)(title) == 3) {
    alert('The project title is empty.')
  } else if ((0,_validations_js__WEBPACK_IMPORTED_MODULE_2__.checkIfValid)(title) == 4) {
    alert('The title selected is already in use.')
    return
  }

  if ((0,_validations_js__WEBPACK_IMPORTED_MODULE_2__.checkIfValid)(desc) == 3) {
    alert('The description is invalid.')
    return
  }

  if (date === '') {
    alert('The date is invalid.')
    return
  }

  _todos_module__WEBPACK_IMPORTED_MODULE_6__.myTodos.saveInLocalStorage(title, desc, date, prio, project)

  backdrop.style.display = 'none'
  modal.style.display = 'none'

  // goes to the home tab
  ;(0,_todos_load__WEBPACK_IMPORTED_MODULE_7__.showTodos)()

  buttonConfirmTodo.removeEventListener('click', todoConfirmed)
}

buttonTodo.addEventListener('click', () => {
  const backdrop = document.querySelector('.backdrop-modal')
  const modalTodo = document.querySelector('.modal-todo')

  // dinamically creates the projects options in case i created another project
  ;(0,_new_todo_modal_js__WEBPACK_IMPORTED_MODULE_5__.removeOptions)()
  ;(0,_new_todo_modal_js__WEBPACK_IMPORTED_MODULE_5__.createOptions)()

  backdrop.style.display = 'block'
  modalTodo.style.display = 'flex'

  buttonConfirmTodo.addEventListener('click', todoConfirmed)

  backdrop.addEventListener('click', () => {
    backdrop.style.display = 'none'
    modalTodo.style.display = 'none'
  })
})

/*
#################################################

    SIDEBAR OPTIONS TO SHOW TODOS

#################################################
*/
const homeTodos = document.querySelector('#home-bar')
const todayTodos = document.querySelector('#today-bar')
const weekTodos = document.querySelector('#week-bar')

homeTodos.addEventListener('click', _todos_load__WEBPACK_IMPORTED_MODULE_7__.showTodos)
todayTodos.addEventListener('click', _todos_load__WEBPACK_IMPORTED_MODULE_7__.loadTodayTodos)
weekTodos.addEventListener('click', _todos_load__WEBPACK_IMPORTED_MODULE_7__.loadThisWeekTodos)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qcyIsIndlYnBhY2s6Ly90b2RvLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tcGFnZS8uL3NyYy9uZXctcHJvamVjdC1tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLXBhZ2UvLi9zcmMvbmV3LXRvZG8tbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly90b2RvLXBhZ2UvLi9zcmMvcHJvamVjdHMtbG9hZC5qcyIsIndlYnBhY2s6Ly90b2RvLXBhZ2UvLi9zcmMvcHJvamVjdHMtbW9kdWxlLmpzIiwid2VicGFjazovL3RvZG8tcGFnZS8uL3NyYy9zaWRlYmFyLWxvYWQuanMiLCJ3ZWJwYWNrOi8vdG9kby1wYWdlLy4vc3JjL3RvZG9zLWxvYWQuanMiLCJ3ZWJwYWNrOi8vdG9kby1wYWdlLy4vc3JjL3RvZG9zLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2RvLXBhZ2UvLi9zcmMvdmFsaWRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLXBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRiw2SEFBNkg7QUFDN0g7QUFDQSxnR0FBZ0csZ0JBQWdCLG9CQUFvQixrQkFBa0IsMENBQTBDLG1CQUFtQixHQUFHLHNCQUFzQixnQkFBZ0IsbUJBQW1CLGtCQUFrQixHQUFHLGtCQUFrQix5QkFBeUIsYUFBYSxjQUFjLGVBQWUsa0NBQWtDLHFCQUFxQixzQkFBc0Isa0NBQWtDLDBCQUEwQixHQUFHLGNBQWMsb0JBQW9CLDZCQUE2QiwwQkFBMEIsa0NBQWtDLDJCQUEyQixjQUFjLGdCQUFnQixxQkFBcUIsa0JBQWtCLGtDQUFrQyw0QkFBNEIsc0JBQXNCLDRCQUE0QixHQUFHLHNCQUFzQix5QkFBeUIsZUFBZSxnQkFBZ0Is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T0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFdBQVcsWUFBWSxZQUFZLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFdBQVcsYUFBYSxXQUFXLFdBQVcsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sUUFBUSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssYUFBYSxhQUFhLGNBQWMsYUFBYSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFFBQVEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLGFBQWEsYUFBYSxXQUFXLFdBQVcsVUFBVSxZQUFZLGFBQWEsY0FBYyxZQUFZLFlBQVksY0FBYyxXQUFXLE1BQU0sS0FBSyxVQUFVLGFBQWEsYUFBYSxjQUFjLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8s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O0FDVmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9Db0I7O0FBRXBCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JYOztBQUVyQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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NkRBQVk7QUFDbEIsZ0NBQWdDLE1BQU07QUFDdEM7QUFDQSxHQUFHLFVBQVUsNkRBQVk7QUFDekI7QUFDQSxHQUFHLFVBQVUsNkRBQVk7QUFDekI7QUFDQTtBQUNBOztBQUVBLE1BQU0sNkRBQVk7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUscUVBQTBCOztBQUU1QjtBQUNBOztBQUVBO0FBQ0EsRUFBRSx1REFBUzs7QUFFWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsa0VBQWE7QUFDZixFQUFFLGtFQUFhOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyxrREFBUztBQUM3QyxxQ0FBcUMsdURBQWM7QUFDbkQsb0NBQW9DLDBEQUFpQiIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVByb21wdDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiAgICBXSE9MRSBQQUdFIEJBU0lDIFNUUlVDVFVSRSBTVFlMRVMuXFxuKi9cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdQcm9tcHQnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250YWluZXItdG90YWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oZWFkZXItcGFnZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwNzE5NjtcXG5cXG4gICAgaGVpZ2h0OiAxNXZoO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG5cXG4gICAgaGVpZ2h0OiA4NXZoO1xcbiAgICB3aWR0aDogMzh2aDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JBQkZEMTtcXG4gICAgY29sb3I6cmdiKDI5LCAyOSwgMjkpO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuXFxuICAgIG92ZXJmbG93LXk6IG92ZXJsYXk7XFxufVxcblxcbi5saXN0cy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDM4dmg7XFxuXFxuICAgIGhlaWdodDogODV2aDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4RTlFRDtcXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteTogb3ZlcmxheTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICB3aWR0aDogNjRweDtcXG4gICAgaGVpZ2h0OiA2NHB4O1xcblxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4udGl0bGUtcGFnZSB7XFxuICAgIGZvbnQtc2l6ZTogMzhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG5cXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uc3Bhbi1zaWRlYmFyOmZpcnN0LW9mLXR5cGUge1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4uc3Bhbi1zaWRlYmFyIHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuXFxuICAgIGZvbnQtc2l6ZTogMS45cmVtO1xcbn1cXG5cXG4uc3Bhbi1zaWRlYmFyOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuXFxuICAgIHRleHQtc2hhZG93OiAwIDAgMXB4ICM2NjY7XFxufVxcblxcbi8qIEFDVElWRSBNRU5VIElURU0gKi9cXG4uYWN0aXZlLXByb2plY3Qge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuICAgIGNvbG9yOiBibGFjaztcXG5cXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxcHggcmdiKDAsIDAsIDApO1xcbn1cXG5cXG4vKnByb2plY3RzIHRpdGxlKi9cXG4uc3Bhbi1wcm9qZWN0cyB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgZm9udC1zaXplOiAxLjlyZW07XFxufVxcblxcbi8qcHJvamVjdHMgdGl0bGUgYW5kIGRlbGV0ZSBjb250YWluZXIqL1xcbi5jb250YWluZXItc3Bhbi1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICB3aWR0aDogMTcwcHg7XFxufVxcblxcbi8qcHJvamVjdHMgZGVsZXRlIGJ1dHRvbiovXFxuLmRlbGV0ZS1zcGFuLXByb2plY3Qge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6IHJnYigxMjYsIDIyLCAyMik7XFxuXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmRlbGV0ZS1zcGFuLXByb2plY3Q6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLypcXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xcbiAgICBUT0RPUyBTVFlMSU5HXFxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcXG4qL1xcblxcbi5jb250YWluZXItdG9kbyB7XFxuICAgIGhlaWdodDogMXJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXJnaW46IDAuN3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZTFmMDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBvcGFjaXR5OjE7XFxuXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5OTk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuM3M7XFxufVxcblxcbi5zaWRlLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2JveC10b2RvIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItY29sb3I6ICMzMzM7XFxuXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuXFxuLmNoZWNrYm94LXRvZG86aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDEzMywgNzApO1xcbn1cXG5cXG4udGl0bGUtdG9kbyB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmRldGFpbHMtdG9kbyB7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgXFxuICAgIGNvbG9yOiByZ2IoNDEsIDEyMiwgNDEpO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDQxLCAxMjIsIDQxKTtcXG5cXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmRhdGUtdG9kbyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5kZWxldGUtdG9kbyB7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG5cXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuXFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5kZXRhaWxzLXRvZG86aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS10b2RvOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qc2luZ2xlIHByb2plY3QqL1xcbi5zcGFuLXByb2plY3Qge1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5zcGFuLXByb2plY3Q6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG5cXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxcHggIzY2NjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IHtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDFweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJvcmRlciAxcztcXG5cXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogIzY2NjtcXG4gICAgYm9yZGVyOiAwLjJweCAjOTk5O1xcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZCBzb2xpZDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0OmhvdmVyIHtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAycHggIzk5OTtcXG59XFxuXFxuLyogU1RZTElORyBCVVRUT04gVE8gQUREIFRPRE9TICovXFxuLmJ1dHRvbi10b2RvIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDQwcHg7XFxuICAgIHJpZ2h0OiA0MHB4O1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwNzE5NjtcXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmlubmVyLWJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICB0b3A6IC0zMHB4O1xcbiAgICByaWdodDogMXB4O1xcblxcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcblxcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuXFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5pbm5lci1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICMzMzM7XFxufVxcblxcbi8qXFxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xcbiAgICBNT0RBTCBUTyBBREQgQSBORVcgUFJPSkVDVCBTVFlMSU5HXFxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xcbiovXFxuLmJhY2tkcm9wLW1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubW9kYWwtcHJvamVjdCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAxMCU7XFxuICAgIGxlZnQ6IDI1JTtcXG4gICAgei1pbmRleDogMTtcXG5cXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcbiAgICB3aWR0aDogNTB2dztcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi50aXRsZS1wcm9qZWN0IHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbn0gICBcXG5cXG4uaW5wdXQtdGl0bGUge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG5cXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDMwcHg7XFxufVxcblxcbi5idXR0b24tdGl0bGUge1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcblxcbiAgICBib3JkZXI6IDAuM3B4IHNvbGlkICM2NjY7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDQxLCAxMjIsIDQxKTtcXG5cXG4gICAgY29sb3I6IHJnYig0MSwgMTIyLCA0MSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5idXR0b24tdGl0bGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLypcXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyNcXG4gICAgU1RZTEUgVE9ETyBNT0RBTFxcbiMjIyMjIyMjIyMjIyMjIyMjIyMjI1xcbiovXFxuXFxuLm1vZGFsLXRvZG8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAwcHg7XFxuICAgIGxlZnQ6IDM3JTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcblxcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgd2lkdGg6IDMwJTtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi50b2RvLWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcblxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcblxcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5pbnB1dERlc2MtdG9kbyB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmJ1dHRvbk1vZGFsLXRvZG8ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBib3JkZXI6IDAuM3B4IHNvbGlkICM2NjY7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDQxLCAxMjIsIDQxKTtcXG4gICAgY29sb3I6IHJnYig0MSwgMTIyLCA0MSk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmJ1dHRvbk1vZGFsLXRvZG86aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuc2VsZWN0Omxhc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi8qXFxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXFxuICAgIFNUWUxJTkcgTU9EQUwgREVUQUlMU1xcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xcbiovXFxuXFxuLm1vZGFsLWRldGFpbHMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAwcHg7XFxuICAgIGxlZnQ6IDM3JTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcblxcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgd2lkdGg6IDMwJTtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5sYWJlbC1kZXRhaWxzIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcblxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5jb250ZW50LWRldGFpbHMge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIFxcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4uZXhpdC1kZXRhaWxzIHtcXG4gICAgY29sb3I6ICNlMDUzNTU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcblxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uZXhpdC1kZXRhaWxzOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7O0NBRUM7QUFDRDtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsV0FBVzs7SUFFWCxpQ0FBaUM7SUFDakMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTs7SUFFUix5QkFBeUI7O0lBRXpCLFlBQVk7O0lBRVosYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiwyQkFBMkI7O0lBRTNCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUzs7SUFFVCxZQUFZO0lBQ1osV0FBVzs7SUFFWCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGVBQWU7O0lBRWYsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTs7SUFFVixZQUFZOztJQUVaLHlCQUF5Qjs7SUFFekIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtB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O0lBQ1YsU0FBUztJQUNULGdCQUFnQjs7SUFFaEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixlQUFlOztJQUVmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7SUFFdkIsVUFBVTs7SUFFVix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCOztJQUVoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7O0lBRVosbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTs7SUFFZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7O0lBRWhCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVzs7SUFFWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVByb21wdDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKlxcbiAgICBXSE9MRSBQQUdFIEJBU0lDIFNUUlVDVFVSRSBTVFlMRVMuXFxuKi9cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdQcm9tcHQnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250YWluZXItdG90YWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oZWFkZXItcGFnZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwNzE5NjtcXG5cXG4gICAgaGVpZ2h0OiAxNXZoO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG5cXG4gICAgaGVpZ2h0OiA4NXZoO1xcbiAgICB3aWR0aDogMzh2aDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JBQkZEMTtcXG4gICAgY29sb3I6cmdiKDI5LCAyOSwgMjkpO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuXFxuICAgIG92ZXJmbG93LXk6IG92ZXJsYXk7XFxufVxcblxcbi5saXN0cy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDM4dmg7XFxuXFxuICAgIGhlaWdodDogODV2aDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4RTlFRDtcXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteTogb3ZlcmxheTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICB3aWR0aDogNjRweDtcXG4gICAgaGVpZ2h0OiA2NHB4O1xcblxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4udGl0bGUtcGFnZSB7XFxuICAgIGZvbnQtc2l6ZTogMzhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG5cXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uc3Bhbi1zaWRlYmFyOmZpcnN0LW9mLXR5cGUge1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4uc3Bhbi1zaWRlYmFyIHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuXFxuICAgIGZvbnQtc2l6ZTogMS45cmVtO1xcbn1cXG5cXG4uc3Bhbi1zaWRlYmFyOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuXFxuICAgIHRleHQtc2hhZG93OiAwIDAgMXB4ICM2NjY7XFxufVxcblxcbi8qIEFDVElWRSBNRU5VIElURU0gKi9cXG4uYWN0aXZlLXByb2plY3Qge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuICAgIGNvbG9yOiBibGFjaztcXG5cXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxcHggcmdiKDAsIDAsIDApO1xcbn1cXG5cXG4vKnByb2plY3RzIHRpdGxlKi9cXG4uc3Bhbi1wcm9qZWN0cyB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgZm9udC1zaXplOiAxLjlyZW07XFxufVxcblxcbi8qcHJvamVjdHMgdGl0bGUgYW5kIGRlbGV0ZSBjb250YWluZXIqL1xcbi5jb250YWluZXItc3Bhbi1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICB3aWR0aDogMTcwcHg7XFxufVxcblxcbi8qcHJvamVjdHMgZGVsZXRlIGJ1dHRvbiovXFxuLmRlbGV0ZS1zcGFuLXByb2plY3Qge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6IHJnYigxMjYsIDIyLCAyMik7XFxuXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmRlbGV0ZS1zcGFuLXByb2plY3Q6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLypcXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xcbiAgICBUT0RPUyBTVFlMSU5HXFxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcXG4qL1xcblxcbi5jb250YWluZXItdG9kbyB7XFxuICAgIGhlaWdodDogMXJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXJnaW46IDAuN3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZTFmMDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBvcGFjaXR5OjE7XFxuXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5OTk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuM3M7XFxufVxcblxcbi5zaWRlLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2JveC10b2RvIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItY29sb3I6ICMzMzM7XFxuXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuXFxuLmNoZWNrYm94LXRvZG86aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDEzMywgNzApO1xcbn1cXG5cXG4udGl0bGUtdG9kbyB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmRldGFpbHMtdG9kbyB7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgXFxuICAgIGNvbG9yOiByZ2IoNDEsIDEyMiwgNDEpO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDQxLCAxMjIsIDQxKTtcXG5cXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmRhdGUtdG9kbyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5kZWxldGUtdG9kbyB7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG5cXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuXFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5kZXRhaWxzLXRvZG86aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS10b2RvOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qc2luZ2xlIHByb2plY3QqL1xcbi5zcGFuLXByb2plY3Qge1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5zcGFuLXByb2plY3Q6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG5cXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxcHggIzY2NjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0IHtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDFweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJvcmRlciAxcztcXG5cXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogIzY2NjtcXG4gICAgYm9yZGVyOiAwLjJweCAjOTk5O1xcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZCBzb2xpZDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0OmhvdmVyIHtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAycHggIzk5OTtcXG59XFxuXFxuLyogU1RZTElORyBCVVRUT04gVE8gQUREIFRPRE9TICovXFxuLmJ1dHRvbi10b2RvIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDQwcHg7XFxuICAgIHJpZ2h0OiA0MHB4O1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwNzE5NjtcXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmlubmVyLWJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICB0b3A6IC0zMHB4O1xcbiAgICByaWdodDogMXB4O1xcblxcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcblxcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuXFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5pbm5lci1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICMzMzM7XFxufVxcblxcbi8qXFxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xcbiAgICBNT0RBTCBUTyBBREQgQSBORVcgUFJPSkVDVCBTVFlMSU5HXFxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xcbiovXFxuLmJhY2tkcm9wLW1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubW9kYWwtcHJvamVjdCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAxMCU7XFxuICAgIGxlZnQ6IDI1JTtcXG4gICAgei1pbmRleDogMTtcXG5cXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcbiAgICB3aWR0aDogNTB2dztcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi50aXRsZS1wcm9qZWN0IHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbn0gICBcXG5cXG4uaW5wdXQtdGl0bGUge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG5cXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDMwcHg7XFxufVxcblxcbi5idXR0b24tdGl0bGUge1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcblxcbiAgICBib3JkZXI6IDAuM3B4IHNvbGlkICM2NjY7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDQxLCAxMjIsIDQxKTtcXG5cXG4gICAgY29sb3I6IHJnYig0MSwgMTIyLCA0MSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5idXR0b24tdGl0bGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLypcXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyNcXG4gICAgU1RZTEUgVE9ETyBNT0RBTFxcbiMjIyMjIyMjIyMjIyMjIyMjIyMjI1xcbiovXFxuXFxuLm1vZGFsLXRvZG8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAwcHg7XFxuICAgIGxlZnQ6IDM3JTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcblxcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgd2lkdGg6IDMwJTtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi50b2RvLWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcblxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcblxcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5pbnB1dERlc2MtdG9kbyB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmJ1dHRvbk1vZGFsLXRvZG8ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBib3JkZXI6IDAuM3B4IHNvbGlkICM2NjY7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDQxLCAxMjIsIDQxKTtcXG4gICAgY29sb3I6IHJnYig0MSwgMTIyLCA0MSk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmJ1dHRvbk1vZGFsLXRvZG86aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuc2VsZWN0Omxhc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi8qXFxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXFxuICAgIFNUWUxJTkcgTU9EQUwgREVUQUlMU1xcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xcbiovXFxuXFxuLm1vZGFsLWRldGFpbHMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAwcHg7XFxuICAgIGxlZnQ6IDM3JTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcblxcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgd2lkdGg6IDMwJTtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5sYWJlbC1kZXRhaWxzIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcblxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5jb250ZW50LWRldGFpbHMge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIFxcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4uZXhpdC1kZXRhaWxzIHtcXG4gICAgY29sb3I6ICNlMDUzNTU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcblxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uZXhpdC1kZXRhaWxzOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgZ2V0VGFyZ2V0IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IGZ1bmN0aW9uKGNzcywgc3R5bGUpe1xuICAgICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICB9XG4gIH07XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICB2YXIgbm9uY2UgPVxuICAgICAgICAgIHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgICAgICBpZiAobm9uY2UpIHtcbiAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKHN0eWxlKXtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KFwiaGVhZFwiKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiXG4gICAgICApO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH07XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYXJnZXQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3RNb2RhbCAoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcblxuICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLy8gZm9yIHRoZSBtb2RhbFxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgY29uc3QgYnV0dG9uQWNjZXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG5cbiAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1dyaXRlIHlvdXIgcHJvamVjdCB0aXRsZSBoZXJlLi4uJylcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUtcHJvamVjdCcpXG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LXRpdGxlJylcbiAgYnV0dG9uQWNjZXB0LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi10aXRsZScpXG4gIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ2JhY2tkcm9wLW1vZGFsJylcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwtcHJvamVjdCcpXG5cbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnU2V0IHlvdXIgcHJvamVjdCBuYW1lOiAnXG4gIGJ1dHRvbkFjY2VwdC50ZXh0Q29udGVudCA9ICdDb25maXJtJ1xuXG4gIG1vZGFsLmFwcGVuZENoaWxkKHRpdGxlKVxuICBtb2RhbC5hcHBlbmRDaGlsZChpbnB1dClcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoYnV0dG9uQWNjZXB0KVxuICBib2R5LmFwcGVuZENoaWxkKGJhY2tkcm9wKVxuICBib2R5LmFwcGVuZENoaWxkKG1vZGFsKVxufVxuXG5leHBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0TW9kYWwgfVxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1RvZG9Nb2RhbCgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBpbnB1dERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBpbnB1dFByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcblxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGlucHV0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG4gICAgY29uc3QgYnV0dG9uQWNjZXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsXCJXcml0ZSB5b3VyIHByb2plY3QgdGl0bGUgaGVyZS4uLlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWxhYmVsJyk7XG4gICAgaW5wdXRUaXRsZS5jbGFzc0xpc3QuYWRkKCdpbnB1dFRpdGxlLXRvZG8nKTtcblxuICAgIGlucHV0RGVzYy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJyxcIldyaXRlIHlvdXIgcHJvamVjdCBkZXNjcmlwdGlvbiBoZXJlLi4uXCIpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGFiZWwnKTtcbiAgICBpbnB1dERlc2MuY2xhc3NMaXN0LmFkZCgnaW5wdXREZXNjLXRvZG8nKTtcbiAgICBcbiAgICBpbnB1dERhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpO1xuICAgIGlucHV0RGF0ZS5jbGFzc0xpc3QuYWRkKCdpbnB1dERhdGUtdG9kbycpO1xuICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgndG9kby1sYWJlbCcpO1xuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7IC8vIGdldCBjdXJyZW50IGRhdGUgYW5kIHNldCBpdCB0byB0aGUgbWluaW11bSBkYXRlXG4gICAgaW5wdXREYXRlLnNldEF0dHJpYnV0ZSgnbWluJywgdG9kYXkpO1xuXG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9kby1sYWJlbCcpO1xuICAgIGlucHV0UHJpby5jbGFzc0xpc3QuYWRkKCdpbnB1dFByaW8tdG9kbycpO1xuXG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCd0b2RvLWxhYmVsJyk7XG4gICAgaW5wdXRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2lucHV0UHJvamVjdC10b2RvJyk7XG5cbiAgICBidXR0b25BY2NlcHQuY2xhc3NMaXN0LmFkZCgnYnV0dG9uTW9kYWwtdG9kbycpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLXRvZG8nKTtcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJUb2RvIG5hbWU6IFwiO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjogXCI7XG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IFwiVGFyZ2V0IGRhdGU6IFwiO1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCI7XG4gICAgcHJvamVjdC50ZXh0Q29udGVudCA9IFwiUHJvamVjdDogXCI7XG4gICAgYnV0dG9uQWNjZXB0LnRleHRDb250ZW50ID0gXCJDb25maXJtXCI7XG5cbiAgICBtb2RhbC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG5cbiAgICBtb2RhbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoaW5wdXREZXNjKTtcblxuICAgIG1vZGFsLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKGlucHV0RGF0ZSk7XG5cbiAgICBtb2RhbC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoaW5wdXRQcmlvKTtcblxuICAgIG1vZGFsLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKGlucHV0UHJvamVjdCk7XG5cbiAgICBtb2RhbC5hcHBlbmRDaGlsZChidXR0b25BY2NlcHQpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xufVxuXG5mdW5jdGlvbiBzaG93RGV0YWlsc01vZGFsKHRpdGxlVG9kbykge1xuICAgIGxldCB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbGxFbnRyaWVzXCIpKTtcbiAgICBsZXQgaW5kZXhUaXRsZSA9IHRvZG9zLmZpbmRJbmRleChlbCA9PiBlbFtcIlRpdGxlXCJdID09PSB0aXRsZVRvZG8pO1xuXG4gICAgbGV0IGxhYmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYWJlbC1kZXRhaWxzJyk7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGVudC1kZXRhaWxzJyk7XG4gICAgXG4gICAgbGV0IGFycmF5TGFiZWxzID0gW1wiVGl0bGU6IFwiLCBcIkRlc2NyaXB0aW9uOiBcIiwgXCJUYXJnZXQgRGF0ZTogXCIsIFwiUHJpb3JpdHk6IFwiLCBcIlRpdGxlOiBcIl07XG4gICAgbGV0IGFycmF5Q29udGVudHMgPSBbdG9kb3NbaW5kZXhUaXRsZV1bJ1RpdGxlJ10sIHRvZG9zW2luZGV4VGl0bGVdWydEZXNjcmlwdGlvbiddICwgdG9kb3NbaW5kZXhUaXRsZV1bJ0RhdGUnXSAsIHRvZG9zW2luZGV4VGl0bGVdWydQcmlvcml0eSddICwgdG9kb3NbaW5kZXhUaXRsZV1bJ1Byb2plY3QnXV07XG5cbiAgICBsYWJlbHMgPSBBcnJheS5mcm9tKGxhYmVscyk7XG4gICAgY29udGVudCA9IEFycmF5LmZyb20oY29udGVudCk7XG5cbiAgICBsYWJlbHMuZm9yRWFjaCgobGFiZWwsaW5kZXgpID0+IHtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBhcnJheUxhYmVsc1tpbmRleF07XG4gICAgfSk7XG5cbiAgICBjb250ZW50LmZvckVhY2goKGNvbnRlbnQsaW5kZXgpID0+IHtcbiAgICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IGFycmF5Q29udGVudHNbaW5kZXhdO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXRhaWxzTW9kYWwoKSB7XG5cbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBsZXQgbW9kYWxEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGxldCB0aXRsZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbGV0IGRlc2NDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIFxuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBsZXQgZGF0ZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBsZXQgcHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbGV0IHByaW9Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGxldCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGxldCBleGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBtb2RhbERldGFpbHMuY2xhc3NMaXN0LmFkZCgnbW9kYWwtZGV0YWlscycpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2xhYmVsLWRldGFpbHMnKTtcbiAgICB0aXRsZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudC1kZXRhaWxzJyk7XG4gICAgZGVzYy5jbGFzc0xpc3QuYWRkKCdsYWJlbC1kZXRhaWxzJyk7XG4gICAgZGVzY0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudC1kZXRhaWxzJyk7XG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdsYWJlbC1kZXRhaWxzJyk7XG4gICAgZGF0ZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudC1kZXRhaWxzJyk7XG4gICAgcHJpby5jbGFzc0xpc3QuYWRkKCdsYWJlbC1kZXRhaWxzJyk7XG4gICAgcHJpb0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudC1kZXRhaWxzJyk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdsYWJlbC1kZXRhaWxzJyk7XG4gICAgcHJvamVjdENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudC1kZXRhaWxzJyk7XG4gICAgZXhpdC5jbGFzc0xpc3QuYWRkKCdleGl0LWRldGFpbHMnKTtcblxuICAgIGV4aXQudGV4dENvbnRlbnQgPSBcIlhcIjtcblxuICAgIG1vZGFsRGV0YWlscy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgbW9kYWxEZXRhaWxzLmFwcGVuZENoaWxkKHRpdGxlQ29udGVudCk7XG5cbiAgICBtb2RhbERldGFpbHMuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gICAgbW9kYWxEZXRhaWxzLmFwcGVuZENoaWxkKGRlc2NDb250ZW50KTtcblxuICAgIG1vZGFsRGV0YWlscy5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICBtb2RhbERldGFpbHMuYXBwZW5kQ2hpbGQoZGF0ZUNvbnRlbnQpO1xuXG4gICAgbW9kYWxEZXRhaWxzLmFwcGVuZENoaWxkKHByaW8pO1xuICAgIG1vZGFsRGV0YWlscy5hcHBlbmRDaGlsZChwcmlvQ29udGVudCk7XG5cbiAgICBtb2RhbERldGFpbHMuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgbW9kYWxEZXRhaWxzLmFwcGVuZENoaWxkKHByb2plY3RDb250ZW50KTtcblxuICAgIG1vZGFsRGV0YWlscy5hcHBlbmRDaGlsZChleGl0KTtcbiAgICBib2R5LmFwcGVuZENoaWxkKG1vZGFsRGV0YWlscyk7XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlT3B0aW9ucygpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRQcm9qZWN0LXRvZG8nKTtcbiAgICBjb25zdCBzZWxlY3RQcmlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0UHJpby10b2RvJyk7XG5cbiAgICBsZXQgcHJpb3MgPSBbJ0hpZ2gnLCdNZWRpdW0nLCdMb3cnXTtcbiAgICBsZXQgY29sb3JzID0gWycjZTA1MzU1JywgJyNDQ0NBM0EnLCAnIzRhOGY1MSddO1xuXG4gICAgLy8gTk8gUFJPSkVDVCBPUFRJT05cbiAgICBjb25zdCBvcHRpb25FbXB0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbkVtcHR5LnRleHRDb250ZW50ID0gXCJubyBwcm9qZWN0XCI7XG5cbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uRW1wdHkpO1xuXG4gICAgbGV0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFsbFByb2plY3RzXCIpKTtcbiAgICBpZihwcm9qZWN0cyA9PT0gbnVsbCkgcHJvamVjdHMgPSBbXTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgbmFtZSA9IHByb2plY3RzW2ldO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9zW2ldO1xuICAgICAgICBvcHRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgb3B0aW9uLnN0eWxlLmNvbG9yID0gY29sb3JzW2ldO1xuXG4gICAgICAgIHNlbGVjdFByaW8uYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU9wdGlvbnMoKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0UHJvamVjdC10b2RvJyk7XG4gICAgY29uc3Qgc2VsZWN0UHJpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dFByaW8tdG9kbycpO1xuXG4gICAgd2hpbGUoc2VsZWN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc2VsZWN0LnJlbW92ZUNoaWxkKHNlbGVjdC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICB3aGlsZShzZWxlY3RQcmlvLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc2VsZWN0UHJpby5yZW1vdmVDaGlsZChzZWxlY3RQcmlvLmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgcmVtb3ZlT3B0aW9ucyAsIGNyZWF0ZU9wdGlvbnMgLCBjcmVhdGVOZXdUb2RvTW9kYWwgLCBzaG93RGV0YWlsc01vZGFsICwgY3JlYXRlRGV0YWlsc01vZGFsfSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9sb2dvLnN2Zyc7XG5pbXBvcnQgeyBzaWRlYmFyTG9hZCB9IGZyb20gJy4vc2lkZWJhci1sb2FkLmpzJztcbmltcG9ydCB7IGFkZFRvZG9CdXR0b24gLCBzaG93VG9kb3MgfSBmcm9tICcuL3RvZG9zLWxvYWQuanMnO1xuaW1wb3J0IHsgYWRkTmV3UHJvamVjdExvYWQgLCBwcm9qZWN0c05hbWVMb2FkIH0gZnJvbSAnLi9wcm9qZWN0cy1sb2FkJztcbmltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3RNb2RhbCB9IGZyb20gJy4vbmV3LXByb2plY3QtbW9kYWwuanMnO1xuaW1wb3J0IHsgY3JlYXRlTmV3VG9kb01vZGFsICwgY3JlYXRlRGV0YWlsc01vZGFsIH0gZnJvbSAnLi9uZXctdG9kby1tb2RhbC5qcyc7XG5cbi8qXG4gICAgIyNcbiAgICBUSElTIEZVTkNUSU9OIFRBS0VTIENBUkUgT0YgQUxMIFRIRSBCQVNJQyBIVE1MIFNUUlVDVFVSRSBXSVRIIFRIRSBJVEVNUyBUSEFUIFdJTExcbiAgICBBTFdBWVMgQkUgVEhFUkUuXG4gICAgIyNcbiovXG5cbmZ1bmN0aW9uIGNvbnRlbnRMb2FkZXIoKSB7XG5cbiAgICAvL0FERCBUSEUgQ09OVEFJTkVSIE9GIFRIRSBXSE9MRSBQQUdFXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lclRvdGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyVG90YWwuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLXRvdGFsJyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXJUb3RhbCk7XG5cbiAgICAvL0FERFMgVEhFIFBBR0UgSEVBREVSIFdJVEggQUxMIElUUyBDT05URU5UXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgdGl0bGVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xuXG4gICAgbXlJY29uLnNyYyA9IEljb247XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1wYWdlJyk7XG4gICAgbXlJY29uLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgICB0aXRsZVBhZ2UuY2xhc3NMaXN0LmFkZCgndGl0bGUtcGFnZScpO1xuICAgIG15SWNvbi5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdJY29uIGJ5IGh0dHBzOi8vZnJlZWljb25zLmlvL3Byb2ZpbGUvODIzIC0gTXVoYW1tYWQgSGFxJyk7XG4gICAgdGl0bGVQYWdlLnRleHRDb250ZW50ID0gJ1RPRE8gTElTVCEnO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG15SWNvbik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlUGFnZSk7XG4gICAgY29udGFpbmVyVG90YWwuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIC8vQUREUyBUSEUgUEFHRSBTSURFQkFSXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG5cbiAgICBjb250YWluZXJUb3RhbC5hcHBlbmRDaGlsZChzaWRlYmFyKTtcblxuICAgIC8vbG9hZHMgdGhlIHNpZGViYXIgd2l0aCB0aGUgdGV4dCB0aGF0IHdpbGwgYWx3YXlzIGJlIHRoZXJlXG4gICAgc2lkZWJhckxvYWQoKTtcblxuICAgIC8vQUREUyBUSEUgUEFHRSBMSVNUUyBDT05URU5UIEhPTERFUlxuICAgIGNvbnN0IGxpc3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBsaXN0cy5jbGFzc0xpc3QuYWRkKCdsaXN0cy1jb250YWluZXInKTtcblxuICAgIGNvbnRhaW5lclRvdGFsLmFwcGVuZENoaWxkKGxpc3RzKTtcblxuICAgIC8vdGhpcyBsaW5lcyBmaXJzdCByZW5kZXIgdGhlIHRvZG8ncyB0aGVuIHRoZSAnYnV0dG9uJyB0byBhZGQgbmV3IHByb2plY3RzIFxuICAgIC8vYW5kIHRoZW4gdGhlIHByb2plY3RzIGFscmVhZHkgY3JlYXRlZCBhbmQgdGhlIGJ1dHRvbiB0byBhZGQgbmV3IHRvZG9zXG4gICAgc2hvd1RvZG9zKCk7XG4gICAgYWRkTmV3UHJvamVjdExvYWQoKTtcbiAgICBwcm9qZWN0c05hbWVMb2FkKCk7XG4gICAgYWRkVG9kb0J1dHRvbigpO1xuXG4gICAgLy9DcmVhdGVzIHRoZSBtb2RhbCBmb3Igd2hlbiB0aGUgbmV3IHByb2plY3QgYnV0dG9uIGlzIGNsaWNrZWRcbiAgICBjcmVhdGVOZXdQcm9qZWN0TW9kYWwoKTtcbiAgICBjcmVhdGVOZXdUb2RvTW9kYWwoKTtcbiAgICBjcmVhdGVEZXRhaWxzTW9kYWwoKTtcblxufVxuXG5leHBvcnQgeyBjb250ZW50TG9hZGVyIH07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBteVByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0cy1tb2R1bGUuanMnO1xuaW1wb3J0IHsgbG9hZFByb2plY3RUb2RvIH0gZnJvbSAnLi90b2Rvcy1sb2FkLmpzJztcbmltcG9ydCB7IG15VG9kb3MgfSBmcm9tICcuL3RvZG9zLW1vZHVsZS5qcyc7XG5cbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3RMb2FkKCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ25ldy1wcm9qZWN0Jyk7XG5cbiAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gJ0FkZCBhIG5ldyBwcm9qZWN0JztcblxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RzTmFtZUxvYWQoKSB7XG5cbiAgICBsZXQgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxsUHJvamVjdHNcIikpO1xuXG4gICAgaWYocHJvamVjdHMgPT09IG51bGwpIHByb2plY3RzID0gW107XG5cbiAgICAvL0NSRUFURVMgQSBQUk9KRUNUIFNQQU4gRk9SIEVWRVJZIFVOSVFVRSBQUk9KRUNUIE5BTUVcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgICAgY29uc3QgY29udGFpbmVyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGNvbnN0IHByb2plY3RTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgY29uc3QgZGVsZXRlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgcHJvamVjdFNwYW4uY2xhc3NMaXN0LmFkZCgnc3Bhbi1wcm9qZWN0Jyk7XG4gICAgICBkZWxldGVTcGFuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1zcGFuLXByb2plY3QnKTtcbiAgICAgIGNvbnRhaW5lclNwYW4uY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLXNwYW4tcHJvamVjdCcpO1xuXG4gICAgICBwcm9qZWN0U3Bhbi50ZXh0Q29udGVudCA9ICfigKIgJyArIHByb2plY3RzW2ldO1xuICAgICAgZGVsZXRlU3Bhbi50ZXh0Q29udGVudCA9ICdYJztcblxuICAgICAgcHJvamVjdFNwYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxvYWRQcm9qZWN0VG9kbyhwcm9qZWN0c1tpXSk7XG5cbiAgICAgICAgLy9UQUtFUyBDQVJFIE9GIFRIRSBBQ1RJVkUgTUVOVSBJVEVNIFNUWUxJTkdcbiAgICAgICAgY29uc3QgZXZlcnlQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwYW4tcHJvamVjdCcpO1xuICAgICAgICBjb25zdCBldmVyeURlZmF1bHRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwYW4tc2lkZWJhcicpO1xuXG4gICAgICAgIEFycmF5LmZyb20oZXZlcnlQcm9qZWN0KS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgaWYocHJvamVjdC5jbGFzc0xpc3RbMV0gPT09ICdhY3RpdmUtcHJvamVjdCcpIHtcbiAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXByb2plY3QnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIEFycmF5LmZyb20oZXZlcnlEZWZhdWx0UHJvamVjdCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgIGlmKHByb2plY3QuY2xhc3NMaXN0WzFdID09PSAnYWN0aXZlLXByb2plY3QnKSB7XG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBwcm9qZWN0U3Bhbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXByb2plY3RcIik7XG4gICAgICB9KTtcbiAgICBcbiAgICAgIGRlbGV0ZVNwYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG15UHJvamVjdHMucmVtb3ZlUHJvamVjdChwcm9qZWN0c1tpXSk7XG4gICAgICAgIG15VG9kb3MucmVtb3ZlVG9Eb3MocHJvamVjdHNbaV0pO1xuICAgICAgICBzaWRlYmFyLnJlbW92ZUNoaWxkKGRlbGV0ZVNwYW4ucGFyZW50Tm9kZSk7XG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnRhaW5lclNwYW4uYXBwZW5kQ2hpbGQocHJvamVjdFNwYW4pO1xuICAgICAgY29udGFpbmVyU3Bhbi5hcHBlbmRDaGlsZChkZWxldGVTcGFuKTtcbiAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyU3Bhbik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVkUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgY29uc3QgcHJvamVjdFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IGNvbnRhaW5lclNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IGRlbGV0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgcHJvamVjdFNwYW4uY2xhc3NMaXN0LmFkZCgnc3Bhbi1wcm9qZWN0Jyk7XG4gIGRlbGV0ZVNwYW4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXNwYW4tcHJvamVjdCcpO1xuICBjb250YWluZXJTcGFuLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci1zcGFuLXByb2plY3QnKTtcblxuICBwcm9qZWN0U3Bhbi50ZXh0Q29udGVudCA9ICfigKIgJyArIHByb2plY3ROYW1lO1xuICBkZWxldGVTcGFuLnRleHRDb250ZW50ID0gJ1gnO1xuXG4gIHByb2plY3RTcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgbG9hZFByb2plY3RUb2RvKHByb2plY3ROYW1lKTtcblxuICAgIC8vVEFLRVMgQ0FSRSBPRiBUSEUgQUNUSVZFIE1FTlUgSVRFTSBTVFlMSU5HXG4gICAgY29uc3QgZXZlcnlQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwYW4tcHJvamVjdCcpO1xuICAgIGNvbnN0IGV2ZXJ5RGVmYXVsdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3Bhbi1zaWRlYmFyJyk7XG5cbiAgICBBcnJheS5mcm9tKGV2ZXJ5UHJvamVjdCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgaWYocHJvamVjdC5jbGFzc0xpc3RbMV0gPT09ICdhY3RpdmUtcHJvamVjdCcpIHtcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtcHJvamVjdCcpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgQXJyYXkuZnJvbShldmVyeURlZmF1bHRQcm9qZWN0KS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBpZihwcm9qZWN0LmNsYXNzTGlzdFsxXSA9PT0gJ2FjdGl2ZS1wcm9qZWN0Jykge1xuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgcHJvamVjdFNwYW4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wcm9qZWN0XCIpO1xuICB9KTtcblxuICBkZWxldGVTcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG15UHJvamVjdHMucmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgbXlUb2Rvcy5yZW1vdmVUb0Rvcyhwcm9qZWN0TmFtZSk7XG4gICAgc2lkZWJhci5yZW1vdmVDaGlsZChkZWxldGVTcGFuLnBhcmVudE5vZGUpO1xuXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xuXG4gIGNvbnRhaW5lclNwYW4uYXBwZW5kQ2hpbGQocHJvamVjdFNwYW4pO1xuICBjb250YWluZXJTcGFuLmFwcGVuZENoaWxkKGRlbGV0ZVNwYW4pO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKGNvbnRhaW5lclNwYW4pO1xufVxuXG5leHBvcnQgeyBjcmVhdGVkUHJvamVjdCAsIGFkZE5ld1Byb2plY3RMb2FkICwgcHJvamVjdHNOYW1lTG9hZCB9OyIsImNvbnN0IG15UHJvamVjdHMgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHRpdGxlKSB7XG4gICAgICAgIGxldCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbGxQcm9qZWN0c1wiKSk7XG5cbiAgICAgICAgbGV0IGluZGV4ID0gcHJvamVjdHMuaW5kZXhPZih0aXRsZSk7XG4gICAgICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbGxQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrSWZSZXBlYXRlZCh0aXRsZSkge1xuICAgICAgICBsZXQgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxsUHJvamVjdHNcIikpO1xuXG4gICAgICAgIGlmKHByb2plY3RzID09PSBudWxsKSB7XG4gICAgICAgICAgICBwcm9qZWN0cyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYocHJvamVjdHNbaV0gPT0gdGl0bGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2F2ZUluTG9jYWxTdG9yYWdlKHRpdGxlKSB7XG4gICAgICAgIGlmICh0eXBlb2YoU3RvcmFnZSkgIT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICAgIC8vQ09ERSBDT1BJRUQgRlJPTSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xOTYzNTA3Ny9hZGRpbmctb2JqZWN0cy10by1hcnJheS1pbi1sb2NhbHN0b3JhZ2VcbiAgICAgICAgICAgIGxldCBleGlzdGluZ0VudHJpZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxsUHJvamVjdHNcIikpO1xuXG4gICAgICAgICAgICBpZihleGlzdGluZ0VudHJpZXMgPT09IG51bGwpIGV4aXN0aW5nRW50cmllcyA9IFtdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgZW50cnkgPSB0aXRsZTtcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJlbnRyeVByb2plY3RcIiwgSlNPTi5zdHJpbmdpZnkoZW50cnkpKTtcbiAgICAgICAgICAgIGV4aXN0aW5nRW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWxsUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmdFbnRyaWVzKSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHJlbW92ZVByb2plY3QgLCBjaGVja0lmUmVwZWF0ZWQgLCBzYXZlSW5Mb2NhbFN0b3JhZ2V9O1xufSkoKTsgXG5cbmV4cG9ydCB7IG15UHJvamVjdHMgfTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gc2lkZWJhckxvYWQoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG5cbiAgICBjb25zdCBob21lQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHRvZGF5QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHdlZWtCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgcHJvamVjdHNCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICBob21lQmFyLmNsYXNzTGlzdC5hZGQoJ3NwYW4tc2lkZWJhcicpO1xuICAgIGhvbWVCYXIuc2V0QXR0cmlidXRlKCdpZCcsICdob21lLWJhcicpO1xuICAgIHRvZGF5QmFyLmNsYXNzTGlzdC5hZGQoJ3NwYW4tc2lkZWJhcicpO1xuICAgIHRvZGF5QmFyLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kYXktYmFyJyk7XG4gICAgd2Vla0Jhci5jbGFzc0xpc3QuYWRkKCdzcGFuLXNpZGViYXInKTtcbiAgICB3ZWVrQmFyLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2Vlay1iYXInKTtcbiAgICBwcm9qZWN0c0Jhci5jbGFzc0xpc3QuYWRkKCdzcGFuLXByb2plY3RzJyk7XG5cbiAgICBob21lQmFyLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIHRvZGF5QmFyLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgICB3ZWVrQmFyLnRleHRDb250ZW50ID0gJ1dlZWsnO1xuICAgIHByb2plY3RzQmFyLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcblxuICAgIGxldCB0aGluZ3MgPSBbaG9tZUJhcix0b2RheUJhcix3ZWVrQmFyXTtcbiAgICBcbiAgICB0aGluZ3MubWFwKChzcGFuKSA9PiB7XG4gICAgICAgIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcGFuLXByb2plY3QnKTtcblxuICAgICAgICAgICAgQXJyYXkuZnJvbShwcm9qZWN0cykuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHByb2plY3QuY2xhc3NMaXN0WzFdID09PSAnYWN0aXZlLXByb2plY3QnKXtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtcHJvamVjdCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGluZ3MubWFwKChzcGFuKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoc3Bhbi5jbGFzc0xpc3RbMV0gPT09ICdhY3RpdmUtcHJvamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtcHJvamVjdCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChob21lQmFyKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHRvZGF5QmFyKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHdlZWtCYXIpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNCYXIpO1xufVxuXG5leHBvcnQgeyBzaWRlYmFyTG9hZCB9OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQgeyBteVRvZG9zIH0gZnJvbSAnLi90b2Rvcy1tb2R1bGUuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuL2Jpbi5zdmcnO1xuaW1wb3J0IHsgc2hvd0RldGFpbHNNb2RhbCB9IGZyb20gJy4vbmV3LXRvZG8tbW9kYWwuanMnO1xuXG5mdW5jdGlvbiBzaG93VG9kb3MoKSB7XG5cbiAgICBjb25zdCBldmVyeVRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFpbmVyLXRvZG8nKTtcbiAgICBBcnJheS5mcm9tKGV2ZXJ5VG9kbykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgbGV0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFsbEVudHJpZXNcIikpO1xuICAgIGlmKHRvZG9zID09PSBudWxsKSB0b2RvcyA9IFtdO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNyZWF0ZVRoZVdob2xlVG9kbyhpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9CdXR0b24oKSB7XG4gICAgY29uc3QgY29udGFpbmVyVG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdHMtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBidXR0b25Ub2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW5uZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGJ1dHRvblRvZG8uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLXRvZG8nKTtcbiAgICBpbm5lckJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpbm5lci1idXR0b24nKTtcblxuICAgIGlubmVyQnV0dG9uLnRleHRDb250ZW50ID0gXCIrXCI7XG5cbiAgICBidXR0b25Ub2RvLmFwcGVuZENoaWxkKGlubmVyQnV0dG9uKTtcbiAgICBjb250YWluZXJUb2Rvcy5hcHBlbmRDaGlsZChidXR0b25Ub2RvKTtcbn1cblxuZnVuY3Rpb24gbG9hZFRvZGF5VG9kb3MoKSB7XG5cbiAgICBjb25zdCBldmVyeVRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFpbmVyLXRvZG8nKTtcbiAgICBBcnJheS5mcm9tKGV2ZXJ5VG9kbykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICBsZXQgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxsRW50cmllc1wiKSk7XG5cbiAgICBpZih0b2RvcyA9PT0gbnVsbCkgdG9kb3MgPSBbXTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0b2Rvcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIGxldCBpc1RvZGF5ID0gdG9kb3NbaV1bJ0RhdGUnXS5zcGxpdCgnLScpO1xuICAgICAgICBsZXQgaXNUb2RheTIgPSB0b2RheS5zcGxpdCgnLScpO1xuXG4gICAgICAgIC8vIENIRUNLUyBUSEUgTEFTVCBWQUxVRSBPRiBUSEUgREFURSBXSElDSCBJUyBUSEUgREFZLCBJRiBUSEFUIElTIFRIRSBTQU1FLCBUSEUgVE9ETyBTSE9XU1xuICAgICAgICBpZihpc1RvZGF5WzJdID09IGlzVG9kYXkyWzJdKSB7XG4gICAgICAgICAgICBjcmVhdGVUaGVXaG9sZVRvZG8oaSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRUaGlzV2Vla1RvZG9zKCkge1xuXG4gICAgY29uc3QgZXZlcnlUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhaW5lci10b2RvJyk7XG4gICAgQXJyYXkuZnJvbShldmVyeVRvZG8pLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcblxuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgbGV0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFsbEVudHJpZXNcIikpO1xuICAgIGlmKHRvZG9zID09PSBudWxsKSB0b2RvcyA9IFtdO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgbGV0IGlzVG9kYXkgPSB0b2Rvc1tpXVsnRGF0ZSddLnNwbGl0KCctJyk7XG4gICAgICAgIGxldCBpc1RvZGF5MiA9IHRvZGF5LnNwbGl0KCctJyk7XG5cbiAgICAgICAgLy8gQ0hFQ0tTIFRIRSBMQVNUIFZBTFVFIE9GIFRIRSBEQVRFIFdISUNIIElTIFRIRSBEQVksIElGIFRIQVQgSVMgVEhFIFNBTUUsIFRIRSBUT0RPIFNIT1dTXG4gICAgICAgIGlmKGlzVG9kYXlbMV0gPT0gaXNUb2RheTJbMV0pIHtcbiAgICAgICAgICAgIGlmKGlzVG9kYXlbMl0gPiBpc1RvZGF5MlsyXSkge1xuICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KGlzVG9kYXlbMl0pIC0gcGFyc2VJbnQoaXNUb2RheTJbMl0pIDw9IDcpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGhlV2hvbGVUb2RvKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNlIGlmKGlzVG9kYXlbMl0gPCBpc1RvZGF5MlsyXSkge1xuICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KGlzVG9kYXkyWzJdKSAtIHBhcnNlSW50KGlzVG9kYXlbMl0pIDw9IDcpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGhlV2hvbGVUb2RvKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlVGhlV2hvbGVUb2RvKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYoKHBhcnNlSW50KGlzVG9kYXlbMV0pICsgMSApID09IGlzVG9kYXkyWzFdIHx8IChwYXJzZUludChpc1RvZGF5MlsxXSkgKyAxICkgPT0gaXNUb2RheVsxXSkge1xuICAgICAgICAgICAgaWYoaXNUb2RheVsyXSA+IGlzVG9kYXkyWzJdKSB7XG4gICAgICAgICAgICAgICAgaWYocGFyc2VJbnQoaXNUb2RheVsyXSkgLSBwYXJzZUludChpc1RvZGF5MlsyXSkgPD0gNykge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVUaGVXaG9sZVRvZG8oaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2UgaWYoaXNUb2RheVsyXSA8IGlzVG9kYXkyWzJdKSB7XG4gICAgICAgICAgICAgICAgaWYocGFyc2VJbnQoaXNUb2RheTJbMl0pIC0gcGFyc2VJbnQoaXNUb2RheVsyXSkgPD0gNykge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVUaGVXaG9sZVRvZG8oaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVUaGVXaG9sZVRvZG8oaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0VG9kbyhwcm9qZWN0KSB7XG4gICAgXG4gICAgY29uc3QgZXZlcnlUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhaW5lci10b2RvJyk7XG4gICAgQXJyYXkuZnJvbShldmVyeVRvZG8pLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcblxuICAgIGxldCB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbGxFbnRyaWVzXCIpKTtcblxuICAgIGlmKHRvZG9zID09PSBudWxsKSB7XG4gICAgICAgIHRvZG9zID0gW107XG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHByb2plY3QgPT0gdG9kb3NbaV1bJ1Byb2plY3QnXSkge1xuICAgICAgICAgIGNyZWF0ZVRoZVdob2xlVG9kbyhpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGhlV2hvbGVUb2RvKGluZGV4KSB7XG4gICAgY29uc3QgY29udGFpbmVyVG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdHMtY29udGFpbmVyJyk7XG5cbiAgICBsZXQgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxsRW50cmllc1wiKSk7XG4gICAgaWYodG9kb3MgPT09IG51bGwpIHRvZG9zID0gW107XG5cbiAgICBjb25zdCB0b3RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxlZnRTaWRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcmlndGhTaWRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZWRpdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdG90YWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLXRvZG8nKTtcbiAgICBsZWZ0U2lkZURpdi5jbGFzc0xpc3QuYWRkKCdzaWRlLWRpdicpO1xuICAgIHJpZ3RoU2lkZURpdi5jbGFzc0xpc3QuYWRkKCdzaWRlLWRpdicpO1xuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LXRvZG8nKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZS10b2RvJyk7XG4gICAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdkYXRlLXRvZG8nKTtcbiAgICBkZXRhaWxzRGl2LmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtdG9kbycpO1xuICAgIGVkaXREaXYuY2xhc3NMaXN0LmFkZCgnZWRpdC10b2RvJyk7XG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG9zW2luZGV4XVtcIlRpdGxlXCJdO1xuICAgIGRhdGVEaXYudGV4dENvbnRlbnQgPSB0b2Rvc1tpbmRleF1bXCJEYXRlXCJdO1xuICAgIGRldGFpbHNEaXYudGV4dENvbnRlbnQgPSAnREVUQUlMUyc7XG5cbiAgICBjb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBteUljb24uc3JjID0gZGVsZXRlSWNvbjtcbiAgICBteUljb24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXRvZG8nKTtcbiAgICBteUljb24uc2V0QXR0cmlidXRlKCdhbHQnLCAnSWNvbnMgbWFkZSBieSBodHRwczovL3d3dy5mbGF0aWNvbi5jb20vYXV0aG9ycy9kZGFyYSAtIGREYXJhJyk7XG4gICAgXG4gICAgLy8gREVMRVRFIElDT04gQlVUVE9OLlxuICAgIG15SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbXlUb2Rvcy5yZW1vdmVUb0RvKG15SWNvbi5wYXJlbnROb2RlLmZpcnN0Q2hpbGQubGFzdENoaWxkLnRleHRDb250ZW50KTtcbiAgICAgICAgY29udGFpbmVyVG9kb3MucmVtb3ZlQ2hpbGQobXlJY29uLnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XG4gICAgfSk7XG5cbiAgICAvLyBUSElTIEVWRU5UIExJU1RFTkVSIElTIENPUElFRCBGUk9NIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM5NTEzNzA1L21ha2UtaHRtbC1lbGVtZW50LWRpc2FwcGVhci13aXRoLWNzcy1hbmltYXRpb25cbiAgICAvLyBJVCBUQUtFUyBDQVJFIE9GIFRIRSBESVNBUFBFQVIgQU5JTUFUSU9OIFdIRU4gVEhFIFVTRVIgQ0hFQ0tTIFRIRSBCT1guXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNoZWNrYm94LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCggZnVuY3Rpb24gcmVtb3ZldGhpcygpIHtcbiAgICAgICAgICAgIGNoZWNrYm94LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5PSdub25lJztcbiAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbXlUb2Rvcy5yZW1vdmVUb0RvKGNoZWNrYm94Lm5leHRTaWJsaW5nLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIGNvbnRhaW5lclRvZG9zLnJlbW92ZUNoaWxkKGNoZWNrYm94LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgfSk7XG5cbiAgICAvLyBERVRBSUxTIEVWRU5UIExJU1RFTkVSLlxuICAgIGRldGFpbHNEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tkcm9wLW1vZGFsJyk7XG4gICAgICAgIGNvbnN0IG1vZGFsVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kZXRhaWxzJyk7XG4gICAgICAgIGNvbnN0IGV4aXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXhpdC1kZXRhaWxzJyk7XG5cbiAgICAgICAgbGV0IHRpdGxlU2VsZWN0ZWQgPSBkZXRhaWxzRGl2LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5sYXN0Q2hpbGQudGV4dENvbnRlbnQ7XG4gICAgICAgIHNob3dEZXRhaWxzTW9kYWwodGl0bGVTZWxlY3RlZCk7XG5cbiAgICAgICAgYmFja2Ryb3Auc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG1vZGFsVG9kby5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gICAgICAgIGJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYmFja2Ryb3Auc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIG1vZGFsVG9kby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcblxuICAgICAgICBleGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYmFja2Ryb3Auc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIG1vZGFsVG9kby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIFRISVMgTUFLRVMgVEhFIEJPUkRFUiBUSEUgU1BFQ0lGSUMgQ09MT1IgSVQgTkVFRFMgVE8gQkUgQUNPUkRJTkcgVE8gVEhFIFBSSU8uXG4gICAgKHRvZG9zW2luZGV4XVsnUHJpb3JpdHknXSA9PT0gJ0hpZ2gnKSA/IHRvdGFsQ29udGFpbmVyLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgI2UwNTM1NScgOlxuICAgICh0b2Rvc1tpbmRleF1bJ1ByaW9yaXR5J10gPT09ICdNZWRpdW0nKSA/IHRvdGFsQ29udGFpbmVyLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgI0NDQ0EzQScgOlxuICAgIHRvdGFsQ29udGFpbmVyLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgIzRhOGY1MSc7XG5cbiAgICBsZWZ0U2lkZURpdi5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgbGVmdFNpZGVEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHJpZ3RoU2lkZURpdi5hcHBlbmRDaGlsZChkZXRhaWxzRGl2KTtcbiAgICByaWd0aFNpZGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XG4gICAgcmlndGhTaWRlRGl2LmFwcGVuZENoaWxkKGVkaXREaXYpO1xuICAgIHJpZ3RoU2lkZURpdi5hcHBlbmRDaGlsZChteUljb24pO1xuXG4gICAgdG90YWxDb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdFNpZGVEaXYpO1xuICAgIHRvdGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ3RoU2lkZURpdik7XG5cbiAgICBjb250YWluZXJUb2Rvcy5hcHBlbmRDaGlsZCh0b3RhbENvbnRhaW5lcik7XG59XG5cbmV4cG9ydCB7IGFkZFRvZG9CdXR0b24gLCBzaG93VG9kb3MgLCBsb2FkUHJvamVjdFRvZG8gLCBsb2FkVG9kYXlUb2RvcyAsIGxvYWRUaGlzV2Vla1RvZG9zfTsiLCJjb25zdCBteVRvZG9zID0gKGZ1bmN0aW9uKCkge1xuICAgIC8qXG5cbiAgICBUSEUgTUlTVEFLRVMgV0VSRSBET05FIEJZIEZJUlNUIFNUQVJUSU5HIFRPIFdPUksgV0lUSCBBIExPQ0FMIEFSUkFZXG4gICAgQU5EIFRIRU4gVFJZSU5HIFRPIFdPUksgV0lUSCBMT0NBTCBTVE9SQUdFIFdIRU4gSSBORVZFUiBVU0VEIElUIDopXG5cbiAgICBXT1JLSU5HIERJUkVDVExZIFdJVEggTE9DQUwgU1RPUkFHRSBJTlNURUFEIE9GIFVTSU5HIFRISVMgTE9DQUwgQVJSQVkgOiBsZXQgdG9kbyA9IFtdO1xuICAgIE1BREUgRVZFUllUSElORyBFQVNJRVIgQU5EIEFMTCBUSEFOS1MgVE8gVEhFIFNUQUNLT1ZFUkZMT1cgUVVFU1RJT04gSSBQQVNURUQgQkVMT1cuXG5cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlbW92ZVRvRG8odGl0bGUpIHtcbiAgICAgICAgbGV0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFsbEVudHJpZXNcIikpO1xuICAgICAgICBpZih0b2RvcyA9PT0gbnVsbCkgdG9kb3MgPSBbXTtcbiAgICAgICAgbGV0IGluZGV4ID0gdG9kb3MuaW5kZXhPZih0aXRsZSk7XG4gICAgICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWxsRW50cmllc1wiLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmRUb0RvKHRpdGxlKSB7XG4gICAgICAgIGxldCB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbGxFbnRyaWVzXCIpKTtcbiAgICAgICAgaWYodG9kb3MgPT09IG51bGwpIHRvZG9zID0gW107XG4gICAgICAgIGxldCBpbmRleCA9IHRvZG9zLmluZGV4T2YodGl0bGUpO1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlVG9Eb3MocHJvamVjdE5hbWUpIHtcbiAgICAgICAgbGV0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFsbEVudHJpZXNcIikpO1xuICAgICAgICBpZih0b2RvcyA9PT0gbnVsbCkgdG9kb3MgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIHRvZG9zLm1hcCgob2JqZWN0LGkpID0+IHtcbiAgICAgICAgICAgIGlmKG9iamVjdFsnUHJvamVjdCddID09PSBwcm9qZWN0TmFtZSkgdG9kb3Muc3BsaWNlKGksMSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWxsRW50cmllc1wiLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICAgIH1cblxuICAgIC8qIEZVTkNUSU9OIFRPIEJFIElNUExFTUVOVEVEXG4gICAgZnVuY3Rpb24gZWRpdFRvZG8ocHJvcCwgY29udGVudCwgaW5kZXgpIHtcbiAgICAgICAgbGV0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFsbEVudHJpZXNcIikpO1xuXG4gICAgICAgIHRvZG9zW2luZGV4XVtwcm9wXSA9IGNvbnRlbnQ7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbGxFbnRyaWVzXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gICAgfVxuICAgICovXG5cbiAgICBmdW5jdGlvbiBjaGVja0lmUmVwZWF0ZWQodGl0bGUpIHtcbiAgICAgICAgbGV0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFsbEVudHJpZXNcIikpO1xuICAgICAgICBpZih0b2RvcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdG9kb3MgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHRvZG9zW2ldWydUaXRsZSddID09IHRpdGxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNhdmVJbkxvY2FsU3RvcmFnZSh0aXRsZSxkZXNjLGRhdGUscHJpbyxwcm8pIHtcbiAgICAgICAgaWYgKHR5cGVvZihTdG9yYWdlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgLy8gQ09ERSBDT1BJRUQgRlJPTSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xOTYzNTA3Ny9hZGRpbmctb2JqZWN0cy10by1hcnJheS1pbi1sb2NhbHN0b3JhZ2VcbiAgICAgICAgICAgIGxldCBleGlzdGluZ0VudHJpZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxsRW50cmllc1wiKSk7XG5cbiAgICAgICAgICAgIGlmKGV4aXN0aW5nRW50cmllcyA9PT0gbnVsbCkgZXhpc3RpbmdFbnRyaWVzID0gW107XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBlbnRyeSA9IHtcbiAgICAgICAgICAgICAgICBUaXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgICAgRGVzY3JpcHRpb246IGRlc2MsXG4gICAgICAgICAgICAgICAgRGF0ZTogZGF0ZSxcbiAgICAgICAgICAgICAgICBQcmlvcml0eTogcHJpbyxcbiAgICAgICAgICAgICAgICBQcm9qZWN0OiBwcm9cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJlbnRyeVwiLCBKU09OLnN0cmluZ2lmeShlbnRyeSkpO1xuICAgICAgICAgICAgZXhpc3RpbmdFbnRyaWVzLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbGxFbnRyaWVzXCIsIEpTT04uc3RyaW5naWZ5KGV4aXN0aW5nRW50cmllcykpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyByZW1vdmVUb0RvICwgZmluZFRvRG8gLCByZW1vdmVUb0RvcyAsIGNoZWNrSWZSZXBlYXRlZCAsIHNhdmVJbkxvY2FsU3RvcmFnZX07XG59KSgpOyBcblxuZXhwb3J0IHsgbXlUb2RvcyB9OyIsImltcG9ydCB7IG15VG9kb3MgfSBmcm9tICcuL3RvZG9zLW1vZHVsZS5qcyc7XG5cbmZ1bmN0aW9uIGNoZWNrSWZWYWxpZCh0aXRsZSkge1xuICAgIGlmKHRpdGxlLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZih0aXRsZS5zcGxpdCgnJykuZXZlcnkoZWxlbSA9PiBlbGVtID09ICcgJykgfHwgdGl0bGUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAzO1xuICAgIH1cbiAgICBpZihteVRvZG9zLmNoZWNrSWZSZXBlYXRlZCh0aXRsZSkgPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gNDsgXG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydCB7IGNoZWNrSWZWYWxpZCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLyogZXNsaW50LWRpc2FibGUgZXFlcWVxICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB7IGNvbnRlbnRMb2FkZXIgfSBmcm9tICcuL3BhZ2UtbG9hZC5qcydcbmltcG9ydCB7IGNoZWNrSWZWYWxpZCB9IGZyb20gJy4vdmFsaWRhdGlvbnMuanMnXG5pbXBvcnQgeyBjcmVhdGVkUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdHMtbG9hZC5qcydcbmltcG9ydCB7IG15UHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3RzLW1vZHVsZS5qcydcbmltcG9ydCB7IHJlbW92ZU9wdGlvbnMsIGNyZWF0ZU9wdGlvbnMgfSBmcm9tICcuL25ldy10b2RvLW1vZGFsLmpzJ1xuaW1wb3J0IHsgbXlUb2RvcyB9IGZyb20gJy4vdG9kb3MtbW9kdWxlJ1xuaW1wb3J0IHsgbG9hZFRvZGF5VG9kb3MsIHNob3dUb2RvcywgbG9hZFRoaXNXZWVrVG9kb3MgfSBmcm9tICcuL3RvZG9zLWxvYWQnXG5cbi8vIEZVVFVSRSBJREVBUzpcbi8qXG4gICAgQUREIEEgRlVOQ1RJT04gVE8gRURJVCBBIFRPRE8gRlJPTSBUSEUgREVUQUlMUyBUQUIsIEFORCBUTyBFRElUIEEgUFJPSkVDVCBOQU1FLlxuICAgIEFERCBBIERJViBUTyBUSEUgU0lERUJBUiBUTyBTSE9XIFRIRSBQUk9KRUNUUyBOQU1FIE1PUkUgQ09NUEFDVC5cbiAgICBBREQgQSBMSVRUTEUgTU9SRSBSRVNQT05TSVZFTkVTUywgQU5EIEFERCBBIE1PQklMRSBWRVJTSU9OLlxuICAgIE1BS0UgVEhFIENPREUgTEVTUyBNRVNTWS5cbiovXG5cbi8vIGxvYWRzIHRoZSB3aG9sZSBwYWdlIGNvbnRlbnRcbmNvbnRlbnRMb2FkZXIoKVxuXG4vKlxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXG4gICAgQUxMIFRIRSBMT0dJQyBPRiBUSEUgQUREIE5FVyBQUk9KRUNUIEJVVFRPTlxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4qL1xuY29uc3QgYnV0dG9uTmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdCcpXG5jb25zdCBidXR0b25Db25maXJtUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tdGl0bGUnKVxuXG4vLyB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBpbiB0aGUgY29uZmlybSBidXR0b24gZXZlbnQgbGlzdGVuZXJcbmZ1bmN0aW9uIHByb2plY3RDb25maXJtZWQgKCkge1xuICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZHJvcC1tb2RhbCcpXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXByb2plY3QnKVxuXG4gIGNvbnN0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtdGl0bGUnKS52YWx1ZVxuXG4gIGlmIChjaGVja0lmVmFsaWQodGl0bGVWYWx1ZSkgPT09IDEpIHtcbiAgICBhbGVydChgVGhlIHByb2plY3QgdGl0bGUgXCIke3RpdGxlVmFsdWV9XCIgaXMgdG9vIGxvbmcoMTAgY2hhcmFjdGVycyBtYXgpLmApXG4gIH0gZWxzZSBpZiAobXlQcm9qZWN0cy5jaGVja0lmUmVwZWF0ZWQodGl0bGVWYWx1ZSkgPT09IHRydWUpIHtcbiAgICBhbGVydChgVGhlIHByb2plY3QgdGl0bGUgXCIke3RpdGxlVmFsdWV9XCIgYWxyZWFkeSBleGlzdHMuYClcbiAgfSBlbHNlIGlmIChjaGVja0lmVmFsaWQodGl0bGVWYWx1ZSkgPT09IDMpIHtcbiAgICBhbGVydCgnVGhlIHByb2plY3QgdGl0bGUgaXMgZW1wdHkuJylcbiAgfSBlbHNlIHtcbiAgICBjcmVhdGVkUHJvamVjdCh0aXRsZVZhbHVlKVxuICAgIGJhY2tkcm9wLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgbXlQcm9qZWN0cy5zYXZlSW5Mb2NhbFN0b3JhZ2UodGl0bGVWYWx1ZSlcbiAgICBidXR0b25Db25maXJtUHJvamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2plY3RDb25maXJtZWQpXG4gIH1cbn1cblxuYnV0dG9uTmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgLy8gc2V0cyB0aGUgbW9kYWwgdG8gdmlzaWJsZVxuICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZHJvcC1tb2RhbCcpXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXByb2plY3QnKVxuXG4gIGJhY2tkcm9wLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcblxuICAvLyBhZGRzIGEgZXZlbnQgbGlzdGVuZXIgb24gdGhlIGJ1dHRvbiB0byBjb25maXJtIHRoZSB0aXRsZSBzZWxlY3RlZFxuICBidXR0b25Db25maXJtUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2plY3RDb25maXJtZWQpXG5cbiAgLy8gYWRkcyBhIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSBiYWNrZHJvcCB0byBnZXQgb3V0IG9mIHRoZSBtb2RhbFxuICBiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBiYWNrZHJvcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICB9KVxufSlcblxuLypcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuICAgIEFMTCBUSEUgTE9HSUMgT0YgVEhFIEFERCBORVcgVE9ETyBCVVRUT05cblxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuKi9cbmNvbnN0IGJ1dHRvblRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5uZXItYnV0dG9uJylcbmNvbnN0IGJ1dHRvbkNvbmZpcm1Ub2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbk1vZGFsLXRvZG8nKVxuXG5mdW5jdGlvbiB0b2RvQ29uZmlybWVkICgpIHtcbiAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AtbW9kYWwnKVxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC10b2RvJylcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dFRpdGxlLXRvZG8nKS52YWx1ZVxuICBjb25zdCBkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0RGVzYy10b2RvJykudmFsdWVcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dERhdGUtdG9kbycpLnZhbHVlXG4gIGNvbnN0IHByaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRQcmlvLXRvZG8nKS52YWx1ZVxuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0UHJvamVjdC10b2RvJykudmFsdWVcblxuICBpZiAoY2hlY2tJZlZhbGlkKHRpdGxlKSA9PSAxKSB7XG4gICAgYWxlcnQoYFRoZSBwcm9qZWN0IHRpdGxlIFwiJHt0aXRsZX1cIiBpcyB0b28gbG9uZygxMCBjaGFyYWN0ZXJzIG1heCkuYClcbiAgICByZXR1cm5cbiAgfSBlbHNlIGlmIChjaGVja0lmVmFsaWQodGl0bGUpID09IDMpIHtcbiAgICBhbGVydCgnVGhlIHByb2plY3QgdGl0bGUgaXMgZW1wdHkuJylcbiAgfSBlbHNlIGlmIChjaGVja0lmVmFsaWQodGl0bGUpID09IDQpIHtcbiAgICBhbGVydCgnVGhlIHRpdGxlIHNlbGVjdGVkIGlzIGFscmVhZHkgaW4gdXNlLicpXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoY2hlY2tJZlZhbGlkKGRlc2MpID09IDMpIHtcbiAgICBhbGVydCgnVGhlIGRlc2NyaXB0aW9uIGlzIGludmFsaWQuJylcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChkYXRlID09PSAnJykge1xuICAgIGFsZXJ0KCdUaGUgZGF0ZSBpcyBpbnZhbGlkLicpXG4gICAgcmV0dXJuXG4gIH1cblxuICBteVRvZG9zLnNhdmVJbkxvY2FsU3RvcmFnZSh0aXRsZSwgZGVzYywgZGF0ZSwgcHJpbywgcHJvamVjdClcblxuICBiYWNrZHJvcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAvLyBnb2VzIHRvIHRoZSBob21lIHRhYlxuICBzaG93VG9kb3MoKVxuXG4gIGJ1dHRvbkNvbmZpcm1Ub2RvLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9kb0NvbmZpcm1lZClcbn1cblxuYnV0dG9uVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AtbW9kYWwnKVxuICBjb25zdCBtb2RhbFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtdG9kbycpXG5cbiAgLy8gZGluYW1pY2FsbHkgY3JlYXRlcyB0aGUgcHJvamVjdHMgb3B0aW9ucyBpbiBjYXNlIGkgY3JlYXRlZCBhbm90aGVyIHByb2plY3RcbiAgcmVtb3ZlT3B0aW9ucygpXG4gIGNyZWF0ZU9wdGlvbnMoKVxuXG4gIGJhY2tkcm9wLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gIG1vZGFsVG9kby5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG5cbiAgYnV0dG9uQ29uZmlybVRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2RvQ29uZmlybWVkKVxuXG4gIGJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGJhY2tkcm9wLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICBtb2RhbFRvZG8uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICB9KVxufSlcblxuLypcbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuICAgIFNJREVCQVIgT1BUSU9OUyBUTyBTSE9XIFRPRE9TXG5cbiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiovXG5jb25zdCBob21lVG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZS1iYXInKVxuY29uc3QgdG9kYXlUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheS1iYXInKVxuY29uc3Qgd2Vla1RvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlZWstYmFyJylcblxuaG9tZVRvZG9zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1RvZG9zKVxudG9kYXlUb2Rvcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRUb2RheVRvZG9zKVxud2Vla1RvZG9zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZFRoaXNXZWVrVG9kb3MpXG4iXSwic291cmNlUm9vdCI6IiJ9