// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"

function reverseStr(string) {
	var tab = [];
	var alphabet = string.split('');
	var i = 0;
	while(i < alphabet.length){
		tab.unshift(alphabet[i] );
		tab[i]
		i++;
	}

//	 tab.join(""); 
    var anything = "";
    var j = 1;
while(j < tab.length ){
		anything += tab[j - 1] + j
		j++;
	}
anything += tab[tab.length - 1];
return anything;
}


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example : i ['hi','hello','welcome','hy'] == > ["hi","hy"]
// 				 	j	['hi','hello','welcome','hy']				
function sameLength(array) {
	var tab = [];
	//var firstIndex = array[0];
	
	for(var i =0; i < array.length; i++){
		var count = 0;
		for(var j =0; j< array.length; j++){
			if(array[i].length === array[j].length ){
				count++;
			}
		}
		if(count >= 2){
		    
			tab.push(array[i]);
		}
	}
	return tab;
}