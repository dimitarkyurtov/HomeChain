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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DetailedEstateView; }\n/* harmony export */ });\n/* harmony import */ var D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DetailedEstateView(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), estate1 = ref[0], setEstate = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), price = ref1[0], setPrice = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), approvedAddress = ref2[0], setApprovedAddress = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), error = ref3[0], setError = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), approvedBuyer1 = ref4[0], setApprovedBuyer = ref4[1];\n    var getEstate = function() {\n        var _ref = _asyncToGenerator(D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var estate, approvedBuyer;\n            return D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return props.vmContract.methods.getEstateById(props.eid).call();\n                    case 3:\n                        estate = _ctx.sent;\n                        setEstate(estate);\n                        _ctx.next = 7;\n                        return props.vmContract.methods.getAddressOfApprovedBuyer(props.eid).call();\n                    case 7:\n                        approvedBuyer = _ctx.sent;\n                        setApprovedBuyer(approvedBuyer);\n                        console.log(approvedBuyer);\n                        console.log(props.address);\n                        _ctx.next = 16;\n                        break;\n                    case 13:\n                        _ctx.prev = 13;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0.message);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    13\n                ]\n            ]);\n        }));\n        return function getEstate() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getEstate();\n    }, []);\n    var announceEstateForSale = function() {\n        var _ref = _asyncToGenerator(D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return props.vmContract.methods.announceEstateForSale(props.eid, props.web3.utils.toWei(price, \"ether\")).send({\n                            from: props.address\n                        });\n                    case 3:\n                        setError(\"Successfully announced estate \".concat(props.eid, \" for sale\"));\n                        _ctx.next = 9;\n                        break;\n                    case 6:\n                        _ctx.prev = 6;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        setError(\"Announcing estate \".concat(props.eid, \" for sale failed with error \").concat(_ctx.t0.message));\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    6\n                ]\n            ]);\n        }));\n        return function announceEstateForSale() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var purchaseProperty = function() {\n        var _ref = _asyncToGenerator(D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return props.vmContract.methods.purchaseProperty(props.eid).send({\n                            from: props.address,\n                            value: props.web3.utils.toWei(price, \"ether\")\n                        });\n                    case 3:\n                        setError(\"Successfully purchased estate \".concat(props.eid));\n                        _ctx.next = 9;\n                        break;\n                    case 6:\n                        _ctx.prev = 6;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        setError(\"Purchasing estate \".concat(props.eid, \" failed with error \").concat(_ctx.t0.message));\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    6\n                ]\n            ]);\n        }));\n        return function purchaseProperty() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var approveBuyer = function() {\n        var _ref = _asyncToGenerator(D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return props.vmContract.methods.approveBuyer(props.eid, approvedAddress).send({\n                            from: props.address\n                        });\n                    case 3:\n                        setError(\"Successfully approved buyer \".concat(approvedAddress));\n                        _ctx.next = 9;\n                        break;\n                    case 6:\n                        _ctx.prev = 6;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        setError(\"Approving buyer \".concat(approvedAddress, \" failed with error \").concat(_ctx.t0.message));\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    6\n                ]\n            ]);\n        }));\n        return function approveBuyer() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var updatePrice = function(event) {\n        setPrice(event.target.value);\n    };\n    var updateApprovedAddres = function(event) {\n        setApprovedAddress(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: \"DetailedEstateView\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            approvedBuyer1 === props.address ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        onChange: updatePrice,\n                        className: \"input\",\n                        type: \"number\",\n                        placeholder: \"Price\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                        lineNumber: 76,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: purchaseProperty,\n                        class: \"button is-danger\",\n                        children: \"Buy\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                        lineNumber: 77,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                lineNumber: 75,\n                columnNumber: 11\n            }, this) : null,\n            estate1.owner === props.address ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: announceEstateForSale,\n                    class: \"button is-warning\",\n                    children: \"Announce\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                    lineNumber: 85,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                lineNumber: 84,\n                columnNumber: 11\n            }, this) : null,\n            estate1.owner === props.address ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        onChange: updateApprovedAddres,\n                        className: \"input\",\n                        type: \"type\",\n                        placeholder: \"address\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                        lineNumber: 93,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: approveBuyer,\n                        class: \"button is-link\",\n                        children: \"Approve\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                        lineNumber: 94,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                lineNumber: 92,\n                columnNumber: 13\n            }, this) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"container has-text-danger\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                        lineNumber: 101,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                    lineNumber: 100,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n};\n_s(DetailedEstateView, \"oX0PTiAhrop/mW71R8o6SHj5hHM=\");\n_c = DetailedEstateView;\nvar _c;\n$RefreshReg$(_c, \"DetailedEstateView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Viw4REFBQ0UsU0FBTzswQkFDSiw0RUFBQ1YsS0FBRztvQkFBQ0csU0FBUyxFQUFDLDJCQUEyQjs4QkFDdEMsNEVBQUNRLEdBQUM7a0NBQ0d4QyxLQUFLOzs7Ozs0QkFDTjs7Ozs7d0JBQ0Y7Ozs7O29CQUNBOzs7Ozs7WUFDTixDQUNQO0NBQ0Y7R0F4R3VCUixrQkFBa0I7QUFBbEJBLEtBQUFBLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9EZXRhaWxlZEVzdGF0ZVZpZXcuanM/YjFjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV0YWlsZWRFc3RhdGVWaWV3KHByb3BzKSB7XHJcbiAgY29uc3QgW2VzdGF0ZSwgc2V0RXN0YXRlXSA9IHVzZVN0YXRlKHt9KVxyXG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbYXBwcm92ZWRBZGRyZXNzLCBzZXRBcHByb3ZlZEFkZHJlc3NdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbYXBwcm92ZWRCdXllciwgc2V0QXBwcm92ZWRCdXllcl0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgY29uc3QgZ2V0RXN0YXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgbGV0IGVzdGF0ZSA9IGF3YWl0IHByb3BzLnZtQ29udHJhY3QubWV0aG9kcy5nZXRFc3RhdGVCeUlkKHByb3BzLmVpZCkuY2FsbCgpXHJcbiAgICAgICAgICAgIHNldEVzdGF0ZShlc3RhdGUpXHJcbiAgICAgICAgICAgIGxldCBhcHByb3ZlZEJ1eWVyID0gYXdhaXQgcHJvcHMudm1Db250cmFjdC5tZXRob2RzLmdldEFkZHJlc3NPZkFwcHJvdmVkQnV5ZXIocHJvcHMuZWlkKS5jYWxsKClcclxuICAgICAgICAgICAgc2V0QXBwcm92ZWRCdXllcihhcHByb3ZlZEJ1eWVyKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcHByb3ZlZEJ1eWVyKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9wcy5hZGRyZXNzKVxyXG4gICAgICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgICAgIGdldEVzdGF0ZSgpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBhbm5vdW5jZUVzdGF0ZUZvclNhbGUgPSBhc3luYyAoKSA9PntcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGF3YWl0IHByb3BzLnZtQ29udHJhY3QubWV0aG9kcy5hbm5vdW5jZUVzdGF0ZUZvclNhbGUocHJvcHMuZWlkLCBwcm9wcy53ZWIzLnV0aWxzLnRvV2VpKHByaWNlLCAnZXRoZXInKSkuc2VuZCh7XHJcbiAgICAgICAgICBmcm9tOiBwcm9wcy5hZGRyZXNzXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRFcnJvcihgU3VjY2Vzc2Z1bGx5IGFubm91bmNlZCBlc3RhdGUgJHtwcm9wcy5laWR9IGZvciBzYWxlYClcclxuICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgc2V0RXJyb3IoYEFubm91bmNpbmcgZXN0YXRlICR7cHJvcHMuZWlkfSBmb3Igc2FsZSBmYWlsZWQgd2l0aCBlcnJvciAke2Vyci5tZXNzYWdlfWApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcHVyY2hhc2VQcm9wZXJ0eSA9IGFzeW5jICgpID0+e1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgYXdhaXQgcHJvcHMudm1Db250cmFjdC5tZXRob2RzLnB1cmNoYXNlUHJvcGVydHkocHJvcHMuZWlkKS5zZW5kKHtcclxuICAgICAgICAgIGZyb206IHByb3BzLmFkZHJlc3MsXHJcbiAgICAgICAgICB2YWx1ZTogcHJvcHMud2ViMy51dGlscy50b1dlaShwcmljZSwgJ2V0aGVyJylcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldEVycm9yKGBTdWNjZXNzZnVsbHkgcHVyY2hhc2VkIGVzdGF0ZSAke3Byb3BzLmVpZH1gKVxyXG4gICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBzZXRFcnJvcihgUHVyY2hhc2luZyBlc3RhdGUgJHtwcm9wcy5laWR9IGZhaWxlZCB3aXRoIGVycm9yICR7ZXJyLm1lc3NhZ2V9YClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFwcHJvdmVCdXllciA9IGFzeW5jICgpID0+e1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgYXdhaXQgcHJvcHMudm1Db250cmFjdC5tZXRob2RzLmFwcHJvdmVCdXllcihwcm9wcy5laWQsIGFwcHJvdmVkQWRkcmVzcykuc2VuZCh7XHJcbiAgICAgICAgICBmcm9tOiBwcm9wcy5hZGRyZXNzXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRFcnJvcihgU3VjY2Vzc2Z1bGx5IGFwcHJvdmVkIGJ1eWVyICR7YXBwcm92ZWRBZGRyZXNzfWApXHJcbiAgICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHNldEVycm9yKGBBcHByb3ZpbmcgYnV5ZXIgJHthcHByb3ZlZEFkZHJlc3N9IGZhaWxlZCB3aXRoIGVycm9yICR7ZXJyLm1lc3NhZ2V9YClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVByaWNlID0gZXZlbnQgPT4ge1xyXG4gICAgICBzZXRQcmljZShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlQXBwcm92ZWRBZGRyZXMgPSBldmVudCA9PiB7XHJcbiAgICAgIHNldEFwcHJvdmVkQWRkcmVzcyhldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5EZXRhaWxlZEVzdGF0ZVZpZXc8L2Rpdj5cclxuICAgICAge1xyXG4gICAgICAgICAgYXBwcm92ZWRCdXllciA9PT0gcHJvcHMuYWRkcmVzcyA/IFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt1cGRhdGVQcmljZX0gY2xhc3NOYW1lPSdpbnB1dCcgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPSdQcmljZSc+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwdXJjaGFzZVByb3BlcnR5fSBjbGFzcz1cImJ1dHRvbiBpcy1kYW5nZXJcIj5CdXk8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICBudWxsXHJcbiAgICAgIH1cclxuICAgICAge1xyXG4gICAgICAgICAgZXN0YXRlLm93bmVyID09PSBwcm9wcy5hZGRyZXNzID8gXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Fubm91bmNlRXN0YXRlRm9yU2FsZX0gY2xhc3M9XCJidXR0b24gaXMtd2FybmluZ1wiPkFubm91bmNlPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgbnVsbFxyXG4gICAgICB9XHJcbiAgICAgIHtcclxuICAgICAgICAgIGVzdGF0ZS5vd25lciA9PT0gcHJvcHMuYWRkcmVzcyA/IFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17dXBkYXRlQXBwcm92ZWRBZGRyZXN9IGNsYXNzTmFtZT0naW5wdXQnIHR5cGU9XCJ0eXBlXCIgcGxhY2Vob2xkZXI9J2FkZHJlc3MnPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthcHByb3ZlQnV5ZXJ9IGNsYXNzPVwiYnV0dG9uIGlzLWxpbmtcIj5BcHByb3ZlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIG51bGxcclxuICAgICAgfVxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgaGFzLXRleHQtZGFuZ2VyJz5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJXZWIzIiwiRGV0YWlsZWRFc3RhdGVWaWV3IiwicHJvcHMiLCJlc3RhdGUiLCJzZXRFc3RhdGUiLCJwcmljZSIsInNldFByaWNlIiwiYXBwcm92ZWRBZGRyZXNzIiwic2V0QXBwcm92ZWRBZGRyZXNzIiwiZXJyb3IiLCJzZXRFcnJvciIsImFwcHJvdmVkQnV5ZXIiLCJzZXRBcHByb3ZlZEJ1eWVyIiwiZ2V0RXN0YXRlIiwidm1Db250cmFjdCIsIm1ldGhvZHMiLCJnZXRFc3RhdGVCeUlkIiwiZWlkIiwiY2FsbCIsImdldEFkZHJlc3NPZkFwcHJvdmVkQnV5ZXIiLCJjb25zb2xlIiwibG9nIiwiYWRkcmVzcyIsImVyciIsIm1lc3NhZ2UiLCJhbm5vdW5jZUVzdGF0ZUZvclNhbGUiLCJ3ZWIzIiwidXRpbHMiLCJ0b1dlaSIsInNlbmQiLCJmcm9tIiwicHVyY2hhc2VQcm9wZXJ0eSIsInZhbHVlIiwiYXBwcm92ZUJ1eWVyIiwidXBkYXRlUHJpY2UiLCJldmVudCIsInRhcmdldCIsInVwZGF0ZUFwcHJvdmVkQWRkcmVzIiwiZGl2IiwiaW5wdXQiLCJvbkNoYW5nZSIsImNsYXNzTmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzcyIsIm93bmVyIiwic2VjdGlvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/DetailedEstateView.js\n");

/***/ })

});