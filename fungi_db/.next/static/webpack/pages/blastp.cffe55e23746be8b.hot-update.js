"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blastp",{

/***/ "./components/getRequest.js":
/*!**********************************!*\
  !*** ./components/getRequest.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GetRequest; }\n/* harmony export */ });\n/* harmony import */ var _home_sunny_fungiDB_fungi_db_fungi_db_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_sunny_fungiDB_fungi_db_fungi_db_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_sunny_fungiDB_fungi_db_fungi_db_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar defaultEndpoint = \"http://localhost:8080/\";\nfunction GetRequest() {\n    return _GetRequest.apply(this, arguments);\n};\nfunction _GetRequest() {\n    _GetRequest = _asyncToGenerator(_home_sunny_fungiDB_fungi_db_fungi_db_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var res, resJson;\n        return _home_sunny_fungiDB_fungi_db_fungi_db_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(defaultEndpoint);\n                case 2:\n                    res = _ctx.sent;\n                    _ctx.next = 5;\n                    return res.json();\n                case 5:\n                    resJson = _ctx.sent;\n                    console.log(\"Res from getRequest is: \" + resJson.score);\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    // if (!res) {\n    //     return {\n    //         notFound: true\n    //     }\n    // }\n    // return {\n    //     props: { resJson }\n    // }\n    }));\n    return _GetRequest.apply(this, arguments);\n}\n_c = GetRequest;\nvar _c;\n$RefreshReg$(_c, \"GetRequest\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dldFJlcXVlc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGVBQWUsR0FBRyx3QkFBd0I7QUFFakMsU0FBZUMsVUFBVTtXQUFWQSxXQUFVO0VBY3ZDO1NBZDZCQSxXQUFVO0lBQVZBLFdBQVUsR0FBekIsc0xBQTJCO1lBQ2hDQyxHQUFHLEVBQ0hDLE9BQU87Ozs7OzJCQURLQyxLQUFLLENBQUNKLGVBQWUsQ0FBQzs7b0JBQWxDRSxHQUFHLFlBQStCOzsyQkFDbEJBLEdBQUcsQ0FBQ0csSUFBSSxFQUFFOztvQkFBMUJGLE9BQU8sWUFBbUI7b0JBQ2hDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQywwQkFBMEIsR0FBR0osT0FBTyxDQUFDSyxLQUFLLENBQUMsQ0FBQzs7Ozs7O0lBRXhELGNBQWM7SUFDZCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFFBQVE7SUFDUixJQUFJO0lBRUosV0FBVztJQUNYLHlCQUF5QjtJQUN6QixJQUFJO0tBQ1A7V0FkNkJQLFdBQVU7O0FBQVZBLEtBQUFBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRSZXF1ZXN0LmpzP2I2Y2MiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVmYXVsdEVuZHBvaW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEdldFJlcXVlc3QoKXtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChkZWZhdWx0RW5kcG9pbnQpXG4gICAgY29uc3QgcmVzSnNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc29sZS5sb2coXCJSZXMgZnJvbSBnZXRSZXF1ZXN0IGlzOiBcIiArIHJlc0pzb24uc2NvcmUpO1xuXG4gICAgLy8gaWYgKCFyZXMpIHtcbiAgICAvLyAgICAgcmV0dXJuIHtcbiAgICAvLyAgICAgICAgIG5vdEZvdW5kOiB0cnVlXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICAvLyByZXR1cm4ge1xuICAgIC8vICAgICBwcm9wczogeyByZXNKc29uIH1cbiAgICAvLyB9XG59Il0sIm5hbWVzIjpbImRlZmF1bHRFbmRwb2ludCIsIkdldFJlcXVlc3QiLCJyZXMiLCJyZXNKc29uIiwiZmV0Y2giLCJqc29uIiwiY29uc29sZSIsImxvZyIsInNjb3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/getRequest.js\n");

/***/ })

});