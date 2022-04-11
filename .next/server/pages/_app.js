"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "ethers"
const external_ethers_namespaceObject = require("ethers");
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "wagmi"
var external_wagmi_ = __webpack_require__(906);
;// CONCATENATED MODULE: external "wagmi/connectors/injected"
const injected_namespaceObject = require("wagmi/connectors/injected");
;// CONCATENATED MODULE: external "wagmi/connectors/walletConnect"
const walletConnect_namespaceObject = require("wagmi/connectors/walletConnect");
;// CONCATENATED MODULE: external "wagmi/connectors/walletLink"
const walletLink_namespaceObject = require("wagmi/connectors/walletLink");
;// CONCATENATED MODULE: ./src/pages/_app.tsx




// Imports




// Get environment variables
const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;
const etherscanApiKey = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY;
const infuraId = process.env.NEXT_PUBLIC_INFURA_ID;
// Pick chains
const chains = external_wagmi_.defaultChains;
const defaultChain = external_wagmi_.chain.mainnet;
const connectors = ({ chainId  })=>{
    var ref, ref1;
    var ref2;
    const rpcUrl = (ref2 = (ref = chains.find((x)=>x.id === chainId
    )) === null || ref === void 0 ? void 0 : (ref1 = ref.rpcUrls) === null || ref1 === void 0 ? void 0 : ref1[0]) !== null && ref2 !== void 0 ? ref2 : defaultChain.rpcUrls[0];
    return [
        new injected_namespaceObject.InjectedConnector({
            chains,
            options: {
                shimDisconnect: true
            }
        }),
        new walletConnect_namespaceObject.WalletConnectConnector({
            chains,
            options: {
                infuraId,
                qrcode: true
            }
        }),
        new walletLink_namespaceObject.WalletLinkConnector({
            chains,
            options: {
                appName: "wagmi",
                jsonRpcUrl: `${rpcUrl}/${infuraId}`
            }
        }), 
    ];
};
const isChainSupported = (chainId)=>chains.some((x)=>x.id === chainId
    )
;
const provider = ({ chainId  })=>external_ethers_namespaceObject.providers.getDefaultProvider(isChainSupported(chainId) ? chainId : defaultChain.id, {
        alchemy: alchemyId,
        etherscan: etherscanApiKey,
        infura: infuraId
    })
;
const webSocketProvider = ({ chainId  })=>isChainSupported(chainId) ? new external_ethers_namespaceObject.providers.InfuraWebSocketProvider(chainId, infuraId) : undefined
;
const App = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_wagmi_.Provider, {
        autoConnect: true,
        connectors: connectors,
        provider: provider,
        webSocketProvider: webSocketProvider,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "wagmi"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 906:
/***/ ((module) => {

module.exports = require("wagmi");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(897));
module.exports = __webpack_exports__;

})();