"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _person2, _obj;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//property initializer shorthand
function createObj() {
	var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	    _ref$name = _ref.name,
	    name = _ref$name === undefined ? "hnchen" : _ref$name,
	    _ref$age = _ref.age,
	    age = _ref$age === undefined ? 18 : _ref$age;

	return {
		name: name,
		age: age
	};
}
console.log(createObj()); //{"name": "hnchen", "age": 18}
console.log(createObj({ name: "zhang" })); //{"name": "zhang", "age": 18}
console.log(createObj({ age: 20 })); //{"name": "hnchen", "age": 20}
console.log(createObj({ name: "huang", age: 28 })); //{"name": "huang", "age": 28}

//concise methods
var person = {
	name: "Nicholas Zakas",
	sayName: function sayName() {
		console.log(this.name);
	}
};
person.sayName(); //Nicholas Zakas

//computed property names
var lastName = "last name";
var person1 = _defineProperty({
	"first name": "Nicholas"
}, lastName, "Zakas");
console.log(person1["first name"]); //Nicholas
console.log(person1[lastName]); //Zakas

var suffix = " name";
var person2 = (_person2 = {}, _defineProperty(_person2, "first" + suffix, "Nicholas"), _defineProperty(_person2, "last" + suffix, "Zakas"), _person2);
console.log(person2["first" + suffix]); //Nicholas
console.log(person2["last" + suffix]); //Zakas

//new methods
//Object.is
console.log(Object.is(5, "5")); //false
console.log(Object.is(5, 5)); //true
console.log(Object.is(NaN, NaN)); //true
console.log(Object.is(+0, -0)); //false
//Object.assign
function EventTarget() {}
Object.assign(EventTarget.prototype, {
	emit: function emit() {
		console.log("call emit");
	},
	on: function on() {
		console.log("call on");
	}
});
var myObject = {};
Object.assign(myObject, EventTarget.prototype);
myObject.on(); //call on
myObject.emit(); //call emit

var receiver = {};
Object.assign(receiver, {
	type: "js",
	name: "file.js"
}, {
	type: "css"
});
console.log(receiver); //{"type": "css", "name": "file.js"}

var receiver1 = {},
    supplier = {
	get name() {
		return "file.js";
	}
};
Object.assign(receiver1, supplier);
var descriptor = Object.getOwnPropertyDescriptor(receiver1, "name");
console.log(descriptor.value);
console.log(_typeof(descriptor.get));

//duplicate Object literal properties
(function () {
	"use strict";

	var person = _defineProperty({
		name: "Nicholas"
	}, "name", "Greg");
	console.log(person.name);
})();

//enhancements for Prototypes
var person3 = {
	getGreeting: function getGreeting() {
		return "Hello";
	}
};
var dog = {
	getGreeting: function getGreeting() {
		return "Woof";
	}
};
var friend = Object.create(person3);
console.log(friend.getGreeting()); //hello
console.log(Object.getPrototypeOf(friend) === person3); //true
Object.setPrototypeOf(friend, dog);
console.log(friend.getGreeting()); //Woof
console.log(Object.getPrototypeOf(friend) === dog); //true


var friend1 = _obj = {
	getGreeting: function getGreeting() {
		return _get(_obj.__proto__ || Object.getPrototypeOf(_obj), "getGreeting", this).call(this) + ", hi!";
	}
};
var person4 = {
	getGreeting: function getGreeting() {
		return "Hello";
	}
};
Object.setPrototypeOf(friend1, person4);
console.log(friend1.getGreeting());
//# sourceMappingURL=object.js.map
