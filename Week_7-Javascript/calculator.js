/*
var num1 = 100;
var num2 = 9;

var sum = num1 + num2;
var diff = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;


console.log("the sum of " + num1 + " and " + num2 + " equal " + sum);
console.log("the different of " + num1 + " and " + num2 + " equal " + diff);
console.log("the product of " + num1 + " and " + num2 + " equal " + product);
console.log("the quotient of " + num1 + " and " + num2 + " equal " + quotient);
*/
//using this funciton for run multiple num with the same formular

//console.log(process.argv);

var firstNum = process.argv[2];
var secondNum = process.argv[3];
//convert the strings from firstNum/seocondNum to actual number because it is a string at first
firstNum = parseInt (firstNum);
secondNum = parseInt (secondNum);

function MultiNum(num1, num2) {


    //checking DATA TYPE;
    if (typeof num1 == "number" && typeof num2 == "number") {
        console.log(typeof num1);
        console.log("number1 is a datatype of number");

//do math
        var sum = num1 + num2;
        var diff = num1 - num2;
        var product = num1 * num2;
        var quotient = num1 / num2;
//reposrt the results to the console

        console.log("the sum of " + num1 + " and " + num2 + " equal " + sum);
        console.log("the different of " + num1 + " and " + num2 + " equal " + diff);
        console.log("the product of " + num1 + " and " + num2 + " equal " + product);
        console.log("the quotient of " + num1 + " and " + num2 + " equal " + quotient);
    } 
//if not a number, it will print this
    else {
    //type out errors
        console.log("num1 is not a number! Try again!", "the data type of num2 is also not a number " + "and it is a " + typeof num1);
        console.log("num2 is not a number! Try again!", "the data type of num2 is also not a number " + "and it is a " + typeof num2);
    }
}
MultiNum(firstNum, secondNum);
MultiNum(50, 9);
MultiNum(.456, .87);