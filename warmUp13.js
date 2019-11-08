/* 1. Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

        Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

        Example:

            ; // should return 21

        Help:

            Symbol    Value
            I          1
            V          5
            X          10
            L          50
            C          100
            D          500
            M          1,000 
    


    2. Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
        Examples:

        toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

        toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
    
    3. In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
        Example

            filter_list([1,2,'a','b']) == [1,2]
            filter_list([1,'a','b',0,15]) == [1,0,15]
            filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

//1
function Roman(number) {
	var array = number.split('');
	var sum = 0;
	for(var i = 0; i < array.length; i++) {
		if(array[i] = 'I'){
			sum += 1
		}
		else if(array[i] = 'V'){
			sum += 5;
		}
		else if(array[i] = 'X') {
			sum += 10;
		}
		else if(array[i] = 'L') {
			sum += 50;
		}
		else if(array[i] = 'C'){
			sum += 100
		}
		else if(array[i] = 'D'){
			sum += 500;
		}
		else if(array[i] = 'M') {
			sum += 1.000;
		}
	}
	return sum;

}
//////
function Roman(roman) {
	var sum = 0; 
	var array = roman.split('');
	for (var i = 0; i < array.length; i++) {
		switch (array[i]) {
			case 'I':
			sum += 1;
			break;
			
			case 'V':
			sum += 5;
			break;
			
			case 'X':
			sum += 10;
			break;
			
			case 'L':
			sum += 50;
			break;
			
			case 'C':
			sum += 100;
			break;

			case 'D':
			sum += 500;
			break;

			case 'M':
			sum += 1.000;
			break;
		}
	}
		return sum;
}

//2
function searchUnderscore(string) {
	var arrayString = string.split('');
	
	for(var i = 0; i < arrayString.length; i++){
		if(arrayString.includes('-') || arrayString.includes('_')){
			 arrayString.slice(i, 1);
		}
	}
}

//3
function filter_list(array) {
	return array.filter(function(element){
		return element > 0 || typeof(element) === 'number';
	});
}