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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ YourEstates; }\n/* harmony export */ });\n/* harmony import */ var D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _EstateView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EstateView */ \"./pages/EstateView.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction YourEstates(param) {\n    var address = param.address, vmContract = param.vmContract, setActiveTab = param.setActiveTab;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), estates1 = ref[0], setEstates = ref[1];\n    var getEstates = function() {\n        var _ref = _asyncToGenerator(D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var estates;\n            return D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return vmContract.methods.getEstates().call();\n                    case 3:\n                        estates = _ctx.sent;\n                        console.log(estate[0]);\n                        console.log(address);\n                        estates.filter(function(estate) {\n                            return estate.owner === address;\n                        });\n                        setEstates(estates);\n                        _ctx.next = 13;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0.message);\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    10\n                ]\n            ]);\n        }));\n        return function getEstates() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getEstates();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        class: \"field\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"container-wrapper\",\n            children: estates1.map(function(estate, key) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_EstateView__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    estate: estate,\n                    id: key,\n                    setActiveTab: setActiveTab\n                }, key, false, {\n                    fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\YourEstates.js\",\n                    lineNumber: 28,\n                    columnNumber: 21\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\YourEstates.js\",\n            lineNumber: 25,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\YourEstates.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n};\n_s(YourEstates, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = YourEstates;\nvar _c;\n$RefreshReg$(_c, \"YourEstates\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Zb3VyRXN0YXRlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1o7O0FBRXZCLFNBQVNJLFdBQVcsQ0FBQyxLQUFxQyxFQUFFO1FBQXJDQyxPQUFPLEdBQVQsS0FBcUMsQ0FBbkNBLE9BQU8sRUFBRUMsVUFBVSxHQUFyQixLQUFxQyxDQUExQkEsVUFBVSxFQUFFQyxZQUFZLEdBQW5DLEtBQXFDLENBQWRBLFlBQVk7OztJQUNuRSxJQUE4Qk4sR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUo5QyxRQUlrQixHQUFnQkEsR0FBWSxHQUE1QixFQUpsQixVQUk4QixHQUFJQSxHQUFZLEdBQWhCO0lBRTFCLElBQU1TLFVBQVU7bUJBQUcsOExBQVk7Z0JBRW5CRixPQUFPOzs7Ozs7K0JBQVNGLFVBQVUsQ0FBQ0ssT0FBTyxDQUFDRCxVQUFVLEVBQUUsQ0FBQ0UsSUFBSSxFQUFFOzt3QkFBdERKLE9BQU8sWUFBK0M7d0JBQzFESyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN0QkYsT0FBTyxDQUFDQyxHQUFHLENBQUNULE9BQU8sQ0FBQzt3QkFDcEJHLE9BQU8sQ0FBQ1EsTUFBTSxDQUFDRCxTQUFBQSxNQUFNO21DQUFJQSxNQUFNLENBQUNFLEtBQUssS0FBS1osT0FBTzt5QkFBQSxDQUFDO3dCQUNsREksVUFBVSxDQUFDRCxPQUFPLENBQUM7Ozs7Ozt3QkFFbkJLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxRQUFJQyxPQUFPLENBQUM7Ozs7Ozs7Ozs7O1NBRS9CO3dCQVZLVCxVQUFVOzs7T0FVZjtJQUVEUixnREFBUyxDQUFDLFdBQUs7UUFDWFEsVUFBVSxFQUFFO0tBQ2YsRUFBRSxFQUFFLENBQUM7SUFFUixxQkFDRSw4REFBQ1UsS0FBRztRQUFDQyxLQUFLLEVBQUMsT0FBTztrQkFDZCw0RUFBQ0QsS0FBRztZQUFDRSxTQUFTLEVBQUMsbUJBQW1CO3NCQUUxQmQsUUFBTyxDQUFDZSxHQUFHLENBQUMsU0FBQ1IsTUFBTSxFQUFFUyxHQUFHO3FDQUNwQiw4REFBQ3JCLG1EQUFVO29CQUFDWSxNQUFNLEVBQUVBLE1BQU07b0JBQUVVLEVBQUUsRUFBRUQsR0FBRztvQkFBWWpCLFlBQVksRUFBRUEsWUFBWTttQkFBL0JpQixHQUFHOzs7O3lCQUErQjthQUFBLENBQy9FOzs7OztnQkFFSDs7Ozs7WUFDSixDQUNQO0NBQ0Y7R0E5QnVCcEIsV0FBVztBQUFYQSxLQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1lvdXJFc3RhdGVzLmpzPzQ0ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEVzdGF0ZVZpZXcgZnJvbSAnLi9Fc3RhdGVWaWV3JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFlvdXJFc3RhdGVzKHsgYWRkcmVzcywgdm1Db250cmFjdCwgc2V0QWN0aXZlVGFiIH0pIHtcclxuICAgIGNvbnN0IFtlc3RhdGVzLCBzZXRFc3RhdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBnZXRFc3RhdGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgbGV0IGVzdGF0ZXMgPSBhd2FpdCB2bUNvbnRyYWN0Lm1ldGhvZHMuZ2V0RXN0YXRlcygpLmNhbGwoKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlc3RhdGVbMF0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkZHJlc3MpXHJcbiAgICAgICAgICAgIGVzdGF0ZXMuZmlsdGVyKGVzdGF0ZSA9PiBlc3RhdGUub3duZXIgPT09IGFkZHJlc3MpXHJcbiAgICAgICAgICAgIHNldEVzdGF0ZXMoZXN0YXRlcylcclxuICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuICAgICAgICBnZXRFc3RhdGVzKClcclxuICAgIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci13cmFwcGVyJz5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZXN0YXRlcy5tYXAoKGVzdGF0ZSwga2V5KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICA8RXN0YXRlVmlldyBlc3RhdGU9e2VzdGF0ZX0gaWQ9e2tleX0ga2V5PXtrZXl9IHNldEFjdGl2ZVRhYj17c2V0QWN0aXZlVGFifS8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkVzdGF0ZVZpZXciLCJZb3VyRXN0YXRlcyIsImFkZHJlc3MiLCJ2bUNvbnRyYWN0Iiwic2V0QWN0aXZlVGFiIiwiZXN0YXRlcyIsInNldEVzdGF0ZXMiLCJnZXRFc3RhdGVzIiwibWV0aG9kcyIsImNhbGwiLCJjb25zb2xlIiwibG9nIiwiZXN0YXRlIiwiZmlsdGVyIiwib3duZXIiLCJlcnIiLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3MiLCJjbGFzc05hbWUiLCJtYXAiLCJrZXkiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/YourEstates.js\n");

/***/ })

});