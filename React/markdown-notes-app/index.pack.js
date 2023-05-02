/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Plugin/Preset files are not allowed to export objects, only functions. In /home/silvio/Dokumente/GitHub/React/markdown-notes-app/node_modules/babel-preset-react/lib/index.js\n    at createDescriptor (/home/silvio/Dokumente/GitHub/React/markdown-notes-app/node_modules/@babel/core/lib/config/config-descriptors.js:211:11)\n    at createDescriptor.next (<anonymous>)\n    at evaluateSync (/home/silvio/Dokumente/GitHub/React/markdown-notes-app/node_modules/gensync/index.js:251:28)\n    at /home/silvio/Dokumente/GitHub/React/markdown-notes-app/node_modules/gensync/index.js:31:34\n    at Array.map (<anonymous>)\n    at Function.sync (/home/silvio/Dokumente/GitHub/React/markdown-notes-app/node_modules/gensync/index.js:31:22)\n    at Function.all (/home/silvio/Dokumente/GitHub/React/markdown-notes-app/node_modules/gensync/index.js:210:24)\n    at Generator.next (<anonymous>)\n    at createDescriptors (/home/silvio/Dokumente/GitHub/React/markdown-notes-app/node_modules/@babel/core/lib/config/config-descriptors.js:142:41)\n    at createDescriptors.next (<anonymous>)\n    at createPresetDescriptors (/home/silvio/Dokumente/GitHub/React/markdown-notes-app/node_modules/@babel/core/lib/config/config-descriptors.js:134:17)\n    at createPresetDescriptors.next (<anonymous>)\n    at /home/silvio/Dokumente/GitHub/React/markdown-notes-app/node_modules/@babel/core/lib/config/config-descriptors.js:86:32\n    at Generator.next (<anonymous>)\n    at Function.<anonymous> (/home/silvio/Dokumente/GitHub/React/markdown-notes-app/node_modules/@babel/core/lib/gensync-utils/async.js:25:3)\n    at Generator.next (<anonymous>)\n    at evaluateSync (/home/silvio/Dokumente/GitHub/React/markdown-notes-app/node_modules/gensync/index.js:251:28)\n    at Function.sync (/home/silvio/Dokumente/GitHub/React/markdown-notes-app/node_modules/gensync/index.js:89:14)\n    at sync (/home/silvio/Dokumente/GitHub/React/markdown-notes-app/node_modules/@babel/core/lib/gensync-utils/async.js:68:25)\n    at sync (/home/silvio/Dokumente/GitHub/React/markdown-notes-app/node_modules/gensync/index.js:182:19)\n    at onFirstPause (/home/silvio/Dokumente/GitHub/React/markdown-notes-app/node_modules/gensync/index.js:210:24)\n    at Generator.next (<anonymous>)\n    at cachedFunction (/home/silvio/Dokumente/GitHub/React/markdown-notes-app/node_modules/@babel/core/lib/config/caching.js:66:46)\n    at cachedFunction.next (<anonymous>)\n    at mergeChainOpts (/home/silvio/Dokumente/GitHub/React/markdown-notes-app/node_modules/@babel/core/lib/config/config-chain.js:420:34)\n    at mergeChainOpts.next (<anonymous>)\n    at /home/silvio/Dokumente/GitHub/React/markdown-notes-app/node_modules/@babel/core/lib/config/config-chain.js:378:14\n    at Generator.next (<anonymous>)\n    at buildRootChain (/home/silvio/Dokumente/GitHub/React/markdown-notes-app/node_modules/@babel/core/lib/config/config-chain.js:71:36)\n    at buildRootChain.next (<anonymous>)");

/***/ })
/******/ ]);