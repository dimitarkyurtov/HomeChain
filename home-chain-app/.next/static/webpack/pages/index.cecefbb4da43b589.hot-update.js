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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var D_CompSci_blockchain2_home_chain_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_CompSci_blockchain2_home_chain_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_CompSci_blockchain2_home_chain_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bulma/css/bulma.css */ \"./node_modules/bulma/css/bulma.css\");\n/* harmony import */ var bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_chain_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Home-chain.module.css */ \"./styles/Home-chain.module.css\");\n/* harmony import */ var _styles_Home_chain_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_chain_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _blockchain_homechain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blockchain/homechain */ \"./blockchain/homechain.js\");\n/* harmony import */ var _Estate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Estate */ \"./pages/Estate.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), error = ref[0], setError = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), web31 = ref1[0], setWeb3 = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), address = ref2[0], setAddress = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), vmContract = ref3[0], setVmContract = ref3[1];\n    var getEstates = function() {\n        var _ref = _asyncToGenerator(D_CompSci_blockchain2_home_chain_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var estates;\n            return D_CompSci_blockchain2_home_chain_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return vmContract.methods.getEstates().call();\n                    case 2:\n                        estates = _ctx.sent;\n                        console.log(estates);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getEstates() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectWalletHandler = function() {\n        var _ref = _asyncToGenerator(D_CompSci_blockchain2_home_chain_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var web3, accounts, vm;\n            return D_CompSci_blockchain2_home_chain_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!( true && _typeof(window.ethereum) !== undefined)) {\n                            _ctx.next = 20;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return window.ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 4:\n                        web3 = new (web3__WEBPACK_IMPORTED_MODULE_3___default())(window.ethereum);\n                        setWeb3(web3);\n                        _ctx.next = 8;\n                        return web3.eth.getAccounts();\n                    case 8:\n                        accounts = _ctx.sent;\n                        console.log(accounts);\n                        setAddress(accounts[0]);\n                        vm = (0,_blockchain_homechain__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(web3);\n                        setVmContract(vm);\n                        _ctx.next = 18;\n                        break;\n                    case 15:\n                        _ctx.prev = 15;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        setError(_ctx.t0.message);\n                    case 18:\n                        _ctx.next = 21;\n                        break;\n                    case 20:\n                        {\n                            console.log(\"Please install metamask\");\n                        }\n                    case 21:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    15\n                ]\n            ]);\n        }));\n        return function connectWalletHandler() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.BrowserRouter, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_styles_Home_chain_module_css__WEBPACK_IMPORTED_MODULE_9___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                            children: \"Home chain App\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                            lineNumber: 54,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"Home chain app\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                            lineNumber: 55,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n                    className: \"navbar mt-4 mb-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"navbar-brand\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                    children: \"Home chain\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"navbar-brand\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {\n                                    to: \"/add-estate\",\n                                    children: \"add estate\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                                lineNumber: 62,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"navbar-end\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    onClick: connectWalletHandler,\n                                    className: \"button is-primary\",\n                                    children: \"Connect wallet\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                                lineNumber: 65,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                    lineNumber: 57,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Routes, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {\n                        path: \"/add-estate\",\n                        element: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Estate__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            vmContract: vmContract\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                    lineNumber: 72,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n            lineNumber: 52,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"pcUJGGN0nvB6Xa4TKmGxIOFYDpQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBRTs4Q0FBQyxZQUFVOzs7Ozt3Q0FBSzs7Ozs7b0NBQ2pCOzBDQUNOLDhEQUFDUixLQUFHO2dDQUFDQyxTQUFTLEVBQUMsY0FBYzswQ0FDekIsNEVBQUNuQyxrREFBSTtvQ0FBQzJDLEVBQUUsRUFBQyxhQUFhOzhDQUFDLFlBQVU7Ozs7O3dDQUFPOzs7OztvQ0FDdEM7MENBQ04sOERBQUNULEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxZQUFZOzBDQUN2Qiw0RUFBQ1MsUUFBTTtvQ0FBQ0MsT0FBTyxFQUFFdkIsb0JBQW9CO29DQUFFYSxTQUFTLEVBQUMsbUJBQW1COzhDQUFDLGdCQUVyRTs7Ozs7d0NBQVM7Ozs7O29DQUNQOzs7Ozs7NEJBQ0o7Ozs7O3dCQUNKOzhCQUNOLDhEQUFDckMsb0RBQU07OEJBQ0gsNEVBQUNDLG1EQUFLO3dCQUFDK0MsSUFBSSxFQUFDLGFBQWE7d0JBQUNDLE9BQU8sZ0JBQUUsOERBQUMzQywrQ0FBTTs0QkFBQ1UsVUFBVSxFQUFFQSxVQUFVO3lEQUFHOzs7Ozs0QkFBRzs7Ozs7d0JBQ2xFOzs7Ozs7Z0JBQ1A7Ozs7O1lBQ00sQ0FDZjtDQUNKO0dBbkV1QlAsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdidWxtYS9jc3MvYnVsbWEuY3NzJ1xyXG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUtY2hhaW4ubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZSwgTGluaywgT3V0bGV0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgaG9tZUNoYWluQ29udHJhY3QgZnJvbSAnLi4vYmxvY2tjaGFpbi9ob21lY2hhaW4nXHJcbmltcG9ydCBFc3RhdGUgZnJvbSAnLi9Fc3RhdGUnO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyLCBSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3dlYjMsIHNldFdlYjNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt2bUNvbnRyYWN0LCBzZXRWbUNvbnRyYWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGdldEVzdGF0ZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGVzdGF0ZXMgPSBhd2FpdCB2bUNvbnRyYWN0Lm1ldGhvZHMuZ2V0RXN0YXRlcygpLmNhbGwoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVzdGF0ZXMpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29ubmVjdFdhbGxldEhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgLyogY2hlY2sgaWYgbWV0YW1hc2sgaXMgYXZhaWxhYmxlICovXHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICAvKiByZXF1ZXN0IHdhbGxldCBjb25uZWN0aW9uICovXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLyogc2V0IHdlYjMgaW5zdGFuY2UgKi9cclxuICAgICAgICAgICAgICAgIGxldCB3ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKVxyXG4gICAgICAgICAgICAgICAgc2V0V2ViMyh3ZWIzKVxyXG5cclxuICAgICAgICAgICAgICAgIC8qIGdldCBsaXN0IG9mIGFjY291bnRzICovXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjY291bnRzKVxyXG4gICAgICAgICAgICAgICAgc2V0QWRkcmVzcyhhY2NvdW50c1swXSlcclxuXHJcbiAgICAgICAgICAgICAgICAvKiBjcmVhdGUgbG9jYWwgY29weSBvZiB0aGUgY29udHJhY3QgaW50ZXJmYWNlICovXHJcbiAgICAgICAgICAgICAgICBjb25zdCB2bSA9IGhvbWVDaGFpbkNvbnRyYWN0KHdlYjMpXHJcbiAgICAgICAgICAgICAgICBzZXRWbUNvbnRyYWN0KHZtKVxyXG5cclxuICAgICAgICAgICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIGluc3RhbGwgbWV0YW1hc2tcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+SG9tZSBjaGFpbiBBcHA8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkhvbWUgY2hhaW4gYXBwXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBtdC00IG1iLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItYnJhbmQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+SG9tZSBjaGFpbjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1icmFuZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2FkZC1lc3RhdGVcIj5hZGQgZXN0YXRlPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItZW5kJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb25uZWN0V2FsbGV0SGFuZGxlcn0gY2xhc3NOYW1lPSdidXR0b24gaXMtcHJpbWFyeSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0IHdhbGxldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FkZC1lc3RhdGVcIiBlbGVtZW50PXs8RXN0YXRlIHZtQ29udHJhY3Q9e3ZtQ29udHJhY3R9Lz59Lz5cclxuICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiV2ViMyIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiUm91dGVzIiwiUm91dGUiLCJMaW5rIiwiT3V0bGV0IiwiSGVhZCIsImhvbWVDaGFpbkNvbnRyYWN0IiwiRXN0YXRlIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIkhvbWUiLCJlcnJvciIsInNldEVycm9yIiwid2ViMyIsInNldFdlYjMiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsInZtQ29udHJhY3QiLCJzZXRWbUNvbnRyYWN0IiwiZ2V0RXN0YXRlcyIsImVzdGF0ZXMiLCJtZXRob2RzIiwiY2FsbCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0V2FsbGV0SGFuZGxlciIsImFjY291bnRzIiwidm0iLCJ1bmRlZmluZWQiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJldGgiLCJnZXRBY2NvdW50cyIsImVyciIsIm1lc3NhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJuYXYiLCJoMSIsInRvIiwiYnV0dG9uIiwib25DbGljayIsInBhdGgiLCJlbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});