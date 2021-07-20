"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notNullOrUndefined = notNullOrUndefined;
exports.isNumber = isNumber;
exports.MaximumValueValidator = exports.MinimumValueValidator = exports.MaxDateValidator = exports.MinDateValidator = exports.EmailValidator = exports.MinLengthValidator = exports.RequiredValidator = exports.MustMatchValidator = exports.NumberValidator = exports.Validator = void 0;

var EmailValidatorObj = _interopRequireWildcard(require("email-validator"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Validator = /*#__PURE__*/function () {
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


  _createClass(Validator, [{
    key: "call",
    value: function call(value) {
      throw new Error('Validator cannot be used directly, it must be overwritten in a subclass');
    }
  }]);

  return Validator;
}();

exports.Validator = Validator;

var NumberValidator = /*#__PURE__*/function (_Validator) {
  _inherits(NumberValidator, _Validator);

  var _super = _createSuper(NumberValidator);

  function NumberValidator() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$message = _ref2.message,
        message = _ref2$message === void 0 ? 'Value must be a number' : _ref2$message,
        _ref2$code = _ref2.code,
        code = _ref2$code === void 0 ? 'invalid' : _ref2$code;

    _classCallCheck(this, NumberValidator);

    return _super.call(this, {
      message: message,
      code: code
    });
  }

  _createClass(NumberValidator, [{
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

  return NumberValidator;
}(Validator);

exports.NumberValidator = NumberValidator;

var MustMatchValidator = /*#__PURE__*/function (_Validator2) {
  _inherits(MustMatchValidator, _Validator2);

  var _super2 = _createSuper(MustMatchValidator);

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

    _this = _super2.call(this, {
      message: message,
      code: code
    });
    _this.matcher = matcher;

    if (form) {
      _this._matchingField = form.field[_this.matcher];
    } else {
      _this._matchingField = null;
    }

    return _this;
  }

  _createClass(MustMatchValidator, [{
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
  }, {
    key: "matchingVal",
    get: function get() {
      return this._matchingField ? this._matchingField.value : null;
    }
  }]);

  return MustMatchValidator;
}(Validator);

exports.MustMatchValidator = MustMatchValidator;

var RequiredValidator = /*#__PURE__*/function (_Validator3) {
  _inherits(RequiredValidator, _Validator3);

  var _super3 = _createSuper(RequiredValidator);

  function RequiredValidator() {
    var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref4$message = _ref4.message,
        message = _ref4$message === void 0 ? 'This is a required field' : _ref4$message,
        _ref4$code = _ref4.code,
        code = _ref4$code === void 0 ? 'required' : _ref4$code;

    _classCallCheck(this, RequiredValidator);

    return _super3.call(this, {
      message: message,
      code: code
    });
  }

  _createClass(RequiredValidator, [{
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

  return RequiredValidator;
}(Validator);

exports.RequiredValidator = RequiredValidator;

var MinLengthValidator = /*#__PURE__*/function (_Validator4) {
  _inherits(MinLengthValidator, _Validator4);

  var _super4 = _createSuper(MinLengthValidator);

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

    _this2 = _super4.call(this, {
      message: message,
      code: code
    });
    _this2.minLength = minLength;
    return _this2;
  }

  _createClass(MinLengthValidator, [{
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

  return MinLengthValidator;
}(Validator);

exports.MinLengthValidator = MinLengthValidator;

var EmailValidator = /*#__PURE__*/function (_Validator5) {
  _inherits(EmailValidator, _Validator5);

  var _super5 = _createSuper(EmailValidator);

  function EmailValidator() {
    var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref6$message = _ref6.message,
        message = _ref6$message === void 0 ? 'Please Enter a Valid Email' : _ref6$message,
        _ref6$code = _ref6.code,
        code = _ref6$code === void 0 ? 'invalidEmail' : _ref6$code;

    _classCallCheck(this, EmailValidator);

    return _super5.call(this, {
      message: message,
      code: code
    });
  }

  _createClass(EmailValidator, [{
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

  return EmailValidator;
}(Validator);

exports.EmailValidator = EmailValidator;
new EmailValidator().call('test@test.com');

var MinDateValidator = /*#__PURE__*/function (_Validator6) {
  _inherits(MinDateValidator, _Validator6);

  var _super6 = _createSuper(MinDateValidator);

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

    _this3 = _super6.call(this, {
      message: message,
      code: code
    });
    _this3.min = min;
    return _this3;
  }

  _createClass(MinDateValidator, [{
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

  return MinDateValidator;
}(Validator);

exports.MinDateValidator = MinDateValidator;

var MaxDateValidator = /*#__PURE__*/function (_Validator7) {
  _inherits(MaxDateValidator, _Validator7);

  var _super7 = _createSuper(MaxDateValidator);

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

    _this4 = _super7.call(this, {
      message: message,
      code: code
    });
    _this4.max = max;
    return _this4;
  }

  _createClass(MaxDateValidator, [{
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

  return MaxDateValidator;
}(Validator);

exports.MaxDateValidator = MaxDateValidator;

var MinimumValueValidator = /*#__PURE__*/function (_Validator8) {
  _inherits(MinimumValueValidator, _Validator8);

  var _super8 = _createSuper(MinimumValueValidator);

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

    _this5 = _super8.call(this, {
      message: message,
      code: code
    });
    _this5.min = min;
    return _this5;
  }

  _createClass(MinimumValueValidator, [{
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

  return MinimumValueValidator;
}(Validator);

exports.MinimumValueValidator = MinimumValueValidator;

var MaximumValueValidator = /*#__PURE__*/function (_Validator9) {
  _inherits(MaximumValueValidator, _Validator9);

  var _super9 = _createSuper(MaximumValueValidator);

  function MaximumValueValidator() {
    var _this6;

    var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref10$message = _ref10.message,
        message = _ref10$message === void 0 ? 'Must meet minimum value' : _ref10$message,
        _ref10$code = _ref10.code,
        code = _ref10$code === void 0 ? 'maxValue' : _ref10$code,
        _ref10$max = _ref10.max,
        max = _ref10$max === void 0 ? 10 : _ref10$max;

    _classCallCheck(this, MaximumValueValidator);

    _this6 = _super9.call(this, {
      message: message,
      code: code
    });
    _this6.max = max;
    return _this6;
  }

  _createClass(MaximumValueValidator, [{
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

  return MaximumValueValidator;
}(Validator);

exports.MaximumValueValidator = MaximumValueValidator;

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