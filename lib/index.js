"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Validator = exports.RequiredValidator = exports.NumberValidator = exports.MustMatchValidator = exports.MinimumValueValidator = exports.MinLengthValidator = exports.MinDateValidator = exports.MaximumValueValidator = exports.MaxDateValidator = exports.EmailValidator = void 0;
exports.isNumber = isNumber;
exports.notNullOrUndefined = notNullOrUndefined;
var EmailValidatorObj = _interopRequireWildcard(require("email-validator"));
var _moment = _interopRequireDefault(require("moment"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * @module       validation
 * @description  Helper functions for model field validation.
 *
 * @author  William Huster <william@thinknimble.com> Pari Baker <pari@thinknimble.com> Corey Sutphin corey@thinknimble.com
 */ /**
 * Validator base class that other class-based validators will extend from.
 */
var Validator = exports.Validator = /*#__PURE__*/function () {
  /**
   * Crete an instance of the validator.
   * @param {string} message - The error message to return if validation fails.
   * @param {string} code - The code to return with the thrown Error if validation fails.
   */
  function Validator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? 'Invalid value' : _ref$message,
      _ref$code = _ref.code,
      code = _ref$code === void 0 ? 'invalid' : _ref$code;
    _classCallCheck(this, Validator);
    Object.assign(this, {
      message: message,
      code: code
    });
  }

  /**
   * Perform validation on a given value.
   * @param {string|number|Array|Object} value - The error message to return if validation fails.
   */
  return _createClass(Validator, [{
    key: "call",
    value: function call(value) {
      throw new Error('Validator cannot be used directly, it must be overwritten in a subclass');
    }
  }]);
}();
var NumberValidator = exports.NumberValidator = /*#__PURE__*/function (_Validator) {
  function NumberValidator() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$message = _ref2.message,
      message = _ref2$message === void 0 ? 'Value must be a number' : _ref2$message,
      _ref2$code = _ref2.code,
      code = _ref2$code === void 0 ? 'invalid' : _ref2$code;
    _classCallCheck(this, NumberValidator);
    return _callSuper(this, NumberValidator, [{
      message: message,
      code: code
    }]);
  }
  _inherits(NumberValidator, _Validator);
  return _createClass(NumberValidator, [{
    key: "call",
    value: function call(value) {
      if (!value || !value.length || !Number.isInteger(parseFloat(value))) {
        throw new Error(JSON.stringify({
          code: this.code,
          message: this.message
        }));
      }
    }
  }]);
}(Validator);
var MustMatchValidator = exports.MustMatchValidator = /*#__PURE__*/function (_Validator2) {
  function MustMatchValidator() {
    var _this;
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref3$message = _ref3.message,
      message = _ref3$message === void 0 ? 'Value must match' : _ref3$message,
      _ref3$code = _ref3.code,
      code = _ref3$code === void 0 ? 'mustMatch' : _ref3$code,
      _ref3$matcher = _ref3.matcher,
      matcher = _ref3$matcher === void 0 ? null : _ref3$matcher,
      _ref3$form = _ref3.form,
      form = _ref3$form === void 0 ? null : _ref3$form;
    _classCallCheck(this, MustMatchValidator);
    _this = _callSuper(this, MustMatchValidator, [{
      message: message,
      code: code
    }]);
    _this.matcher = matcher;
    if (form) {
      _this._matchingField = form.field[_this.matcher];
    } else {
      _this._matchingField = null;
    }
    return _this;
  }
  _inherits(MustMatchValidator, _Validator2);
  return _createClass(MustMatchValidator, [{
    key: "matchingVal",
    get: function get() {
      return this._matchingField ? this._matchingField.value : null;
    }
  }, {
    key: "call",
    value: function call(value) {
      //this.matchingVal = extraArgs
      if (this.matchingVal !== value) {
        throw new Error(JSON.stringify({
          code: this.code,
          message: this.message
        }));
      }
    }
  }]);
}(Validator);
var RequiredValidator = exports.RequiredValidator = /*#__PURE__*/function (_Validator3) {
  function RequiredValidator() {
    var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref4$message = _ref4.message,
      message = _ref4$message === void 0 ? 'This is a required field' : _ref4$message,
      _ref4$code = _ref4.code,
      code = _ref4$code === void 0 ? 'required' : _ref4$code;
    _classCallCheck(this, RequiredValidator);
    return _callSuper(this, RequiredValidator, [{
      message: message,
      code: code
    }]);
  }
  _inherits(RequiredValidator, _Validator3);
  return _createClass(RequiredValidator, [{
    key: "call",
    value: function call(value) {
      if (!value) {
        throw new Error(JSON.stringify({
          code: this.code,
          message: this.message
        }));
      } else if (value) {
        if (Array.isArray(value) && !value.length) {
          throw new Error(JSON.stringify({
            code: this.code,
            message: this.message
          }));
        } else if (!value.toString().length) {
          throw new Error(JSON.stringify({
            code: this.code,
            message: this.message
          }));
        }
      }
    }
  }]);
}(Validator);
var MinLengthValidator = exports.MinLengthValidator = /*#__PURE__*/function (_Validator4) {
  function MinLengthValidator() {
    var _this2;
    var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref5$message = _ref5.message,
      message = _ref5$message === void 0 ? 'Must meet minimum length requirements' : _ref5$message,
      _ref5$code = _ref5.code,
      code = _ref5$code === void 0 ? 'minLength' : _ref5$code,
      _ref5$minLength = _ref5.minLength,
      minLength = _ref5$minLength === void 0 ? 10 : _ref5$minLength;
    _classCallCheck(this, MinLengthValidator);
    _this2 = _callSuper(this, MinLengthValidator, [{
      message: message,
      code: code
    }]);
    _this2.minLength = minLength;
    return _this2;
  }
  _inherits(MinLengthValidator, _Validator4);
  return _createClass(MinLengthValidator, [{
    key: "call",
    value: function call(value) {
      new RequiredValidator({
        message: this.message,
        code: this.code
      }).call(value);
      if (!value || value.toString().length < this.minLength) {
        throw new Error(JSON.stringify({
          code: this.code,
          message: this.message
        }));
      }
    }
  }]);
}(Validator);
var EmailValidator = exports.EmailValidator = /*#__PURE__*/function (_Validator5) {
  function EmailValidator() {
    var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref6$message = _ref6.message,
      message = _ref6$message === void 0 ? 'Please Enter a Valid Email' : _ref6$message,
      _ref6$code = _ref6.code,
      code = _ref6$code === void 0 ? 'invalidEmail' : _ref6$code;
    _classCallCheck(this, EmailValidator);
    return _callSuper(this, EmailValidator, [{
      message: message,
      code: code
    }]);
  }
  _inherits(EmailValidator, _Validator5);
  return _createClass(EmailValidator, [{
    key: "call",
    value: function call(value) {
      try {
        var res = EmailValidatorObj.validate(value);
        if (!res) {
          throw new Error(JSON.stringify({
            code: this.code,
            message: this.message
          }));
        }
      } catch (_unused) {
        throw new Error(JSON.stringify({
          code: this.code,
          message: this.message
        }));
      }
    }
  }]);
}(Validator);
new EmailValidator().call('test@test.com');
var MinDateValidator = exports.MinDateValidator = /*#__PURE__*/function (_Validator6) {
  function MinDateValidator() {
    var _this3;
    var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref7$message = _ref7.message,
      message = _ref7$message === void 0 ? 'Must meet minimum date' : _ref7$message,
      _ref7$code = _ref7.code,
      code = _ref7$code === void 0 ? 'minDate' : _ref7$code,
      _ref7$min = _ref7.min,
      min = _ref7$min === void 0 ? (0, _moment["default"])() : _ref7$min;
    _classCallCheck(this, MinDateValidator);
    _this3 = _callSuper(this, MinDateValidator, [{
      message: message,
      code: code
    }]);
    _this3.min = min;
    return _this3;
  }
  _inherits(MinDateValidator, _Validator6);
  return _createClass(MinDateValidator, [{
    key: "call",
    value: function call(value) {
      if (!value) {
        throw new Error(JSON.stringify({
          code: this.code,
          message: "Please enter a valid date"
        }));
      }
      try {
        (0, _moment["default"])(this.min);
      } catch (e) {
        console.log(e);
        throw new Error(JSON.stringify({
          code: this.code,
          message: 'Please enter a valid Date for the minimum'
        }));
      }
      try {
        (0, _moment["default"])(value);
      } catch (e) {
        throw new Error(JSON.stringify({
          code: this.code,
          message: 'Please enter a valid Date'
        }));
      }
      if ((0, _moment["default"])(value).isBefore((0, _moment["default"])(this.min), 'day')) {
        throw new Error(JSON.stringify({
          code: this.code,
          message: "Please enter a date greater than ".concat((0, _moment["default"])(this.min).format('MM-DD-YYYY'))
        }));
      }
    }
  }]);
}(Validator);
var MaxDateValidator = exports.MaxDateValidator = /*#__PURE__*/function (_Validator7) {
  function MaxDateValidator() {
    var _this4;
    var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref8$message = _ref8.message,
      message = _ref8$message === void 0 ? 'Must meet minimum date' : _ref8$message,
      _ref8$code = _ref8.code,
      code = _ref8$code === void 0 ? 'maxDate' : _ref8$code,
      _ref8$max = _ref8.max,
      max = _ref8$max === void 0 ? (0, _moment["default"])() : _ref8$max;
    _classCallCheck(this, MaxDateValidator);
    _this4 = _callSuper(this, MaxDateValidator, [{
      message: message,
      code: code
    }]);
    _this4.max = max;
    return _this4;
  }
  _inherits(MaxDateValidator, _Validator7);
  return _createClass(MaxDateValidator, [{
    key: "call",
    value: function call(value) {
      if (!value) {
        throw new Error(JSON.stringify({
          code: this.code,
          message: "Please enter a valid date"
        }));
      }
      try {
        (0, _moment["default"])(this.max);
      } catch (e) {
        throw new Error(JSON.stringify({
          code: this.code,
          message: 'Please enter a valid Date for the minimum'
        }));
      }
      try {
        (0, _moment["default"])(value);
      } catch (e) {
        throw new Error(JSON.stringify({
          code: this.code,
          message: 'Please enter a valid Date'
        }));
      }
      if ((0, _moment["default"])(value).isAfter((0, _moment["default"])(this.max), 'day')) {
        throw new Error(JSON.stringify({
          code: this.code,
          message: "Please enter a date greater than ".concat((0, _moment["default"])(this.max).format('MM-DD-YYYY'))
        }));
      }
    }
  }]);
}(Validator);
var MinimumValueValidator = exports.MinimumValueValidator = /*#__PURE__*/function (_Validator8) {
  function MinimumValueValidator() {
    var _this5;
    var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref9$message = _ref9.message,
      message = _ref9$message === void 0 ? 'Must meet minimum value' : _ref9$message,
      _ref9$code = _ref9.code,
      code = _ref9$code === void 0 ? 'minValue' : _ref9$code,
      _ref9$min = _ref9.min,
      min = _ref9$min === void 0 ? 0 : _ref9$min;
    _classCallCheck(this, MinimumValueValidator);
    _this5 = _callSuper(this, MinimumValueValidator, [{
      message: message,
      code: code
    }]);
    _this5.min = min;
    return _this5;
  }
  _inherits(MinimumValueValidator, _Validator8);
  return _createClass(MinimumValueValidator, [{
    key: "call",
    value: function call(value) {
      if (!value || !Number.isInteger(parseFloat(value))) {
        throw new Error(JSON.stringify({
          code: this.code,
          message: 'Please enter a valid Number'
        }));
      } else {
        if (value < this.min) {
          throw new Error(JSON.stringify({
            code: this.code,
            message: this.message
          }));
        }
      }
    }
  }]);
}(Validator);
var MaximumValueValidator = exports.MaximumValueValidator = /*#__PURE__*/function (_Validator9) {
  function MaximumValueValidator() {
    var _this6;
    var _ref0 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref0$message = _ref0.message,
      message = _ref0$message === void 0 ? 'Must meet minimum value' : _ref0$message,
      _ref0$code = _ref0.code,
      code = _ref0$code === void 0 ? 'maxValue' : _ref0$code,
      _ref0$max = _ref0.max,
      max = _ref0$max === void 0 ? 10 : _ref0$max;
    _classCallCheck(this, MaximumValueValidator);
    _this6 = _callSuper(this, MaximumValueValidator, [{
      message: message,
      code: code
    }]);
    _this6.max = max;
    return _this6;
  }
  _inherits(MaximumValueValidator, _Validator9);
  return _createClass(MaximumValueValidator, [{
    key: "call",
    value: function call(value) {
      if (!value || !Number.isInteger(parseFloat(value))) {
        throw new Error(JSON.stringify({
          code: this.code,
          message: 'Please enter a valid Number'
        }));
      } else {
        if (value > this.max) {
          throw new Error(JSON.stringify({
            code: this.code,
            message: this.message
          }));
        }
      }
    }
  }]);
}(Validator);
function notNullOrUndefined(value) {
  return value !== null && typeof value !== 'undefined';
}
function isNumber() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Value must be a number';
  return function (value) {
    if (!Number.isInteger(value)) {
      throw new Error(message);
    }
  };
}