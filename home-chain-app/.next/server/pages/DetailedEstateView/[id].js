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
exports.id = "pages/DetailedEstateView/[id]";
exports.ids = ["pages/DetailedEstateView/[id]"];
exports.modules = {

/***/ "./pages/DetailedEstateView/[id].js":
/*!******************************************!*\
  !*** ./pages/DetailedEstateView/[id].js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DetailedEstateView)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction DetailedEstateView() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { eid  } = router.query;\n    const getEstate = async ()=>{\n        try {\n            let estate = await window.localStorage.getItem(\"vmContract\").methods.getEstateById(eid).call();\n            setEstate(estate);\n            console.log(estate);\n        } catch (err) {\n            console.log(err.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getEstate();\n    }, []);\n    const { 0: estate1 , 1: setEstate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"DetailedEstateView\"\n    }, void 0, false, {\n        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\DetailedEstateView\\\\[id].js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9EZXRhaWxlZEVzdGF0ZVZpZXcvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBa0Q7QUFDWDtBQUV4QixTQUFTSSxrQkFBa0IsR0FBRztJQUMzQyxNQUFNQyxNQUFNLEdBQUdGLHNEQUFTLEVBQUU7SUFDMUIsTUFBTSxFQUFFRyxHQUFHLEdBQUUsR0FBR0QsTUFBTSxDQUFDRSxLQUFLO0lBRTVCLE1BQU1DLFNBQVMsR0FBRyxVQUFZO1FBQ3hCLElBQUc7WUFDQyxJQUFJQyxNQUFNLEdBQUcsTUFBTUMsTUFBTSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQ0MsT0FBTyxDQUFDQyxhQUFhLENBQUNSLEdBQUcsQ0FBQyxDQUFDUyxJQUFJLEVBQUU7WUFDOUZDLFNBQVMsQ0FBQ1AsTUFBTSxDQUFDO1lBQ2pCUSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsTUFBTSxDQUFDO1NBQ3RCLFFBQU1VLEdBQUcsRUFBQztZQUNQRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDQyxPQUFPLENBQUM7U0FDM0I7S0FDSjtJQUVEbEIsZ0RBQVMsQ0FBQyxJQUFLO1FBQ1hNLFNBQVMsRUFBRTtLQUNkLEVBQUUsRUFBRSxDQUFDO0lBRVIsTUFBTSxFQXJCUixHQXFCU0MsT0FBTSxHQXJCZixHQXFCaUJPLFNBQVMsTUFBSWYsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFFeEMscUJBQ0UsOERBQUNvQixLQUFHO2tCQUFDLG9CQUFrQjs7Ozs7WUFBTSxDQUM5QjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1jaGFpbi1hcHAvLi9wYWdlcy9EZXRhaWxlZEVzdGF0ZVZpZXcvW2lkXS5qcz82NTI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV0YWlsZWRFc3RhdGVWaWV3KCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgeyBlaWQgfSA9IHJvdXRlci5xdWVyeVxyXG5cclxuICBjb25zdCBnZXRFc3RhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBsZXQgZXN0YXRlID0gYXdhaXQgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd2bUNvbnRyYWN0JykubWV0aG9kcy5nZXRFc3RhdGVCeUlkKGVpZCkuY2FsbCgpXHJcbiAgICAgICAgICAgIHNldEVzdGF0ZShlc3RhdGUpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVzdGF0ZSlcclxuICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuICAgICAgICBnZXRFc3RhdGUoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gIGNvbnN0IFtlc3RhdGUsIHNldEVzdGF0ZV0gPSB1c2VTdGF0ZSh7fSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+RGV0YWlsZWRFc3RhdGVWaWV3PC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiRGV0YWlsZWRFc3RhdGVWaWV3Iiwicm91dGVyIiwiZWlkIiwicXVlcnkiLCJnZXRFc3RhdGUiLCJlc3RhdGUiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibWV0aG9kcyIsImdldEVzdGF0ZUJ5SWQiLCJjYWxsIiwic2V0RXN0YXRlIiwiY29uc29sZSIsImxvZyIsImVyciIsIm1lc3NhZ2UiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/DetailedEstateView/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/DetailedEstateView/[id].js"));
module.exports = __webpack_exports__;

})();