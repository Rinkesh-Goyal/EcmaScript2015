/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User),\n/* harmony export */   \"sayHello\": () => (/* binding */ sayHello)\n/* harmony export */ });\nclass User{\r\n    constructor(name){\r\n        this.name=name;\r\n    }\r\n\r\n    getName(){\r\n        return this.name;\r\n    }\r\n}\r\n\r\nfunction sayHello(){\r\n    console.log(\"Hello\");\r\n}\n\n//# sourceURL=webpack://ecmascript2015/./src/User.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_The_Odin_Project_Practice_FullStack_EcmaScript2015_src_User_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/User.js */ \"./src/User.js\");\n/* harmony import */ var D_The_Odin_Project_Practice_FullStack_EcmaScript2015_src_say_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/say.js */ \"./src/say.js\");\n// Named exports force us to use exactly the right name to import\r\n// While for a default export, we always choose the name when importing\r\n// So team members may use different names to import the same thing, and that’s not good.\r\n\r\n// Usually, to avoid that and keep the code consistent, there’s a rule that imported variables should correspond to file names\r\n\r\n//Re-Export\r\n// Re-export” syntax export ... from ... allows to import things and immediately export them \r\n//https://javascript.info/import-export\r\n\r\n// export * from './user.js' re-exports only named exports, but ignores the default one.\r\n// export * from './user.js'; // to re-export named exports\r\n// export {default} from './user.js'; // to re-export the default export\r\n\r\n\r\n\r\n\r\n//Only if the js contains default export\r\n// import User from \"D:\\\\The_Odin_Project\\\\Practice_FullStack\\\\EcmaScript2015\\\\src\\\\User.js\";\r\n\r\n//only if JS contins both named and default export\r\n// import {default as User,sayHello} from \"D:\\\\The_Odin_Project\\\\Practice_FullStack\\\\EcmaScript2015\\\\src\\\\User.js\";\r\n\r\n\r\n\r\n\r\n(0,D_The_Odin_Project_Practice_FullStack_EcmaScript2015_src_say_js__WEBPACK_IMPORTED_MODULE_1__.sayBye)(\"Harry\");\r\n(0,D_The_Odin_Project_Practice_FullStack_EcmaScript2015_src_say_js__WEBPACK_IMPORTED_MODULE_1__.sayHi)(\"Ron\");\r\n\r\n//used when we are importing using *\r\nlet User=D_The_Odin_Project_Practice_FullStack_EcmaScript2015_src_User_js__WEBPACK_IMPORTED_MODULE_0__.default;\r\n\r\nconst user=new User(\"Hermoine\");\r\nconsole.log(user.getName());\r\n\r\n// User.sayHello();\r\n\r\nD_The_Odin_Project_Practice_FullStack_EcmaScript2015_src_User_js__WEBPACK_IMPORTED_MODULE_0__.sayHello();\r\n\r\n\r\n//Dynamic import\r\n// let {sayHi, sayBye} = await import(\"D:\\\\The_Odin_Project\\\\Practice_FullStack\\\\EcmaScript2015\\\\src\\\\say.js\");\r\n\r\n// sayHi(\"Harry\");\r\n// sayBye(\"Draco\");\n\n//# sourceURL=webpack://ecmascript2015/./src/index.js?");

/***/ }),

/***/ "./src/say.js":
/*!********************!*\
  !*** ./src/say.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sayBye\": () => (/* binding */ sayBye),\n/* harmony export */   \"sayHi\": () => (/* binding */ sayHi)\n/* harmony export */ });\nconst sayHi=(user)=>{\r\n    console.log(`Hi ${user}`);\r\n}\r\n\r\nconst sayBye=(user)=>{\r\n    console.log(`Bye ${user}`);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://ecmascript2015/./src/say.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;