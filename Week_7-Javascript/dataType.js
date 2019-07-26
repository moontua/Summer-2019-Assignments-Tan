//== --> =; != --> not equal to; && --> either side must be true; || ==> either side; <= --> less than; => --> greater than; <, >

if (100 === "100") {
	console.log("true");
}
else {
	console.log("false");
}
console.log("hello");
var Math = 100 * "hello";
console.log("Math");
if (100 <= 100) {
	console.log("hello");
}

//!NOT Boolean:
!true
!false

if ((!false && 100==100) && false == false) {
	console.log("I run");
}

if (true || !false)
{
	console.log("I also run");
}

if (true) {
	var var1 = 100;
	if (false) {
		var var2 = 200;
	}
	var var3 = 300;
	if (true) {
		var var4=400;
		if (false) {
			var var5=500;
		}
	}
}