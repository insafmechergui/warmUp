


// You are given an input string.

// For each symbol in the string if it's the first character occurence, 
//replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"

//for string.length
//compare i by i+1

function charOccurrence(string) {
var str = 0;
var tab = [];
	for (var i = 0; i < string.length;i++) {
		for (var j = 0; j < string.length;j++) {
			if(string[i] === string[j]){

				str = string[i]+1;
			console.log(string[i])


            }
}
    }
}