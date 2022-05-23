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

/***/ "./components/getRequest.js":
/*!**********************************!*\
  !*** ./components/getRequest.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GetRequest)\n/* harmony export */ });\nconst defaultEndpoint = \"http://localhost:8080/\";\nasync function GetRequest() {\n    const res = await fetch(defaultEndpoint);\n    const resJson = await res.json();\n    console.log(\"Res from getRequest is: \" + resJson.firstScore);\n// if (!res) {\n//     return {\n//         notFound: true\n//     }\n// }\n// return {\n//     props: { resJson }\n// }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dldFJlcXVlc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLGVBQWUsR0FBRyx3QkFBd0I7QUFFakMsZUFBZUMsVUFBVSxHQUFFO0lBQ3RDLE1BQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNILGVBQWUsQ0FBQztJQUN4QyxNQUFNSSxPQUFPLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFJLEVBQUU7SUFDaENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDBCQUEwQixHQUFHSCxPQUFPLENBQUNJLFVBQVUsQ0FBQyxDQUFDO0FBRTdELGNBQWM7QUFDZCxlQUFlO0FBQ2YseUJBQXlCO0FBQ3pCLFFBQVE7QUFDUixJQUFJO0FBRUosV0FBVztBQUNYLHlCQUF5QjtBQUN6QixJQUFJO0NBQ1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW5naV9kYi8uL2NvbXBvbmVudHMvZ2V0UmVxdWVzdC5qcz9iNmNjIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlZmF1bHRFbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBHZXRSZXF1ZXN0KCl7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZGVmYXVsdEVuZHBvaW50KVxuICAgIGNvbnN0IHJlc0pzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKFwiUmVzIGZyb20gZ2V0UmVxdWVzdCBpczogXCIgKyByZXNKc29uLmZpcnN0U2NvcmUpO1xuXG4gICAgLy8gaWYgKCFyZXMpIHtcbiAgICAvLyAgICAgcmV0dXJuIHtcbiAgICAvLyAgICAgICAgIG5vdEZvdW5kOiB0cnVlXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICAvLyByZXR1cm4ge1xuICAgIC8vICAgICBwcm9wczogeyByZXNKc29uIH1cbiAgICAvLyB9XG59Il0sIm5hbWVzIjpbImRlZmF1bHRFbmRwb2ludCIsIkdldFJlcXVlc3QiLCJyZXMiLCJmZXRjaCIsInJlc0pzb24iLCJqc29uIiwiY29uc29sZSIsImxvZyIsImZpcnN0U2NvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/getRequest.js\n");

/***/ }),

/***/ "./components/postRequest.js":
/*!***********************************!*\
  !*** ./components/postRequest.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PostRequest)\n/* harmony export */ });\nconst defaultRoute = \"http://localhost:8080/\";\nconst defaultQuery = \"FQTWEEFSRAAEKLYLADPMKVRVVLKYRHVDGNLCIKVTDDLVCLVYRTDQAQDVKKIEKF\";\nasync function PostRequest() {\n    const theBody = {\n        \"query\": defaultQuery\n    };\n    console.log(\"made it here\");\n    const res = await fetch(defaultRoute, {\n        \"method\": \"POST\",\n        \"headers\": {\n            \"Content-Type\": \"application/json\"\n        },\n        \"body\": JSON.stringify(theBody)\n    });\n    console.log(res);\n    if (!res) {\n        return {\n            notfound: true\n        };\n    }\n    return {\n        props: res\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RSZXF1ZXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFDQSxNQUFNQSxZQUFZLEdBQUcsd0JBQXdCO0FBQzdDLE1BQU1DLFlBQVksR0FBRyxnRUFBZ0U7QUFFdEUsZUFBZUMsV0FBVyxHQUFFO0lBQ3ZDLE1BQU1DLE9BQU8sR0FBRztRQUNaLE9BQU8sRUFBRUYsWUFBWTtLQUN4QjtJQUNERyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1QixNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDUCxZQUFZLEVBQUU7UUFDbEMsUUFBUSxFQUFFLE1BQU07UUFDaEIsU0FBUyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGtCQUFrQjtTQUNyQztRQUNELE1BQU0sRUFBRVEsSUFBSSxDQUFDQyxTQUFTLENBQUNOLE9BQU8sQ0FBQztLQUNsQyxDQUFDO0lBQ0ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxHQUFHLENBQUMsQ0FBQztJQUNqQixJQUFJLENBQUNBLEdBQUcsRUFBQztRQUNMLE9BQU87WUFDSEksUUFBUSxFQUFFLElBQUk7U0FDakI7S0FDSjtJQUNELE9BQU87UUFDSEMsS0FBSyxFQUFFTCxHQUFHO0tBQ2I7Q0FFSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Z1bmdpX2RiLy4vY29tcG9uZW50cy9wb3N0UmVxdWVzdC5qcz80NjE2Il0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgZGVmYXVsdFJvdXRlID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XG5jb25zdCBkZWZhdWx0UXVlcnkgPSBcIkZRVFdFRUZTUkFBRUtMWUxBRFBNS1ZSVlZMS1lSSFZER05MQ0lLVlRERExWQ0xWWVJURFFBUURWS0tJRUtGXCJcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gUG9zdFJlcXVlc3QoKXtcbiAgICBjb25zdCB0aGVCb2R5ID0ge1xuICAgICAgICBcInF1ZXJ5XCI6IGRlZmF1bHRRdWVyeVxuICAgIH07XG4gICAgY29uc29sZS5sb2coXCJtYWRlIGl0IGhlcmVcIik7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZGVmYXVsdFJvdXRlLCB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImhlYWRlcnNcIjoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIFwiYm9keVwiOiBKU09OLnN0cmluZ2lmeSh0aGVCb2R5KSxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIGlmICghcmVzKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5vdGZvdW5kOiB0cnVlLFxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiByZXMsXG4gICAgfVxuXG59Il0sIm5hbWVzIjpbImRlZmF1bHRSb3V0ZSIsImRlZmF1bHRRdWVyeSIsIlBvc3RSZXF1ZXN0IiwidGhlQm9keSIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJmZXRjaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJub3Rmb3VuZCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/postRequest.js\n");

/***/ }),

/***/ "./pages/blastp/index.js":
/*!*******************************!*\
  !*** ./pages/blastp/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Blastp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_getRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/getRequest */ \"./components/getRequest.js\");\n/* harmony import */ var _components_postRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/postRequest */ \"./components/postRequest.js\");\n\n\n\n\nconst defaultEndpoint = \"http://localhost:4000/\";\n// export async function getServerSideProps(){\n//     const res = await fetch(defaultEndpoint)\n//     const data = await res.json();\n//     if (!data) {\n//         return {\n//             notFound: true\n//         }\n//     }\n//     return {\n//         props: { data }\n//     }\n// }\nfunction Blastp() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                children: \"Blastp\"\n            }, void 0, false, {\n                fileName: \"/home/sunny/fungiDB/fungi_db/fungi_db/pages/blastp/index.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: _components_postRequest__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                children: \"Post Request\"\n            }, void 0, false, {\n                fileName: \"/home/sunny/fungiDB/fungi_db/fungi_db/pages/blastp/index.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: _components_getRequest__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                children: \"Get Request\"\n            }, void 0, false, {\n                fileName: \"/home/sunny/fungiDB/fungi_db/fungi_db/pages/blastp/index.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sunny/fungiDB/fungi_db/fungi_db/pages/blastp/index.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibGFzdHAvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWlEO0FBQ0k7QUFDRTtBQUN2RCxNQUFNRyxlQUFlLEdBQUcsd0JBQXdCO0FBR2hELDhDQUE4QztBQUM5QywrQ0FBK0M7QUFDL0MscUNBQXFDO0FBRXJDLG1CQUFtQjtBQUNuQixtQkFBbUI7QUFDbkIsNkJBQTZCO0FBQzdCLFlBQVk7QUFDWixRQUFRO0FBRVIsZUFBZTtBQUNmLDBCQUEwQjtBQUMxQixRQUFRO0FBQ1IsSUFBSTtBQUVXLFNBQVNDLE1BQU0sR0FBRztJQUM3QixxQkFDSSw4REFBQ0MsTUFBSTs7MEJBQ0QsOERBQUNDLElBQUU7Z0JBQUNDLFNBQVMsRUFBRVAsc0VBQVk7MEJBQUUsUUFBTTs7Ozs7b0JBQUs7MEJBQ3hDLDhEQUFDUyxRQUFNO2dCQUFDQyxPQUFPLEVBQUdSLCtEQUFXOzBCQUFHLGNBQVk7Ozs7O29CQUFTOzBCQUNyRCw4REFBQ08sUUFBTTtnQkFBQ0MsT0FBTyxFQUFHVCw4REFBVTswQkFBRyxhQUFXOzs7OztvQkFBUzs7Ozs7O1lBQ2hELENBQ1Q7Q0FDTCIsInNvdXJjZXMiOlsid2VicGFjazovL2Z1bmdpX2RiLy4vcGFnZXMvYmxhc3RwL2luZGV4LmpzPzJmYzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiXG5pbXBvcnQgR2V0UmVxdWVzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nZXRSZXF1ZXN0XCI7XG5pbXBvcnQgUG9zdFJlcXVlc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9zdFJlcXVlc3RcIjtcbmNvbnN0IGRlZmF1bHRFbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL1wiO1xuXG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKXtcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChkZWZhdWx0RW5kcG9pbnQpXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbi8vICAgICBpZiAoIWRhdGEpIHtcbi8vICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgIG5vdEZvdW5kOiB0cnVlXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBwcm9wczogeyBkYXRhIH1cbi8vICAgICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsYXN0cCgpIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5CbGFzdHA8L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgUG9zdFJlcXVlc3QgfT5Qb3N0IFJlcXVlc3Q8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17IEdldFJlcXVlc3QgfT5HZXQgUmVxdWVzdDwvYnV0dG9uPlxuICAgICAgICA8L21haW4+XG4gICAgKTtcbn1cblxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkdldFJlcXVlc3QiLCJQb3N0UmVxdWVzdCIsImRlZmF1bHRFbmRwb2ludCIsIkJsYXN0cCIsIm1haW4iLCJoMSIsImNsYXNzTmFtZSIsInRpdGxlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blastp/index.js\n");

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