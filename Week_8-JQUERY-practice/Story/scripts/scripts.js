$(document).ready(function() {
    $("#options").html('<p>HELP ME CHOOSE MY ADVANTURE: I have three options BELOW to go to my niece\'s school to pick her up, I have to get there by 5:30, and now it\'s already 4:45 </p>');
    $("#choices").append('<button id="car">Car</button>');
    $("#choices").append('<button id="bus">Bus</button>');
    $("#choices").append('<button id="walking">Walking</button>');
    $("#car").click(function() {
        $("#options").html('<p>Thank you for choosing Car, it saves my time. However, I\'m still having a little trouble here</p>');
        $("#choices").empty();
        $("#choices").append('<button id="gas">the car is only have a little of gas</button>');
        $("#choices").append('<button id="flat">the car is flat tire</button>');
        $("#gas").click(function() {
            $("#options").html('<p>Thank God, you REALLY choose the right option</p>');
            $("#choices").empty();
            $("#choices").append('<button>The closest gas station is at 2.4 miles away, What should I do?</button>');
            $("#choices").append('<button id="road">SIDE-STORY</button>');
            $("#road").click(function() {
                $("#options").html('<p>Here is how people see the road</p>');
                $("#choices").empty();
                $("#options").prepend('<img src="images/easyRoad.jpg" alt="fast bus" width="700px" height="700px"/>');
                $("#choices").append('<button id="road">SIDE-STORY</button>');
                $("#road").click(function() {
                    $("#options").html('<p>Here is how I see the road</p>');
                    $("#choices").empty();
                    $("#options").prepend('<img src="images/mostHighway.jpg" alt="fast bus" width="700px" height="700px"/>');
                });
            });
        });
        $("#flat").click(function() {
            $("#options").html('<p>Thank God, you REALLY choose the right option</p>');
            $("#choices").empty();
            $("#choices").append('<button>There is no auto repair shop near me, and the AAA repair service take 2 hours to come because the traffic is jamming</button>');
            $("#choices").append('<button id="road">SIDE-STORY</button>');
            $("#road").click(function() {
                $("#options").html('<p>Here is how people see the road</p>');
                $("#choices").empty();
                $("#options").prepend('<img src="images/easyRoad.jpg" alt="fast bus" width="700px" height="700px"/>');
                $("#choices").append('<button id="road">SIDE-STORY</button>');
                $("#road").click(function() {
                    $("#options").html('<p>Here is how I see the road</p>');
                    $("#choices").empty();
                    $("#options").prepend('<img src="images/mostHighway.jpg" alt="fast bus" width="700px" height="700px"/>');
                });
            });
        });
    });
    $("#bus").click(function() {
        $("#options").html('<p>Thank you for choosing Bus, it reduced greenhouse gases. However, I\'m still having a little trouble here</p>');
        $("#choices").empty();
        $("#choices").append('<button id="time">Less Time, But Dangerous Because It goes like 120 mph</button>');
        $("#choices").append('<button id="slow">Slow Traffic, But Safer</button>');
        $("#time").click(function() {
            $("#options").html('<p>Thank God, you REALLY choose the right option</p>');
            $("#choices").empty();
            $("#choices").append('<button id="time">the bus takes 45 minutes to get to my destination, and the school only let me to pick my niece up late two times, and this is the second time. Morever, the bus almost flies off the road</button>');
        });
        $("#slow").click(function() {
            $("#options").html('<p>Thank God, you REALLY choose the right option</p>');
            $("#choices").empty();
            $("#choices").append('<button id="slow">the bus is going too slow because the police blocked the road, and it takes like FOREVER</button>');
        });
    });
    $("#walking").click(function() {
        $("#options").html('<p>Thank you for choosing Walking, I can exercise. However, I\'m still having a little trouble here</p>');
        $("#choices").empty();
        $("#choices").append('<button id="time">Spend More Time</button>');
        $("#choices").append('<button id="slow">walk Slow</button>');
        $("#time").click(function() {
            $("#options").html('<p>Thank God, you REALLY choose the right option</p>');
            $("#choices").empty();
            $("#choices").append('<button id="time">walking takes me like 45 minitues to get to my niece\'s school</button>');
            $("#choices").append('<button id="road">SIDE-STORY</button>');
            $("#road").click(function() {
                $("#options").html('<p>Here is how people walk</p>');
                $("#choices").empty();
                $("#options").prepend('<img src="images/download2.jpg" alt="fast bus" width="700px" height="700px"/>');
                $("#choices").append('<button id="road">SIDE-STORY</button>');
                $("#road").click(function() {
                    $("#options").html('<p>Here is how I walk</p>');
                    $("#choices").empty();
                    $("#options").prepend('<img src="images/download.jpg" alt="fast bus" width="700px" height="700px"/>');
                });
            });
        });
        $("#slow").click(function() {
            $("#options").html('<p>Thank God, you REALLY choose the right option</p>');
            $("#choices").empty();
            $("#choices").append('<button id="slow">my left leg is injured, so I walk really slow; Therefore, it takes like FOREVER</button>');
            $("#choices").append('<button id="road">SIDE-STORY</button>');
            $("#road").click(function() {
                $("#options").html('<p>Here is how people walk</p>');
                $("#choices").empty();
                $("#options").prepend('<img src="images/download2.jpg" alt="fast bus" width="700px" height="700px"/>');
                $("#choices").append('<button id="road">SIDE-STORY</button>');
                $("#road").click(function() {
                    $("#options").html('<p>Here is how I walk</p>');
                    $("#choices").empty();
                    $("#options").prepend('<img src="images/download.jpg" alt="fast bus" width="700px" height="700px"/>');
                });
            });
        });

    });
});