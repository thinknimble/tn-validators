"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notNullOrUndefined = notNullOrUndefined;
exports.isNumber = isNumber;
exports.EmailValidator = exports.MinLengthValidator = exports.RequiredValidator = exports.MustMatchValidator = exports.NumberValidator = exports.Validator = void 0;

var EmailValidatorObj = _interopRequireWildcard(require("email-validator"));

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
      if (!Number.isInteger(value)) {
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
        matcher = _ref3$matcher === void 0 ? null : _ref3$matcher;

    _classCallCheck(this, MustMatchValidator);

    _this = _super2.call(this, {
      message: message,
      code: code
    });
    _this._matcher = matcher;
    return _this;
  }

  _createClass(MustMatchValidator, [{
    key: "call",
    value: function call(value) {
      //this.matchingVal = extraArgs
      if (this.matchingVal && this.matchingVal !== value) {
        throw new Error(JSON.stringify({
          code: this.code,
          message: this.message
        }));
      }
    }
  }, {
    key: "matchingVal",
    get: function get() {
      return this._matcher.value;
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
      if (!value || !value.toString().length) {
        throw new Error(JSON.stringify({
          code: this.code,
          message: this.message
        }));
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
      if (!value || value.length < this.minLength) {
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