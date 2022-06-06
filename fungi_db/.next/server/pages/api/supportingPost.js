"use strict";
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
exports.id = "pages/api/supportingPost";
exports.ids = ["pages/api/supportingPost"];
exports.modules = {

/***/ "d3":
/*!*********************!*\
  !*** external "d3" ***!
  \*********************/
/***/ ((module) => {

module.exports = import("d3");;

/***/ }),

/***/ "(api)/./pages/api/supportingPost.js":
/*!*************************************!*\
  !*** ./pages/api/supportingPost.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"d3\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([d3__WEBPACK_IMPORTED_MODULE_0__]);\nd3__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction handler(req, res) {\n    const body = req.body;\n    console.log(body);\n    d3__WEBPACK_IMPORTED_MODULE_0__.tsv(\"/Users/simoncole/FungiDB/database-generation/FunDB_prot_seqID.tsv\", (data)=>{\n        console.log(data);\n        res.status(200).json({\n            data\n        });\n    });\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3VwcG9ydGluZ1Bvc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0I7QUFFVCxTQUFTQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3RDLE1BQU1DLElBQUksR0FBR0YsR0FBRyxDQUFDRSxJQUFJO0lBQ3JCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDLENBQUM7SUFDbEJKLG1DQUFNLENBQUMsbUVBQW1FLEVBQUUsQ0FBQ1EsSUFBSSxHQUFLO1FBQ2xGSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDbEJMLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBQ0YsSUFBSTtTQUFDLENBQUMsQ0FBQztLQUNoQyxDQUFDLENBQUM7Q0FDTiIsInNvdXJjZXMiOlsid2VicGFjazovL2Z1bmdpX2RiLy4vcGFnZXMvYXBpL3N1cHBvcnRpbmdQb3N0LmpzP2Y4Y2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keTtcbiAgICBjb25zb2xlLmxvZyhib2R5KTtcbiAgICBkMy50c3YoXCIvVXNlcnMvc2ltb25jb2xlL0Z1bmdpREIvZGF0YWJhc2UtZ2VuZXJhdGlvbi9GdW5EQl9wcm90X3NlcUlELnRzdlwiLCAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe2RhdGF9KTtcbiAgICB9KTtcbn0iXSwibmFtZXMiOlsiZDMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJ0c3YiLCJkYXRhIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/supportingPost.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/supportingPost.js"));
module.exports = __webpack_exports__;

})();