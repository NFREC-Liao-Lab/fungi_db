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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst shelljs = __webpack_require__(/*! shelljs */ \"shelljs\");\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nfunction handler(req, res) {\n    let resultsFile = getFileName();\n    ReadResults(resultsFile, (firstScore, nsequences)=>{\n        console.log(\"FirstScoreString before being sent back is: \", firstScore);\n        res.status(200).json([\n            {\n                \"id\": \"firstScore\",\n                \"firstScore\": `${firstScore}`\n            },\n            {\n                \"id\": \"nsequences\",\n                \"nsequences\": nsequences\n            }, \n        ]);\n    });\n};\nfunction getFileName() {\n    let fileName = shelljs.exec(\"cd /Users/simoncole/fungiDB/fungi_db/ ; ls -Art | tail -n 1\");\n    let fileName2 = fileName.trim();\n    return fileName2;\n}\nfunction ReadResults(resultsFile, receiverFunction) {\n    let resultsFilePath = \"/Users/simoncole/fungiDB/fungi_db/\" + resultsFile;\n    fs.readFile(resultsFilePath, \"utf-8\", (err, jsonString)=>{\n        if (err) {\n            console.log(`Error in reading file ${resultsFile}: ${err}`);\n            return;\n        }\n        try {\n            let ObjectData = JSON.parse(jsonString);\n            let firstScore = ObjectData.queries[0].hits[0].total_score;\n            let nsequences = ObjectData.stats.nsequences;\n            console.log(\"type of firstScore before stringify is: \", typeof firstScore);\n            console.log(\"after it is: \", typeof firstScore);\n            console.log(\"The nsequences is: \", nsequences);\n            console.log(\"The score of the first match is:\", firstScore);\n            receiverFunction(firstScore, nsequences);\n        } catch (err1) {\n            console.log(\"There was an error in parsing the data: \", err1);\n            return;\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0UmVxdWVzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLHdCQUFTLENBQUM7QUFDbEMsTUFBTUMsRUFBRSxHQUFHRCxtQkFBTyxDQUFDLGNBQUksQ0FBQztBQUNULFNBQVNFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdEMsSUFBSUMsV0FBVyxHQUFHQyxXQUFXLEVBQUU7SUFDL0JDLFdBQVcsQ0FBQ0YsV0FBVyxFQUFFLENBQUNHLFVBQVUsRUFBRUMsVUFBVSxHQUFLO1FBQ2pEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw4Q0FBOEMsRUFBRUgsVUFBVSxDQUFDLENBQUM7UUFDeEVKLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDakI7Z0JBQUMsSUFBSSxFQUFFLFlBQVk7Z0JBQUUsWUFBWSxFQUFFLENBQUMsRUFBRUwsVUFBVSxDQUFDLENBQUM7YUFBQztZQUNuRDtnQkFBQyxJQUFJLEVBQUUsWUFBWTtnQkFBRSxZQUFZLEVBQUVDLFVBQVU7YUFBQztTQUNqRCxDQUFDLENBQUM7S0FDTixDQUFDLENBQUM7Q0FDTjtBQUVELFNBQVNILFdBQVcsR0FBRTtJQUNsQixJQUFJUSxRQUFRLEdBQUdmLE9BQU8sQ0FBQ2dCLElBQUksQ0FBQyw2REFBNkQsQ0FBQztJQUMxRixJQUFJQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csSUFBSSxFQUFFO0lBQy9CLE9BQU9ELFNBQVMsQ0FBQztDQUNwQjtBQUVELFNBQVNULFdBQVcsQ0FBQ0YsV0FBVyxFQUFFYSxnQkFBZ0IsRUFBQztJQUMvQyxJQUFJQyxlQUFlLEdBQUcsb0NBQW9DLEdBQUdkLFdBQVc7SUFDeEVKLEVBQUUsQ0FBQ21CLFFBQVEsQ0FBQ0QsZUFBZSxFQUFFLE9BQU8sRUFBRSxDQUFDRSxHQUFHLEVBQUVDLFVBQVUsR0FBSztRQUN2RCxJQUFHRCxHQUFHLEVBQUM7WUFDSFgsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQyxzQkFBc0IsRUFBRU4sV0FBVyxDQUFDLEVBQUUsRUFBRWdCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RCxPQUFPO1NBQ1Y7UUFDRCxJQUFJO1lBQ0EsSUFBSUUsVUFBVSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsVUFBVSxDQUFDO1lBQ3ZDLElBQUlkLFVBQVUsR0FBR2UsVUFBVSxDQUFDRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsV0FBVztZQUMxRCxJQUFJbkIsVUFBVSxHQUFHYyxVQUFVLENBQUNNLEtBQUssQ0FBQ3BCLFVBQVU7WUFDNUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDBDQUEwQyxFQUFFLE9BQU9ILFVBQVUsQ0FBRSxDQUFDO1lBQzVFRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsT0FBT0gsVUFBVSxDQUFFLENBQUM7WUFDakRFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFCQUFxQixFQUFFRixVQUFVLENBQUMsQ0FBQztZQUMvQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0NBQWtDLEVBQUVILFVBQVUsQ0FBQyxDQUFDO1lBQzVEVSxnQkFBZ0IsQ0FBQ1YsVUFBVSxFQUFFQyxVQUFVLENBQUMsQ0FBQztTQUM1QyxDQUNELE9BQU1ZLElBQUcsRUFBRTtZQUNQWCxPQUFPLENBQUNDLEdBQUcsQ0FBQywwQ0FBMEMsRUFBRVUsSUFBRyxDQUFDLENBQUM7WUFDN0QsT0FBTztTQUNWO0tBQ0osQ0FBQyxDQUFDO0NBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW5naV9kYi8uL3BhZ2VzL2FwaS9nZXRSZXF1ZXN0LmpzPzIwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2hlbGxqcyA9IHJlcXVpcmUoXCJzaGVsbGpzXCIpO1xuY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgbGV0IHJlc3VsdHNGaWxlID0gZ2V0RmlsZU5hbWUoKTtcbiAgICBSZWFkUmVzdWx0cyhyZXN1bHRzRmlsZSwgKGZpcnN0U2NvcmUsIG5zZXF1ZW5jZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJGaXJzdFNjb3JlU3RyaW5nIGJlZm9yZSBiZWluZyBzZW50IGJhY2sgaXM6IFwiLCBmaXJzdFNjb3JlKTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oW1xuICAgICAgICAgICAge1wiaWRcIjogXCJmaXJzdFNjb3JlXCIsIFwiZmlyc3RTY29yZVwiOiBgJHtmaXJzdFNjb3JlfWB9LFxuICAgICAgICAgICAge1wiaWRcIjogXCJuc2VxdWVuY2VzXCIsIFwibnNlcXVlbmNlc1wiOiBuc2VxdWVuY2VzfSxcbiAgICAgICAgXSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEZpbGVOYW1lKCl7XG4gICAgbGV0IGZpbGVOYW1lID0gc2hlbGxqcy5leGVjKFwiY2QgL1VzZXJzL3NpbW9uY29sZS9mdW5naURCL2Z1bmdpX2RiLyA7IGxzIC1BcnQgfCB0YWlsIC1uIDFcIik7XG4gICAgbGV0IGZpbGVOYW1lMiA9IGZpbGVOYW1lLnRyaW0oKTtcbiAgICByZXR1cm4gZmlsZU5hbWUyO1xufVxuXG5mdW5jdGlvbiBSZWFkUmVzdWx0cyhyZXN1bHRzRmlsZSwgcmVjZWl2ZXJGdW5jdGlvbil7XG4gICAgbGV0IHJlc3VsdHNGaWxlUGF0aCA9IFwiL1VzZXJzL3NpbW9uY29sZS9mdW5naURCL2Z1bmdpX2RiL1wiICsgcmVzdWx0c0ZpbGU7XG4gICAgZnMucmVhZEZpbGUocmVzdWx0c0ZpbGVQYXRoLCBcInV0Zi04XCIsIChlcnIsIGpzb25TdHJpbmcpID0+IHtcbiAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciBpbiByZWFkaW5nIGZpbGUgJHtyZXN1bHRzRmlsZX06ICR7ZXJyfWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgT2JqZWN0RGF0YSA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG4gICAgICAgICAgICBsZXQgZmlyc3RTY29yZSA9IE9iamVjdERhdGEucXVlcmllc1swXS5oaXRzWzBdLnRvdGFsX3Njb3JlO1xuICAgICAgICAgICAgbGV0IG5zZXF1ZW5jZXMgPSBPYmplY3REYXRhLnN0YXRzLm5zZXF1ZW5jZXM7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInR5cGUgb2YgZmlyc3RTY29yZSBiZWZvcmUgc3RyaW5naWZ5IGlzOiBcIiwgdHlwZW9mKGZpcnN0U2NvcmUpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgaXQgaXM6IFwiLCB0eXBlb2YoZmlyc3RTY29yZSkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGUgbnNlcXVlbmNlcyBpczogXCIsIG5zZXF1ZW5jZXMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGUgc2NvcmUgb2YgdGhlIGZpcnN0IG1hdGNoIGlzOlwiLCBmaXJzdFNjb3JlKTtcbiAgICAgICAgICAgIHJlY2VpdmVyRnVuY3Rpb24oZmlyc3RTY29yZSwgbnNlcXVlbmNlcyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZXJlIHdhcyBhbiBlcnJvciBpbiBwYXJzaW5nIHRoZSBkYXRhOiBcIiwgZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH0pO1xufSJdLCJuYW1lcyI6WyJzaGVsbGpzIiwicmVxdWlyZSIsImZzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInJlc3VsdHNGaWxlIiwiZ2V0RmlsZU5hbWUiLCJSZWFkUmVzdWx0cyIsImZpcnN0U2NvcmUiLCJuc2VxdWVuY2VzIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImpzb24iLCJmaWxlTmFtZSIsImV4ZWMiLCJmaWxlTmFtZTIiLCJ0cmltIiwicmVjZWl2ZXJGdW5jdGlvbiIsInJlc3VsdHNGaWxlUGF0aCIsInJlYWRGaWxlIiwiZXJyIiwianNvblN0cmluZyIsIk9iamVjdERhdGEiLCJKU09OIiwicGFyc2UiLCJxdWVyaWVzIiwiaGl0cyIsInRvdGFsX3Njb3JlIiwic3RhdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getRequest.js\n");

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