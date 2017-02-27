//Object destructuring
var node = {
	type: "Identifier",
	name: "foo"
};
var {type, name} = node;
console.log(type, name);//Identifier foo

var {type, name, value} = node;
console.log(type, name, value);//Identifier foo undefined

//default value
var {type, name, value = true} = node;
console.log(type, name, value);//Identifier foo true

//assigning to Different Local Variable Names
var {type: localType, name: localName} = node;
console.log(type, name);//Identifier foo
console.log(localType, localName);//Identifier foo

var node = {
	type: "Identifier"
};
var {type: localType, name: localName = "bar"} = node;
console.log(localType, localName);//Identifier bar
console.log(localType, localName);//Identifier bar

//Nested Object Destructuring
var node = {
	type: "Identifier",
	name: "foo",
	loc: {
		start: {
			line: 1,
			column: 1
		},
		end: {
			line: 1,
			column: 4
		}
	}
};
var {loc: {start}} = node;
console.log(start);
var {loc: {start: localStar}} = node;
console.log(localStar);

//Array Destructuring
var colors = ["red", "green", "blue"];
var [fristColor, secondColor] = colors;
console.log(fristColor, secondColor);//red green
var [,,thirdColor] = colors;
console.log(thirdColor);//blue

var colors = ["red", "green", "blue"],
	fristColor = "black",
	secondColor = "purple";
[fristColor, secondColor] = colors;
console.log(fristColor, secondColor);//red green

var a = 1,
	b = 2;
[a, b] = [b, a];
console.log(a, b);//2 1

//Default values
var colors = ["red"];
var [fristColor, secondColor = "green"] = colors;
console.log(fristColor, secondColor);//red green

//Nested Array Destructuring
var colors = ["red", ["green", "lightgreen"], "blue"];
var [fristColor, [secondColor]] = colors;
console.log(fristColor, secondColor);//red green

//Rest Items
var colors = ["red", "green", "blue"];
var [fristColor, ...restColors] = colors;
console.log(fristColor);//red
console.log(restColors.length);//2
console.log(restColors[0]);//green
console.log(restColors[1]);//blue

var colors = ["red", "green", "blue"];
var [...clonedColors] = colors;
console.log(clonedColors);//["red", "green", "blue"]

//Mixed Destructuring
var node = {
	type: "Identifier",
	name: "foo",
	loc: {
		start: {
			line: 1,
			column: 1
		},
		end: {
			line: 1,
			column: 4
		}
	},
	range: [0, 3]
};
var {loc: {start}, range: [startIndex, endIndex]} = node;
console.log(start);//{"line": 1, "column": 1}
console.log(startIndex, endIndex);//0 3