// Exemplo 1
var a = 2;
console.log(a);
function myFuncionName() {
	console.log(a);
	var a = 3;
	console.log(a);
}
myFuncionName();

// Exemplo 2
function getValue() {
	function returnValue() {
		return 1;
	}
	return returnValue();
	function returnValue() {
		return 2;
	}
}
var res = getValue();
console.log(res);

// Exemplo 3
function getValue() {
	var returnValue = function() {
		return 1;
	}
	return returnValue();
	var returnValue = function() {
		return 2;
	}
}
var res = getValue();
console.log(res);
