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
exports.id = "pages/blastp";
exports.ids = ["pages/blastp"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\",\n\t\"header\": \"Home_header__GCVRv\",\n\t\"header_element\": \"Home_header_element__6Li0S\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW5naV9kYi8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/YjE3MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fYkNPaFlcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX19uTGppUVwiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX19fX1Q3S1wiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fVDA5aERcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzQxT3drXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fc3VQRVJcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX19HeFE4NVwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfX19McEwxXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMjdfdGJcIixcblx0XCJoZWFkZXJcIjogXCJIb21lX2hlYWRlcl9fR0NWUnZcIixcblx0XCJoZWFkZXJfZWxlbWVudFwiOiBcIkhvbWVfaGVhZGVyX2VsZW1lbnRfXzZMaTBTXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./components/BlastpSearch.js":
/*!************************************!*\
  !*** ./components/BlastpSearch.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BlastpSearch)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst defaultQuery = \"FQTWEEFSRAAEKLYLADPMKVRVVLKYRHVDGNLCIKVTDDLVCLVYRTDQAQDVKKIEKF\";\nfunction BlastpSearch() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleSubmit = async (event)=>{\n        // Stop the form from submitting and refreshing the page.\n        event.preventDefault();\n        // Get data from the form.\n        const data = {\n            query: event.target.query.value\n        };\n        const JSONdata = JSON.stringify(data);\n        const endpoint = \"/api/postRequest\";\n        const options = {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSONdata\n        };\n        const response = await fetch(endpoint, options);\n        const result = await response.json();\n        router.push(\"/blastp/blastPResults\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"searchBox\",\n                name: \"query\",\n                placeholder: \"Enter FASTA sequence...\"\n            }, void 0, false, {\n                fileName: \"/Users/simoncole/FungiDB/fungi_db/components/BlastpSearch.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/simoncole/FungiDB/fungi_db/components/BlastpSearch.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/simoncole/FungiDB/fungi_db/components/BlastpSearch.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JsYXN0cFNlYXJjaC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXVDO0FBQ3ZDLE1BQU1DLFlBQVksR0FBRyxnRUFBZ0U7QUFFdEUsU0FBU0MsWUFBWSxHQUFHO0lBQ25DLE1BQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBRTtJQUMxQixNQUFNSSxZQUFZLEdBQUcsT0FBT0MsS0FBSyxHQUFLO1FBQ2xDLHlEQUF5RDtRQUN6REEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7UUFDdEIsMEJBQTBCO1FBQzFCLE1BQU1DLElBQUksR0FBRztZQUNYQyxLQUFLLEVBQUVILEtBQUssQ0FBQ0ksTUFBTSxDQUFDRCxLQUFLLENBQUNFLEtBQUs7U0FDaEM7UUFFRCxNQUFNQyxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsU0FBUyxDQUFDTixJQUFJLENBQUM7UUFDckMsTUFBTU8sUUFBUSxHQUFHLGtCQUFrQjtRQUNuQyxNQUFNQyxPQUFPLEdBQUc7WUFDZEMsTUFBTSxFQUFFLE1BQU07WUFDZEMsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkM7WUFDREMsSUFBSSxFQUFFUCxRQUFRO1NBQ2Y7UUFFRCxNQUFNUSxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDTixRQUFRLEVBQUVDLE9BQU8sQ0FBQztRQUMvQyxNQUFNTSxNQUFNLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFJLEVBQUU7UUFFcENuQixNQUFNLENBQUNvQixJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztLQUN0QztJQUNILHFCQUNJLDhEQUFDQyxNQUFJO1FBQUNDLFFBQVEsRUFBRXJCLFlBQVk7OzBCQUN4Qiw4REFBQ3NCLE9BQUs7Z0JBQUNDLElBQUksRUFBQyxNQUFNO2dCQUFDQyxFQUFFLEVBQUMsV0FBVztnQkFBQ0MsSUFBSSxFQUFDLE9BQU87Z0JBQUNDLFdBQVcsRUFBQyx5QkFBeUI7Ozs7O29CQUFFOzBCQUN0Riw4REFBQ0MsUUFBTTtnQkFBQ0osSUFBSSxFQUFDLFFBQVE7MEJBQUMsUUFBTTs7Ozs7b0JBQVM7Ozs7OztZQUNsQyxDQUNUO0NBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW5naV9kYi8uL2NvbXBvbmVudHMvQmxhc3RwU2VhcmNoLmpzP2ViYTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5jb25zdCBkZWZhdWx0UXVlcnkgPSBcIkZRVFdFRUZTUkFBRUtMWUxBRFBNS1ZSVlZMS1lSSFZER05MQ0lLVlRERExWQ0xWWVJURFFBUURWS0tJRUtGXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsYXN0cFNlYXJjaCgpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gU3RvcCB0aGUgZm9ybSBmcm9tIHN1Ym1pdHRpbmcgYW5kIHJlZnJlc2hpbmcgdGhlIHBhZ2UuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgICAgXG4gICAgICAgIC8vIEdldCBkYXRhIGZyb20gdGhlIGZvcm0uXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgcXVlcnk6IGV2ZW50LnRhcmdldC5xdWVyeS52YWx1ZSxcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBKU09OZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpICAgIFxuICAgICAgICBjb25zdCBlbmRwb2ludCA9ICcvYXBpL3Bvc3RSZXF1ZXN0JyAgICBcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTmRhdGEsXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRwb2ludCwgb3B0aW9ucylcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgIFxuICAgICAgICByb3V0ZXIucHVzaChcIi9ibGFzdHAvYmxhc3RQUmVzdWx0c1wiKTtcbiAgICAgIH1cbiAgICByZXR1cm4oXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzZWFyY2hCb3hcIiBuYW1lPVwicXVlcnlcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEZBU1RBIHNlcXVlbmNlLi4uXCIvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJkZWZhdWx0UXVlcnkiLCJCbGFzdHBTZWFyY2giLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInF1ZXJ5IiwidGFyZ2V0IiwidmFsdWUiLCJKU09OZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbmRwb2ludCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXN1bHQiLCJqc29uIiwicHVzaCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsImlkIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BlastpSearch.js\n");

/***/ }),

/***/ "./pages/blastp/index.js":
/*!*******************************!*\
  !*** ./pages/blastp/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Blastp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_BlastpSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/BlastpSearch */ \"./components/BlastpSearch.js\");\n\n\n\nfunction Blastp() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                children: \"Blastp\"\n            }, void 0, false, {\n                fileName: \"/Users/simoncole/FungiDB/fungi_db/pages/blastp/index.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlastpSearch__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/simoncole/FungiDB/fungi_db/pages/blastp/index.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/simoncole/FungiDB/fungi_db/pages/blastp/index.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibGFzdHAvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBaUQ7QUFDUTtBQUUxQyxTQUFTRSxNQUFNLEdBQUc7SUFFN0IscUJBQ0ksOERBQUNDLE1BQUk7OzBCQUNELDhEQUFDQyxJQUFFO2dCQUFDQyxTQUFTLEVBQUVMLHNFQUFZOzBCQUFFLFFBQU07Ozs7O29CQUFLOzBCQUN4Qyw4REFBQ0MsZ0VBQVk7Ozs7b0JBQUU7Ozs7OztZQUNaLENBQ1Q7Q0FDTCIsInNvdXJjZXMiOlsid2VicGFjazovL2Z1bmdpX2RiLy4vcGFnZXMvYmxhc3RwL2luZGV4LmpzPzJmYzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiXG5pbXBvcnQgQmxhc3RwU2VhcmNoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0JsYXN0cFNlYXJjaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbGFzdHAoKSB7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5CbGFzdHA8L2gxPlxuICAgICAgICAgICAgPEJsYXN0cFNlYXJjaC8+XG4gICAgICAgIDwvbWFpbj5cbiAgICApO1xufVxuXG4iXSwibmFtZXMiOlsic3R5bGVzIiwiQmxhc3RwU2VhcmNoIiwiQmxhc3RwIiwibWFpbiIsImgxIiwiY2xhc3NOYW1lIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blastp/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blastp/index.js"));
module.exports = __webpack_exports__;

})();