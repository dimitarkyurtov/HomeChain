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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bulma/css/bulma.css */ \"./node_modules/bulma/css/bulma.css\");\n/* harmony import */ var bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_chain_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Home-chain.module.css */ \"./styles/Home-chain.module.css\");\n/* harmony import */ var _styles_Home_chain_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_chain_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _blockchain_homechain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blockchain/homechain */ \"./blockchain/homechain.js\");\n/* harmony import */ var _Estate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Estate */ \"./pages/Estate.js\");\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Search */ \"./pages/Search.js\");\n/* harmony import */ var _DetailedEstateView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DetailedEstateView */ \"./pages/DetailedEstateView.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), activeTab1 = ref[0], setActiveTab = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), error = ref1[0], setError = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), web31 = ref2[0], setWeb3 = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), address = ref3[0], setAddress = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), vmContract = ref4[0], setVmContract = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), eid = ref5[0], setEid = ref5[1];\n    var setTab = function(activeTab, id) {\n        if (id) setEid(id);\n        setActiveTab(activeTab);\n    };\n    var connectWalletHandler = function() {\n        var _ref = _asyncToGenerator(D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var web3, accounts, vm;\n            return D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!( true && _typeof(window.ethereum) !== undefined)) {\n                            _ctx.next = 20;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return window.ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 4:\n                        web3 = new (web3__WEBPACK_IMPORTED_MODULE_3___default())(window.ethereum);\n                        setWeb3(web3);\n                        _ctx.next = 8;\n                        return web3.eth.getAccounts();\n                    case 8:\n                        accounts = _ctx.sent;\n                        console.log(accounts);\n                        setAddress(accounts[0]);\n                        vm = (0,_blockchain_homechain__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(web3);\n                        setVmContract(vm);\n                        _ctx.next = 18;\n                        break;\n                    case 15:\n                        _ctx.prev = 15;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        setError(_ctx.t0.message);\n                    case 18:\n                        _ctx.next = 21;\n                        break;\n                    case 20:\n                        {\n                            console.log(\"Please install metamask\");\n                        }\n                    case 21:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    15\n                ]\n            ]);\n        }));\n        return function connectWalletHandler() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_chain_module_css__WEBPACK_IMPORTED_MODULE_10___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Home chain App\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\index.js\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Home chain app\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\index.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\index.js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n                className: \"navbar mt-4 mb-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"navbar-brand\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                children: \"Home chain\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\index.js\",\n                                lineNumber: 61,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\index.js\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"navbar-end\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    return setTab(\"Estate\");\n                                },\n                                class: \"button is-link\",\n                                children: \"Estate\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\index.js\",\n                                lineNumber: 64,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\index.js\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, this),\n                        vmContract ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"navbar-end\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    return setTab(\"Estate\");\n                                },\n                                class: \"button is-link\",\n                                children: \"Your estates\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\index.js\",\n                                lineNumber: 71,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\index.js\",\n                            lineNumber: 70,\n                            columnNumber: 25\n                        }, this) : null,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"navbar-end\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    return setTab(\"Search\");\n                                },\n                                class: \"button is-link\",\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\index.js\",\n                                lineNumber: 79,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\index.js\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"navbar-end\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: connectWalletHandler,\n                                className: \"button is-primary\",\n                                children: \"Connect wallet\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\index.js\",\n                                lineNumber: 84,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\index.js\",\n                            lineNumber: 83,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\index.js\",\n                    lineNumber: 59,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\index.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    activeTab1 === \"Estate\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Estate__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        vmContract: vmContract,\n                        address: address\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\index.js\",\n                        lineNumber: 92,\n                        columnNumber: 46\n                    }, this) : null,\n                    activeTab1 === \"Search\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Search__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        vmContract: vmContract,\n                        setActiveTab: setTab\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\index.js\",\n                        lineNumber: 95,\n                        columnNumber: 46\n                    }, this) : null,\n                    activeTab1 === \"View\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_DetailedEstateView__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        web3: web31,\n                        address: address,\n                        vmContract: vmContract,\n                        eid: eid\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\index.js\",\n                        lineNumber: 98,\n                        columnNumber: 44\n                    }, this) : null\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\index.js\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\index.js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, this);\n};\n_s(Home, \"JqbtFwgyYq4lszFpsMckVg2mjmQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0w7QUFDUztBQUNvQjtBQUN4QjtBQUMyQjtBQUN6QjtBQUNEO0FBQ3dCOztBQUV0QyxTQUFTUSxJQUFJLEdBQUc7O0lBQzNCLElBQWtDUCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBWGxELFVBV29CLEdBQWtCQSxHQUFZLEdBQTlCLEVBWHBCLFlBV2tDLEdBQUlBLEdBQVksR0FBaEI7SUFDOUIsSUFBMEJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFaMUMsS0FZZ0IsR0FBY0EsSUFBWSxHQUExQixFQVpoQixRQVkwQixHQUFJQSxJQUFZLEdBQWhCO0lBQ3RCLElBQXdCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBYjFDLEtBYWUsR0FBYUEsSUFBYyxHQUEzQixFQWJmLE9BYXdCLEdBQUlBLElBQWMsR0FBbEI7SUFDcEIsSUFBOEJBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFkaEQsT0Fja0IsR0FBZ0JBLElBQWMsR0FBOUIsRUFkbEIsVUFjOEIsR0FBSUEsSUFBYyxHQUFsQjtJQUMxQixJQUFvQ0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQWZ0RCxVQWVxQixHQUFtQkEsSUFBYyxHQUFqQyxFQWZyQixhQWVvQyxHQUFJQSxJQUFjLEdBQWxCO0lBQ2hDLElBQXNCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBaEJ4QyxHQWdCYyxHQUFZQSxJQUFjLEdBQTFCLEVBaEJkLE1BZ0JzQixHQUFJQSxJQUFjLEdBQWxCO0lBRWxCLElBQU1vQixNQUFNLEdBQUcsU0FBQ1osU0FBUyxFQUFFYSxFQUFFLEVBQUs7UUFDOUIsSUFBR0EsRUFBRSxFQUFFRixNQUFNLENBQUNFLEVBQUUsQ0FBQztRQUNqQlosWUFBWSxDQUFDRCxTQUFTLENBQUM7S0FDMUI7SUFFRCxJQUFNYyxvQkFBb0I7bUJBQUcsOExBQVk7Z0JBUXpCVixJQUFJLEVBSUZXLFFBQVEsRUFLUkMsRUFBRTs7Ozs0QkFmWixPQUEyQixJQUFJLE9BQXNCLENBQWZFLE1BQU0sQ0FBQ0MsUUFBUSxNQUFLRixTQUFTOzs7Ozs7K0JBR3pEQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDOzRCQUFFQyxNQUFNLEVBQUUscUJBQXFCO3lCQUFFLENBQUM7O3dCQUc1RGpCLElBQUksR0FBRyxJQUFJYiw2Q0FBSSxDQUFDMkIsTUFBTSxDQUFDQyxRQUFRLENBQUM7d0JBQ3BDZCxPQUFPLENBQUNELElBQUksQ0FBQzs7K0JBR1VBLElBQUksQ0FBQ2tCLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFOzt3QkFBdkNSLFFBQVEsWUFBK0I7d0JBQzdDUyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1YsUUFBUSxDQUFDO3dCQUNyQlIsVUFBVSxDQUFDUSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBR2pCQyxFQUFFLEdBQUdyQixpRUFBaUIsQ0FBQ1MsSUFBSSxDQUFDO3dCQUNsQ0ssYUFBYSxDQUFDTyxFQUFFLENBQUM7Ozs7Ozt3QkFHakJiLFFBQVEsQ0FBQ3VCLFFBQUlDLE9BQU8sQ0FBQzs7Ozs7d0JBRXZCOzRCQUNGSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQzt5QkFDekM7Ozs7Ozs7Ozs7O1NBQ0o7d0JBMUJLWCxvQkFBb0I7OztPQTBCekI7SUFFRCxxQkFDSSw4REFBQ2MsS0FBRztRQUFDQyxTQUFTLEVBQUVwQyw0RUFBVzs7MEJBQ3ZCLDhEQUFDQyxrREFBSTs7a0NBQ0QsOERBQUNxQyxPQUFLO2tDQUFDLGdCQUFjOzs7Ozs0QkFBUTtrQ0FDN0IsOERBQUNDLE1BQUk7d0JBQUNDLElBQUksRUFBQyxhQUFhO3dCQUFDQyxPQUFPLEVBQUMsZ0JBQWdCOzs7Ozs0QkFBRzs7Ozs7O29CQUNqRDswQkFDUCw4REFBQ0MsS0FBRztnQkFBQ04sU0FBUyxFQUFDLGtCQUFrQjswQkFDN0IsNEVBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxXQUFXOztzQ0FDdEIsOERBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxjQUFjO3NDQUN6Qiw0RUFBQ08sSUFBRTswQ0FBQyxZQUFVOzs7OztvQ0FBSzs7Ozs7Z0NBQ2pCO3NDQUNOLDhEQUFDUixLQUFHOzRCQUFDQyxTQUFTLEVBQUMsWUFBWTtzQ0FDdkIsNEVBQUNRLFFBQU07Z0NBQUNDLE9BQU8sRUFBRTsyQ0FBTTFCLE1BQU0sQ0FBQyxRQUFRLENBQUM7aUNBQUE7Z0NBQUUyQixLQUFLLEVBQUMsZ0JBQWdCOzBDQUFDLFFBRWhFOzs7OztvQ0FBUzs7Ozs7Z0NBQ1A7d0JBRUYvQixVQUFVLGlCQUNWLDhEQUFDb0IsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLFlBQVk7c0NBQ3ZCLDRFQUFDUSxRQUFNO2dDQUFDQyxPQUFPLEVBQUU7MkNBQU0xQixNQUFNLENBQUMsUUFBUSxDQUFDO2lDQUFBO2dDQUFFMkIsS0FBSyxFQUFDLGdCQUFnQjswQ0FBQyxjQUVoRTs7Ozs7b0NBQVM7Ozs7O2dDQUNQLEdBRU4sSUFBSTtzQ0FFUiw4REFBQ1gsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLFlBQVk7c0NBQ3ZCLDRFQUFDUSxRQUFNO2dDQUFDQyxPQUFPLEVBQUU7MkNBQU0xQixNQUFNLENBQUMsUUFBUSxDQUFDO2lDQUFBO2dDQUFFMkIsS0FBSyxFQUFDLGdCQUFnQjswQ0FBQyxRQUVoRTs7Ozs7b0NBQVM7Ozs7O2dDQUNQO3NDQUNOLDhEQUFDWCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsWUFBWTtzQ0FDdkIsNEVBQUNRLFFBQU07Z0NBQUNDLE9BQU8sRUFBRXhCLG9CQUFvQjtnQ0FBRWUsU0FBUyxFQUFDLG1CQUFtQjswQ0FBQyxnQkFFckU7Ozs7O29DQUFTOzs7OztnQ0FDUDs7Ozs7O3dCQUNKOzs7OztvQkFDSjswQkFDTiw4REFBQ0QsS0FBRzs7b0JBRUk1QixVQUFTLEtBQUssUUFBUSxpQkFBRyw4REFBQ0osK0NBQU07d0JBQUNZLFVBQVUsRUFBRUEsVUFBVTt3QkFBRUYsT0FBTyxFQUFFQSxPQUFPOzs7Ozs0QkFBRyxHQUFHLElBQUk7b0JBR25GTixVQUFTLEtBQUssUUFBUSxpQkFBRyw4REFBQ0gsK0NBQU07d0JBQUNXLFVBQVUsRUFBRUEsVUFBVTt3QkFBRVAsWUFBWSxFQUFFVyxNQUFNOzs7Ozs0QkFBRyxHQUFHLElBQUk7b0JBR3ZGWixVQUFTLEtBQUssTUFBTSxpQkFBRyw4REFBQ0YsMkRBQWtCO3dCQUFDTSxJQUFJLEVBQUVBLEtBQUk7d0JBQUVFLE9BQU8sRUFBRUEsT0FBTzt3QkFBRUUsVUFBVSxFQUFFQSxVQUFVO3dCQUFFRSxHQUFHLEVBQUVBLEdBQUc7Ozs7OzRCQUFHLEdBQUcsSUFBSTs7Ozs7O29CQUVwSDs7Ozs7O1lBQ0wsQ0FDVDtDQUNKO0dBNUZ1QlgsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdidWxtYS9jc3MvYnVsbWEuY3NzJ1xyXG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLWNoYWluLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IGhvbWVDaGFpbkNvbnRyYWN0IGZyb20gJy4uL2Jsb2NrY2hhaW4vaG9tZWNoYWluJ1xyXG5pbXBvcnQgRXN0YXRlIGZyb20gJy4vRXN0YXRlJztcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuL1NlYXJjaCdcclxuaW1wb3J0IERldGFpbGVkRXN0YXRlVmlldyBmcm9tICcuL0RldGFpbGVkRXN0YXRlVmlldydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3ZtQ29udHJhY3QsIHNldFZtQ29udHJhY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZWlkLCBzZXRFaWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3Qgc2V0VGFiID0gKGFjdGl2ZVRhYiwgaWQpID0+IHtcclxuICAgICAgICBpZihpZCkgc2V0RWlkKGlkKVxyXG4gICAgICAgIHNldEFjdGl2ZVRhYihhY3RpdmVUYWIpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29ubmVjdFdhbGxldEhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgLyogY2hlY2sgaWYgbWV0YW1hc2sgaXMgYXZhaWxhYmxlICovXHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICAvKiByZXF1ZXN0IHdhbGxldCBjb25uZWN0aW9uICovXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLyogc2V0IHdlYjMgaW5zdGFuY2UgKi9cclxuICAgICAgICAgICAgICAgIGxldCB3ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKVxyXG4gICAgICAgICAgICAgICAgc2V0V2ViMyh3ZWIzKVxyXG5cclxuICAgICAgICAgICAgICAgIC8qIGdldCBsaXN0IG9mIGFjY291bnRzICovXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjY291bnRzKVxyXG4gICAgICAgICAgICAgICAgc2V0QWRkcmVzcyhhY2NvdW50c1swXSlcclxuXHJcbiAgICAgICAgICAgICAgICAvKiBjcmVhdGUgbG9jYWwgY29weSBvZiB0aGUgY29udHJhY3QgaW50ZXJmYWNlICovXHJcbiAgICAgICAgICAgICAgICBjb25zdCB2bSA9IGhvbWVDaGFpbkNvbnRyYWN0KHdlYjMpXHJcbiAgICAgICAgICAgICAgICBzZXRWbUNvbnRyYWN0KHZtKVxyXG5cclxuICAgICAgICAgICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIGluc3RhbGwgbWV0YW1hc2tcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkhvbWUgY2hhaW4gQXBwPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJIb21lIGNoYWluIGFwcFwiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbXQtNCBtYi02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLWJyYW5kJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkhvbWUgY2hhaW48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItZW5kJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoJ0VzdGF0ZScpfSBjbGFzcz1cImJ1dHRvbiBpcy1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFc3RhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bUNvbnRyYWN0ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItZW5kJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0VGFiKCdFc3RhdGUnKX0gY2xhc3M9XCJidXR0b24gaXMtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgZXN0YXRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLWVuZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0VGFiKCdTZWFyY2gnKX0gY2xhc3M9XCJidXR0b24gaXMtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItZW5kJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb25uZWN0V2FsbGV0SGFuZGxlcn0gY2xhc3NOYW1lPSdidXR0b24gaXMtcHJpbWFyeSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0IHdhbGxldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVUYWIgPT09ICdFc3RhdGUnID8gPEVzdGF0ZSB2bUNvbnRyYWN0PXt2bUNvbnRyYWN0fSBhZGRyZXNzPXthZGRyZXNzfS8+IDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRhYiA9PT0gJ1NlYXJjaCcgPyA8U2VhcmNoIHZtQ29udHJhY3Q9e3ZtQ29udHJhY3R9IHNldEFjdGl2ZVRhYj17c2V0VGFifS8+IDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRhYiA9PT0gJ1ZpZXcnID8gPERldGFpbGVkRXN0YXRlVmlldyB3ZWIzPXt3ZWIzfSBhZGRyZXNzPXthZGRyZXNzfSB2bUNvbnRyYWN0PXt2bUNvbnRyYWN0fSBlaWQ9e2VpZH0vPiA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIldlYjMiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkhlYWQiLCJob21lQ2hhaW5Db250cmFjdCIsIkVzdGF0ZSIsIlNlYXJjaCIsIkRldGFpbGVkRXN0YXRlVmlldyIsIkhvbWUiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJlcnJvciIsInNldEVycm9yIiwid2ViMyIsInNldFdlYjMiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsInZtQ29udHJhY3QiLCJzZXRWbUNvbnRyYWN0IiwiZWlkIiwic2V0RWlkIiwic2V0VGFiIiwiaWQiLCJjb25uZWN0V2FsbGV0SGFuZGxlciIsImFjY291bnRzIiwidm0iLCJ1bmRlZmluZWQiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJldGgiLCJnZXRBY2NvdW50cyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibmF2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});