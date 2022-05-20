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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GetRequest)\n/* harmony export */ });\nconst defaultEndpoint = \"http://localhost:4000/\";\nasync function GetRequest() {\n    const res = await fetch(defaultEndpoint);\n    const resJson = await res.json();\n    console.log(\"ResJson from getRequest is: \" + resJson);\n    if (!resJson) {\n        return {\n            notFound: true\n        };\n    }\n    return {\n        props: {\n            resJson\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dldFJlcXVlc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLGVBQWUsR0FBRyx3QkFBd0I7QUFFakMsZUFBZUMsVUFBVSxHQUFFO0lBQ3RDLE1BQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNILGVBQWUsQ0FBQztJQUN4QyxNQUFNSSxPQUFPLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFJLEVBQUU7SUFDaENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDhCQUE4QixHQUFHSCxPQUFPLENBQUMsQ0FBQztJQUV0RCxJQUFJLENBQUNBLE9BQU8sRUFBRTtRQUNWLE9BQU87WUFDSEksUUFBUSxFQUFFLElBQUk7U0FDakI7S0FDSjtJQUVELE9BQU87UUFDSEMsS0FBSyxFQUFFO1lBQUVMLE9BQU87U0FBRTtLQUNyQjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnVuZ2lfZGIvLi9jb21wb25lbnRzL2dldFJlcXVlc3QuanM/YjZjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZWZhdWx0RW5kcG9pbnQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9cIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gR2V0UmVxdWVzdCgpe1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGRlZmF1bHRFbmRwb2ludClcbiAgICBjb25zdCByZXNKc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhcIlJlc0pzb24gZnJvbSBnZXRSZXF1ZXN0IGlzOiBcIiArIHJlc0pzb24pO1xuXG4gICAgaWYgKCFyZXNKc29uKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBub3RGb3VuZDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHsgcmVzSnNvbiB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJkZWZhdWx0RW5kcG9pbnQiLCJHZXRSZXF1ZXN0IiwicmVzIiwiZmV0Y2giLCJyZXNKc29uIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJub3RGb3VuZCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/getRequest.js\n");

/***/ }),

/***/ "./components/postRequest.js":
/*!***********************************!*\
  !*** ./components/postRequest.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PostRequest)\n/* harmony export */ });\nconst defaultRoute = \"http://localhost:8080/\";\nasync function PostRequest() {\n    const theBody = {\n        \"user\": \"simoncole\",\n        \"password\": \"password1\"\n    };\n    console.log(\"made it here\");\n    const res = await fetch(defaultRoute, {\n        \"method\": \"POST\",\n        \"headers\": {\n            \"Content-Type\": \"application/json\"\n        },\n        \"body\": JSON.stringify(theBody)\n    });\n    console.log(\"This was called\");\n    if (!res) {\n        return {\n            notfound: true\n        };\n    }\n    return {\n        props: res\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RSZXF1ZXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFDQSxNQUFNQSxZQUFZLEdBQUcsd0JBQXdCO0FBRTlCLGVBQWVDLFdBQVcsR0FBRTtJQUN2QyxNQUFNQyxPQUFPLEdBQUc7UUFDWixNQUFNLEVBQUUsV0FBVztRQUNuQixVQUFVLEVBQUUsV0FBVztLQUMxQjtJQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1QixNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDTixZQUFZLEVBQUU7UUFDbEMsUUFBUSxFQUFFLE1BQU07UUFDaEIsU0FBUyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGtCQUFrQjtTQUNyQztRQUNELE1BQU0sRUFBRU8sSUFBSSxDQUFDQyxTQUFTLENBQUNOLE9BQU8sQ0FBQztLQUNsQyxDQUFDO0lBQ0ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDL0IsSUFBSSxDQUFDQyxHQUFHLEVBQUM7UUFDTCxPQUFPO1lBQ0hJLFFBQVEsRUFBRSxJQUFJO1NBQ2pCO0tBQ0o7SUFDRCxPQUFPO1FBQ0hDLEtBQUssRUFBRUwsR0FBRztLQUNiO0NBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW5naV9kYi8uL2NvbXBvbmVudHMvcG9zdFJlcXVlc3QuanM/NDYxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGRlZmF1bHRSb3V0ZSA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBQb3N0UmVxdWVzdCgpe1xuICAgIGNvbnN0IHRoZUJvZHkgPSB7XG4gICAgICAgIFwidXNlclwiOiBcInNpbW9uY29sZVwiLFxuICAgICAgICBcInBhc3N3b3JkXCI6IFwicGFzc3dvcmQxXCJcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKFwibWFkZSBpdCBoZXJlXCIpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGRlZmF1bHRSb3V0ZSwge1xuICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgXCJoZWFkZXJzXCI6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBcImJvZHlcIjogSlNPTi5zdHJpbmdpZnkodGhlQm9keSksXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJUaGlzIHdhcyBjYWxsZWRcIik7XG4gICAgaWYgKCFyZXMpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbm90Zm91bmQ6IHRydWUsXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHJlcyxcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiZGVmYXVsdFJvdXRlIiwiUG9zdFJlcXVlc3QiLCJ0aGVCb2R5IiwiY29uc29sZSIsImxvZyIsInJlcyIsImZldGNoIiwiSlNPTiIsInN0cmluZ2lmeSIsIm5vdGZvdW5kIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/postRequest.js\n");

/***/ }),

/***/ "./pages/blastp/index.js":
/*!*******************************!*\
  !*** ./pages/blastp/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Blastp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_getRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/getRequest */ \"./components/getRequest.js\");\n/* harmony import */ var _components_postRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/postRequest */ \"./components/postRequest.js\");\n\n\n\n\nconst defaultEndpoint = \"http://localhost:4000/\";\n// export async function getServerSideProps(){\n//     const res = await fetch(defaultEndpoint)\n//     const data = await res.json();\n//     if (!data) {\n//         return {\n//             notFound: true\n//         }\n//     }\n//     return {\n//         props: { data }\n//     }\n// }\nfunction Blastp() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                children: \"Blastp\"\n            }, void 0, false, {\n                fileName: \"/Users/simoncole/FungiDB/fungi_db/pages/blastp/index.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: _components_postRequest__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                children: \"Post Request\"\n            }, void 0, false, {\n                fileName: \"/Users/simoncole/FungiDB/fungi_db/pages/blastp/index.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: _components_getRequest__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                children: \"Get Request\"\n            }, void 0, false, {\n                fileName: \"/Users/simoncole/FungiDB/fungi_db/pages/blastp/index.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/simoncole/FungiDB/fungi_db/pages/blastp/index.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibGFzdHAvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWlEO0FBQ0k7QUFDRTtBQUN2RCxNQUFNRyxlQUFlLEdBQUcsd0JBQXdCO0FBR2hELDhDQUE4QztBQUM5QywrQ0FBK0M7QUFDL0MscUNBQXFDO0FBRXJDLG1CQUFtQjtBQUNuQixtQkFBbUI7QUFDbkIsNkJBQTZCO0FBQzdCLFlBQVk7QUFDWixRQUFRO0FBRVIsZUFBZTtBQUNmLDBCQUEwQjtBQUMxQixRQUFRO0FBQ1IsSUFBSTtBQUVXLFNBQVNDLE1BQU0sR0FBRztJQUM3QixxQkFDSSw4REFBQ0MsTUFBSTs7MEJBQ0QsOERBQUNDLElBQUU7Z0JBQUNDLFNBQVMsRUFBRVAsc0VBQVk7MEJBQUUsUUFBTTs7Ozs7b0JBQUs7MEJBQ3hDLDhEQUFDUyxRQUFNO2dCQUFDQyxPQUFPLEVBQUdSLCtEQUFXOzBCQUFHLGNBQVk7Ozs7O29CQUFTOzBCQUNyRCw4REFBQ08sUUFBTTtnQkFBQ0MsT0FBTyxFQUFHVCw4REFBVTswQkFBRyxhQUFXOzs7OztvQkFBUzs7Ozs7O1lBQ2hELENBQ1Q7Q0FDTCIsInNvdXJjZXMiOlsid2VicGFjazovL2Z1bmdpX2RiLy4vcGFnZXMvYmxhc3RwL2luZGV4LmpzPzJmYzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiXG5pbXBvcnQgR2V0UmVxdWVzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nZXRSZXF1ZXN0XCI7XG5pbXBvcnQgUG9zdFJlcXVlc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcG9zdFJlcXVlc3RcIjtcbmNvbnN0IGRlZmF1bHRFbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL1wiO1xuXG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKXtcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChkZWZhdWx0RW5kcG9pbnQpXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbi8vICAgICBpZiAoIWRhdGEpIHtcbi8vICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgIG5vdEZvdW5kOiB0cnVlXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBwcm9wczogeyBkYXRhIH1cbi8vICAgICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsYXN0cCgpIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5CbGFzdHA8L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgUG9zdFJlcXVlc3QgfT5Qb3N0IFJlcXVlc3Q8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17IEdldFJlcXVlc3QgfT5HZXQgUmVxdWVzdDwvYnV0dG9uPlxuICAgICAgICA8L21haW4+XG4gICAgKTtcbn1cblxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkdldFJlcXVlc3QiLCJQb3N0UmVxdWVzdCIsImRlZmF1bHRFbmRwb2ludCIsIkJsYXN0cCIsIm1haW4iLCJoMSIsImNsYXNzTmFtZSIsInRpdGxlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blastp/index.js\n");

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