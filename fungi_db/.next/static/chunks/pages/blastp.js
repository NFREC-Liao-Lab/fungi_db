/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/blastp"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fsunny%2FfungiDB%2Ffungi_db%2Ffungi_db%2Fpages%2Fblastp%2Findex.js&page=%2Fblastp!":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fsunny%2FfungiDB%2Ffungi_db%2Ffungi_db%2Fpages%2Fblastp%2Findex.js&page=%2Fblastp! ***!
  \***********************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/blastp\",\n      function () {\n        return __webpack_require__(/*! ./pages/blastp/index.js */ \"./pages/blastp/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/blastp\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZob21lJTJGc3VubnklMkZmdW5naURCJTJGZnVuZ2lfZGIlMkZmdW5naV9kYiUyRnBhZ2VzJTJGYmxhc3RwJTJGaW5kZXguanMmcGFnZT0lMkZibGFzdHAhLmpzIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsd0RBQXlCO0FBQ2hEO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz9lNTkzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvYmxhc3RwXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9ibGFzdHAvaW5kZXguanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL2JsYXN0cFwiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fsunny%2FfungiDB%2Ffungi_db%2Ffungi_db%2Fpages%2Fblastp%2Findex.js&page=%2Fblastp!\n");

/***/ }),

/***/ "./components/getRequest.js":
/*!**********************************!*\
  !*** ./components/getRequest.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GetRequest; }\n/* harmony export */ });\n/* harmony import */ var _home_sunny_fungiDB_fungi_db_fungi_db_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_sunny_fungiDB_fungi_db_fungi_db_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_sunny_fungiDB_fungi_db_fungi_db_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar defaultEndpoint = \"http://localhost:8080/\";\nfunction GetRequest() {\n    return _GetRequest.apply(this, arguments);\n};\nfunction _GetRequest() {\n    _GetRequest = _asyncToGenerator(_home_sunny_fungiDB_fungi_db_fungi_db_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var res, resJson;\n        return _home_sunny_fungiDB_fungi_db_fungi_db_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(defaultEndpoint);\n                case 2:\n                    res = _ctx.sent;\n                    _ctx.next = 5;\n                    return res.json();\n                case 5:\n                    resJson = _ctx.sent;\n                    console.log(\"Res from getRequest is: \" + resJson.firstScore);\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    // if (!res) {\n    //     return {\n    //         notFound: true\n    //     }\n    // }\n    // return {\n    //     props: { resJson }\n    // }\n    }));\n    return _GetRequest.apply(this, arguments);\n}\n_c = GetRequest;\nvar _c;\n$RefreshReg$(_c, \"GetRequest\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dldFJlcXVlc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGVBQWUsR0FBRyx3QkFBd0I7QUFFakMsU0FBZUMsVUFBVTtXQUFWQSxXQUFVO0VBY3ZDO1NBZDZCQSxXQUFVO0lBQVZBLFdBQVUsR0FBekIsc0xBQTJCO1lBQ2hDQyxHQUFHLEVBQ0hDLE9BQU87Ozs7OzJCQURLQyxLQUFLLENBQUNKLGVBQWUsQ0FBQzs7b0JBQWxDRSxHQUFHLFlBQStCOzsyQkFDbEJBLEdBQUcsQ0FBQ0csSUFBSSxFQUFFOztvQkFBMUJGLE9BQU8sWUFBbUI7b0JBQ2hDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQywwQkFBMEIsR0FBR0osT0FBTyxDQUFDSyxVQUFVLENBQUMsQ0FBQzs7Ozs7O0lBRTdELGNBQWM7SUFDZCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFFBQVE7SUFDUixJQUFJO0lBRUosV0FBVztJQUNYLHlCQUF5QjtJQUN6QixJQUFJO0tBQ1A7V0FkNkJQLFdBQVU7O0FBQVZBLEtBQUFBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRSZXF1ZXN0LmpzP2I2Y2MiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVmYXVsdEVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEdldFJlcXVlc3QoKXtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChkZWZhdWx0RW5kcG9pbnQpXG4gICAgY29uc3QgcmVzSnNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc29sZS5sb2coXCJSZXMgZnJvbSBnZXRSZXF1ZXN0IGlzOiBcIiArIHJlc0pzb24uZmlyc3RTY29yZSk7XG5cbiAgICAvLyBpZiAoIXJlcykge1xuICAgIC8vICAgICByZXR1cm4ge1xuICAgIC8vICAgICAgICAgbm90Rm91bmQ6IHRydWVcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIC8vIHJldHVybiB7XG4gICAgLy8gICAgIHByb3BzOiB7IHJlc0pzb24gfVxuICAgIC8vIH1cbn0iXSwibmFtZXMiOlsiZGVmYXVsdEVuZHBvaW50IiwiR2V0UmVxdWVzdCIsInJlcyIsInJlc0pzb24iLCJmZXRjaCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZmlyc3RTY29yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/getRequest.js\n");

/***/ }),

/***/ "./components/postRequest.js":
/*!***********************************!*\
  !*** ./components/postRequest.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostRequest; }\n/* harmony export */ });\n/* harmony import */ var _home_sunny_fungiDB_fungi_db_fungi_db_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_sunny_fungiDB_fungi_db_fungi_db_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_sunny_fungiDB_fungi_db_fungi_db_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar defaultRoute = \"http://localhost:8080/\";\nvar defaultQuery = \"FQTWEEFSRAAEKLYLADPMKVRVVLKYRHVDGNLCIKVTDDLVCLVYRTDQAQDVKKIEKF\";\nfunction PostRequest() {\n    return _PostRequest.apply(this, arguments);\n};\nfunction _PostRequest() {\n    _PostRequest = _asyncToGenerator(_home_sunny_fungiDB_fungi_db_fungi_db_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var theBody, res;\n        return _home_sunny_fungiDB_fungi_db_fungi_db_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    theBody = {\n                        \"query\": defaultQuery\n                    };\n                    console.log(\"made it here\");\n                    _ctx.next = 4;\n                    return fetch(defaultRoute, {\n                        \"method\": \"POST\",\n                        \"headers\": {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        \"body\": JSON.stringify(theBody)\n                    });\n                case 4:\n                    res = _ctx.sent;\n                    console.log(res);\n                    if (res) {\n                        _ctx.next = 8;\n                        break;\n                    }\n                    return _ctx.abrupt(\"return\", {\n                        notfound: true\n                    });\n                case 8:\n                    return _ctx.abrupt(\"return\", {\n                        props: res\n                    });\n                case 9:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _PostRequest.apply(this, arguments);\n}\n_c = PostRequest;\nvar _c;\n$RefreshReg$(_c, \"PostRequest\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RSZXF1ZXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUcsd0JBQXdCO0FBQzdDLElBQU1DLFlBQVksR0FBRyxnRUFBZ0U7QUFFdEUsU0FBZUMsV0FBVztXQUFYQSxZQUFXO0VBc0J4QztTQXRCNkJBLFlBQVc7SUFBWEEsWUFBVyxHQUExQixzTEFBNEI7WUFDakNDLE9BQU8sRUFJUEMsR0FBRzs7OztvQkFKSEQsT0FBTyxHQUFHO3dCQUNaLE9BQU8sRUFBRUYsWUFBWTtxQkFDeEIsQ0FBQztvQkFDRkksT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7OzJCQUNWQyxLQUFLLENBQUNQLFlBQVksRUFBRTt3QkFDbEMsUUFBUSxFQUFFLE1BQU07d0JBQ2hCLFNBQVMsRUFBRTs0QkFDUCxjQUFjLEVBQUUsa0JBQWtCO3lCQUNyQzt3QkFDRCxNQUFNLEVBQUVRLElBQUksQ0FBQ0MsU0FBUyxDQUFDTixPQUFPLENBQUM7cUJBQ2xDLENBQUM7O29CQU5JQyxHQUFHLFlBTVA7b0JBQ0ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUMsQ0FBQzt3QkFDWkEsR0FBRzs7OztpREFDRzt3QkFDSE0sUUFBUSxFQUFFLElBQUk7cUJBQ2pCOztpREFFRTt3QkFDSEMsS0FBSyxFQUFFUCxHQUFHO3FCQUNiOzs7Ozs7S0FFSjtXQXRCNkJGLFlBQVc7O0FBQVhBLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0UmVxdWVzdC5qcz80NjE2Il0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgZGVmYXVsdFJvdXRlID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XG5jb25zdCBkZWZhdWx0UXVlcnkgPSBcIkZRVFdFRUZTUkFBRUtMWUxBRFBNS1ZSVlZMS1lSSFZER05MQ0lLVlRERExWQ0xWWVJURFFBUURWS0tJRUtGXCJcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gUG9zdFJlcXVlc3QoKXtcbiAgICBjb25zdCB0aGVCb2R5ID0ge1xuICAgICAgICBcInF1ZXJ5XCI6IGRlZmF1bHRRdWVyeVxuICAgIH07XG4gICAgY29uc29sZS5sb2coXCJtYWRlIGl0IGhlcmVcIik7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZGVmYXVsdFJvdXRlLCB7XG4gICAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuICAgICAgICBcImhlYWRlcnNcIjoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIFwiYm9keVwiOiBKU09OLnN0cmluZ2lmeSh0aGVCb2R5KSxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIGlmICghcmVzKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5vdGZvdW5kOiB0cnVlLFxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiByZXMsXG4gICAgfVxuXG59Il0sIm5hbWVzIjpbImRlZmF1bHRSb3V0ZSIsImRlZmF1bHRRdWVyeSIsIlBvc3RSZXF1ZXN0IiwidGhlQm9keSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJub3Rmb3VuZCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/postRequest.js\n");

/***/ }),

/***/ "./pages/blastp/index.js":
/*!*******************************!*\
  !*** ./pages/blastp/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Blastp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_getRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/getRequest */ \"./components/getRequest.js\");\n/* harmony import */ var _components_postRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/postRequest */ \"./components/postRequest.js\");\n\n\n\n\nvar defaultEndpoint = \"http://localhost:4000/\";\n// export async function getServerSideProps(){\n//     const res = await fetch(defaultEndpoint)\n//     const data = await res.json();\n//     if (!data) {\n//         return {\n//             notFound: true\n//         }\n//     }\n//     return {\n//         props: { data }\n//     }\n// }\nfunction Blastp() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                children: \"Blastp\"\n            }, void 0, false, {\n                fileName: \"/home/sunny/fungiDB/fungi_db/fungi_db/pages/blastp/index.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: _components_postRequest__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                children: \"Post Request\"\n            }, void 0, false, {\n                fileName: \"/home/sunny/fungiDB/fungi_db/fungi_db/pages/blastp/index.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: _components_getRequest__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                children: \"Get Request\"\n            }, void 0, false, {\n                fileName: \"/home/sunny/fungiDB/fungi_db/fungi_db/pages/blastp/index.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sunny/fungiDB/fungi_db/fungi_db/pages/blastp/index.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n};\n_c = Blastp;\nvar _c;\n$RefreshReg$(_c, \"Blastp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibGFzdHAvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWlEO0FBQ0k7QUFDRTtBQUN2RCxJQUFNRyxlQUFlLEdBQUcsd0JBQXdCO0FBR2hELDhDQUE4QztBQUM5QywrQ0FBK0M7QUFDL0MscUNBQXFDO0FBRXJDLG1CQUFtQjtBQUNuQixtQkFBbUI7QUFDbkIsNkJBQTZCO0FBQzdCLFlBQVk7QUFDWixRQUFRO0FBRVIsZUFBZTtBQUNmLDBCQUEwQjtBQUMxQixRQUFRO0FBQ1IsSUFBSTtBQUVXLFNBQVNDLE1BQU0sR0FBRztJQUM3QixxQkFDSSw4REFBQ0MsTUFBSTs7MEJBQ0QsOERBQUNDLElBQUU7Z0JBQUNDLFNBQVMsRUFBRVAsc0VBQVk7MEJBQUUsUUFBTTs7Ozs7b0JBQUs7MEJBQ3hDLDhEQUFDUyxRQUFNO2dCQUFDQyxPQUFPLEVBQUdSLCtEQUFXOzBCQUFHLGNBQVk7Ozs7O29CQUFTOzBCQUNyRCw4REFBQ08sUUFBTTtnQkFBQ0MsT0FBTyxFQUFHVCw4REFBVTswQkFBRyxhQUFXOzs7OztvQkFBUzs7Ozs7O1lBQ2hELENBQ1Q7Q0FDTDtBQVJ1QkcsS0FBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ibGFzdHAvaW5kZXguanM/MmZjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCJcbmltcG9ydCBHZXRSZXF1ZXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dldFJlcXVlc3RcIjtcbmltcG9ydCBQb3N0UmVxdWVzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wb3N0UmVxdWVzdFwiO1xuY29uc3QgZGVmYXVsdEVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvXCI7XG5cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpe1xuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGRlZmF1bHRFbmRwb2ludClcbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuLy8gICAgIGlmICghZGF0YSkge1xuLy8gICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgbm90Rm91bmQ6IHRydWVcbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIHByb3BzOiB7IGRhdGEgfVxuLy8gICAgIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxhc3RwKCkge1xuICAgIHJldHVybihcbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkJsYXN0cDwvaDE+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyBQb3N0UmVxdWVzdCB9PlBvc3QgUmVxdWVzdDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgR2V0UmVxdWVzdCB9PkdldCBSZXF1ZXN0PC9idXR0b24+XG4gICAgICAgIDwvbWFpbj5cbiAgICApO1xufVxuXG4iXSwibmFtZXMiOlsic3R5bGVzIiwiR2V0UmVxdWVzdCIsIlBvc3RSZXF1ZXN0IiwiZGVmYXVsdEVuZHBvaW50IiwiQmxhc3RwIiwibWFpbiIsImgxIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blastp/index.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fsunny%2FfungiDB%2Ffungi_db%2Ffungi_db%2Fpages%2Fblastp%2Findex.js&page=%2Fblastp!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);