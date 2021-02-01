"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Modern code including const, arrow function, rest parameter, template string and classes.
var sum = function sum() {
  for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  var total = nums.reduce(function (accumulator, element) {
    accumulator += element;
    return accumulator;
  }, 0);
  return total;
};

console.log("2 + 8 + 22 + 5 + 11 = ".concat(sum(2, 8, 22, 5, 11))); // Class syntax

var User = /*#__PURE__*/function () {
  function User(name, age) {
    _classCallCheck(this, User);

    this.name = name;
    this.age = age;
  }

  _createClass(User, [{
    key: "greet",
    value: function greet() {
      console.log("Hi my name is ".concat(this.name, ", I'm ").concat(this.age, " years old."));
    }
  }]);

  return User;
}();

var user = new User('Himani', 18);
user.greet();
