(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-bootstrap"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-bootstrap"], factory);
	else if(typeof exports === 'object')
		exports["ReactWizard"] = factory(require("react"), require("react-bootstrap"));
	else
		root["ReactWizard"] = factory(root["React"], root["ReactBootstrap"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Step = function (_Component) {
  _inherits(Step, _Component);

  function Step(props) {
    _classCallCheck(this, Step);

    var _this = _possibleConstructorReturn(this, (Step.__proto__ || Object.getPrototypeOf(Step)).call(this, props));

    _this.state = {
      advanceDisabled: false,
      retreatDisabled: false
    };
    _this.onBack = _this.onBack.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    _this.onAdvance = _this.onAdvance.bind(_this);
    return _this;
  }

  _createClass(Step, [{
    key: 'onAdvance',
    value: function onAdvance(err) {
      if (err) {
        this.setState({
          advanceDisabled: false,
          retreatDisabled: false,
          currentError: err
        });
      } else {
        this.props.onAdvance();
      }
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit() {
      this.setState({
        advanceDisabled: true,
        retreatDisabled: true
      });
      this.props.onSubmit.apply(this, [this.onAdvance]);
    }
  }, {
    key: 'onBack',
    value: function onBack() {
      if (this.props.onBack) {
        this.props.onBack.apply(this, [this.props.onRetreat]);
      } else {
        this.props.onRetreat();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var AdvanceButton;
      if (!this.props.lastStep) {
        AdvanceButton = _react2.default.createElement(
          _reactBootstrap.Button,
          { onClick: this.onSubmit,
            disabled: this.state.advanceDisabled,
            bsStyle: 'primary' },
          'Onward'
        );
      }

      var RetreatButton;
      if (!this.props.lastStep) {
        RetreatButton = _react2.default.createElement(
          _reactBootstrap.Button,
          { onClick: this.onBack,
            disabled: this.props.firstStep || this.state.retreatDisabled },
          'back'
        );
      }

      var ComponentClass = this.props.component;

      var Error;
      if (this.state.currentError) {
        Error = _react2.default.createElement(
          _reactBootstrap.Alert,
          { bsStyle: 'danger' },
          _react2.default.createElement(
            'p',
            null,
            this.state.currentError.message
          )
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'step' },
        _react2.default.createElement(ComponentClass, { data: this.props.data }),
        _react2.default.createElement(
          _reactBootstrap.ButtonToolbar,
          null,
          RetreatButton,
          AdvanceButton
        ),
        Error
      );
    }
  }]);

  return Step;
}(_react.Component);

exports.default = Step;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(1);

var _step = __webpack_require__(2);

var _step2 = _interopRequireDefault(_step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wizard = function (_Component) {
  _inherits(Wizard, _Component);

  function Wizard(props) {
    _classCallCheck(this, Wizard);

    var _this = _possibleConstructorReturn(this, (Wizard.__proto__ || Object.getPrototypeOf(Wizard)).call(this, props));

    _this.state = {
      currentStep: _this.props.start || 0,
      currentError: null,
      data: _this.props,
      advanceDisabled: false,
      retreatDisabled: false
    };
    return _this;
  }

  _createClass(Wizard, [{
    key: 'advance',
    value: function advance(e) {
      this.setState({
        advanceDisabled: true,
        retreatDisabled: true
      });
    }
  }, {
    key: 'retreat',
    value: function retreat(e) {
      this.setState({
        currentStep: this.state.currentStep - 1
      });
    }
  }, {
    key: 'navigate',
    value: function navigate(e) {
      console.log(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log("render the wizard");

      var items = this.props.steps.map(function (step, idx) {
        return _react2.default.createElement(
          _reactBootstrap.ListGroupItem,
          { key: 'nav' + idx, onClick: _this2.navigate, active: idx === _this2.state.currentStep ? 'active' : '' },
          step.name
        );
      });

      var step = this.props.steps[this.state.currentStep];
      console.dir(step);
      var component = _react2.default.createElement(_step2.default, { key: 'step' + this.state.currentStep,
        onSubmit: step.onSubmit,
        onBack: step.onBack,
        onAdvance: function onAdvance() {
          _this2.setState({
            currentError: null,
            currentStep: _this2.state.currentStep + 1
          });
        },
        onRetreat: function onRetreat() {
          _this2.setState({
            currentError: null,
            currentStep: _this2.state.currentStep - 1
          });
        },
        component: step.component,
        data: this.state.data,
        firstStep: this.state.currentStep === 0,
        lastStep: this.state.currentStep === this.props.steps.length - 1 });
      return _react2.default.createElement(
        'div',
        { className: 'wizard' },
        _react2.default.createElement(
          'div',
          { className: 'wizard-nav col-xs-2' },
          _react2.default.createElement(
            _reactBootstrap.ListGroup,
            null,
            items
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'wizard-content col-xs-4' },
          component
        )
      );
    }
  }]);

  return Wizard;
}(_react.Component);

Wizard.defaultProps = {
  steps: []
};

module.exports = Wizard;

/***/ })
/******/ ]);
});
//# sourceMappingURL=wizard.js.map