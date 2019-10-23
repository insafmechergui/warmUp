// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
function classMate(name, age, town, sexe, grade){
    return {
        name: name,
        age: age,
        town: town,
        sexe: sexe,
        grade: grade
    }
}
////
var classMate1 = classMate("Ahmed", 28, "Tunis", "male", "university");
var classMate2 = classMate("ALi", 29, "Tunis", "male", "high school");
var classMate3 = classMate("Ahlem", 24, "Libya", "female", "university");
////
var array = [];
array.push(classMate1);
array.push(classMate2);
array.push(classMate3);
////
function displayFriend(mate) {
    return mate;
}
////
function addFriend(mate) {
    return array.push(mate);
}
/////
function nbOfMale(array) {
            var count = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i]["sexe"] === "male"){
            count++;
        }
    }
    return count;
}
//////
function searchMates(array, query){
    for(var i = 0; i < array.length; i++){
        if(query === array[i].name){
            return "match";
        }

    }
    return "not match";
}