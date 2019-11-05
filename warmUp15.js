// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .
/*
function reverseStr(string) {
	var array = string.split(' ');
	var tab = [];
	for (var i =0; i < array.length; i++) {
		tab.unshift(array[i]);
	}
	return tab.join(" ");
}

*/
function reverseStr(string) {
	var str="";
	for (var i = string.length-1; i >= 0; i--) {
		str+= string[i];
	}
	return str;
}

///