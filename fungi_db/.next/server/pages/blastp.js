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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BlastpSearch)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst defaultQuery = \"FQTWEEFSRAAEKLYLADPMKVRVVLKYRHVDGNLCIKVTDDLVCLVYRTDQAQDVKKIEKF\";\nfunction BlastpSearch() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleSubmit = async (event)=>{\n        // Stop the form from submitting and refreshing the page.\n        event.preventDefault();\n        const data = {\n            query: event.target.query.value\n        };\n        const JSONdata = JSON.stringify(data);\n        const postEndpoint = \"/api/postRequest\";\n        const getEndpoint = \"/api/getRequest\";\n        const options = {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSONdata\n        };\n        //make POST\n        const postRes = await fetch(postEndpoint, options);\n        const postResResult = await postRes.json();\n        const pathName = \"/blastp/blastPResults\";\n        router.push({\n            pathname: pathName\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"searchBox\",\n                name: \"query\",\n                placeholder: \"Enter FASTA sequence...\"\n            }, void 0, false, {\n                fileName: \"/Users/simoncole/FungiDB/fungi_db/components/BlastpSearch.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/simoncole/FungiDB/fungi_db/components/BlastpSearch.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/simoncole/FungiDB/fungi_db/components/BlastpSearch.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JsYXN0cFNlYXJjaC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXVDO0FBQ3ZDLE1BQU1DLFlBQVksR0FBRyxnRUFBZ0U7QUFFdEUsU0FBU0MsWUFBWSxHQUFHO0lBQ3JDLE1BQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBRTtJQUN4QixNQUFNSSxZQUFZLEdBQUcsT0FBT0MsS0FBSyxHQUFLO1FBQ2xDLHlEQUF5RDtRQUN6REEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7UUFDdEIsTUFBTUMsSUFBSSxHQUFHO1lBQ1hDLEtBQUssRUFBRUgsS0FBSyxDQUFDSSxNQUFNLENBQUNELEtBQUssQ0FBQ0UsS0FBSztTQUNoQztRQUNELE1BQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxTQUFTLENBQUNOLElBQUksQ0FBQztRQUNyQyxNQUFNTyxZQUFZLEdBQUcsa0JBQWtCO1FBQ3ZDLE1BQU1DLFdBQVcsR0FBRyxpQkFBaUI7UUFDckMsTUFBTUMsT0FBTyxHQUFHO1lBQ2RDLE1BQU0sRUFBRSxNQUFNO1lBQ2RDLE9BQU8sRUFBRTtnQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1lBQ0RDLElBQUksRUFBRVIsUUFBUTtTQUNmO1FBQ0QsV0FBVztRQUNYLE1BQU1TLE9BQU8sR0FBRyxNQUFNQyxLQUFLLENBQUNQLFlBQVksRUFBRUUsT0FBTyxDQUFDO1FBQ2xELE1BQU1NLGFBQWEsR0FBRyxNQUFNRixPQUFPLENBQUNHLElBQUksRUFBRTtRQUMxQyxNQUFNQyxRQUFRLEdBQUcsdUJBQXVCO1FBQ3hDckIsTUFBTSxDQUFDc0IsSUFBSSxDQUFDO1lBQ1ZDLFFBQVEsRUFBRUYsUUFBUTtTQUNuQixDQUFDLENBQUM7S0FDSjtJQUVILHFCQUNJLDhEQUFDRyxNQUFJO1FBQUNDLFFBQVEsRUFBRXhCLFlBQVk7OzBCQUN4Qiw4REFBQ3lCLE9BQUs7Z0JBQUNDLElBQUksRUFBQyxNQUFNO2dCQUFDQyxFQUFFLEVBQUMsV0FBVztnQkFBQ0MsSUFBSSxFQUFDLE9BQU87Z0JBQUNDLFdBQVcsRUFBQyx5QkFBeUI7Ozs7O29CQUFFOzBCQUN0Riw4REFBQ0MsUUFBTTtnQkFBQ0osSUFBSSxFQUFDLFFBQVE7MEJBQUMsUUFBTTs7Ozs7b0JBQVM7Ozs7OztZQUNsQyxDQUNUO0NBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW5naV9kYi8uL2NvbXBvbmVudHMvQmxhc3RwU2VhcmNoLmpzP2ViYTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5jb25zdCBkZWZhdWx0UXVlcnkgPSBcIkZRVFdFRUZTUkFBRUtMWUxBRFBNS1ZSVlZMS1lSSFZER05MQ0lLVlRERExWQ0xWWVJURFFBUURWS0tJRUtGXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsYXN0cFNlYXJjaCgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIFN0b3AgdGhlIGZvcm0gZnJvbSBzdWJtaXR0aW5nIGFuZCByZWZyZXNoaW5nIHRoZSBwYWdlLlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpICAgIFxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIHF1ZXJ5OiBldmVudC50YXJnZXQucXVlcnkudmFsdWUsXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgSlNPTmRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgICAgICBjb25zdCBwb3N0RW5kcG9pbnQgPSAnL2FwaS9wb3N0UmVxdWVzdCdcbiAgICAgICAgY29uc3QgZ2V0RW5kcG9pbnQgPSAnL2FwaS9nZXRSZXF1ZXN0J1xuICAgICAgICBjb25zdCBvcHRpb25zID0geyAgICAgICAgICBcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTmRhdGEsXG4gICAgICAgIH1cbiAgICAgICAgLy9tYWtlIFBPU1RcbiAgICAgICAgY29uc3QgcG9zdFJlcyA9IGF3YWl0IGZldGNoKHBvc3RFbmRwb2ludCwgb3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IHBvc3RSZXNSZXN1bHQgPSBhd2FpdCBwb3N0UmVzLmpzb24oKTtcbiAgICAgICAgY29uc3QgcGF0aE5hbWUgPSBcIi9ibGFzdHAvYmxhc3RQUmVzdWx0c1wiXG4gICAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICBwYXRobmFtZTogcGF0aE5hbWUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwic2VhcmNoQm94XCIgbmFtZT1cInF1ZXJ5XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBGQVNUQSBzZXF1ZW5jZS4uLlwiLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgKTtcbn1cblxuXG5cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJkZWZhdWx0UXVlcnkiLCJCbGFzdHBTZWFyY2giLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInF1ZXJ5IiwidGFyZ2V0IiwidmFsdWUiLCJKU09OZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb3N0RW5kcG9pbnQiLCJnZXRFbmRwb2ludCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInBvc3RSZXMiLCJmZXRjaCIsInBvc3RSZXNSZXN1bHQiLCJqc29uIiwicGF0aE5hbWUiLCJwdXNoIiwicGF0aG5hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BlastpSearch.js\n");

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