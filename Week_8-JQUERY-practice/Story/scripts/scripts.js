$(document).ready(function () {
    $("#options").html('<p>HELP ME CHOOSE MY ADVANTURE: I have three options: BELOW</p>');
    $("#choices").append('<button id="car">Car</button>');
    $("#choices").append('<button id="bus">Bus</button>');
    $("#choices").append('<button id="carpet">Walking</button>');
        $("#car").click(function() {
            $("#options").html('<p>thank you for choosing this, it saves my time. However, I\'m still having trouble here</p>');
            $("#choices").empty();
            $("#choices").append('<button id="">the car is out of gas</button>');
            $("#choices").append('<button id="">the car is out of gas</button>');
        });
});