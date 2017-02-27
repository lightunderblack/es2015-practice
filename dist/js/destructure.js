"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//Object destructuring
var node = {
	type: "Identifier",
	name: "foo"
};
var type = node.type,
    name = node.name;

console.log(type, name); //Identifier foo

var type = node.type,
    name = node.name,
    value = node.value;

console.log(type, name, value); //Identifier foo undefined

//default value
var type = node.type,
    name = node.name,
    _node$value = node.value,
    value = _node$value === undefined ? true : _node$value;

console.log(type, name, value); //Identifier foo true

//assigning to Different Local Variable Names
var localType = node.type,
    localName = node.name;

console.log(type, name); //Identifier foo
console.log(localType, localName); //Identifier foo

var node = {
	type: "Identifier"
};
var localType = node.type,
    _node$name = node.name,
    localName = _node$name === undefined ? "bar" : _node$name;

console.log(localType, localName); //Identifier bar
console.log(localType, localName); //Identifier bar

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
var start = node.loc.start;

console.log(start);
var localStar = node.loc.start;

console.log(localStar);

//Array Destructuring
var colors = ["red", "green", "blue"];
var fristColor = colors[0],
    secondColor = colors[1];

console.log(fristColor, secondColor); //red green
var thirdColor = colors[2];

console.log(thirdColor); //blue

var colors = ["red", "green", "blue"],
    fristColor = "black",
    secondColor = "purple";
fristColor = colors[0];
secondColor = colors[1];

console.log(fristColor, secondColor); //red green

var a = 1,
    b = 2;
var _ref = [b, a];
a = _ref[0];
b = _ref[1];

console.log(a, b); //2 1

//Default values
var colors = ["red"];
var fristColor = colors[0],
    _colors$ = colors[1],
    secondColor = _colors$ === undefined ? "green" : _colors$;

console.log(fristColor, secondColor); //red green

//Nested Array Destructuring
var colors = ["red", ["green", "lightgreen"], "blue"];

var fristColor = colors[0],
    _colors$2 = _slicedToArray(colors[1], 1),
    secondColor = _colors$2[0];

console.log(fristColor, secondColor); //red green

//Rest Items
var colors = ["red", "green", "blue"];
var fristColor = colors[0],
    restColors = colors.slice(1);

console.log(fristColor); //red
console.log(restColors.length); //2
console.log(restColors[0]); //green
console.log(restColors[1]); //blue

var colors = ["red", "green", "blue"];
var clonedColors = colors.slice(0);

console.log(clonedColors); //["red", "green", "blue"]

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

var start = node.loc.start,
    _node$range = _slicedToArray(node.range, 2),
    startIndex = _node$range[0],
    endIndex = _node$range[1];

console.log(start); //{"line": 1, "column": 1}
console.log(startIndex, endIndex); //0 3
//# sourceMappingURL=destructure.js.map
