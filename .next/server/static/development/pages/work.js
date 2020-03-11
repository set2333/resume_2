module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/App.jsx":
/*!****************************!*\
  !*** ./Components/App.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu/Menu */ "./Components/Menu/Menu.jsx");
/* harmony import */ var _Contents_getContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contents/getContent */ "./Components/Contents/getContent.jsx");
var _jsxFileName = "/home/set/Projects/resume_2/Components/App.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const App = ({
  content
}) => {
  const Content = Object(_Contents_getContent__WEBPACK_IMPORTED_MODULE_3__["default"])(content);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    id: "main",
    className: "jsx-1094597559",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx(Content, {
    className: "jsx-1094597559",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1094597559",
    __self: undefined
  }, "@import url('https://fonts.googleapis.com/css?family=Alegreya:400,700|Bad+Script&display=swap');*{box-sizing:border-box;}html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1.2;}table{border-collapse:collapse;border-spacing:0;}ol{padding-left:1.4em;list-style:decimal;}ul{padding-left:0;list-style:square;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}.content,.photo,.message,.buttonOk,.form_message,.upPage,.downPage{border:1px solid black;border-radius:5px;box-shadow:3px 3px 5px black;}html{font-family:'Alegreya',serif;line-height:30px;font-size:20px;}p{margin-top:10px;margin-bottom:10px;font-size:16px;}h1{margin-top:50px;font-size:28px;}h2{font-size:20px;}#main{width:960px;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NldC9Qcm9qZWN0cy9yZXN1bWVfMi9Db21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWVMsQUFFMEcsQUFHdkUsQUFtRmIsQUFrQkssQUFJRSxBQUlTLEFBS04sQUFLSixBQU1ILEFBT0QsQUFjWSxBQU1PLEFBTWQsQUFNQSxBQUtELEFBSUgsU0F6RkYsRUFpREcsQ0FQZixBQWdEZ0IsRUF4RWhCLENBa0JvQixBQWtEcEIsQ0FoRUEsQUFxRHFCLEFBTUosR0FoRk4sQUE4QlUsR0FsSHJCLENBa0pvQixDQWJwQixDQXhCbUIsQ0FpRW5CLEVBekZpQixDQW1FRSxFQWFuQixFQTdDQSxFQXVDaUIsR0E1Q2pCLEdBZ0MrQixDQXJDL0IsQ0F4QjBCLEdBbUVULElBT2pCLFdBTkEsTUFuRUEsR0E2REEiLCJmaWxlIjoiL2hvbWUvc2V0L1Byb2plY3RzL3Jlc3VtZV8yL0NvbXBvbmVudHMvQXBwLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZW51IGZyb20gJy4vTWVudS9NZW51JztcbmltcG9ydCBnZXRDb250ZW50IGZyb20gJy4vQ29udGVudHMvZ2V0Q29udGVudCc7XG5cbmNvbnN0IEFwcCA9ICh7IGNvbnRlbnQgfSkgPT4ge1xuICBjb25zdCBDb250ZW50ID0gZ2V0Q29udGVudChjb250ZW50KTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBpZD1cIm1haW5cIj5cbiAgICAgICAgPE1lbnUgLz5cbiAgICAgICAgPENvbnRlbnQgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbGVncmV5YTo0MDAsNzAwfEJhZCtTY3JpcHQmZGlzcGxheT1zd2FwJyk7XG4gICAgICAgICAgLyog0YHQsdGA0L7RgSDRgdGC0LjQu9C10Lkg0LHRgNCw0YPQt9C10YDQsCAqL1xuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBodG1sLFxuICAgICAgICAgIGJvZHksXG4gICAgICAgICAgZGl2LFxuICAgICAgICAgIHNwYW4sXG4gICAgICAgICAgb2JqZWN0LFxuICAgICAgICAgIGlmcmFtZSxcbiAgICAgICAgICBoMSxcbiAgICAgICAgICBoMixcbiAgICAgICAgICBoMyxcbiAgICAgICAgICBoNCxcbiAgICAgICAgICBoNSxcbiAgICAgICAgICBoNixcbiAgICAgICAgICBwLFxuICAgICAgICAgIGJsb2NrcXVvdGUsXG4gICAgICAgICAgcHJlLFxuICAgICAgICAgIGEsXG4gICAgICAgICAgYWJicixcbiAgICAgICAgICBhY3JvbnltLFxuICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgYmlnLFxuICAgICAgICAgIGNpdGUsXG4gICAgICAgICAgY29kZSxcbiAgICAgICAgICBkZWwsXG4gICAgICAgICAgZGZuLFxuICAgICAgICAgIGVtLFxuICAgICAgICAgIGltZyxcbiAgICAgICAgICBpbnMsXG4gICAgICAgICAga2JkLFxuICAgICAgICAgIHEsXG4gICAgICAgICAgcyxcbiAgICAgICAgICBzYW1wLFxuICAgICAgICAgIHNtYWxsLFxuICAgICAgICAgIHN0cmlrZSxcbiAgICAgICAgICBzdHJvbmcsXG4gICAgICAgICAgc3ViLFxuICAgICAgICAgIHN1cCxcbiAgICAgICAgICB0dCxcbiAgICAgICAgICB2YXIsXG4gICAgICAgICAgYixcbiAgICAgICAgICB1LFxuICAgICAgICAgIGksXG4gICAgICAgICAgY2VudGVyLFxuICAgICAgICAgIGRsLFxuICAgICAgICAgIGR0LFxuICAgICAgICAgIGRkLFxuICAgICAgICAgIG9sLFxuICAgICAgICAgIHVsLFxuICAgICAgICAgIGxpLFxuICAgICAgICAgIGZpZWxkc2V0LFxuICAgICAgICAgIGZvcm0sXG4gICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgbGVnZW5kLFxuICAgICAgICAgIHRhYmxlLFxuICAgICAgICAgIGNhcHRpb24sXG4gICAgICAgICAgdGJvZHksXG4gICAgICAgICAgdGZvb3QsXG4gICAgICAgICAgdGhlYWQsXG4gICAgICAgICAgdHIsXG4gICAgICAgICAgdGgsXG4gICAgICAgICAgdGQsXG4gICAgICAgICAgYXJ0aWNsZSxcbiAgICAgICAgICBhc2lkZSxcbiAgICAgICAgICBjYW52YXMsXG4gICAgICAgICAgZGV0YWlscyxcbiAgICAgICAgICBlbWJlZCxcbiAgICAgICAgICBmaWd1cmUsXG4gICAgICAgICAgZmlnY2FwdGlvbixcbiAgICAgICAgICBmb290ZXIsXG4gICAgICAgICAgaGVhZGVyLFxuICAgICAgICAgIGhncm91cCxcbiAgICAgICAgICBtZW51LFxuICAgICAgICAgIG5hdixcbiAgICAgICAgICBvdXRwdXQsXG4gICAgICAgICAgcnVieSxcbiAgICAgICAgICBzZWN0aW9uLFxuICAgICAgICAgIHN1bW1hcnksXG4gICAgICAgICAgdGltZSxcbiAgICAgICAgICBtYXJrLFxuICAgICAgICAgIGF1ZGlvLFxuICAgICAgICAgIHZpZGVvIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXJ0aWNsZSxcbiAgICAgICAgICBhc2lkZSxcbiAgICAgICAgICBkZXRhaWxzLFxuICAgICAgICAgIGZpZ2NhcHRpb24sXG4gICAgICAgICAgZmlndXJlLFxuICAgICAgICAgIGZvb3RlcixcbiAgICAgICAgICBoZWFkZXIsXG4gICAgICAgICAgaGdyb3VwLFxuICAgICAgICAgIG1lbnUsXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvbCB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuNGVtO1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogZGVjaW1hbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBzcXVhcmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYmxvY2txdW90ZSxcbiAgICAgICAgICBxIHtcbiAgICAgICAgICAgIHF1b3Rlczogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBibG9ja3F1b3RlOmJlZm9yZSxcbiAgICAgICAgICBibG9ja3F1b3RlOmFmdGVyLFxuICAgICAgICAgIHE6YmVmb3JlLFxuICAgICAgICAgIHE6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBjb250ZW50OiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qINC60L7QvdC10YYg0LrQvtC00LAg0YHQsdGA0L7RgdCwINGB0YLQuNC70LXQuSDQsdGA0LDRg9C30LXRgNCwICovXG4gICAgICAgICAgLyrQmtC70LDRgdGB0Ysg0YEg0L7QtNC40L3QsNC60L7QstGL0LzQuCDRgNCw0LzQutCw0LzQuCDQuCDRgtC10L3RjNGOKi9cblxuICAgICAgICAgIC5jb250ZW50LFxuICAgICAgICAgIC5waG90byxcbiAgICAgICAgICAubWVzc2FnZSxcbiAgICAgICAgICAuYnV0dG9uT2ssXG4gICAgICAgICAgLmZvcm1fbWVzc2FnZSxcbiAgICAgICAgICAudXBQYWdlLFxuICAgICAgICAgIC5kb3duUGFnZSB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IGJsYWNrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBbGVncmV5YScsIHNlcmlmO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjbWFpbiB7XG4gICAgICAgICAgICB3aWR0aDogOTYwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19 */\n/*@ sourceURL=/home/set/Projects/resume_2/Components/App.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./Components/Contents/ContentWork.jsx":
/*!*********************************************!*\
  !*** ./Components/Contents/ContentWork.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OtherComponents_ListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OtherComponents/ListItem */ "./Components/OtherComponents/ListItem.jsx");
var _jsxFileName = "/home/set/Projects/resume_2/Components/Contents/ContentWork.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ContentWork = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "\u041E \u0440\u0430\u0431\u043E\u0442\u0435"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "\u041D\u0430\u0447\u043D\u0443, \u043F\u043E\u0436\u0430\u043B\u0443\u0439, \u0441\u043E \u0441\u0442\u0435\u043A\u0430 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439. \u0415\u0433\u043E \u044F \u0440\u0430\u0437\u043E\u0431\u044C\u044E \u043D\u0430 \u0442\u0440\u0438 \u0441\u043F\u0438\u0441\u043A\u0430. \u0412 \u043F\u0435\u0440\u0432\u043E\u043C \u0431\u0443\u0434\u0443\u0442 \u0442\u0435 \u044F\u0437\u044B\u043A\u0438 \u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B \u0432 \u0441\u0432\u043E\u0435\u0439 \u0440\u0430\u0431\u043E\u0447\u0435\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438. \u0412\u043E \u0432\u0442\u043E\u0440\u043E\u043C \u0442\u0435, \u0441 \u043A\u043E\u0442\u043E\u0440\u044B\u043C\u0438 \u044F \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u043B\u0441\u044F \u043F\u0440\u043E\u0441\u0442\u043E \u0438\u0437 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0430. \u0412 \u0442\u0440\u0435\u0442\u044C\u0435\u043C \u043F\u043B\u0430\u043D\u044B \u043D\u0430 \u0431\u0443\u0434\u0443\u0449\u0435\u0435."), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438"), __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx(_OtherComponents_ListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "JavaScript (Node.js, React, jQuery)")), __jsx(_OtherComponents_ListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "HTML")), __jsx(_OtherComponents_ListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "CSS")), __jsx(_OtherComponents_ListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "Java"), ' ', "(\u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u043B \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u043E\u0434 Android)"), __jsx(_OtherComponents_ListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, "SQL (PostGree, MySQL)")), __jsx(_OtherComponents_ListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, "MongoDB")), __jsx(_OtherComponents_ListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, "1\u0421 \u041F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0435 7.7"), ' ', "(\u0433\u043E\u0434\u044B \u0436\u0438\u0437\u043D\u0438)"), __jsx(_OtherComponents_ListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, "1\u0421 \u041F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0435 8"), ' ', "(\u043C\u043D\u043E\u0433\u0438\u0435-\u043C\u043D\u043E\u0433\u0438\u0435 \u0433\u043E\u0434\u044B \u0436\u0438\u0437\u043D\u0438)")), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438"), __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, __jsx(_OtherComponents_ListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, "PHP"), ' ', "(\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B \u0434\u043B\u044F \u043E\u0434\u043D\u043E\u0433\u043E \u0441\u0430\u0439\u0442\u0430 \u043D\u0430 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u043C \u0443\u0440\u043E\u0432\u043D\u0435)"), __jsx(_OtherComponents_ListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, "C++"), ' ', "(\u043D\u0430 \u043D\u0435\u043C \u0438\u0437\u0443\u0447\u0430\u043B \u041E\u041E\u041F)"), __jsx(_OtherComponents_ListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, "Basic"), ' ', "(\u044D\u0442\u043E \u0435\u0449\u0451 \u0432 \u0448\u043A\u043E\u043B\u0435)"), __jsx(_OtherComponents_ListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, "Delphi"), ' ', "(\u0432 \u0441\u0432\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0437\u043D\u0430\u0442\u043D\u043E \u043F\u043E\u0445\u0443\u043B\u0438\u0433\u0430\u043D\u0438\u043B)"), __jsx(_OtherComponents_ListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}, "MQL"), ' ', "(\u043F\u0440\u0438\u0445\u043E\u0434\u0438\u043B\u043E\u0441\u044C \u043F\u0438\u0441\u0430\u0442\u044C \u0431\u043E\u0442\u043E\u0432 \u0434\u043B\u044F Forex-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B\u043E\u0432)"), __jsx(_OtherComponents_ListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}, "Assembler"), ' ', "(\u0443\u0437\u043D\u0430\u0432\u0430\u043B \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u044B \u0440\u0430\u0431\u043E\u0442\u044B \u041F\u041A)")), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
}, "\u0412 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u043F\u043B\u0430\u043D\u0430\u0445"), __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
}, __jsx(_OtherComponents_ListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
}, "Python")), __jsx(_OtherComponents_ListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
}, "Vue.js")), __jsx(_OtherComponents_ListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
}, "Angular"))), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}, "\u0422\u0435\u043F\u0435\u0440\u044C \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u043B\u0438\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0442\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435. \u0422\u0430\u043A \u043A\u0430\u043A \u0443 \u043C\u0435\u043D\u044F \u043D\u0435\u0442 \u043D\u0430 \u0440\u0443\u043A\u0430\u0445 \u0442\u0440\u0443\u0434\u043E\u0432\u043E\u0439 \u043A\u043D\u0438\u0436\u043A\u0438, \u0442\u043E \u0432\u0441\u0435 \u0434\u0430\u0442\u044B \u0431\u0443\u0434\u0443\u0442 \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u044B\u043C\u0438."), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94
  },
  __self: undefined
}, "\u0418\u0442\u0430\u043A. \u041D\u0430\u0447\u0430\u043B\u0430\u0441\u044C \u043C\u043E\u044F \u0418\u0422-\u043A\u0430\u0440\u044C\u0435\u0440\u0430 \u0432 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u043E\u0434 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\u043C \u041F\u043E\u0447\u0442\u0430 \u0420\u043E\u0441\u0441\u0438\u0438. \u042D\u0442\u043E \u0431\u044B\u043B\u043E \u0432 \u043F\u0435\u0440\u0438\u043E\u0434 \u0441 \u043C\u0430\u044F 2007\u0433. \u043F\u043E \u0430\u0432\u0433\u0443\u0441\u0442 2008\u0433."), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98
  },
  __self: undefined
}, "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0435\u0439 \u0431\u044B\u043B\u043E \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B WinPost, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u0438 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u044B \u0432 \u043E\u0442\u0434\u0435\u043B\u0435\u043D\u0438\u044F\u0445 \u043F\u043E\u0447\u0442\u043E\u0432\u043E\u0439 \u0441\u0432\u044F\u0437\u0438. \u0422\u0430\u043C \u044F \u043F\u0438\u0441\u0430\u043B \u0441\u0432\u043E\u0438 \u043F\u0435\u0440\u0432\u044B\u0435 SQL-\u0441\u043A\u0440\u0438\u043F\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u043B\u0438 \u0431\u044B\u0441\u0442\u0440\u043E \u0438 \u0431\u0435\u0437 \u043E\u0448\u0438\u0431\u043E\u043A \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0435 \u0440\u0430\u0431\u043E\u0447\u0438\u0435 \u043C\u0435\u0441\u0442\u0430."), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103
  },
  __self: undefined
}, "\u0421 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 2008\u0433. \u043F\u043E \u0444\u0435\u0432\u0440\u0430\u043B\u044C 2009\u0433. \u044F \u0440\u0430\u0431\u043E\u0442\u0430\u043B \u0432 \u041A\u044B\u0437\u044B\u043B\u0441\u043A\u043E\u0439 \u0422\u042D\u0426 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u043E\u043D\u0442\u0451\u0440\u043E\u043C \u0420\u0417\u0410. \u041D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u0441 \u0418\u0422 \u0440\u0430\u0431\u043E\u0442\u0430 \u0441\u0432\u044F\u0437\u0430\u043D\u0430 \u043D\u0435 \u0431\u044B\u043B\u0430, \u043D\u043E \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0443\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0432 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043F\u043E\u0436\u0430\u0440\u043E\u0442\u0443\u0448\u0435\u043D\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0431\u044B\u043B\u0430 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u0430."), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108
  },
  __self: undefined
}, "\u0414\u0430\u043B\u0435\u0435, \u0441 \u0444\u0435\u0432\u0440\u0430\u043B\u044F 2009\u0433. \u0438 \u043F\u043E \u0434\u0435\u043A\u0430\u0431\u0440\u044C 2011\u0433. \u044F \u0442\u0440\u0443\u0434\u0438\u043B\u0441\u044F \u043D\u0430 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u0430 \u0432 \u0422\u0443\u0432\u0438\u043D\u0441\u043A\u043E\u0439 \u0433\u043E\u0440\u043D\u043E\u0440\u0443\u0434\u043D\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438. \u0412 \u043D\u0430\u0447\u0430\u043B\u0435 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u043E\u0439 \u0431\u044B\u043B\u0430 1\u0421 \u041F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 7.7. \u041F\u043E\u0437\u0436\u0435 \u043F\u0435\u0440\u0435\u0448\u043B\u0438 \u043D\u0430 \u0432\u0435\u0440\u0441\u0438\u044E 8. \u0417\u0434\u0435\u0441\u044C \u043C\u043D\u0435 \u0434\u043E\u0432\u0435\u043B\u043E\u0441\u044C \u0430\u043A\u0442\u0438\u0432\u043D\u043E \u043F\u043E\u0443\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0432 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u044F. \u042F \u043F\u0438\u0441\u0430\u043B \u043C\u043E\u0434\u0443\u043B\u0438 \u0434\u043B\u044F \u0440\u0430\u0441\u0447\u0451\u0442\u0430 \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u044B \u0431\u0435\u043B\u0430\u0437\u0438\u0441\u0442\u043E\u0432 \u0438 \u0431\u0443\u043B\u044C\u0434\u043E\u0437\u0435\u0440\u0438\u0441\u0442\u043E\u0432. \u041D\u0430\u043F\u0438\u0441\u0430\u043B \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0443\u044E \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E \u0434\u043B\u044F \u0443\u0447\u0435\u0442\u0430 \u0445\u043E\u0434\u043E\u043A, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0437\u0430\u043C\u0435\u043D\u0438\u043B\u0430 \u043E\u0447\u0435\u043D\u044C \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0438 \u0441\u0442\u0440\u0430\u0448\u043D\u044B\u0439 excel-\u0444\u0430\u0439\u043B. \u0423\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u043B \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0445 \u0432\u0435\u0441\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0437\u0430\u0432\u0435\u0448\u0438\u0432\u0430\u044E\u0442 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438. \u0422\u0430\u043A \u0436\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u043B \u0438\u0445 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044E \u0441 1\u0421. \u0421\u043E\u0437\u0434\u0430\u0432\u0430\u043B \u043C\u043E\u0434\u0443\u043B\u044C \u0443\u0447\u0435\u0442\u0430 \u043F\u0440\u0438\u0431\u044B\u0432\u0448\u0435\u0433\u043E \u043D\u0430 \u043F\u043E\u0433\u0440\u0443\u0437\u043A\u0443 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430, \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0432\u0441\u0435 \u0442\u043E\u0439 \u0436\u0435 1\u0421 \u0438 \u0441\u043A\u0430\u043D\u0435\u0440\u0430 \u0448\u0442\u0440\u0438\u0445 \u043A\u043E\u0434\u043E\u0432."), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118
  },
  __self: undefined
}, "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u043C\u043E\u0438\u043C \u0440\u0430\u0431\u043E\u0447\u0438\u043C \u043C\u0435\u0441\u0442\u043E\u043C \u0431\u044B\u043B \u041E\u041E\u041E \u0410\u043B\u044C\u044F\u043D\u0441 (\u0441 \u044F\u043D\u0432\u0430\u0440\u044F 2012\u0433. \u043F\u043E \u0434\u0435\u043A\u0430\u0431\u0440\u044C 2013\u0433.). \u042D\u0442\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F - \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0430\u0440\u0442\u043D\u0435\u0440 1\u0421. \u0422\u0430\u043C \u0432\u0441\u044F \u043C\u043E\u044F \u0440\u0430\u0431\u043E\u0442\u0430 \u0431\u044B\u043B\u0430 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u0430 \u0441 \u044D\u0442\u043E\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u043E\u0439. \u041D\u0430\u0447\u0438\u043D\u0430\u044F \u043E\u0442 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0439, \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u043E\u0439 \u043E\u0442\u0447\u0435\u0442\u043E\u0432 \u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043E\u043A \u043F\u043E\u0434 \u043D\u0443\u0436\u0434\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432. \u041D\u0443 \u0438, \u043A\u043E\u043D\u0435\u0447\u043D\u043E \u0436\u0435, \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438, \u0445\u043E\u0442\u044F \u044D\u0442\u043E \u0443\u0436\u0435 \u043D\u0435 \u0441\u0442\u043E\u043B\u044C\u043A\u043E \u0418\u0422-\u0448\u043D\u044B\u0435 \u043D\u0430\u0432\u044B\u043A\u0438, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u0438\u0435."), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 125
  },
  __self: undefined
}, "\u0421 \u044F\u043D\u0432\u0430\u0440\u044F 2014\u0433. \u0438 \u043F\u043E \u043C\u0430\u0439 2017\u0433. \u044F \u0440\u0430\u0431\u043E\u0442\u0430\u043B \u0432 \u041E\u041E\u041E \u041B\u0430\u0438\u043C. \u041D\u0435\u0431\u043E\u043B\u044C\u0448\u0430\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F, \u0437\u0430\u043D\u0438\u043C\u0430\u0432\u0448\u0430\u044F\u0441\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u043E\u0439 \u0447\u0435\u0433\u043E \u0443\u0433\u043E\u0434\u043D\u043E. \u041C\u044B \u0434\u0435\u043B\u0430\u043B\u0438 \u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u043E\u0431\u043E\u0440\u043E\u0442\u0430, \u043D\u0430 \u0431\u0430\u0437\u0435 \u0432\u0441\u0435 \u0442\u043E\u0439 \u0436\u0435 1\u0421. \u041F\u0438\u0441\u0430\u043B\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u043E\u0434 Android \u043D\u0430 Java. \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043B\u0438 Forex-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B\u044B. \u041F\u0438\u0441\u0430\u043B\u0438 \u0438\u0433\u0440\u044B \u043D\u0430 GameMaker. \u0420\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u043B\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0443\u0447\u0435\u0442\u0430 \u0442\u043E\u043F\u043B\u0438\u0432\u0430 \u043D\u0430 \u0434\u0438\u0437\u0435\u043B\u044C\u043D\u044B\u0445 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u044F\u0445 \u0432 \u043E\u0442\u0434\u0430\u043B\u0435\u043D\u043D\u044B\u0445 \u0440\u0430\u0439\u043E\u043D\u0430\u0445 \u0440\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0438 (\u0441\u043C\u0435\u0441\u044C 1\u0421, JavaScript, Node.js).\u042D\u0442\u043E \u0431\u044B\u043B, \u043D\u0430\u0432\u0435\u0440\u043D\u043E\u0435, \u0441\u0430\u043C\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0439 \u044D\u0442\u0430\u043F \u043C\u043E\u0435\u0439 \u043A\u0430\u0440\u044C\u0435\u0440\u044B. \u0422\u0430\u043C \u044F \u043F\u043E\u043B\u0443\u0447\u0438\u043B \u043D\u0430\u0432\u044B\u043A\u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B. \u0423\u0437\u043D\u0430\u043B \u043A\u0443\u0447\u0443 \u043D\u043E\u0432\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439. \u041D\u0430\u043A\u043E\u043D\u0435\u0446-\u0442\u043E \u043F\u043E\u043D\u044F\u043B \u0432\u0441\u044E \u0441\u0443\u0442\u044C \u041E\u041E\u041F. \u041D\u043E \u043F\u043E \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430\u043C \u043F\u0440\u0438\u0448\u043B\u043E\u0441\u044C \u043C\u0435\u043D\u044F\u0442\u044C \u043C\u0435\u0441\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u044B."), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 134
  },
  __self: undefined
}, "\u0421 \u043C\u0430\u044F 2017\u0433. \u0438 \u043F\u043E \u0441\u0435\u0433\u043E\u0434\u043D\u044F\u0448\u043D\u0438\u0439 \u0434\u0435\u043D\u044C \u044F \u0440\u0430\u0431\u043E\u0442\u0430\u044E \u0432 \u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u041A\u0430\u0430-\u0425\u0435\u043C\u0441\u043A\u043E\u0433\u043E \u043A\u043E\u0436\u0443\u043D\u0430. \u042D\u0442\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u0431\u0443\u0445\u0443\u0447\u0435\u0442\u043E\u043C \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E 30 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439. \u0422\u043E \u0435\u0441\u0442\u044C \u043F\u0440\u043E\u0441\u0442\u043E\u0440 \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438. \u041C\u043D\u043E\u0433\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u0443\u0436\u0435 \u0440\u0435\u0448\u0435\u043D\u044B, \u043D\u043E \u0438\u043C\u0435\u0435\u0442\u0441\u044F \u043A\u0443\u0447\u0430 \u044D\u043D\u0438\u043A\u0435\u0439\u0441\u043A\u0438\u0445 \u0444\u0443\u043D\u043A\u0446\u0438\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043E\u0442\u043D\u0438\u043C\u0430\u044E\u0442 \u043A\u0443\u0447\u0443 \u0432\u0440\u0435\u043C\u0435\u043D\u0438. \u0425\u043E\u0442\u0435\u043B\u043E\u0441\u044C \u0431\u044B \u043E\u0442\u043E\u0439\u0442\u0438 \u043E\u0442 \u044D\u0442\u043E\u0433\u043E, \u0432\u0435\u0434\u044C \u044F \u0443\u0432\u0435\u0440\u0435\u043D, \u0447\u0442\u043E \u043C\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B \u0431\u0443\u0434\u0435\u0442, \u043C\u044F\u0433\u043A\u043E \u0433\u043E\u0432\u043E\u0440\u044F, \u043F\u043E\u0432\u044B\u0448\u0435, \u0447\u0435\u043C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043A\u043B\u044E\u0447\u0435\u0439 \u042D\u0426\u041F \u0438 \u0437\u0430\u043C\u0435\u043D\u0430 \u0431\u0443\u043C\u0430\u0433\u0438 \u0432 \u043F\u0440\u0438\u043D\u0442\u0435\u0440\u0435."), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 141
  },
  __self: undefined
}, "\u0413\u043E\u0434\u0430 \u0441 2010, \u043F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u044C\u043D\u043E \u0441 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E, \u0437\u0430\u043D\u0438\u043C\u0430\u043B\u0441\u044F \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435\u043C \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439 \u0432 \u0447\u0430\u0441\u0442\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435. \u041D\u0430\u043F\u0438\u0441\u0430\u043B \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0439 \u043D\u0430 \u0432\u0441\u0435 \u0442\u043E\u0439 \u0436\u0435 1\u0421 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043B \u0443\u0447\u0435\u0442 \u0432 \u043B\u043E\u043C\u0431\u0430\u0440\u0434\u0435). \u0421\u043E\u0432\u0441\u0435\u043C \u043D\u0435\u043C\u043D\u043E\u0436\u043A\u043E \u043F\u043E\u0443\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u043B \u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E \u0441\u0438\u0441\u0442\u0435\u043C\u044B (\u043F\u0440\u043E\u0435\u043A\u0442 \u043D\u0430 C#, \u043A\u0441\u0442\u0430\u0442\u0438, \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u0432 \u0440\u0435\u0433\u0438\u043E\u043D\u0435, \u043D\u0435 \u043D\u0430 1\u0421), \u043D\u043E \u0438\u0437-\u0437\u0430 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0445 \u0440\u0430\u0437\u043D\u043E\u0433\u043B\u0430\u0441\u0438\u0439 \u0432 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u0435, \u043F\u0440\u043E\u0435\u043A\u0442 \u043F\u0440\u0438\u0448\u043B\u043E\u0441\u044C \u043F\u043E\u043A\u0438\u043D\u0443\u0442\u044C."), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 148
  },
  __self: undefined
}, "\u0411\u044B\u043B\u043E \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0432\u043E\u0438\u0445 \u0441\u0430\u0439\u0442\u043E\u0432. \u0425\u043E\u0442\u0435\u043B \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043D\u0430 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u043D\u043E\u0439 \u0440\u0435\u043A\u043B\u0430\u043C\u0435. \u0414\u043E\u0445\u043E\u0434 \u0431\u044B\u043B, \u043D\u043E \u043D\u0430\u0441\u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439, \u0447\u0442\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u043F\u0440\u0438\u0448\u043B\u043E\u0441\u044C \u0441\u0432\u0435\u0440\u043D\u0443\u0442\u044C."));

/* harmony default export */ __webpack_exports__["default"] = (ContentWork);

/***/ }),

/***/ "./Components/Contents/getContent.jsx":
/*!********************************************!*\
  !*** ./Components/Contents/getContent.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/set/Projects/resume_2/Components/Contents/getContent.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const getContent = WrappedComponent => () => __jsx("div", {
  className: "jsx-1448682820" + " " + "content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx(WrappedComponent, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1448682820",
  __self: undefined
}, ".content.jsx-1448682820{float:right;width:720px;text-align:center;margin-top:25px;padding:20px;min-height:95vh;border-top:none;background:url(images/note.svg) repeat-x top left / 36px auto,url(images/cel.svg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NldC9Qcm9qZWN0cy9yZXN1bWVfMi9Db21wb25lbnRzL0NvbnRlbnRzL2dldENvbnRlbnQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlPLEFBR3VCLFlBQ0EsWUFDTSxrQkFDRixnQkFDSCxhQUNHLGdCQUNBLGdCQUNtRSxrRkFDckYiLCJmaWxlIjoiL2hvbWUvc2V0L1Byb2plY3RzL3Jlc3VtZV8yL0NvbXBvbmVudHMvQ29udGVudHMvZ2V0Q29udGVudC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRDb250ZW50ID0gKFdyYXBwZWRDb21wb25lbnQpID0+ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgPFdyYXBwZWRDb21wb25lbnQgLz5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICB3aWR0aDogNzIwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA5NXZoO1xuICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKGltYWdlcy9ub3RlLnN2ZykgcmVwZWF0LXggdG9wIGxlZnQgLyAzNnB4IGF1dG8sIHVybChpbWFnZXMvY2VsLnN2Zyk7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRDb250ZW50O1xuIl19 */\n/*@ sourceURL=/home/set/Projects/resume_2/Components/Contents/getContent.jsx */"));

/* harmony default export */ __webpack_exports__["default"] = (getContent);

/***/ }),

/***/ "./Components/Menu/Menu.jsx":
/*!**********************************!*\
  !*** ./Components/Menu/Menu.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuButton */ "./Components/Menu/MenuButton.jsx");
var _jsxFileName = "/home/set/Projects/resume_2/Components/Menu/Menu.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Menu = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("nav", {
  className: "jsx-1101390918",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("ul", {
  className: "jsx-1101390918",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(_MenuButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
  label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
  path: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx(_MenuButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
  label: "\u041E \u0440\u0430\u0431\u043E\u0442\u0435",
  path: "/work",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx(_MenuButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
  label: "\u041E \u0436\u0438\u0437\u043D\u0438",
  path: "/live",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx(_MenuButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
  label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
  path: "/contacts",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1101390918",
  __self: undefined
}, "nav.jsx-1101390918{width:240px;position:fixed;display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NldC9Qcm9qZWN0cy9yZXN1bWVfMi9Db21wb25lbnRzL01lbnUvTWVudS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYU8sQUFHdUIsWUFDRyxlQUNELGNBQ2hCIiwiZmlsZSI6Ii9ob21lL3NldC9Qcm9qZWN0cy9yZXN1bWVfMi9Db21wb25lbnRzL01lbnUvTWVudS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVudUJ1dHRvbiBmcm9tICcuL01lbnVCdXR0b24nO1xuXG5jb25zdCBNZW51ID0gKCkgPT4gKFxuICA8PlxuICAgIDxuYXY+XG4gICAgICA8dWw+XG4gICAgICAgIDxNZW51QnV0dG9uIGxhYmVsPVwi0JPQu9Cw0LLQvdCw0Y9cIiBwYXRoPVwiL1wiIC8+XG4gICAgICAgIDxNZW51QnV0dG9uIGxhYmVsPVwi0J4g0YDQsNCx0L7RgtC1XCIgcGF0aD1cIi93b3JrXCIgLz5cbiAgICAgICAgPE1lbnVCdXR0b24gbGFiZWw9XCLQniDQttC40LfQvdC4XCIgcGF0aD1cIi9saXZlXCIgLz5cbiAgICAgICAgPE1lbnVCdXR0b24gbGFiZWw9XCLQmtC+0L3RgtCw0LrRgtGLXCIgcGF0aD1cIi9jb250YWN0c1wiIC8+XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICBuYXYge1xuICAgICAgICAgIHdpZHRoOiAyNDBweDtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIl19 */\n/*@ sourceURL=/home/set/Projects/resume_2/Components/Menu/Menu.jsx */"));

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./Components/Menu/MenuButton.jsx":
/*!****************************************!*\
  !*** ./Components/Menu/MenuButton.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/set/Projects/resume_2/Components/Menu/MenuButton.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const MenuButton = ({
  label,
  path
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3400270498" + " " + `nav_button ${path === router.pathname ? 'acent' : ''}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("li", {
    key: label,
    className: "jsx-3400270498",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("a", {
    href: path,
    className: "jsx-3400270498",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, label)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3400270498",
    __self: undefined
  }, ".nav_button.jsx-3400270498{font-family:'Bad Script',cursive;font-size:16px;padding:10px;padding-top:40px;text-align:center;list-style-type:none;height:150px;background-image:url(images/Button.svg);background-repeat:no-repeat;background-position:center;background-size:contain;}.nav_button.jsx-3400270498:hover{font-size:20px;}.acent.jsx-3400270498{background-image:url(images/Button_acent.svg);}.nav_button.jsx-3400270498 a.jsx-3400270498{font-weight:bold;color:black;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NldC9Qcm9qZWN0cy9yZXN1bWVfMi9Db21wb25lbnRzL01lbnUvTWVudUJ1dHRvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JTLEFBRytDLEFBY25CLEFBSStCLEFBSTdCLGVBUG5CLEVBUWMsWUFDUyxJQXZCTixhQWtCakIsRUFqQmUsYUFDSSxpQkFDQyxDQXFCcEIsaUJBcEJ1QixxQkFDUixhQUMyQix3Q0FDWiw0QkFDRCwyQkFDSCx3QkFDMUIiLCJmaWxlIjoiL2hvbWUvc2V0L1Byb2plY3RzL3Jlc3VtZV8yL0NvbXBvbmVudHMvTWVudS9NZW51QnV0dG9uLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBNZW51QnV0dG9uID0gKHsgbGFiZWwsIHBhdGggfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXZfYnV0dG9uICR7cGF0aCA9PT0gcm91dGVyLnBhdGhuYW1lID8gJ2FjZW50JyA6ICcnfWB9PlxuICAgICAgICA8bGkga2V5PXtsYWJlbH0+XG4gICAgICAgICAgPExpbmsgaHJlZj17cGF0aH0+XG4gICAgICAgICAgICA8YSBocmVmPXtwYXRofT57bGFiZWx9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAubmF2X2J1dHRvbiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0JhZCBTY3JpcHQnLCBjdXJzaXZlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvQnV0dG9uLnN2Zyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXZfYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYWNlbnQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGltYWdlcy9CdXR0b25fYWNlbnQuc3ZnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2X2J1dHRvbiBhIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5NZW51QnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8vIHBhdGhuYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5NZW51QnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGFiZWw6ICcnLFxuICBwYXRoOiAnLycsXG4gIC8vIHBhdGhuYW1lOiBcIi9cIlxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudUJ1dHRvbjtcbiJdfQ== */\n/*@ sourceURL=/home/set/Projects/resume_2/Components/Menu/MenuButton.jsx */"));
};

MenuButton.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  path: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string // pathname: PropTypes.string

};
MenuButton.defaultProps = {
  label: '',
  path: '/' // pathname: "/"

};
/* harmony default export */ __webpack_exports__["default"] = (MenuButton);

/***/ }),

/***/ "./Components/OtherComponents/ListItem.jsx":
/*!*************************************************!*\
  !*** ./Components/OtherComponents/ListItem.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/set/Projects/resume_2/Components/OtherComponents/ListItem.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const ListItem = ({
  children
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
  className: "jsx-1141748101",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1141748101",
  __self: undefined
}, "li.jsx-1141748101{list-style:none;background:url(images/marker.svg) no-repeat left / contain;text-align:left;padding-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NldC9Qcm9qZWN0cy9yZXN1bWVfMi9Db21wb25lbnRzL090aGVyQ29tcG9uZW50cy9MaXN0SXRlbS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTU8sQUFHMkIsZ0JBQzJDLDJEQUMzQyxnQkFDRSxrQkFDcEIiLCJmaWxlIjoiL2hvbWUvc2V0L1Byb2plY3RzL3Jlc3VtZV8yL0NvbXBvbmVudHMvT3RoZXJDb21wb25lbnRzL0xpc3RJdGVtLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IExpc3RJdGVtID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8PlxuICAgIDxsaT57Y2hpbGRyZW59PC9saT5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgbGkge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKGltYWdlcy9tYXJrZXIuc3ZnKSBuby1yZXBlYXQgbGVmdCAvIGNvbnRhaW47XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC8+XG4pO1xuXG5MaXN0SXRlbS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbkxpc3RJdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW07XG4iXX0= */\n/*@ sourceURL=/home/set/Projects/resume_2/Components/OtherComponents/ListItem.jsx */"));

ListItem.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};
ListItem.defaultProps = {
  children: ''
};
/* harmony default export */ __webpack_exports__["default"] = (ListItem);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/work.jsx":
/*!************************!*\
  !*** ./pages/work.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/App */ "./Components/App.jsx");
/* harmony import */ var _Components_Contents_ContentWork__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Contents/ContentWork */ "./Components/Contents/ContentWork.jsx");
var _jsxFileName = "/home/set/Projects/resume_2/pages/work.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Index() {
  return __jsx(_Components_App__WEBPACK_IMPORTED_MODULE_1__["default"], {
    content: _Components_Contents_ContentWork__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
}

/***/ }),

/***/ 6:
/*!******************************!*\
  !*** multi ./pages/work.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/set/Projects/resume_2/pages/work.jsx */"./pages/work.jsx");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=work.js.map