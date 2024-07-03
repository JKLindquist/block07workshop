//declare the first variable - this variable will use addition
const varOne = 9 + 1;
//declare the second variable - this one will use subtraction
const varTwo = 50 - varOne;
//declare the third variable - this one will use multiplcation
const varThree = 13 * 3;
//declare a string for text, this will be part of the message in the alert box
const str1 = "You have received this message because you have been chosen to open an important vault. "
//literal to output the combination of all declared variables and show concatonation
const combOutput = `${str1}Here is the secret combination: ${varOne} - ${varTwo} - ${varThree}`

//show the declared output variable in an alert box
alert(combOutput);