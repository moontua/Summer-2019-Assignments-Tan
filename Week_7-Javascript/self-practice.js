var helloArray = [100, 89, 456, 567];



//adding to the front
helloArray.unshift(-5678);
//adding to the last
helloArray.push("i'm last");
//remove to the last
helloArray.pop();
//remove to the front
helloArray.shift();
//change value in the specific number:
helloArray[10] = "this is the 10th";
for (var i = 0; i < 10; i++) {
    helloArray.pop();
    console.log(helloArray);
}