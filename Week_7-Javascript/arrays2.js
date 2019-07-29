var thisArray = [100, 900, 67, 678];

console.log(thisArray[2]);
thisArray [3] = thisArray [3] + 1;
console.log(thisArray[3]);

thisArray[10] = "This is a test last item.";
console.log(thisArray);
//add .push(); adds an item to the end into an array
thisArray.push ("now this is the last");
console.log("added the last by using push function");
//remove .pop(); adds an item to the last from an array
thisArray.pop();
console.log("removed the last", thisArray);
// .unshift(); adding -9 to the front
thisArray.unshift(-9);
console.log("add to the front: ", thisArray);
//.shift removes an items from the beginning.
thisArray.shift();
console.log(thisArray);
// run ten items and pops an items off each loop
for (var i = 0; i < 10; i++) {
	thisArray.pop();
	console.log(thisArray);
}
//play around with string
 var myString = "this is a special sentence";

 myString[2];

 myString[2] = "I";
 //split items
 var splitString = myString.split("");
 console.log(splitString);
 splitString[2]="I"
 console.log(splitString);
 //join an array to make a string
 var modifiedString = splitString.join("");

 console.log(modifiedString);