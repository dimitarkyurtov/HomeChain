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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DetailedEstateView; }\n/* harmony export */ });\n/* harmony import */ var D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DetailedEstateView(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), estate1 = ref[0], setEstate = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), price = ref1[0], setPrice = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), approvedAddress = ref2[0], setApprovedAddress = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), error = ref3[0], setError = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), approvedBuyer1 = ref4[0], setApprovedBuyer = ref4[1];\n    var getEstate = function() {\n        var _ref = _asyncToGenerator(D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var estate, approvedBuyer;\n            return D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return props.vmContract.methods.getEstateById(props.eid).call();\n                    case 3:\n                        estate = _ctx.sent;\n                        setEstate(estate);\n                        _ctx.next = 7;\n                        return props.vmContract.methods.getAddressOfApprovedBuyer(props.eid).call();\n                    case 7:\n                        approvedBuyer = _ctx.sent;\n                        setApprovedBuyer(approveBuyer);\n                        console.log(approvedBuyer);\n                        _ctx.next = 15;\n                        break;\n                    case 12:\n                        _ctx.prev = 12;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0.message);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    12\n                ]\n            ]);\n        }));\n        return function getEstate() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getEstate();\n    }, []);\n    var announceEstateForSale = function() {\n        var _ref = _asyncToGenerator(D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return props.vmContract.methods.announceEstateForSale(props.eid, props.web3.utils.toWei(price, \"ether\")).send({\n                            from: props.address\n                        });\n                    case 3:\n                        setError(\"Successfully announced estate \".concat(props.eid, \" for sale\"));\n                        _ctx.next = 9;\n                        break;\n                    case 6:\n                        _ctx.prev = 6;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        setError(\"Announcing estate \".concat(props.eid, \" for sale failed with error \").concat(_ctx.t0.message));\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    6\n                ]\n            ]);\n        }));\n        return function announceEstateForSale() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var purchaseProperty = function() {\n        var _ref = _asyncToGenerator(D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return props.vmContract.methods.purchaseProperty(props.eid).send({\n                            from: props.address,\n                            value: props.web3.utils.toWei(price, \"ether\")\n                        });\n                    case 3:\n                        setError(\"Successfully purchased estate \".concat(props.eid));\n                        _ctx.next = 9;\n                        break;\n                    case 6:\n                        _ctx.prev = 6;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        setError(\"Purchasing estate \".concat(props.eid, \" failed with error \").concat(_ctx.t0.message));\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    6\n                ]\n            ]);\n        }));\n        return function purchaseProperty() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var approveBuyer = function() {\n        var _ref = _asyncToGenerator(D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return props.vmContract.methods.approveBuyer(props.eid, approvedAddress).send({\n                            from: props.address\n                        });\n                    case 3:\n                        setError(\"Successfully approved buyer \".concat(approvedAddress));\n                        _ctx.next = 9;\n                        break;\n                    case 6:\n                        _ctx.prev = 6;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        setError(\"Approving buyer \".concat(approvedAddress, \" failed with error \").concat(_ctx.t0.message));\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    6\n                ]\n            ]);\n        }));\n        return function approveBuyer() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var updatePrice = function(event) {\n        setPrice(event.target.value);\n    };\n    var updateApprovedAddres = function(event) {\n        setApprovedAddress(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: \"DetailedEstateView\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                onChange: updatePrice,\n                className: \"input\",\n                type: \"number\",\n                placeholder: \"Price\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            approvedBuyer1 === props.address ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: purchaseProperty,\n                    class: \"button is-danger\",\n                    children: \"Buy\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                    lineNumber: 76,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, this) : null,\n            estate1.owner === props.address ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: announceEstateForSale,\n                    class: \"button is-warning\",\n                    children: \"Announce\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                    lineNumber: 84,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                lineNumber: 83,\n                columnNumber: 11\n            }, this) : null,\n            estate1.owner === props.address ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        onChange: updateApprovedAddres,\n                        className: \"input\",\n                        type: \"type\",\n                        placeholder: \"address\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                        lineNumber: 92,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: approveBuyer,\n                        class: \"button is-link\",\n                        children: \"Approve\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                        lineNumber: 93,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, this) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"container has-text-danger\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                        lineNumber: 100,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                    lineNumber: 99,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n};\n_s(DetailedEstateView, \"oX0PTiAhrop/mW71R8o6SHj5hHM=\");\n_c = DetailedEstateView;\nvar _c;\n$RefreshReg$(_c, \"DetailedEstateView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzhCQUN0Qyw0RUFBQ1EsR0FBQztrQ0FDR3hDLEtBQUs7Ozs7OzRCQUNOOzs7Ozt3QkFDRjs7Ozs7b0JBQ0E7Ozs7OztZQUNOLENBQ1A7Q0FDRjtHQXZHdUJSLGtCQUFrQjtBQUFsQkEsS0FBQUEsa0JBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0RldGFpbGVkRXN0YXRlVmlldy5qcz9iMWMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWxlZEVzdGF0ZVZpZXcocHJvcHMpIHtcclxuICBjb25zdCBbZXN0YXRlLCBzZXRFc3RhdGVdID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFthcHByb3ZlZEFkZHJlc3MsIHNldEFwcHJvdmVkQWRkcmVzc10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFthcHByb3ZlZEJ1eWVyLCBzZXRBcHByb3ZlZEJ1eWVyXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICBjb25zdCBnZXRFc3RhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBsZXQgZXN0YXRlID0gYXdhaXQgcHJvcHMudm1Db250cmFjdC5tZXRob2RzLmdldEVzdGF0ZUJ5SWQocHJvcHMuZWlkKS5jYWxsKClcclxuICAgICAgICAgICAgc2V0RXN0YXRlKGVzdGF0ZSlcclxuICAgICAgICAgICAgbGV0IGFwcHJvdmVkQnV5ZXIgPSBhd2FpdCBwcm9wcy52bUNvbnRyYWN0Lm1ldGhvZHMuZ2V0QWRkcmVzc09mQXBwcm92ZWRCdXllcihwcm9wcy5laWQpLmNhbGwoKVxyXG4gICAgICAgICAgICBzZXRBcHByb3ZlZEJ1eWVyKGFwcHJvdmVCdXllcilcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYXBwcm92ZWRCdXllcilcclxuICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuICAgICAgICBnZXRFc3RhdGUoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgYW5ub3VuY2VFc3RhdGVGb3JTYWxlID0gYXN5bmMgKCkgPT57XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBhd2FpdCBwcm9wcy52bUNvbnRyYWN0Lm1ldGhvZHMuYW5ub3VuY2VFc3RhdGVGb3JTYWxlKHByb3BzLmVpZCwgcHJvcHMud2ViMy51dGlscy50b1dlaShwcmljZSwgJ2V0aGVyJykpLnNlbmQoe1xyXG4gICAgICAgICAgZnJvbTogcHJvcHMuYWRkcmVzc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0RXJyb3IoYFN1Y2Nlc3NmdWxseSBhbm5vdW5jZWQgZXN0YXRlICR7cHJvcHMuZWlkfSBmb3Igc2FsZWApXHJcbiAgICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHNldEVycm9yKGBBbm5vdW5jaW5nIGVzdGF0ZSAke3Byb3BzLmVpZH0gZm9yIHNhbGUgZmFpbGVkIHdpdGggZXJyb3IgJHtlcnIubWVzc2FnZX1gKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHB1cmNoYXNlUHJvcGVydHkgPSBhc3luYyAoKSA9PntcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGF3YWl0IHByb3BzLnZtQ29udHJhY3QubWV0aG9kcy5wdXJjaGFzZVByb3BlcnR5KHByb3BzLmVpZCkuc2VuZCh7XHJcbiAgICAgICAgICBmcm9tOiBwcm9wcy5hZGRyZXNzLFxyXG4gICAgICAgICAgdmFsdWU6IHByb3BzLndlYjMudXRpbHMudG9XZWkocHJpY2UsICdldGhlcicpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRFcnJvcihgU3VjY2Vzc2Z1bGx5IHB1cmNoYXNlZCBlc3RhdGUgJHtwcm9wcy5laWR9YClcclxuICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgc2V0RXJyb3IoYFB1cmNoYXNpbmcgZXN0YXRlICR7cHJvcHMuZWlkfSBmYWlsZWQgd2l0aCBlcnJvciAke2Vyci5tZXNzYWdlfWApXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHByb3ZlQnV5ZXIgPSBhc3luYyAoKSA9PntcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGF3YWl0IHByb3BzLnZtQ29udHJhY3QubWV0aG9kcy5hcHByb3ZlQnV5ZXIocHJvcHMuZWlkLCBhcHByb3ZlZEFkZHJlc3MpLnNlbmQoe1xyXG4gICAgICAgICAgZnJvbTogcHJvcHMuYWRkcmVzc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0RXJyb3IoYFN1Y2Nlc3NmdWxseSBhcHByb3ZlZCBidXllciAke2FwcHJvdmVkQWRkcmVzc31gKVxyXG4gICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBzZXRFcnJvcihgQXBwcm92aW5nIGJ1eWVyICR7YXBwcm92ZWRBZGRyZXNzfSBmYWlsZWQgd2l0aCBlcnJvciAke2Vyci5tZXNzYWdlfWApXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVQcmljZSA9IGV2ZW50ID0+IHtcclxuICAgICAgc2V0UHJpY2UoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUFwcHJvdmVkQWRkcmVzID0gZXZlbnQgPT4ge1xyXG4gICAgICBzZXRBcHByb3ZlZEFkZHJlc3MoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+RGV0YWlsZWRFc3RhdGVWaWV3PC9kaXY+XHJcbiAgICAgIDxpbnB1dCBvbkNoYW5nZT17dXBkYXRlUHJpY2V9IGNsYXNzTmFtZT0naW5wdXQnIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj0nUHJpY2UnPjwvaW5wdXQ+XHJcbiAgICAgIHtcclxuICAgICAgICBhcHByb3ZlZEJ1eWVyID09PSBwcm9wcy5hZGRyZXNzID8gXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17cHVyY2hhc2VQcm9wZXJ0eX0gY2xhc3M9XCJidXR0b24gaXMtZGFuZ2VyXCI+QnV5PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgbnVsbFxyXG4gICAgICB9XHJcbiAgICAgIHtcclxuICAgICAgICAgIGVzdGF0ZS5vd25lciA9PT0gcHJvcHMuYWRkcmVzcyA/IFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthbm5vdW5jZUVzdGF0ZUZvclNhbGV9IGNsYXNzPVwiYnV0dG9uIGlzLXdhcm5pbmdcIj5Bbm5vdW5jZTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgIG51bGxcclxuICAgICAgfVxyXG4gICAgICB7XHJcbiAgICAgICAgICBlc3RhdGUub3duZXIgPT09IHByb3BzLmFkZHJlc3MgPyBcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3VwZGF0ZUFwcHJvdmVkQWRkcmVzfSBjbGFzc05hbWU9J2lucHV0JyB0eXBlPVwidHlwZVwiIHBsYWNlaG9sZGVyPSdhZGRyZXNzJz48L2lucHV0PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YXBwcm92ZUJ1eWVyfSBjbGFzcz1cImJ1dHRvbiBpcy1saW5rXCI+QXBwcm92ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICBudWxsXHJcbiAgICAgIH1cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIGhhcy10ZXh0LWRhbmdlcic+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIHtlcnJvcn1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiV2ViMyIsIkRldGFpbGVkRXN0YXRlVmlldyIsInByb3BzIiwiZXN0YXRlIiwic2V0RXN0YXRlIiwicHJpY2UiLCJzZXRQcmljZSIsImFwcHJvdmVkQWRkcmVzcyIsInNldEFwcHJvdmVkQWRkcmVzcyIsImVycm9yIiwic2V0RXJyb3IiLCJhcHByb3ZlZEJ1eWVyIiwic2V0QXBwcm92ZWRCdXllciIsImdldEVzdGF0ZSIsInZtQ29udHJhY3QiLCJtZXRob2RzIiwiZ2V0RXN0YXRlQnlJZCIsImVpZCIsImNhbGwiLCJnZXRBZGRyZXNzT2ZBcHByb3ZlZEJ1eWVyIiwiYXBwcm92ZUJ1eWVyIiwiY29uc29sZSIsImxvZyIsImVyciIsIm1lc3NhZ2UiLCJhbm5vdW5jZUVzdGF0ZUZvclNhbGUiLCJ3ZWIzIiwidXRpbHMiLCJ0b1dlaSIsInNlbmQiLCJmcm9tIiwiYWRkcmVzcyIsInB1cmNoYXNlUHJvcGVydHkiLCJ2YWx1ZSIsInVwZGF0ZVByaWNlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ1cGRhdGVBcHByb3ZlZEFkZHJlcyIsImRpdiIsImlucHV0Iiwib25DaGFuZ2UiLCJjbGFzc05hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3MiLCJvd25lciIsInNlY3Rpb24iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/DetailedEstateView.js\n");

/***/ })

});