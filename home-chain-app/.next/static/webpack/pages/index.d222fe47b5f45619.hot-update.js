"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/YourEstates.js":
/*!******************************!*\
  !*** ./pages/YourEstates.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ YourEstates; }\n/* harmony export */ });\n/* harmony import */ var D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _EstateView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EstateView */ \"./pages/EstateView.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction YourEstates(param) {\n    var address = param.address, vmContract = param.vmContract, setActiveTab = param.setActiveTab;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), estates1 = ref[0], setEstates = ref[1];\n    var getEstates = function() {\n        var _ref = _asyncToGenerator(D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var estates;\n            return D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return vmContract.methods.getEstates().call();\n                    case 3:\n                        estates = _ctx.sent;\n                        console.log(address);\n                        estates.filter(function(estate) {\n                            return console.log(estate.owner);\n                        });\n                        setEstates(estates);\n                        _ctx.next = 12;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0.message);\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    9\n                ]\n            ]);\n        }));\n        return function getEstates() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getEstates();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        class: \"field\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"container-wrapper\",\n            children: estates1.map(function(estate, key) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_EstateView__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    estate: estate,\n                    id: key,\n                    setActiveTab: setActiveTab\n                }, key, false, {\n                    fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\YourEstates.js\",\n                    lineNumber: 27,\n                    columnNumber: 21\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\YourEstates.js\",\n            lineNumber: 24,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\YourEstates.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n};\n_s(YourEstates, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = YourEstates;\nvar _c;\n$RefreshReg$(_c, \"YourEstates\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Zb3VyRXN0YXRlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1o7O0FBRXZCLFNBQVNJLFdBQVcsQ0FBQyxLQUFxQyxFQUFFO1FBQXJDQyxPQUFPLEdBQVQsS0FBcUMsQ0FBbkNBLE9BQU8sRUFBRUMsVUFBVSxHQUFyQixLQUFxQyxDQUExQkEsVUFBVSxFQUFFQyxZQUFZLEdBQW5DLEtBQXFDLENBQWRBLFlBQVk7OztJQUNuRSxJQUE4Qk4sR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUo5QyxRQUlrQixHQUFnQkEsR0FBWSxHQUE1QixFQUpsQixVQUk4QixHQUFJQSxHQUFZLEdBQWhCO0lBRTFCLElBQU1TLFVBQVU7bUJBQUcsOExBQVk7Z0JBRW5CRixPQUFPOzs7Ozs7K0JBQVNGLFVBQVUsQ0FBQ0ssT0FBTyxDQUFDRCxVQUFVLEVBQUUsQ0FBQ0UsSUFBSSxFQUFFOzt3QkFBdERKLE9BQU8sWUFBK0M7d0JBQzFESyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsT0FBTyxDQUFDO3dCQUNwQkcsT0FBTyxDQUFDTyxNQUFNLENBQUNDLFNBQUFBLE1BQU07bUNBQUlILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxNQUFNLENBQUNDLEtBQUssQ0FBQzt5QkFBQSxDQUFDO3dCQUNuRFIsVUFBVSxDQUFDRCxPQUFPLENBQUM7Ozs7Ozt3QkFFbkJLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxRQUFJQyxPQUFPLENBQUM7Ozs7Ozs7Ozs7O1NBRS9CO3dCQVRLVCxVQUFVOzs7T0FTZjtJQUVEUixnREFBUyxDQUFDLFdBQUs7UUFDWFEsVUFBVSxFQUFFO0tBQ2YsRUFBRSxFQUFFLENBQUM7SUFFUixxQkFDRSw4REFBQ1UsS0FBRztRQUFDQyxLQUFLLEVBQUMsT0FBTztrQkFDZCw0RUFBQ0QsS0FBRztZQUFDRSxTQUFTLEVBQUMsbUJBQW1CO3NCQUUxQmQsUUFBTyxDQUFDZSxHQUFHLENBQUMsU0FBQ1AsTUFBTSxFQUFFUSxHQUFHO3FDQUNwQiw4REFBQ3JCLG1EQUFVO29CQUFDYSxNQUFNLEVBQUVBLE1BQU07b0JBQUVTLEVBQUUsRUFBRUQsR0FBRztvQkFBWWpCLFlBQVksRUFBRUEsWUFBWTttQkFBL0JpQixHQUFHOzs7O3lCQUErQjthQUFBLENBQy9FOzs7OztnQkFFSDs7Ozs7WUFDSixDQUNQO0NBQ0Y7R0E3QnVCcEIsV0FBVztBQUFYQSxLQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1lvdXJFc3RhdGVzLmpzPzQ0ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEVzdGF0ZVZpZXcgZnJvbSAnLi9Fc3RhdGVWaWV3JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFlvdXJFc3RhdGVzKHsgYWRkcmVzcywgdm1Db250cmFjdCwgc2V0QWN0aXZlVGFiIH0pIHtcclxuICAgIGNvbnN0IFtlc3RhdGVzLCBzZXRFc3RhdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBnZXRFc3RhdGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgbGV0IGVzdGF0ZXMgPSBhd2FpdCB2bUNvbnRyYWN0Lm1ldGhvZHMuZ2V0RXN0YXRlcygpLmNhbGwoKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhZGRyZXNzKVxyXG4gICAgICAgICAgICBlc3RhdGVzLmZpbHRlcihlc3RhdGUgPT4gY29uc29sZS5sb2coZXN0YXRlLm93bmVyKSlcclxuICAgICAgICAgICAgc2V0RXN0YXRlcyhlc3RhdGVzKVxyXG4gICAgICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgICAgIGdldEVzdGF0ZXMoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLXdyYXBwZXInPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlc3RhdGVzLm1hcCgoZXN0YXRlLCBrZXkpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxFc3RhdGVWaWV3IGVzdGF0ZT17ZXN0YXRlfSBpZD17a2V5fSBrZXk9e2tleX0gc2V0QWN0aXZlVGFiPXtzZXRBY3RpdmVUYWJ9Lz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRXN0YXRlVmlldyIsIllvdXJFc3RhdGVzIiwiYWRkcmVzcyIsInZtQ29udHJhY3QiLCJzZXRBY3RpdmVUYWIiLCJlc3RhdGVzIiwic2V0RXN0YXRlcyIsImdldEVzdGF0ZXMiLCJtZXRob2RzIiwiY2FsbCIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXIiLCJlc3RhdGUiLCJvd25lciIsImVyciIsIm1lc3NhZ2UiLCJkaXYiLCJjbGFzcyIsImNsYXNzTmFtZSIsIm1hcCIsImtleSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/YourEstates.js\n");

/***/ })

});