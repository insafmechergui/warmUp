 // 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n 
 //starting from 0, e.g.:
 mult(3); // => 6
 mult(4); // => 24
function mult(n) {
	 // your code is here
	 var product = 1;
	 for( var i = 0; i <= n ; i++){
	 	if(i = 0){
	 		return 1
	 	}
	 	product *= i;
	 }

	 return product;
}
// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number. 
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...
function string(n){
	var str = '';
	var i = 1;
	while(i < n){
		var j = i + 1;
		str += i + '' + j;
		i++;
	}
	return str + j
}