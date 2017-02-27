//property initializer shorthand
function createObj({name = "hnchen", age = 18} = {}){
	return {
		name,
		age
	}
}
console.log(createObj());//{"name": "hnchen", "age": 18}
console.log(createObj({name: "zhang"}));//{"name": "zhang", "age": 18}
console.log(createObj({age: 20}));//{"name": "hnchen", "age": 20}
console.log(createObj({name: "huang", age: 28}));//{"name": "huang", "age": 28}

//concise methods
let person = {
	name: "Nicholas Zakas",
	sayName () {
		console.log(this.name);
	}
};
person.sayName()//Nicholas Zakas

//computed property names
let lastName = "last name";
let person1 = {
	"first name": "Nicholas",
	[lastName]: "Zakas"
};
console.log(person1["first name"]);//Nicholas
console.log(person1[lastName]);//Zakas

let suffix = " name";
let person2 = {
	["first" + suffix]: "Nicholas",
	["last" + suffix]: "Zakas"
};
console.log(person2["first" + suffix]);//Nicholas
console.log(person2["last" + suffix]);//Zakas

//new methods
//Object.is
console.log(Object.is(5, "5"));//false
console.log(Object.is(5, 5));//true
console.log(Object.is(NaN, NaN));//true
console.log(Object.is(+0, -0));//false
//Object.assign
function EventTarget(){}
Object.assign(EventTarget.prototype, {
	emit () {
		console.log("call emit");
	},
	on () {
		console.log("call on");
	}
});
var myObject = {};
Object.assign(myObject, EventTarget.prototype);
myObject.on();//call on
myObject.emit();//call emit

var receiver = {};
Object.assign(receiver, {
	type: "js",
	name: "file.js"
}, {
	type: "css"
});
console.log(receiver);//{"type": "css", "name": "file.js"}

let receiver1 = {},
	supplier = {
		get name () {
			return "file.js"
		}
	};
Object.assign(receiver1, supplier);
let descriptor = Object.getOwnPropertyDescriptor(receiver1, "name");
console.log(descriptor.value);
console.log(typeof descriptor.get);

//duplicate Object literal properties
(function(){
	"use strict";
	let person = {
		name: "Nicholas",
		name: "Greg"
	};
	console.log(person.name);
})();

//enhancements for Prototypes
let person3 = {
	getGreeting () {
		return "Hello";
	}
};
let dog = {
	getGreeting () {
		return "Woof";
	}
};
let friend = Object.create(person3);
console.log(friend.getGreeting());//hello
console.log(Object.getPrototypeOf(friend) === person3);//true
Object.setPrototypeOf(friend, dog);
console.log(friend.getGreeting());//Woof
console.log(Object.getPrototypeOf(friend) === dog);//true


let friend1 = {
	getGreeting () {
		return super.getGreeting() + ", hi!";
	}
};
let person4 = {
	getGreeting () {
		return "Hello";
	}
};
Object.setPrototypeOf(friend1, person4);
console.log(friend1.getGreeting());





