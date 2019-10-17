// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function gcd(a, b){
	if( a % b === 0){
		return b;
	}
	return gcd(a, b - 1);
}
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
function inc(x){
	return x + 1;
}
function dec(x){
	return x - 1;
}
function sum (x, y){
	return sum(inc(x), dec(y));
}
//you can only add one at each summetion, you'll need to use recursion in this.

