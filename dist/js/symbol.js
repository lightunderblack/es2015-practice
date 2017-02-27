"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//creating Symbols
var firstName = Symbol();
var person = {};

person[firstName] = "Nicholas";
console.log(person[firstName]); //Nicholas

var firstName = Symbol("first name");
var person = {};
person[firstName] = "Nicholas";
console.log("first name" in person);
console.log(person[firstName]); //Nicholas
console.log(firstName);

//using Symbols
var firstName = Symbol("first name");
var person = _defineProperty({}, firstName, "Nicholas");
console.log(person[firstName]); //Nicholas
Object.defineProperty(person, firstName, {
	writable: false
});
var lastName = Symbol("last name");
Object.defineProperties(person, _defineProperty({}, lastName, {
	value: "Zakas",
	writable: false
}));
console.log(person[lastName]); //Zakas

//sharing Symbols
var uid = Symbol.for("uid");
var object = {};
object[uid] = "12345";
console.log(object[uid]); //12345
console.log(uid); //Symbol(uid)

var uid2 = Symbol.for("uid");
console.log(Object.is(uid, uid2)); //true
console.log(object[uid2]); //12345
console.log(uid2); //Symbol(uid)

console.log(Symbol.keyFor(uid)); //uid
console.log(Symbol.keyFor(uid2)); //uid

var uid3 = Symbol("uid");
console.log(Symbol.keyFor(uid3)); //undefined

//Retrieving Symbol Properties
var uid = Symbol.for("uid");
var object = _defineProperty({}, uid, "12345");
var symbols = Object.getOwnPropertySymbols(object);
console.log(symbols.length);
console.log(symbols[0]);
console.log(object[symbols[0]]);
//# sourceMappingURL=symbol.js.map
