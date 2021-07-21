// JavaScript Document

// Arithmetic Operator Lessons
var simple_math_addition = 8 + 2;
var simple_math_subtraction = 8 - 2;
var simple_math_multiplication = 8 * 2;
var simple_math_division = 8 / 2;
var simple_math_multiple_operators = (1 + 2) * 10 / 2 - 5;
var simple_math_modulous_operation = 25 % 6;
document.getElementById("math-addition").innerHTML = "8 + 2 = " + simple_math_addition;
document.getElementById("math-subtraction").innerHTML = "8 - 2 = " + simple_math_subtraction;
document.getElementById("math-multiplication").innerHTML = "8 * 2 = " + simple_math_multiplication;
document.getElementById("math-division").innerHTML = "8 / 2 = " + simple_math_division;
document.getElementById("multiple-arithmetic-operators").innerHTML = "1 plus 2, multiplied by 10, " + "divided in half and then subtracted by 5 equals " + simple_math_multiple_operators;
document.getElementById("math-modulous-operation").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math_modulous_operation;

// Key Values & Dictionary
var animalAttributeHeading = {
    species: "Species: ",
    color: "Color: ",
    breed: "Breed: ",
    gender: "Gender: ",
    age: "Age: ",
    name: "Name: ",
    sound: "Sound: "
}

document.getElementById("displayAttributeHeading1").innerHTML = animalAttributeHeading.species;
document.getElementById("displayAttributeHeading2").innerHTML = animalAttributeHeading.color;
document.getElementById("displayAttributeHeading3").innerHTML = animalAttributeHeading.breed;
document.getElementById("displayAttributeHeading4").innerHTML = animalAttributeHeading.gender;
document.getElementById("displayAttributeHeading5").innerHTML = animalAttributeHeading.age;
document.getElementById("displayAttributeHeading6").innerHTML = animalAttributeHeading.name;
document.getElementById("displayAttributeHeading7").innerHTML = animalAttributeHeading.sound;

var animalAttribute = {
    species: "Dog",
    color: "Brindle",
    breed: "Greyhound",
    gender: "Male",
    age: 7, // NOTE: Due to the fact that 5 is the value type “number,” we don’t have to place it within quotation marks.
    name: "JoJo",
    sound: "Woof!"
}
document.getElementById("displayAnimalAttribute1").innerHTML = animalAttribute.species;
document.getElementById("displayAnimalAttribute2").innerHTML = animalAttribute.color;
document.getElementById("displayAnimalAttribute3").innerHTML = animalAttribute.breed;
document.getElementById("displayAnimalAttribute4").innerHTML = animalAttribute.gender;
document.getElementById("displayAnimalAttribute5").innerHTML = animalAttribute.age;
document.getElementById("displayAnimalAttribute6").innerHTML = animalAttribute.name;
document.getElementById("displayAnimalAttribute7").innerHTML = animalAttribute.sound;