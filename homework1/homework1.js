// Write a function below with the name "pow" that accepts 2 arguments and returns the
// result of the first argument raised to the power of the second argument.
// For example: if argument1 = 2 and argument2 = 8, the function should return 2^8.
function pow(argument1, argument2){
  return Math.pow(argument1, argument2);
}

//>Brian: Good work.

//---------------------------------------------------

// Fill in the function body below, which accepts an array as an argument.
// The function should:
// * loop through the array
// * if, while looping through the array, we encounter a non-numeric
//   value, we should return a boolean, false.
// * If all the values are numbers, return true.
function numberArrayValidator(arr) {
  for(let x = 0; int<arr.length; int++){
    if(typeof(arr[x])!="number"){
      return false;
    }
    else{
      return true;
    }
  }
}

//>Brian: Nice! Is there some way we can use the forEach or filter methods?
//---------------------------------------------------

// Create a function below with the name "objectHasNameProp" that accepts
// 1 argument, an object, and checks if the object has a property with the
// name, "name".
// If it does, return true. Otherwise, return false.

function objectHasNameProp(argument1){
  if("name" in argument1){
    return true;
  }
  else{
    return false;
  }
}

//>Brian: Good work here.
//---------------------------------------------------

// Create a function below named "addNamePropToObject". This function should:
// * accept 1 argument
// * You must check the type of argument you receive--if the type is
//   not 'object', then you must return null.
// * If the type IS 'object', then add a property, "name", to the object
// * and set its value to be your full name as a string.
// * Return the object.

function addNamePropToObject(argument1){
  if (typeof (argument1) != "object") { //>Brian: Remember to use !== instead of !=
    return null;
  }
  else{
    argument1[name]="JamesJinsukPark";
  }
  return argument1;
}

//---------------------------------------------------

// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
/*
const student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

Sample Output: name,sclass,rollno
*/
function listProperties(object1){
  console.log(Object1.keys());
}

//---------------------------------------------------

// Write a function named "deletePropFromObj", which accepts 2 arguments:
// an object and a string, which represents the property to be deleted from the
// object.
// If the property does not exist, return false. Otherwise, return the deleted object.

function deletePropFromObj(object, property){
  if(property in object){
    delete object.property;
    return object.property;
  }
  else{
    return false;
  }
}

//---------------------------------------------------

// Create a function named "Person". You should add a function to Person's
// prototype, named "sayHello". This prototype function should log out
// "Hello, my name is <name>" (with your name in place of "<name>").
// If you're confused, reference this link:
//
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
//

//>Brian: did you accidentally forget to do this one?

//---------------------------------------------------

// Create a function named "specialLoop" that loops through an array and
// console.log's out each element in the array. You CANNOT use a standard
// for, while, or do-while loop. (Find a way to loop through an array
// without using the methods mentioned above.)

function specialLoop(arr){
  let currentE = arr.length-1;
  console.log(arr[currentE]);
  currentE= currentE-1;
  if(currentE==0){
    console.log(arr[currentE]);
  }
}

//>Brian: Look up forEach method.

//---------------------------------------------------

// Create a function named "weatherChecker". This function should:
// * Accept 1 argument, which should have one of the following values:
//   "rainy", "sunny", "cloudy", "snowy", "windy"
// * Your goal is to tell the user how to best prepare themselves for
//   the weather (via console.log). If it's sunny, tell the user to
//   "wear sunscreen!".
// * If it's cloudy or windy, tell them to bring some kind of outerwear.
// * If it's rainy, tell them to bring an umbrella, and if its snowy,
//   tell them to to wear a thick coat and snow boots.
// * You MUST use a switch statement to finish this function.
// * The function doesn't return anything.

let arg1 = "windy";
function weatherChecker(arg1){
  switch (arg1) { } //>Brian: This is incorrect syntax. Look up how to use switch statements online!
    case "sunny":
      console.log("Wear sunscreen!");
      break;
    case arg1"cloudy":
      console.log("Wear a jacket");
      break;
    case "windy":
      console.log("Wear a jacket");
      break;
    case "rainy":
      console.log("Bring an umbrella");
      break;

}

//---------------------------------------------------

// Create a function named "makeChristmasTree". This function should:
// * Accept 1 argument, a number. This number represents the height of
//   a tree. Remember, you should check to make sure that the argument
//   you receive is valid (that it is a number). This number must also be
//   positive (or zero)!
// * The function will create a tree, represented as a string, with the
//   asterisk (*) character.
// * The function should create a tree, as seen below. It should both
//   log out the result AND return the result as a string.
// Example:
/*
// Calling makeChristmasTree...
makeChristmasTree(5);
// Output:
    *
   ***
  *****
 *******
    *

makeChristmasTree(1);
// Output:
  *

makeChristmasTree(2);
// output:
  *
  *

makeChristmasTree(3):
// output:

  *
 ***
  *

makeChristmasTree(0):
// Output:

(nothing should be outputted)


makeChristmasTree(-1):
// Output:

ERROR!
*/

function makeChristmasTree(height){
  for(let x = 0; x <height; x++){
    let numAsterisks = 0 + 2*x;
    let counter = 0;
    for(let y = numAsterisks; y > -1; y--){
      console.log("*")
      console.log("\n");
    }
    counter++;
  }
}

/* {BRIAN}>
Good attempt! Let's try to break this down...

We know that the maximum # of stars in any given tree where the height >= 2 is
represented by the following relation:

MaximumNumberOfStars = 2(height - 1) - 1

Example:
height = 5, MaximumNumberOfStars = 2(5 - 1) - 1 = 8 - 1 = 7.
    *
   ***
  *****
 ******* <-- 7 stars.
    *

height = 6, MaximumNumberOfStars = 2(6 - 1) - 1 = 10 - 1 = 9.
    *
   ***
  *****
 *******
********* <-- 9 stars.
    *

If the height is one or zero, however, then we can simply print out one or zero
stars, respectively.

We want to maximize space (amount of memory required to store your tree) and 
time efficiency for this question. How do we do this?

Since we can calculate the maximum # of stars in a given tree where height >= 2,
we can create an array that represents the stars at any given level and continuously
add the result to a string! Here's what that looks like:
*/

function optimizedMakeTree(height) {
  let tree = "";
  if (height >= 2) {

    for (let i = 0; hmax = height - 1, i < hmax; i++) {
      tree += " ".repeat(height - i - 2) + "*".repeat((i * 2) + 1) + "\n";
    }

    tree += " ".repeat(height - 2) + "*";
    return tree;
  }
  else if (height < 0) {
    return Error("You must supply a height >= 0!");
  }
  else {
    return '*'.repeat(height);
  }
}

// You can test the speed of your code against mine!

// Here's the benchmarks:

console.log(optimizedMakeTree(5));
console.log(makeChristmasTree(5));
console.log("\n\n");

console.time("Optimized Code");
optimizedMakeTree(10000);
console.timeEnd("Optimized Code");

console.time("Your Code");
makeChristmasTree(10000);
console.timeEnd("Your Code");

