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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var D_CompSci_blockchain2_home_chain_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_CompSci_blockchain2_home_chain_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_CompSci_blockchain2_home_chain_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bulma/css/bulma.css */ \"./node_modules/bulma/css/bulma.css\");\n/* harmony import */ var bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_chain_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home-chain.module.css */ \"./styles/Home-chain.module.css\");\n/* harmony import */ var _styles_Home_chain_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_chain_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _blockchain_homechain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blockchain/homechain */ \"./blockchain/homechain.js\");\n/* harmony import */ var _Estate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Estate */ \"./pages/Estate.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), activeTab1 = ref[0], setActiveTab = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), error = ref1[0], setError = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), web31 = ref2[0], setWeb3 = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), address = ref3[0], setAddress = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), vmContract = ref4[0], setVmContract = ref4[1];\n    var getEstates = function() {\n        var _ref = _asyncToGenerator(D_CompSci_blockchain2_home_chain_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var estates;\n            return D_CompSci_blockchain2_home_chain_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return vmContract.methods.getEstates().call();\n                    case 2:\n                        estates = _ctx.sent;\n                        console.log(estates);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getEstates() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var setTab = function(activeTab) {\n        setActiveTab(activeTab);\n    };\n    var connectWalletHandler = function() {\n        var _ref = _asyncToGenerator(D_CompSci_blockchain2_home_chain_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var web3, accounts, vm;\n            return D_CompSci_blockchain2_home_chain_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!( true && _typeof(window.ethereum) !== undefined)) {\n                            _ctx.next = 20;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return window.ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 4:\n                        web3 = new (web3__WEBPACK_IMPORTED_MODULE_3___default())(window.ethereum);\n                        setWeb3(web3);\n                        _ctx.next = 8;\n                        return web3.eth.getAccounts();\n                    case 8:\n                        accounts = _ctx.sent;\n                        console.log(accounts);\n                        setAddress(accounts[0]);\n                        vm = (0,_blockchain_homechain__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(web3);\n                        setVmContract(vm);\n                        _ctx.next = 18;\n                        break;\n                    case 15:\n                        _ctx.prev = 15;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        setError(_ctx.t0.message);\n                    case 18:\n                        _ctx.next = 21;\n                        break;\n                    case 20:\n                        {\n                            console.log(\"Please install metamask\");\n                        }\n                    case 21:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    15\n                ]\n            ]);\n        }));\n        return function connectWalletHandler() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_chain_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Home chain App\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Home chain app\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n                className: \"navbar mt-4 mb-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"navbar-brand\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                children: \"Home chain\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                                lineNumber: 62,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"navbar-end\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    return setTab(\"Estate\");\n                                },\n                                class: \"button is-link\",\n                                children: \"Estate\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                                lineNumber: 65,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"navbar-end\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    return setTab(\"Search\");\n                                },\n                                class: \"button is-link\",\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                                lineNumber: 70,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"navbar-end\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: connectWalletHandler,\n                                className: \"button is-primary\",\n                                children: \"Connect wallet\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                                lineNumber: 75,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                            lineNumber: 74,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                    lineNumber: 60,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    activeTab1 === \"Estate\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Estate__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        vmContract: vmContract,\n                        address: address\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                        lineNumber: 83,\n                        columnNumber: 46\n                    }, this) : null,\n                    activeTab1 === \"Search\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Estate__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        vmContract: vmContract,\n                        address: address\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                        lineNumber: 86,\n                        columnNumber: 46\n                    }, this) : null\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\home-chain\\\\home-chain-app\\\\pages\\\\index.js\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, this);\n};\n_s(Home, \"wXShMYLTBWREsqj+DnZD2/3Qy8c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsR0FBRyxJQUFJOzs7Ozs7b0JBRXBGOzs7Ozs7WUFDTCxDQUNUO0NBQ0o7R0FsRnVCUCxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2J1bG1hL2Nzcy9idWxtYS5jc3MnXHJcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUtY2hhaW4ubW9kdWxlLmNzcydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgaG9tZUNoYWluQ29udHJhY3QgZnJvbSAnLi4vYmxvY2tjaGFpbi9ob21lY2hhaW4nXHJcbmltcG9ydCBFc3RhdGUgZnJvbSAnLi9Fc3RhdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt3ZWIzLCBzZXRXZWIzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdm1Db250cmFjdCwgc2V0Vm1Db250cmFjdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBnZXRFc3RhdGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCBlc3RhdGVzID0gYXdhaXQgdm1Db250cmFjdC5tZXRob2RzLmdldEVzdGF0ZXMoKS5jYWxsKClcclxuICAgICAgICBjb25zb2xlLmxvZyhlc3RhdGVzKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldFRhYiA9IGFjdGl2ZVRhYiA9PiB7XHJcbiAgICAgICAgc2V0QWN0aXZlVGFiKGFjdGl2ZVRhYilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb25uZWN0V2FsbGV0SGFuZGxlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAvKiBjaGVjayBpZiBtZXRhbWFzayBpcyBhdmFpbGFibGUgKi9cclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIC8qIHJlcXVlc3Qgd2FsbGV0IGNvbm5lY3Rpb24gKi9cclxuICAgICAgICAgICAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvKiBzZXQgd2ViMyBpbnN0YW5jZSAqL1xyXG4gICAgICAgICAgICAgICAgbGV0IHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pXHJcbiAgICAgICAgICAgICAgICBzZXRXZWIzKHdlYjMpXHJcblxyXG4gICAgICAgICAgICAgICAgLyogZ2V0IGxpc3Qgb2YgYWNjb3VudHMgKi9cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWNjb3VudHMpXHJcbiAgICAgICAgICAgICAgICBzZXRBZGRyZXNzKGFjY291bnRzWzBdKVxyXG5cclxuICAgICAgICAgICAgICAgIC8qIGNyZWF0ZSBsb2NhbCBjb3B5IG9mIHRoZSBjb250cmFjdCBpbnRlcmZhY2UgKi9cclxuICAgICAgICAgICAgICAgIGNvbnN0IHZtID0gaG9tZUNoYWluQ29udHJhY3Qod2ViMylcclxuICAgICAgICAgICAgICAgIHNldFZtQ29udHJhY3Qodm0pXHJcblxyXG4gICAgICAgICAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgaW5zdGFsbCBtZXRhbWFza1wiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+SG9tZSBjaGFpbiBBcHA8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkhvbWUgY2hhaW4gYXBwXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBtdC00IG1iLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItYnJhbmQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+SG9tZSBjaGFpbjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1lbmQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFRhYignRXN0YXRlJyl9IGNsYXNzPVwiYnV0dG9uIGlzLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVzdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLWVuZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0VGFiKCdTZWFyY2gnKX0gY2xhc3M9XCJidXR0b24gaXMtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItZW5kJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb25uZWN0V2FsbGV0SGFuZGxlcn0gY2xhc3NOYW1lPSdidXR0b24gaXMtcHJpbWFyeSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0IHdhbGxldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVUYWIgPT09ICdFc3RhdGUnID8gPEVzdGF0ZSB2bUNvbnRyYWN0PXt2bUNvbnRyYWN0fSBhZGRyZXNzPXthZGRyZXNzfS8+IDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRhYiA9PT0gJ1NlYXJjaCcgPyA8RXN0YXRlIHZtQ29udHJhY3Q9e3ZtQ29udHJhY3R9IGFkZHJlc3M9e2FkZHJlc3N9Lz4gOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJXZWIzIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJIZWFkIiwiaG9tZUNoYWluQ29udHJhY3QiLCJFc3RhdGUiLCJIb21lIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwiZXJyb3IiLCJzZXRFcnJvciIsIndlYjMiLCJzZXRXZWIzIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJ2bUNvbnRyYWN0Iiwic2V0Vm1Db250cmFjdCIsImdldEVzdGF0ZXMiLCJlc3RhdGVzIiwibWV0aG9kcyIsImNhbGwiLCJjb25zb2xlIiwibG9nIiwic2V0VGFiIiwiY29ubmVjdFdhbGxldEhhbmRsZXIiLCJhY2NvdW50cyIsInZtIiwidW5kZWZpbmVkIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJlcnIiLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibmF2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});