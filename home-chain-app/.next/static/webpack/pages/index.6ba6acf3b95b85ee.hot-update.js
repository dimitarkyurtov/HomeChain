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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DetailedEstateView; }\n/* harmony export */ });\n/* harmony import */ var D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DetailedEstateView(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), estate1 = ref[0], setEstate = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), price = ref1[0], setPrice = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), error = ref2[0], setError = ref2[1];\n    var getEstate = function() {\n        var _ref = _asyncToGenerator(D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var estate;\n            return D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return props.vmContract.methods.getEstateById(props.eid).call();\n                    case 3:\n                        estate = _ctx.sent;\n                        setEstate(estate);\n                        console.log(estate);\n                        console.log(props.address);\n                        _ctx.next = 12;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0.message);\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    9\n                ]\n            ]);\n        }));\n        return function getEstate() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getEstate();\n    }, []);\n    var announceEstateForSale = function() {\n        var _ref = _asyncToGenerator(D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return props.vmContract.methods.announceEstateForSale(props.eid, props.web3.utils.toWei(price, \"ether\")).send({\n                            from: props.address\n                        });\n                    case 3:\n                        setError(\"Successfully announced estate \".concat(props.eid, \" for sale\"));\n                        _ctx.next = 9;\n                        break;\n                    case 6:\n                        _ctx.prev = 6;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        setError(\"Announcing estate \".concat(props.eid, \" for sale failed with error \").concat(_ctx.t0.message));\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    6\n                ]\n            ]);\n        }));\n        return function announceEstateForSale() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var purchaseProperty = function() {\n        var _ref = _asyncToGenerator(D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return D_CompSci_blockchain2_project3_home_chain_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return props.vmContract.methods.purchaseProperty(props.eid).send({\n                            from: props.address,\n                            value: props.web3.utils.toWei(price, \"ether\")\n                        });\n                    case 3:\n                        setError(\"Successfully announced estate \".concat(props.eid, \" for sale\"));\n                        _ctx.next = 9;\n                        break;\n                    case 6:\n                        _ctx.prev = 6;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        setError(\"Announcing estate \".concat(props.eid, \" for sale failed with error \").concat(_ctx.t0.message));\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    6\n                ]\n            ]);\n        }));\n        return function purchaseProperty() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var updatePrice = function(event) {\n        setPrice(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: \"DetailedEstateView\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                onChange: updatePrice,\n                className: \"input\",\n                type: \"number\",\n                placeholder: \"Price\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            estate1.owner !== props.address ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: purchaseProperty,\n                class: \"button is-danger\",\n                children: \"Buy\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: announceEstateForSale,\n                    class: \"button is-warning\",\n                    children: \"Announce\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                    lineNumber: 60,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"container has-text-danger\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                        lineNumber: 65,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                    lineNumber: 64,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\CompSci\\\\blockchain2\\\\project3\\\\home-chain-app\\\\pages\\\\DetailedEstateView.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n};\n_s(DetailedEstateView, \"hL4IZjNtSA4bS5EIia2nxVUjTys=\");\n_c = DetailedEstateView;\nvar _c;\n$RefreshReg$(_c, \"DetailedEstateView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsQ0FBQzs7Ozs7Ozs7Ozs7U0FFdkY7d0JBVktPLGdCQUFnQjs7O09BVXJCO0lBRUQsSUFBTUUsV0FBVyxHQUFHQyxTQUFBQSxLQUFLLEVBQUk7UUFDM0J2QixRQUFRLENBQUN1QixLQUFLLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO0tBQzdCO0lBRUgscUJBQ0UsOERBQUNJLEtBQUc7OzBCQUNGLDhEQUFDQSxLQUFHOzBCQUFDLG9CQUFrQjs7Ozs7b0JBQU07MEJBQzdCLDhEQUFDQyxPQUFLO2dCQUFDQyxRQUFRLEVBQUVMLFdBQVc7Z0JBQUVNLFNBQVMsRUFBQyxPQUFPO2dCQUFDQyxJQUFJLEVBQUMsUUFBUTtnQkFBQ0MsV0FBVyxFQUFDLE9BQU87Ozs7O29CQUFTO1lBRXRGakMsT0FBTSxDQUFDa0MsS0FBSyxLQUFLbkMsS0FBSyxDQUFDZSxPQUFPLGlCQUM1Qiw4REFBQ3FCLFFBQU07Z0JBQUNDLE9BQU8sRUFBRWIsZ0JBQWdCO2dCQUFFYyxLQUFLLEVBQUMsa0JBQWtCOzBCQUFDLEtBQUc7Ozs7O29CQUFTLGlCQUV4RSw4REFBQ1QsS0FBRzswQkFDRiw0RUFBQ08sUUFBTTtvQkFBQ0MsT0FBTyxFQUFFbkIscUJBQXFCO29CQUFFb0IsS0FBSyxFQUFDLG1CQUFtQjs4QkFBQyxVQUFROzs7Ozt3QkFBUzs7Ozs7b0JBQy9FOzBCQUVaLDhEQUFDQyxTQUFPOzBCQUNKLDRFQUFDVixLQUFHO29CQUFDRyxTQUFTLEVBQUMsMkJBQTJCOzhCQUN0Qyw0RUFBQ1EsR0FBQztrQ0FDR25DLEtBQUs7Ozs7OzRCQUNOOzs7Ozt3QkFDRjs7Ozs7b0JBQ0E7Ozs7OztZQUNOLENBQ1A7Q0FDRjtHQXBFdUJOLGtCQUFrQjtBQUFsQkEsS0FBQUEsa0JBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0RldGFpbGVkRXN0YXRlVmlldy5qcz9iMWMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWxlZEVzdGF0ZVZpZXcocHJvcHMpIHtcclxuICBjb25zdCBbZXN0YXRlLCBzZXRFc3RhdGVdID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGNvbnN0IGdldEVzdGF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGxldCBlc3RhdGUgPSBhd2FpdCBwcm9wcy52bUNvbnRyYWN0Lm1ldGhvZHMuZ2V0RXN0YXRlQnlJZChwcm9wcy5laWQpLmNhbGwoKVxyXG4gICAgICAgICAgICBzZXRFc3RhdGUoZXN0YXRlKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlc3RhdGUpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb3BzLmFkZHJlc3MpXHJcbiAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICAgICAgZ2V0RXN0YXRlKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGFubm91bmNlRXN0YXRlRm9yU2FsZSA9IGFzeW5jICgpID0+e1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgYXdhaXQgcHJvcHMudm1Db250cmFjdC5tZXRob2RzLmFubm91bmNlRXN0YXRlRm9yU2FsZShwcm9wcy5laWQsIHByb3BzLndlYjMudXRpbHMudG9XZWkocHJpY2UsICdldGhlcicpKS5zZW5kKHtcclxuICAgICAgICAgIGZyb206IHByb3BzLmFkZHJlc3NcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldEVycm9yKGBTdWNjZXNzZnVsbHkgYW5ub3VuY2VkIGVzdGF0ZSAke3Byb3BzLmVpZH0gZm9yIHNhbGVgKVxyXG4gICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBzZXRFcnJvcihgQW5ub3VuY2luZyBlc3RhdGUgJHtwcm9wcy5laWR9IGZvciBzYWxlIGZhaWxlZCB3aXRoIGVycm9yICR7ZXJyLm1lc3NhZ2V9YClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBwdXJjaGFzZVByb3BlcnR5ID0gYXN5bmMgKCkgPT57XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBhd2FpdCBwcm9wcy52bUNvbnRyYWN0Lm1ldGhvZHMucHVyY2hhc2VQcm9wZXJ0eShwcm9wcy5laWQpLnNlbmQoe1xyXG4gICAgICAgICAgZnJvbTogcHJvcHMuYWRkcmVzcyxcclxuICAgICAgICAgIHZhbHVlOiBwcm9wcy53ZWIzLnV0aWxzLnRvV2VpKHByaWNlLCAnZXRoZXInKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0RXJyb3IoYFN1Y2Nlc3NmdWxseSBhbm5vdW5jZWQgZXN0YXRlICR7cHJvcHMuZWlkfSBmb3Igc2FsZWApXHJcbiAgICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHNldEVycm9yKGBBbm5vdW5jaW5nIGVzdGF0ZSAke3Byb3BzLmVpZH0gZm9yIHNhbGUgZmFpbGVkIHdpdGggZXJyb3IgJHtlcnIubWVzc2FnZX1gKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlUHJpY2UgPSBldmVudCA9PiB7XHJcbiAgICAgIHNldFByaWNlKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PkRldGFpbGVkRXN0YXRlVmlldzwvZGl2PlxyXG4gICAgICA8aW5wdXQgb25DaGFuZ2U9e3VwZGF0ZVByaWNlfSBjbGFzc05hbWU9J2lucHV0JyB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9J1ByaWNlJz48L2lucHV0PlxyXG4gICAgICB7XHJcbiAgICAgICAgICBlc3RhdGUub3duZXIgIT09IHByb3BzLmFkZHJlc3MgPyBcclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwdXJjaGFzZVByb3BlcnR5fSBjbGFzcz1cImJ1dHRvbiBpcy1kYW5nZXJcIj5CdXk8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Fubm91bmNlRXN0YXRlRm9yU2FsZX0gY2xhc3M9XCJidXR0b24gaXMtd2FybmluZ1wiPkFubm91bmNlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBoYXMtdGV4dC1kYW5nZXInPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICB7ZXJyb3J9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIldlYjMiLCJEZXRhaWxlZEVzdGF0ZVZpZXciLCJwcm9wcyIsImVzdGF0ZSIsInNldEVzdGF0ZSIsInByaWNlIiwic2V0UHJpY2UiLCJlcnJvciIsInNldEVycm9yIiwiZ2V0RXN0YXRlIiwidm1Db250cmFjdCIsIm1ldGhvZHMiLCJnZXRFc3RhdGVCeUlkIiwiZWlkIiwiY2FsbCIsImNvbnNvbGUiLCJsb2ciLCJhZGRyZXNzIiwiZXJyIiwibWVzc2FnZSIsImFubm91bmNlRXN0YXRlRm9yU2FsZSIsIndlYjMiLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJwdXJjaGFzZVByb3BlcnR5IiwidmFsdWUiLCJ1cGRhdGVQcmljZSIsImV2ZW50IiwidGFyZ2V0IiwiZGl2IiwiaW5wdXQiLCJvbkNoYW5nZSIsImNsYXNzTmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm93bmVyIiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzIiwic2VjdGlvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/DetailedEstateView.js\n");

/***/ })

});