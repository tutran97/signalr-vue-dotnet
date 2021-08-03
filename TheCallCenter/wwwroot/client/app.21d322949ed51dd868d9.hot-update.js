webpackHotUpdate("app",{

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ \"./src/router.js\");\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Store({\n  strict: true,\n  state: {\n    calls: [],\n    error: ''\n  },\n  mutations: {\n    setError: function setError(state, msg) {\n      state.error = msg;\n      if (msg) console.log(\"Error: \".concat(msg));\n    },\n    setCalls: function setCalls(state, calls) {\n      state.calls = calls;\n    },\n    removeCall: function removeCall(state, call) {\n      state.calls = state.calls.filter(function (c) {\n        return c !== call;\n      });\n    },\n    addCall: function addCall(state, call) {\n      state.calls.push(call);\n    }\n  },\n  actions: {\n    load: function load(_ref) {\n      var commit = _ref.commit;\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:5000/api/calls').then(function (res) {\n        console.log('load-reponsive', res);\n        var calls = res.data;\n        commit('setCalls', calls);\n      }).catch(function () {\n        return commit('setError', 'Failed to load the calls...tu');\n      });\n    },\n    answer: function answer(_ref2, call) {\n      var commit = _ref2.commit;\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch(\"/api/calls/\".concat(call.id, \"/answer\")).then(function () {\n        commit('removeCall', call);\n        _router__WEBPACK_IMPORTED_MODULE_3__[\"default\"].push('/');\n      }).catch(function () {\n        return commit('setError', 'Failed to mark it as answered');\n      });\n    }\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUuanM/YzBkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVyJ1xuXG5WdWUudXNlKFZ1ZXgpXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcbiAgc3RyaWN0OiB0cnVlLFxuICBzdGF0ZToge1xuICAgIGNhbGxzOiBbXSxcbiAgICBlcnJvcjogJycsXG4gIH0sXG4gIG11dGF0aW9uczoge1xuICAgIHNldEVycm9yKHN0YXRlLCBtc2cpIHtcbiAgICAgIHN0YXRlLmVycm9yID0gbXNnXG4gICAgICBpZiAobXNnKSBjb25zb2xlLmxvZyhgRXJyb3I6ICR7bXNnfWApXG4gICAgfSxcbiAgICBzZXRDYWxscyhzdGF0ZSwgY2FsbHMpIHtcbiAgICAgIHN0YXRlLmNhbGxzID0gY2FsbHNcbiAgICB9LFxuICAgIHJlbW92ZUNhbGwoc3RhdGUsIGNhbGwpIHtcbiAgICAgIHN0YXRlLmNhbGxzID0gc3RhdGUuY2FsbHMuZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHJldHVybiBjICE9PSBjYWxsXG4gICAgICB9KVxuICAgIH0sXG4gICAgYWRkQ2FsbChzdGF0ZSwgY2FsbCkge1xuICAgICAgc3RhdGUuY2FsbHMucHVzaChjYWxsKVxuICAgIH0sXG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICBsb2FkKHsgY29tbWl0IH0pIHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvY2FsbHMnKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2xvYWQtcmVwb25zaXZlJywgcmVzKVxuICAgICAgICAgIGxldCBjYWxscyA9IHJlcy5kYXRhXG4gICAgICAgICAgY29tbWl0KCdzZXRDYWxscycsIGNhbGxzKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4gY29tbWl0KCdzZXRFcnJvcicsICdGYWlsZWQgdG8gbG9hZCB0aGUgY2FsbHMuLi50dScpKVxuICAgIH0sXG4gICAgYW5zd2VyKHsgY29tbWl0IH0sIGNhbGwpIHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5wYXRjaChgL2FwaS9jYWxscy8ke2NhbGwuaWR9L2Fuc3dlcmApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb21taXQoJ3JlbW92ZUNhbGwnLCBjYWxsKVxuICAgICAgICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IGNvbW1pdCgnc2V0RXJyb3InLCAnRmFpbGVkIHRvIG1hcmsgaXQgYXMgYW5zd2VyZWQnKSlcbiAgICB9LFxuICB9LFxufSlcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQW5CQTtBQXZCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store.js\n");

/***/ })

})