//var randomNumber = process.argv[2];



var randomNumber = (Math.random() * 4);
randomNumber = Math.floor(randomNumber);
console.log(randomNumber);

if (randomNumber == 0) {
    vehicle = "bus"
} else if (randomNumber == 1) {
    vehicle = "car"
} else if (randomNumber == 2) {
    vehicle = "carpet"
} else if (randomNumber == 3) {
    vehicle = "";
}


var tardinessMinutes = randomNumber; // mins

var vehicle;
var accident;

if (vehicle == "bus") {
    console.log("John takes the bus");
    tardinessMinutes = tardinessMinutes + 5;
} else if (vehicle == "car") {
    console.log("John takes his car");
    tardinessMinutes = tardinessMinutes + 1;
} else if (vehicle == " magic carpet") {
    console.log("John takes his magic carpet");
} 
else {
    console.log("John doesn't know what to commute on.");
    tardinessMinutes = tardinessMinutes + 1000;
}
    if (randomNumber == 0) {
        accident = ""
    } else if (randomNumber == 1) {
        accident = "flat tire"
    }


    console.log("Value of vehicle: ", vehicle);
    console.log("Value of accident: ", accident);

    if (accident == "flat tire") {
        if (vehicle == "car") {
            console.log("John had a flat, but luckily he had a spare tire, he's a little late to work");
            tardinessMinutes = tardinessMinutes + 10;
        } else if (vehicle == "bus") {
            console.log("John's bus tire popped off and left john stranded, the next bus came 3 hours later");
            tardinessMinutes = tardinessMinutes + 180;
        } 
    }
    else {
            console.log("John's morning was like usual.");
        }

    if (tardinessMinutes >= 15) {
        console.log("he arrived " + tardinessMinutes + " minutes late to work. He was fired on the spot");
    } else if (tardinessMinutes > 0 && tardinessMinutes < 15) {
        console.log("John arrived little late, he dodged his boss's fury.");
    } else {
        console.log("He is On Time to work");
        tardinessMinutes = tardinessMinutes - 2;
    }