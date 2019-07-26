//var car = false;
//var bus = true;
walk= Math.random();
var walk;
var busMin = 30;
var carMin = 10;
var Name = "Ken";

if (walk) {
	console.log (Name +  " can either take his car or bus to their shcool to pick up them");
    if (carMin > 10) {
    	console.log( Name + " is taking his car to go to pick up his niece, and it takes " + carMin + " minites");
    }
    else if (busMin <= 30) {
        console.log(Name +  " is taking the bus will take to pick up his niece " + busMin + " minutes because it has to pump gas aong the way");
    }
    else {
    	console.log(Name + " can fly to their school to pick them up");
    }
} else {
    console.log(Name + " can take Uber instead!!");
}