console.log("hello there");

//call back function
//wait 
$(document).ready(function() {
    console.log("jQuery is ready!");
    //call jQuery method
    $("p").css("font-size", "100px");
    $("body").css("color", "#777777");
    $("body").css("background-color", "black");
    $("#box").css("width", "400px");
    $("#box").css("height", "400px");
    $("#box").css("background-color", "red");
    $("#box").css("text-align", "center");
    $("#box").css("border", "1px solid green");

    var array1 = [100, 1000, 10000];
    var object1 = {
        "name": "Ken",
        "age": 27,
        "hair-color": "black"
    };
    //accessing object properties
    console.log(object1["age"]);
    console.log(object1.age);

    $("#box").css({
        //"background-color": "red",
        "border-radius": "50px",
        "margin-left": "100px"
    });
    $("box").css("border", " ");
    //end of css jQuery method

    //html jQuery method --> $().html;
    jQuery("#box").html("<p>Hello World!</p>");

    //$().append(); adds to the end of the children of the target.
    //$().prepend(); adds to the start of the children of the target.
    $("#box").append("<p>Wecome Home</p>");
    $("#box").prepend("<h1>Wecome to be here</h1>");
    $("#box p").css('color', "yellow");
    $("#box p").css('font-size', "24px");
    $("#box p").css('padding', "13px");
    $("#Stop").click(function() {
        $("#box").css("background-color", "red");
    });

    $("#blue").click(function() {
        $("#box").css("background-color", "blue");
    });

    $("#changeBG").click(function() {
        $("#box").css("background-color", "green");

    });

    $("#disappear").click(function() {
        $("#box").css("visibility", "hidden");
    });
    $("input").keypress(function(event) {
        if (event.which == 100) {
            console.log("you pressed the D key");
            var currentMargin = $("#box").css("margin-left");
            console.log(currentMargin);
            currentMargin = parseInt(currentMargin);
            $("#box").css("margin-left", currentMargin + 10);
        } else if (event.which == 97) {
            console.log("you pressed the A key");
            var currentMargin = $("#box").css("margin-left");
            console.log(currentMargin);
            currentMargin = parseInt(currentMargin);
            $("#box").css("margin-left", currentMargin - 10);
        } else if (event.which == 115) {
            console.log("you pressed the S key");
            var currentMargin = $("#box").css("margin-top");
            console.log(currentMargin);
            currentMargin = parseInt(currentMargin);
            $("#box").css("margin-top", currentMargin + 10);
        } else if (event.which == 119) {
            console.log("you pressed the W key");
            var currentMargin = $("#box").css("margin-top");
            console.log(currentMargin);
            currentMargin = parseInt(currentMargin);
            $("#box").css("margin-top", currentMargin - 10);
        } else {
            console.log("nothing");
        }
        console.log(event.which);
    });
});
//target.action ( callbackfunction(){});