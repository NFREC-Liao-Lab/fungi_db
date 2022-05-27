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
exports.id = "pages/api/postRequest";
exports.ids = ["pages/api/postRequest"];
exports.modules = {

/***/ "shelljs":
/*!**************************!*\
  !*** external "shelljs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("shelljs");

/***/ }),

/***/ "(api)/./pages/api/postRequest.js":
/*!**********************************!*\
  !*** ./pages/api/postRequest.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst shelljs = __webpack_require__(/*! shelljs */ \"shelljs\");\nfunction handler(req, res) {\n    const body = req.body;\n    let query = req.body.query;\n    console.log(\"body is: \", body);\n    //make sure there is a query\n    if (!body.query) {\n        return res.status(400).json({\n            data: \"query not found\"\n        });\n    }\n    shelljs.exec(`/Users/simoncole/fungiDB/db/blastnAllDbs.sh ${query}`);\n    res.status(200).json({});\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdFJlcXVlc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyx3QkFBUyxDQUFDO0FBQ25CLFNBQVNDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUM7SUFDckMsTUFBTUMsSUFBSSxHQUFHRixHQUFHLENBQUNFLElBQUk7SUFDckIsSUFBSUMsS0FBSyxHQUFHSCxHQUFHLENBQUNFLElBQUksQ0FBQ0MsS0FBSztJQUMxQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxFQUFFSCxJQUFJLENBQUMsQ0FBQztJQUUvQiw0QkFBNEI7SUFDNUIsSUFBRyxDQUFDQSxJQUFJLENBQUNDLEtBQUssRUFBQztRQUNYLE9BQU9GLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBQ0MsSUFBSSxFQUFFLGlCQUFpQjtTQUFDLENBQUMsQ0FBQztLQUMxRDtJQUNEWCxPQUFPLENBQUNZLElBQUksQ0FBQyxDQUFDLDRDQUE0QyxFQUFFTixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckVGLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW5naV9kYi8uL3BhZ2VzL2FwaS9wb3N0UmVxdWVzdC5qcz82Y2RmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNoZWxsanMgPSByZXF1aXJlKFwic2hlbGxqc1wiKTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpe1xuICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keTtcbiAgICBsZXQgcXVlcnkgPSByZXEuYm9keS5xdWVyeTtcbiAgICBjb25zb2xlLmxvZyhcImJvZHkgaXM6IFwiLCBib2R5KTtcblxuICAgIC8vbWFrZSBzdXJlIHRoZXJlIGlzIGEgcXVlcnlcbiAgICBpZighYm9keS5xdWVyeSl7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZGF0YTogXCJxdWVyeSBub3QgZm91bmRcIn0pO1xuICAgIH1cbiAgICBzaGVsbGpzLmV4ZWMoYC9Vc2Vycy9zaW1vbmNvbGUvZnVuZ2lEQi9kYi9ibGFzdG5BbGxEYnMuc2ggJHtxdWVyeX1gKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7fSk7XG59Il0sIm5hbWVzIjpbInNoZWxsanMiLCJyZXF1aXJlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImJvZHkiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImV4ZWMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/postRequest.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/postRequest.js"));
module.exports = __webpack_exports__;

})();