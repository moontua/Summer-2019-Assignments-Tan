function combine (firstSen,secondSen) {
combine = firstSen + " " + secondSen;
return combine;
}
//---------------------
var print = combine("hello, my name is Ken" , "and I'm trying to be a programmer");
console.log(print);
//--------------------------------
function concatSentence () {
	var brickHouse = "she's mighty mighty";
	var smokin = "hello world";
	console.log(brickHouse + " " + smokin);
}

concatSentence();

function concat(string1,string2) {
	console.log(string1 + string2);
}

concat("$", "10.5");



function concatItself (string1,string2) {
	console.log(string1, string2);
	console.log(string2, string1);
}

concatItself ("rar", "dis");


/* parameters and arguments 

function functionName (parameter1,parameter2) { 
}
functionName ();

*/