"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/connectors/injected */ \"wagmi/connectors/injected\");\n/* harmony import */ var wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/connectors/walletConnect */ \"wagmi/connectors/walletConnect\");\n/* harmony import */ var wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var wagmi_connectors_walletLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi/connectors/walletLink */ \"wagmi/connectors/walletLink\");\n/* harmony import */ var wagmi_connectors_walletLink__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_walletLink__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n// Imports\n\n\n\n\n// Get environment variables\nconst alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;\nconst etherscanApiKey = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY;\nconst infuraId = process.env.NEXT_PUBLIC_INFURA_ID;\n// Pick chains\nconst chains = wagmi__WEBPACK_IMPORTED_MODULE_4__.defaultChains;\nconst defaultChain = wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.mainnet;\nconst connectors = ({ chainId  })=>{\n    var ref, ref1;\n    var ref2;\n    const rpcUrl = (ref2 = (ref = chains.find((x)=>x.id === chainId\n    )) === null || ref === void 0 ? void 0 : (ref1 = ref.rpcUrls) === null || ref1 === void 0 ? void 0 : ref1[0]) !== null && ref2 !== void 0 ? ref2 : defaultChain.rpcUrls[0];\n    return [\n        new wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_5__.InjectedConnector({\n            chains,\n            options: {\n                shimDisconnect: true\n            }\n        }),\n        new wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__.WalletConnectConnector({\n            chains,\n            options: {\n                infuraId,\n                qrcode: true\n            }\n        }),\n        new wagmi_connectors_walletLink__WEBPACK_IMPORTED_MODULE_7__.WalletLinkConnector({\n            chains,\n            options: {\n                appName: \"wagmi\",\n                jsonRpcUrl: `${rpcUrl}/${infuraId}`\n            }\n        }), \n    ];\n};\nconst isChainSupported = (chainId)=>chains.some((x)=>x.id === chainId\n    )\n;\nconst provider = ({ chainId  })=>ethers__WEBPACK_IMPORTED_MODULE_2__.providers.getDefaultProvider(isChainSupported(chainId) ? chainId : defaultChain.id, {\n        alchemy: alchemyId,\n        etherscan: etherscanApiKey,\n        infura: infuraId\n    })\n;\nconst webSocketProvider = ({ chainId  })=>isChainSupported(chainId) ? new ethers__WEBPACK_IMPORTED_MODULE_2__.providers.InfuraWebSocketProvider(chainId, infuraId) : undefined\n;\nconst App = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n        autoConnect: true,\n        connectors: connectors,\n        provider: provider,\n        webSocketProvider: webSocketProvider,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"wagmi\"\n                }, void 0, false, {\n                    fileName: \"/Users/blerque/wagmi-example/src/pages/_app.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/blerque/wagmi-example/src/pages/_app.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/blerque/wagmi-example/src/pages/_app.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/blerque/wagmi-example/src/pages/_app.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQzRDLE9BQUs7OEJBQUMsT0FBSzs7Ozs7NkJBQVE7Ozs7O3lCQUNYOzBCQUVYLDhEQUFDSCxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O3lCQUFJOzs7Ozs7aUJBQ25CLENBQ1o7Q0FDRjtBQUVELGlFQUFlRixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbXBsZS1uZXh0Ly4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBwcm92aWRlcnMgfSBmcm9tICdldGhlcnMnXG5pbXBvcnQgTmV4dEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG4vLyBJbXBvcnRzXG5pbXBvcnQgeyBDb25uZWN0b3IsIFByb3ZpZGVyLCBjaGFpbiwgZGVmYXVsdENoYWlucyB9IGZyb20gJ3dhZ21pJ1xuaW1wb3J0IHsgSW5qZWN0ZWRDb25uZWN0b3IgfSBmcm9tICd3YWdtaS9jb25uZWN0b3JzL2luamVjdGVkJ1xuaW1wb3J0IHsgV2FsbGV0Q29ubmVjdENvbm5lY3RvciB9IGZyb20gJ3dhZ21pL2Nvbm5lY3RvcnMvd2FsbGV0Q29ubmVjdCdcbmltcG9ydCB7IFdhbGxldExpbmtDb25uZWN0b3IgfSBmcm9tICd3YWdtaS9jb25uZWN0b3JzL3dhbGxldExpbmsnXG5cbi8vIEdldCBlbnZpcm9ubWVudCB2YXJpYWJsZXNcbmNvbnN0IGFsY2hlbXlJZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FMQ0hFTVlfSUQgYXMgc3RyaW5nXG5jb25zdCBldGhlcnNjYW5BcGlLZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19FVEhFUlNDQU5fQVBJX0tFWSBhcyBzdHJpbmdcbmNvbnN0IGluZnVyYUlkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSU5GVVJBX0lEIGFzIHN0cmluZ1xuXG4vLyBQaWNrIGNoYWluc1xuY29uc3QgY2hhaW5zID0gZGVmYXVsdENoYWluc1xuY29uc3QgZGVmYXVsdENoYWluID0gY2hhaW4ubWFpbm5ldFxuXG4vLyBTZXQgdXAgY29ubmVjdG9yc1xudHlwZSBDb25uZWN0b3JzQ29uZmlnID0geyBjaGFpbklkPzogbnVtYmVyIH1cbmNvbnN0IGNvbm5lY3RvcnMgPSAoeyBjaGFpbklkIH06IENvbm5lY3RvcnNDb25maWcpID0+IHtcbiAgY29uc3QgcnBjVXJsID1cbiAgICBjaGFpbnMuZmluZCgoeCkgPT4geC5pZCA9PT0gY2hhaW5JZCk/LnJwY1VybHM/LlswXSA/P1xuICAgIGRlZmF1bHRDaGFpbi5ycGNVcmxzWzBdXG4gIHJldHVybiBbXG4gICAgbmV3IEluamVjdGVkQ29ubmVjdG9yKHsgY2hhaW5zLCBvcHRpb25zOiB7IHNoaW1EaXNjb25uZWN0OiB0cnVlIH0gfSksXG4gICAgbmV3IFdhbGxldENvbm5lY3RDb25uZWN0b3Ioe1xuICAgICAgY2hhaW5zLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBpbmZ1cmFJZCxcbiAgICAgICAgcXJjb2RlOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBuZXcgV2FsbGV0TGlua0Nvbm5lY3Rvcih7XG4gICAgICBjaGFpbnMsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGFwcE5hbWU6ICd3YWdtaScsXG4gICAgICAgIGpzb25ScGNVcmw6IGAke3JwY1VybH0vJHtpbmZ1cmFJZH1gLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXVxufVxuXG4vLyBTZXQgdXAgcHJvdmlkZXJzXG50eXBlIFByb3ZpZGVyQ29uZmlnID0geyBjaGFpbklkPzogbnVtYmVyOyBjb25uZWN0b3I/OiBDb25uZWN0b3IgfVxuY29uc3QgaXNDaGFpblN1cHBvcnRlZCA9IChjaGFpbklkPzogbnVtYmVyKSA9PlxuICBjaGFpbnMuc29tZSgoeCkgPT4geC5pZCA9PT0gY2hhaW5JZClcblxuY29uc3QgcHJvdmlkZXIgPSAoeyBjaGFpbklkIH06IFByb3ZpZGVyQ29uZmlnKSA9PlxuICBwcm92aWRlcnMuZ2V0RGVmYXVsdFByb3ZpZGVyKFxuICAgIGlzQ2hhaW5TdXBwb3J0ZWQoY2hhaW5JZCkgPyBjaGFpbklkIDogZGVmYXVsdENoYWluLmlkLFxuICAgIHtcbiAgICAgIGFsY2hlbXk6IGFsY2hlbXlJZCxcbiAgICAgIGV0aGVyc2NhbjogZXRoZXJzY2FuQXBpS2V5LFxuICAgICAgaW5mdXJhOiBpbmZ1cmFJZCxcbiAgICB9LFxuICApXG5jb25zdCB3ZWJTb2NrZXRQcm92aWRlciA9ICh7IGNoYWluSWQgfTogUHJvdmlkZXJDb25maWcpID0+XG4gIGlzQ2hhaW5TdXBwb3J0ZWQoY2hhaW5JZClcbiAgICA/IG5ldyBwcm92aWRlcnMuSW5mdXJhV2ViU29ja2V0UHJvdmlkZXIoY2hhaW5JZCwgaW5mdXJhSWQpXG4gICAgOiB1bmRlZmluZWRcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXJcbiAgICAgIGF1dG9Db25uZWN0XG4gICAgICBjb25uZWN0b3JzPXtjb25uZWN0b3JzfVxuICAgICAgcHJvdmlkZXI9e3Byb3ZpZGVyfVxuICAgICAgd2ViU29ja2V0UHJvdmlkZXI9e3dlYlNvY2tldFByb3ZpZGVyfVxuICAgID5cbiAgICAgIDxOZXh0SGVhZD5cbiAgICAgICAgPHRpdGxlPndhZ21pPC90aXRsZT5cbiAgICAgIDwvTmV4dEhlYWQ+XG5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1Byb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwicHJvdmlkZXJzIiwiTmV4dEhlYWQiLCJQcm92aWRlciIsImNoYWluIiwiZGVmYXVsdENoYWlucyIsIkluamVjdGVkQ29ubmVjdG9yIiwiV2FsbGV0Q29ubmVjdENvbm5lY3RvciIsIldhbGxldExpbmtDb25uZWN0b3IiLCJhbGNoZW15SWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQUxDSEVNWV9JRCIsImV0aGVyc2NhbkFwaUtleSIsIk5FWFRfUFVCTElDX0VUSEVSU0NBTl9BUElfS0VZIiwiaW5mdXJhSWQiLCJORVhUX1BVQkxJQ19JTkZVUkFfSUQiLCJjaGFpbnMiLCJkZWZhdWx0Q2hhaW4iLCJtYWlubmV0IiwiY29ubmVjdG9ycyIsImNoYWluSWQiLCJycGNVcmwiLCJmaW5kIiwieCIsImlkIiwicnBjVXJscyIsIm9wdGlvbnMiLCJzaGltRGlzY29ubmVjdCIsInFyY29kZSIsImFwcE5hbWUiLCJqc29uUnBjVXJsIiwiaXNDaGFpblN1cHBvcnRlZCIsInNvbWUiLCJwcm92aWRlciIsImdldERlZmF1bHRQcm92aWRlciIsImFsY2hlbXkiLCJldGhlcnNjYW4iLCJpbmZ1cmEiLCJ3ZWJTb2NrZXRQcm92aWRlciIsIkluZnVyYVdlYlNvY2tldFByb3ZpZGVyIiwidW5kZWZpbmVkIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiYXV0b0Nvbm5lY3QiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/connectors/injected":
/*!********************************************!*\
  !*** external "wagmi/connectors/injected" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("wagmi/connectors/injected");

/***/ }),

/***/ "wagmi/connectors/walletConnect":
/*!*************************************************!*\
  !*** external "wagmi/connectors/walletConnect" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("wagmi/connectors/walletConnect");

/***/ }),

/***/ "wagmi/connectors/walletLink":
/*!**********************************************!*\
  !*** external "wagmi/connectors/walletLink" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("wagmi/connectors/walletLink");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();