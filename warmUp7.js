// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here
var firstName = "Ons";
var lastName = "Rahmani";
var fullName = firstName + " " + lastName;

function multiply(){
	if(13 % 3 === 0){
		return "13 is a multiplier of 3";
	}
	return "it's not";
}

function averageAge() {
	var array = [13,14,13,15,16,17,19,13,16,15];
	var total = 0;
	for(var i = 0; i < array.length ; i++){
		total += array[i];
	}
	return total / array.length;
}

function calculateAge() {
	var age = 26;
	var total = 0;
	total = age * 354 * 24 * 60 * 60 + " " + "seconds";
	return total;
}