var ast1 = " ";
for (var i = 0; i < 3; i++) {
    ast1 = ast1 + "* ";
    console.log(ast1);
}

for (var i = 4; i > 0; i--) {
    var ast1re = " ";
    for (var e = i; e > 0; e--) {
        ast1re = ast1re + "* ";
    }
    console.log(ast1re);
}

/*
//function ast1 ()
var ast1 = " ";
for (var i = 0; i < 3; i++) {
    ast1 = ast1 + "* ";
    console.log(ast1);
}
for (var e = 4; e > 0; e--) {
    var ast1Reverse = " ";
    for (var i = e; i > 0; i--) {
        ast1Reverse = ast1Reverse + "* ";
    }
    console.log(ast1Reverse);
}
*/

var helloArray = ["*", "*", "*", "*"];
//adding to the front
helloArray.unshift(-5678);
//adding to the last
helloArray.push("i'm last");
//remove from the last
helloArray.pop();
//remove from the front
helloArray.shift();
//change value in the specific number:
helloArray[10] = "this is the 10th";
for (var i = 0; i < 10; i++) {
    helloArray.pop();
    console.log(helloArray);
}