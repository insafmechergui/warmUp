/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */
//check if the number 1 existe in string 
//if existe we take 1 + next number aas a whole number => 16
//we take the first number and compare it to the next one / 
//if first number > then next => max = first number /
//if first number < min => min = first number /

//return array.push(min, max);

function mysteryRange(string, size) {
  
  let array = Array.from(string);
  let min = array[0];
  let max = array[0];
  array.length = size;

  let tab = [];
  
  if(size > 100){
    return "the maximum size is 100";
  } 
  
  for(var i = 0; i < array.length; i++){
    if(array[i] === 1){
     return array[i] += array[i + 1];
    }
    if(array[i] > 100 || array[i] < 0){
        return "the numbers should be between 0 and 100";
    }

    if(array[i]< min ){
      min = array[i];
    }

    if(array[i] > max){
      max = array[i];
    }
   
  }

  tab.push(min,max);
   return tab;

}

//if array[i]= 1 => array[i] = array[i+1]