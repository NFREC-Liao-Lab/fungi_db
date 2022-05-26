/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/blastp/blastpResults";
exports.ids = ["pages/blastp/blastpResults"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\",\n\t\"header\": \"Home_header__GCVRv\",\n\t\"header_element\": \"Home_header_element__6Li0S\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW5naV9kYi8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/YjE3MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fYkNPaFlcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX19uTGppUVwiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX19fX1Q3S1wiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fVDA5aERcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzQxT3drXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fc3VQRVJcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX19HeFE4NVwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfX19McEwxXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMjdfdGJcIixcblx0XCJoZWFkZXJcIjogXCJIb21lX2hlYWRlcl9fR0NWUnZcIixcblx0XCJoZWFkZXJfZWxlbWVudFwiOiBcIkhvbWVfaGVhZGVyX2VsZW1lbnRfXzZMaTBTXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./components/getBlastpResults.js":
/*!****************************************!*\
  !*** ./components/getBlastpResults.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GetBlastpResults)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function GetBlastpResults() {\n    const res = await fetch(\"/api/getRequest\");\n    const stringRes = JSON.stringify(res);\n    console.log(\"ResJson.firstScore from getBlastpResults is: \" + res);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: res\n    }, void 0, false, {\n        fileName: \"/Users/simoncole/FungiDB/fungi_db/components/getBlastpResults.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dldEJsYXN0cFJlc3VsdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBZSxlQUFlQSxnQkFBZ0IsR0FBRTtJQUM1QyxNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO0lBQzFDLE1BQU1DLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxTQUFTLENBQUNKLEdBQUcsQ0FBQztJQUNyQ0ssT0FBTyxDQUFDQyxHQUFHLENBQUMsK0NBQStDLEdBQUdOLEdBQUcsQ0FBQyxDQUFDO0lBQ25FLHFCQUNJLDhEQUFDTyxHQUFDO2tCQUFFUCxHQUFHOzs7OztZQUFLLENBQ2Q7Q0FHTCIsInNvdXJjZXMiOlsid2VicGFjazovL2Z1bmdpX2RiLy4vY29tcG9uZW50cy9nZXRCbGFzdHBSZXN1bHRzLmpzP2U0MjkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gR2V0Qmxhc3RwUmVzdWx0cygpe1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZXRSZXF1ZXN0XCIpO1xuICAgIGNvbnN0IHN0cmluZ1JlcyA9IEpTT04uc3RyaW5naWZ5KHJlcyk7XG4gICAgY29uc29sZS5sb2coXCJSZXNKc29uLmZpcnN0U2NvcmUgZnJvbSBnZXRCbGFzdHBSZXN1bHRzIGlzOiBcIiArIHJlcyk7XG4gICAgcmV0dXJuKFxuICAgICAgICA8cD57cmVzfTwvcD5cbiAgICApOyBcblxuICAgIFxufSJdLCJuYW1lcyI6WyJHZXRCbGFzdHBSZXN1bHRzIiwicmVzIiwiZmV0Y2giLCJzdHJpbmdSZXMiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/getBlastpResults.js\n");

/***/ }),

/***/ "./pages/blastp/blastpResults/index.js":
/*!*********************************************!*\
  !*** ./pages/blastp/blastpResults/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ blastpResults)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_getBlastpResults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/getBlastpResults */ \"./components/getBlastpResults.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function blastpResults() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                children: \"BlAST Search Results\"\n            }, void 0, false, {\n                fileName: \"/Users/simoncole/FungiDB/fungi_db/pages/blastp/blastpResults/index.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"The firstScore is: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getBlastpResults__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/simoncole/FungiDB/fungi_db/pages/blastp/blastpResults/index.js\",\n                        lineNumber: 8,\n                        columnNumber: 35\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/simoncole/FungiDB/fungi_db/pages/blastp/blastpResults/index.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/simoncole/FungiDB/fungi_db/pages/blastp/blastpResults/index.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibGFzdHAvYmxhc3RwUmVzdWx0cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFvRTtBQUNoQjtBQUVyQyxlQUFlRSxhQUFhLEdBQUU7SUFDekMscUJBQ0ksOERBQUNDLEtBQUc7OzBCQUNBLDhEQUFDQyxJQUFFO2dCQUFDQyxTQUFTLEVBQUVKLHNFQUFZOzBCQUFFLHNCQUFvQjs7Ozs7b0JBQUs7MEJBQ3RELDhEQUFDTSxHQUFDOztvQkFBQyxxQkFBbUI7a0NBQUEsOERBQUNQLG9FQUFnQjs7Ozs0QkFBRzs7Ozs7O29CQUFJOzs7Ozs7WUFDNUMsQ0FDUjtDQUVMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnVuZ2lfZGIvLi9wYWdlcy9ibGFzdHAvYmxhc3RwUmVzdWx0cy9pbmRleC5qcz8zMjk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHZXRCbGFzdHBSZXN1bHRzIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2dldEJsYXN0cFJlc3VsdHNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIlxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBibGFzdHBSZXN1bHRzKCl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5CbEFTVCBTZWFyY2ggUmVzdWx0czwvaDE+XG4gICAgICAgICAgICA8cD5UaGUgZmlyc3RTY29yZSBpczogPEdldEJsYXN0cFJlc3VsdHMgLz48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG5cbn1cblxuIl0sIm5hbWVzIjpbIkdldEJsYXN0cFJlc3VsdHMiLCJzdHlsZXMiLCJibGFzdHBSZXN1bHRzIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJ0aXRsZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blastp/blastpResults/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blastp/blastpResults/index.js"));
module.exports = __webpack_exports__;

})();