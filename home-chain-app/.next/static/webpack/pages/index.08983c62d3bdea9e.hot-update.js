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

/***/ "./pages/DetailedEstateView.js":
/*!*************************************!*\
  !*** ./pages/DetailedEstateView.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DetailedEstateView; }\n/* harmony export */ });\n/* harmony import */ var D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DetailedEstateView(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), estate1 = ref[0], setEstate = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), price = ref1[0], setPrice = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), approvedAddress = ref2[0], setApprovedAddress = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), error = ref3[0], setError = ref3[1];\n    var getEstate = function() {\n        var _ref = _asyncToGenerator(D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var estate;\n            return D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return props.vmContract.methods.getEstateById(props.eid).call();\n                    case 3:\n                        estate = _ctx.sent;\n                        setEstate(estate);\n                        console.log(estate);\n                        console.log(props.address);\n                        _ctx.next = 12;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0.message);\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    9\n                ]\n            ]);\n        }));\n        return function getEstate() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getEstate();\n    }, []);\n    var announceEstateForSale = function() {\n        var _ref = _asyncToGenerator(D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return props.vmContract.methods.announceEstateForSale(props.eid, props.web3.utils.toWei(price, \"ether\")).send({\n                            from: props.address\n                        });\n                    case 3:\n                        setError(\"Successfully announced estate \".concat(props.eid, \" for sale\"));\n                        _ctx.next = 9;\n                        break;\n                    case 6:\n                        _ctx.prev = 6;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        setError(\"Announcing estate \".concat(props.eid, \" for sale failed with error \").concat(_ctx.t0.message));\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    6\n                ]\n            ]);\n        }));\n        return function announceEstateForSale() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var purchaseProperty = function() {\n        var _ref = _asyncToGenerator(D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return props.vmContract.methods.purchaseProperty(props.eid).send({\n                            from: props.address,\n                            value: props.web3.utils.toWei(price, \"ether\")\n                        });\n                    case 3:\n                        setError(\"Successfully announced estate \".concat(props.eid, \" for sale\"));\n                        _ctx.next = 9;\n                        break;\n                    case 6:\n                        _ctx.prev = 6;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        setError(\"Announcing estate \".concat(props.eid, \" for sale failed with error \").concat(_ctx.t0.message));\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    6\n                ]\n            ]);\n        }));\n        return function purchaseProperty() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var approveBuyer = function() {\n        var _ref = _asyncToGenerator(D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        console.log(typeof approvedAddress === \"undefined\" ? \"undefined\" : _typeof(approvedAddress));\n                        console.log(_typeof(props.address));\n                        _ctx.next = 5;\n                        return props.vmContract.methods.approveBuyer(props.eid, approvedAddress).send();\n                    case 5:\n                        setError(\"Successfully approved buyer \".concat(approvedAddress));\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        setError(\"Approving buyer \".concat(approvedAddress, \" failed with error \").concat(_ctx.t0.message));\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        return function approveBuyer() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var updatePrice = function(event) {\n        setPrice(event.target.value);\n    };\n    var updateApprovedAddres = function(event) {\n        setApprovedAddress(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: \"DetailedEstateView\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                onChange: updatePrice,\n                className: \"input\",\n                type: \"number\",\n                placeholder: \"Price\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            estate1.owner !== props.address ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: purchaseProperty,\n                class: \"button is-danger\",\n                children: \"Buy\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: announceEstateForSale,\n                    class: \"button is-warning\",\n                    children: \"Announce\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                    lineNumber: 76,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, this),\n            estate1.owner === props.address ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        onChange: updateApprovedAddres,\n                        className: \"input\",\n                        type: \"type\",\n                        placeholder: \"address\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                        lineNumber: 82,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: approveBuyer,\n                        class: \"button is-link\",\n                        children: \"Approve\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                        lineNumber: 83,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"container has-text-danger\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                        lineNumber: 90,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                    lineNumber: 89,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n};\n_s(DetailedEstateView, \"6qVJqqrgP7Dj22Quvm8u7W/As8g=\");\n_c = DetailedEstateView;\nvar _c;\n$RefreshReg$(_c, \"DetailedEstateView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQyxRQUFRLEVBQUVOLFdBQVc7Z0JBQUVPLFNBQVMsRUFBQyxPQUFPO2dCQUFDQyxJQUFJLEVBQUMsUUFBUTtnQkFBQ0MsV0FBVyxFQUFDLE9BQU87Ozs7O29CQUFTO1lBRXRGckMsT0FBTSxDQUFDc0MsS0FBSyxLQUFLdkMsS0FBSyxDQUFDaUIsT0FBTyxpQkFDNUIsOERBQUN1QixRQUFNO2dCQUFDQyxPQUFPLEVBQUVmLGdCQUFnQjtnQkFBRWdCLEtBQUssRUFBQyxrQkFBa0I7MEJBQUMsS0FBRzs7Ozs7b0JBQVMsaUJBRXhFLDhEQUFDVCxLQUFHOzBCQUNGLDRFQUFDTyxRQUFNO29CQUFDQyxPQUFPLEVBQUVyQixxQkFBcUI7b0JBQUVzQixLQUFLLEVBQUMsbUJBQW1COzhCQUFDLFVBQVE7Ozs7O3dCQUFTOzs7OztvQkFDL0U7WUFHUnpDLE9BQU0sQ0FBQ3NDLEtBQUssS0FBS3ZDLEtBQUssQ0FBQ2lCLE9BQU8saUJBQzVCLDhEQUFDZ0IsS0FBRzs7a0NBQ0YsOERBQUNDLE9BQUs7d0JBQUNDLFFBQVEsRUFBRUgsb0JBQW9CO3dCQUFFSSxTQUFTLEVBQUMsT0FBTzt3QkFBQ0MsSUFBSSxFQUFDLE1BQU07d0JBQUNDLFdBQVcsRUFBQyxTQUFTOzs7Ozs0QkFBUztrQ0FDbkcsOERBQUNFLFFBQU07d0JBQUNDLE9BQU8sRUFBRWIsWUFBWTt3QkFBRWMsS0FBSyxFQUFDLGdCQUFnQjtrQ0FBQyxTQUFPOzs7Ozs0QkFBUzs7Ozs7O29CQUNsRSxHQUVOLElBQUk7MEJBRVYsOERBQUNDLFNBQU87MEJBQ0osNEVBQUNWLEtBQUc7b0JBQUNHLFNBQVMsRUFBQywyQkFBMkI7OEJBQ3RDLDRFQUFDUSxHQUFDO2tDQUNHckMsS0FBSzs7Ozs7NEJBQ047Ozs7O3dCQUNGOzs7OztvQkFDQTs7Ozs7O1lBQ04sQ0FDUDtDQUNGO0dBN0Z1QlIsa0JBQWtCO0FBQWxCQSxLQUFBQSxrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRGV0YWlsZWRFc3RhdGVWaWV3LmpzP2IxYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldGFpbGVkRXN0YXRlVmlldyhwcm9wcykge1xyXG4gIGNvbnN0IFtlc3RhdGUsIHNldEVzdGF0ZV0gPSB1c2VTdGF0ZSh7fSlcclxuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW2FwcHJvdmVkQWRkcmVzcywgc2V0QXBwcm92ZWRBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGNvbnN0IGdldEVzdGF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGxldCBlc3RhdGUgPSBhd2FpdCBwcm9wcy52bUNvbnRyYWN0Lm1ldGhvZHMuZ2V0RXN0YXRlQnlJZChwcm9wcy5laWQpLmNhbGwoKVxyXG4gICAgICAgICAgICBzZXRFc3RhdGUoZXN0YXRlKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlc3RhdGUpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb3BzLmFkZHJlc3MpXHJcbiAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICAgICAgZ2V0RXN0YXRlKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGFubm91bmNlRXN0YXRlRm9yU2FsZSA9IGFzeW5jICgpID0+e1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgYXdhaXQgcHJvcHMudm1Db250cmFjdC5tZXRob2RzLmFubm91bmNlRXN0YXRlRm9yU2FsZShwcm9wcy5laWQsIHByb3BzLndlYjMudXRpbHMudG9XZWkocHJpY2UsICdldGhlcicpKS5zZW5kKHtcclxuICAgICAgICAgIGZyb206IHByb3BzLmFkZHJlc3NcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldEVycm9yKGBTdWNjZXNzZnVsbHkgYW5ub3VuY2VkIGVzdGF0ZSAke3Byb3BzLmVpZH0gZm9yIHNhbGVgKVxyXG4gICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBzZXRFcnJvcihgQW5ub3VuY2luZyBlc3RhdGUgJHtwcm9wcy5laWR9IGZvciBzYWxlIGZhaWxlZCB3aXRoIGVycm9yICR7ZXJyLm1lc3NhZ2V9YClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBwdXJjaGFzZVByb3BlcnR5ID0gYXN5bmMgKCkgPT57XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBhd2FpdCBwcm9wcy52bUNvbnRyYWN0Lm1ldGhvZHMucHVyY2hhc2VQcm9wZXJ0eShwcm9wcy5laWQpLnNlbmQoe1xyXG4gICAgICAgICAgZnJvbTogcHJvcHMuYWRkcmVzcyxcclxuICAgICAgICAgIHZhbHVlOiBwcm9wcy53ZWIzLnV0aWxzLnRvV2VpKHByaWNlLCAnZXRoZXInKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0RXJyb3IoYFN1Y2Nlc3NmdWxseSBhbm5vdW5jZWQgZXN0YXRlICR7cHJvcHMuZWlkfSBmb3Igc2FsZWApXHJcbiAgICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHNldEVycm9yKGBBbm5vdW5jaW5nIGVzdGF0ZSAke3Byb3BzLmVpZH0gZm9yIHNhbGUgZmFpbGVkIHdpdGggZXJyb3IgJHtlcnIubWVzc2FnZX1gKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBwcm92ZUJ1eWVyID0gYXN5bmMgKCkgPT57XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgYXBwcm92ZWRBZGRyZXNzKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBwcm9wcy5hZGRyZXNzKVxyXG4gICAgICAgIGF3YWl0IHByb3BzLnZtQ29udHJhY3QubWV0aG9kcy5hcHByb3ZlQnV5ZXIocHJvcHMuZWlkLCBhcHByb3ZlZEFkZHJlc3MpLnNlbmQoKVxyXG4gICAgICAgIHNldEVycm9yKGBTdWNjZXNzZnVsbHkgYXBwcm92ZWQgYnV5ZXIgJHthcHByb3ZlZEFkZHJlc3N9YClcclxuICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgc2V0RXJyb3IoYEFwcHJvdmluZyBidXllciAke2FwcHJvdmVkQWRkcmVzc30gZmFpbGVkIHdpdGggZXJyb3IgJHtlcnIubWVzc2FnZX1gKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlUHJpY2UgPSBldmVudCA9PiB7XHJcbiAgICAgIHNldFByaWNlKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVBcHByb3ZlZEFkZHJlcyA9IGV2ZW50ID0+IHtcclxuICAgICAgc2V0QXBwcm92ZWRBZGRyZXNzKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PkRldGFpbGVkRXN0YXRlVmlldzwvZGl2PlxyXG4gICAgICA8aW5wdXQgb25DaGFuZ2U9e3VwZGF0ZVByaWNlfSBjbGFzc05hbWU9J2lucHV0JyB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9J1ByaWNlJz48L2lucHV0PlxyXG4gICAgICB7XHJcbiAgICAgICAgICBlc3RhdGUub3duZXIgIT09IHByb3BzLmFkZHJlc3MgPyBcclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwdXJjaGFzZVByb3BlcnR5fSBjbGFzcz1cImJ1dHRvbiBpcy1kYW5nZXJcIj5CdXk8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Fubm91bmNlRXN0YXRlRm9yU2FsZX0gY2xhc3M9XCJidXR0b24gaXMtd2FybmluZ1wiPkFubm91bmNlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbiAgICAgIHtcclxuICAgICAgICAgIGVzdGF0ZS5vd25lciA9PT0gcHJvcHMuYWRkcmVzcyA/IFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17dXBkYXRlQXBwcm92ZWRBZGRyZXN9IGNsYXNzTmFtZT0naW5wdXQnIHR5cGU9XCJ0eXBlXCIgcGxhY2Vob2xkZXI9J2FkZHJlc3MnPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthcHByb3ZlQnV5ZXJ9IGNsYXNzPVwiYnV0dG9uIGlzLWxpbmtcIj5BcHByb3ZlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIG51bGxcclxuICAgICAgfVxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgaGFzLXRleHQtZGFuZ2VyJz5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJXZWIzIiwiRGV0YWlsZWRFc3RhdGVWaWV3IiwicHJvcHMiLCJlc3RhdGUiLCJzZXRFc3RhdGUiLCJwcmljZSIsInNldFByaWNlIiwiYXBwcm92ZWRBZGRyZXNzIiwic2V0QXBwcm92ZWRBZGRyZXNzIiwiZXJyb3IiLCJzZXRFcnJvciIsImdldEVzdGF0ZSIsInZtQ29udHJhY3QiLCJtZXRob2RzIiwiZ2V0RXN0YXRlQnlJZCIsImVpZCIsImNhbGwiLCJjb25zb2xlIiwibG9nIiwiYWRkcmVzcyIsImVyciIsIm1lc3NhZ2UiLCJhbm5vdW5jZUVzdGF0ZUZvclNhbGUiLCJ3ZWIzIiwidXRpbHMiLCJ0b1dlaSIsInNlbmQiLCJmcm9tIiwicHVyY2hhc2VQcm9wZXJ0eSIsInZhbHVlIiwiYXBwcm92ZUJ1eWVyIiwidXBkYXRlUHJpY2UiLCJldmVudCIsInRhcmdldCIsInVwZGF0ZUFwcHJvdmVkQWRkcmVzIiwiZGl2IiwiaW5wdXQiLCJvbkNoYW5nZSIsImNsYXNzTmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm93bmVyIiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzIiwic2VjdGlvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/DetailedEstateView.js\n");

/***/ })

});