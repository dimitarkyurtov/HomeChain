"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/DetailedEstateView/[id]",{

/***/ "./pages/DetailedEstateView/[id].js":
/*!******************************************!*\
  !*** ./pages/DetailedEstateView/[id].js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DetailedEstateView; }\n/* harmony export */ });\n/* harmony import */ var D_CompSci_blockchain2_home_chain_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_CompSci_blockchain2_home_chain_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_CompSci_blockchain2_home_chain_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DetailedEstateView() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var eid = router.query.eid;\n    var getEstate = function() {\n        var _ref = _asyncToGenerator(D_CompSci_blockchain2_home_chain_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var estates;\n            return D_CompSci_blockchain2_home_chain_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return vmContract.methods.getEstateById(eid).call();\n                    case 3:\n                        estates = _ctx.sent;\n                        setEstate(estate);\n                        console.log(estate);\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0.message);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        return function getEstate() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getEstate();\n    }, []);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), estate = ref[0], setEstate = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"DetailedEstateView\"\n    }, void 0, false, {\n        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\DetailedEstateView\\\\[id].js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n};\n_s(DetailedEstateView, \"w7xt73DlLdwz8AeNpIXS/42Hq1I=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = DetailedEstateView;\nvar _c;\n$RefreshReg$(_c, \"DetailedEstateView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9EZXRhaWxlZEVzdGF0ZVZpZXcvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNYOztBQUV4QixTQUFTSSxrQkFBa0IsR0FBRzs7SUFDM0MsSUFBTUMsTUFBTSxHQUFHRixzREFBUyxFQUFFO0lBQzFCLElBQU0sR0FBSyxHQUFLRSxNQUFNLENBQUNFLEtBQUssQ0FBcEJELEdBQUc7SUFFWCxJQUFNRSxTQUFTO21CQUFHLGdNQUFZO2dCQUVoQkMsT0FBTzs7Ozs7OytCQUFTQyxVQUFVLENBQUNDLE9BQU8sQ0FBQ0MsYUFBYSxDQUFDTixHQUFHLENBQUMsQ0FBQ08sSUFBSSxFQUFFOzt3QkFBNURKLE9BQU8sWUFBcUQ7d0JBQ2hFSyxTQUFTLENBQUNDLE1BQU0sQ0FBQzt3QkFDakJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNLENBQUM7Ozs7Ozt3QkFFbkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxRQUFJQyxPQUFPLENBQUM7Ozs7Ozs7Ozs7O1NBRS9CO3dCQVJHWCxTQUFTOzs7T0FRWjtJQUVETixnREFBUyxDQUFDLFdBQUs7UUFDWE0sU0FBUyxFQUFFO0tBQ2QsRUFBRSxFQUFFLENBQUM7SUFFUixJQUE0QlAsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQXJCMUMsTUFxQmUsR0FBZUEsR0FBWSxHQUEzQixFQXJCZixTQXFCMEIsR0FBSUEsR0FBWSxHQUFoQjtJQUV4QixxQkFDRSw4REFBQ21CLEtBQUc7a0JBQUMsb0JBQWtCOzs7OztZQUFNLENBQzlCO0NBQ0Y7R0F2QnVCaEIsa0JBQWtCOztRQUN6QkQsa0RBQVM7OztBQURGQyxLQUFBQSxrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRGV0YWlsZWRFc3RhdGVWaWV3L1tpZF0uanM/NjUyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldGFpbGVkRXN0YXRlVmlldygpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHsgZWlkIH0gPSByb3V0ZXIucXVlcnlcclxuXHJcbiAgY29uc3QgZ2V0RXN0YXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgbGV0IGVzdGF0ZXMgPSBhd2FpdCB2bUNvbnRyYWN0Lm1ldGhvZHMuZ2V0RXN0YXRlQnlJZChlaWQpLmNhbGwoKVxyXG4gICAgICAgICAgICBzZXRFc3RhdGUoZXN0YXRlKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlc3RhdGUpXHJcbiAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICAgICAgZ2V0RXN0YXRlKClcclxuICAgIH0sIFtdKVxyXG5cclxuICBjb25zdCBbZXN0YXRlLCBzZXRFc3RhdGVdID0gdXNlU3RhdGUoe30pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PkRldGFpbGVkRXN0YXRlVmlldzwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkRldGFpbGVkRXN0YXRlVmlldyIsInJvdXRlciIsImVpZCIsInF1ZXJ5IiwiZ2V0RXN0YXRlIiwiZXN0YXRlcyIsInZtQ29udHJhY3QiLCJtZXRob2RzIiwiZ2V0RXN0YXRlQnlJZCIsImNhbGwiLCJzZXRFc3RhdGUiLCJlc3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwibWVzc2FnZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/DetailedEstateView/[id].js\n");

/***/ })

});