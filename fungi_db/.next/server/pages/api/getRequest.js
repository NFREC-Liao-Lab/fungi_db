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
exports.id = "pages/api/getRequest";
exports.ids = ["pages/api/getRequest"];
exports.modules = {

/***/ "shelljs":
/*!**************************!*\
  !*** external "shelljs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("shelljs");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/getRequest.js":
/*!*********************************!*\
  !*** ./pages/api/getRequest.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst shelljs = __webpack_require__(/*! shelljs */ \"shelljs\");\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nfunction handler(req, res) {\n    let resultsFile = getFileName();\n    ReadResults(resultsFile, (results)=>{\n        res.status(200).json(results);\n    });\n};\nfunction getFileName() {\n    let fileName = shelljs.exec(\"cd /Users/simoncole/fungiDB/fungi_db/ ; ls -Art | tail -n 1\");\n    let fileName2 = fileName.trim();\n    return fileName2;\n}\nfunction ReadResults(resultsFile, receiverFunction) {\n    //showing top 10\n    let resultsFilePath = \"/Users/simoncole/fungiDB/fungi_db/\" + resultsFile;\n    let sequenceID = [];\n    let taxonomicID = []; //add this with data\n    let fungiLifestyle = [];\n    let totalScore = [];\n    let queryCoverage = [];\n    let eValue = [];\n    let identityValue = [];\n    fs.readFile(resultsFilePath, \"utf-8\", (err, jsonString)=>{\n        if (err) {\n            console.log(`Error in reading file ${resultsFile}: ${err}`);\n            return;\n        }\n        try {\n            let ObjectData = JSON.parse(jsonString);\n            for(let i = 0; i < 10; i++){\n                sequenceID[i] = ObjectData.queries[0].hits[i].id;\n                // TODO: taxonomicID[i] = ObjectData.queries[i]\n                // TODO: fungiLifestyle\n                // TODO: maxScore\n                totalScore[i] = ObjectData.queries[0].hits[i].total_score;\n                queryCoverage[i] = ObjectData.queries[0].hits[i].qcovs;\n                eValue[i] = ObjectData.queries[0].hits[i].hsps[0].evalue;\n                identityValue[i] = ObjectData.queries[0].hits[i].hsps[0].identity;\n            }\n        } catch (err1) {\n            console.log(\"There was an error in parsing the data: \", err1);\n            return;\n        }\n        let results = [];\n        for(let i = 0; i < 10; i++){\n            results[i] = {\n                \"sequenceID\": sequenceID[i],\n                \"totalScore\": totalScore[i],\n                \"queryCoverage\": queryCoverage[i],\n                \"eValue\": eValue[i],\n                \"identityValue\": identityValue[i]\n            };\n        }\n        receiverFunction(results);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7YUFFckU7U0FDSixDQUNELE9BQU1mLElBQUcsRUFBRTtZQUNQRSxPQUFPLENBQUNDLEdBQUcsQ0FBQywwQ0FBMEMsRUFBRUgsSUFBRyxDQUFDLENBQUM7WUFDN0QsT0FBTztTQUNWO1FBQ0QsSUFBSWpCLE9BQU8sR0FBRyxFQUFFO1FBQ2hCLElBQUksSUFBSXdCLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxFQUFFLEVBQUVBLENBQUMsRUFBRSxDQUFDO1lBQ3ZCeEIsT0FBTyxDQUFDd0IsQ0FBQyxDQUFDLEdBQUc7Z0JBQ1QsWUFBWSxFQUFFZixVQUFVLENBQUNlLENBQUMsQ0FBQztnQkFDM0IsWUFBWSxFQUFFWixVQUFVLENBQUNZLENBQUMsQ0FBQztnQkFDM0IsZUFBZSxFQUFFWCxhQUFhLENBQUNXLENBQUMsQ0FBQztnQkFDakMsUUFBUSxFQUFFVixNQUFNLENBQUNVLENBQUMsQ0FBQztnQkFDbkIsZUFBZSxFQUFFVCxhQUFhLENBQUNTLENBQUMsQ0FBQzthQUNwQztTQUNKO1FBQ0RqQixnQkFBZ0IsQ0FBQ1AsT0FBTyxDQUFDLENBQUM7S0FHN0IsQ0FBQyxDQUFDO0NBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW5naV9kYi8uL3BhZ2VzL2FwaS9nZXRSZXF1ZXN0LmpzPzIwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2hlbGxqcyA9IHJlcXVpcmUoXCJzaGVsbGpzXCIpO1xuY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgbGV0IHJlc3VsdHNGaWxlID0gZ2V0RmlsZU5hbWUoKTtcbiAgICBSZWFkUmVzdWx0cyhyZXN1bHRzRmlsZSwgKHJlc3VsdHMpID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oXG4gICAgICAgICAgICByZXN1bHRzXG4gICAgICAgICk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEZpbGVOYW1lKCl7XG4gICAgbGV0IGZpbGVOYW1lID0gc2hlbGxqcy5leGVjKFwiY2QgL1VzZXJzL3NpbW9uY29sZS9mdW5naURCL2Z1bmdpX2RiLyA7IGxzIC1BcnQgfCB0YWlsIC1uIDFcIik7XG4gICAgbGV0IGZpbGVOYW1lMiA9IGZpbGVOYW1lLnRyaW0oKTtcbiAgICByZXR1cm4gZmlsZU5hbWUyO1xufVxuXG5mdW5jdGlvbiBSZWFkUmVzdWx0cyhyZXN1bHRzRmlsZSwgcmVjZWl2ZXJGdW5jdGlvbil7XG4gICAgLy9zaG93aW5nIHRvcCAxMFxuICAgIGxldCByZXN1bHRzRmlsZVBhdGggPSBcIi9Vc2Vycy9zaW1vbmNvbGUvZnVuZ2lEQi9mdW5naV9kYi9cIiArIHJlc3VsdHNGaWxlO1xuXG4gICAgbGV0IHNlcXVlbmNlSUQgPSBbXTtcbiAgICBsZXQgdGF4b25vbWljSUQgPSBbXTsgLy9hZGQgdGhpcyB3aXRoIGRhdGFcbiAgICBsZXQgZnVuZ2lMaWZlc3R5bGUgPSBbXTsgXG4gICAgbGV0IHRvdGFsU2NvcmUgPSBbXTtcbiAgICBsZXQgcXVlcnlDb3ZlcmFnZSA9IFtdO1xuICAgIGxldCBlVmFsdWUgPSBbXTtcbiAgICBsZXQgaWRlbnRpdHlWYWx1ZSA9IFtdO1xuXG4gICAgZnMucmVhZEZpbGUocmVzdWx0c0ZpbGVQYXRoLCBcInV0Zi04XCIsIChlcnIsIGpzb25TdHJpbmcpID0+IHtcbiAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciBpbiByZWFkaW5nIGZpbGUgJHtyZXN1bHRzRmlsZX06ICR7ZXJyfWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgT2JqZWN0RGF0YSA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKyl7XG4gICAgICAgICAgICAgICAgc2VxdWVuY2VJRFtpXSA9IE9iamVjdERhdGEucXVlcmllc1swXS5oaXRzW2ldLmlkO1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IHRheG9ub21pY0lEW2ldID0gT2JqZWN0RGF0YS5xdWVyaWVzW2ldXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogZnVuZ2lMaWZlc3R5bGVcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBtYXhTY29yZVxuICAgICAgICAgICAgICAgIHRvdGFsU2NvcmVbaV0gPSBPYmplY3REYXRhLnF1ZXJpZXNbMF0uaGl0c1tpXS50b3RhbF9zY29yZTtcbiAgICAgICAgICAgICAgICBxdWVyeUNvdmVyYWdlW2ldID0gT2JqZWN0RGF0YS5xdWVyaWVzWzBdLmhpdHNbaV0ucWNvdnM7XG4gICAgICAgICAgICAgICAgZVZhbHVlW2ldID0gT2JqZWN0RGF0YS5xdWVyaWVzWzBdLmhpdHNbaV0uaHNwc1swXS5ldmFsdWU7XG4gICAgICAgICAgICAgICAgaWRlbnRpdHlWYWx1ZVtpXSA9IE9iamVjdERhdGEucXVlcmllc1swXS5oaXRzW2ldLmhzcHNbMF0uaWRlbnRpdHk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlcmUgd2FzIGFuIGVycm9yIGluIHBhcnNpbmcgdGhlIGRhdGE6IFwiLCBlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKXtcbiAgICAgICAgICAgIHJlc3VsdHNbaV0gPSB7XG4gICAgICAgICAgICAgICAgXCJzZXF1ZW5jZUlEXCI6IHNlcXVlbmNlSURbaV0sXG4gICAgICAgICAgICAgICAgXCJ0b3RhbFNjb3JlXCI6IHRvdGFsU2NvcmVbaV0sXG4gICAgICAgICAgICAgICAgXCJxdWVyeUNvdmVyYWdlXCI6IHF1ZXJ5Q292ZXJhZ2VbaV0sXG4gICAgICAgICAgICAgICAgXCJlVmFsdWVcIjogZVZhbHVlW2ldLFxuICAgICAgICAgICAgICAgIFwiaWRlbnRpdHlWYWx1ZVwiOiBpZGVudGl0eVZhbHVlW2ldLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlY2VpdmVyRnVuY3Rpb24ocmVzdWx0cyk7XG5cblxuICAgIH0pO1xufSJdLCJuYW1lcyI6WyJzaGVsbGpzIiwicmVxdWlyZSIsImZzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInJlc3VsdHNGaWxlIiwiZ2V0RmlsZU5hbWUiLCJSZWFkUmVzdWx0cyIsInJlc3VsdHMiLCJzdGF0dXMiLCJqc29uIiwiZmlsZU5hbWUiLCJleGVjIiwiZmlsZU5hbWUyIiwidHJpbSIsInJlY2VpdmVyRnVuY3Rpb24iLCJyZXN1bHRzRmlsZVBhdGgiLCJzZXF1ZW5jZUlEIiwidGF4b25vbWljSUQiLCJmdW5naUxpZmVzdHlsZSIsInRvdGFsU2NvcmUiLCJxdWVyeUNvdmVyYWdlIiwiZVZhbHVlIiwiaWRlbnRpdHlWYWx1ZSIsInJlYWRGaWxlIiwiZXJyIiwianNvblN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3REYXRhIiwiSlNPTiIsInBhcnNlIiwiaSIsInF1ZXJpZXMiLCJoaXRzIiwiaWQiLCJ0b3RhbF9zY29yZSIsInFjb3ZzIiwiaHNwcyIsImV2YWx1ZSIsImlkZW50aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getRequest.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getRequest.js"));
module.exports = __webpack_exports__;

})();