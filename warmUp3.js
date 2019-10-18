// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 
var females = ["hania", "houda", "ons", "insaf", "fooz"];
var males = ["hamza", "ali", "mahdi", "hammam", "hashem"];
var instructor = ["tamara", "youssef", "saif", "mat", "omar"];
// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
 
function middleArray(array) {
 	var element;

 	for(var i = 0; i < array.length; i++){

 		if(array.length % 2 !== 0){
 			var index = Math.floor((array.length / 2) - 1)+1;
 			element = array[index];
 		} 
		else if (array.length % 2 === 0){
		    index=Math.floor((array.length / 2) - 1);
			element = array[index];
		}
	}		
	return element;
}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function multiply(array){

	for(var i = 0; i < array.length; i++){

		if(i % 2 === 0 && typeof array[i] === "number"){
			array[i] = array[i] * 2;
		}

	}

	return array;
} 


