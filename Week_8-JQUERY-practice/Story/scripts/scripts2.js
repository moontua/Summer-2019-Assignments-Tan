$(document).ready(function() {
    $("#dialog").html('<p>John wakes up to get ready for work</p>');
    //make choices button
    $("#choices").append('<button id="car">John takes the car</button>');
    $("#choices").append('<button id="bus">John takes the bus</button>');
    //options clicked
    $("#bus").click(function() {
        $("#dialog").html("<p>John takes the bus. </p>")
        $("#choices").empty();
        $("#choices").append('<button id="flat">John\'s bus get flat tire</button>');
        $("#choices").append('<button id="fast">John\'s bus speeds through the city</button>');
        $("#flat").click(function() {
            $("#dialog").html("<p>John\'s bus get s flat tire, making him late to work, and as a result  he is fired. John sues SFMTA and wins 1.6 millions, and retires in the Bahamas</p>")
            $("#choices").empty();
            $("#choices").append('<button id="business">John creates a business</button>');
            $("#choices").append('<button id="boat">John decide to go on a boat</button>');
        });
        $("#fast").click(function() {
            $("#dialog").html("<p>the bus hit a new world speed record at 16MPH and John ends up in the news as one of the survivor</p>")
            $("#dialog").prepend('<img src="images/bus.jpg" alt="fast bus" width="200px" height="200px"/>');
            $("#dialog").append(`<ul>" 
            	"<li></li>" 
            	"<li></li>" 
            	</ul>`);
            var string = `
            <p>paragraph1</p>
            <p>paragraph2</p>`
            $("#choices").empty();
            $("#choices").append('<button id="book">John writes a book</button>');
            $("#choices").append('<button id="engineer">John studies bus machines</button>');

        });
    });
    $("#car").click(function() {
        $("#dialog").html("<p>John takes his car to work. </p>")
        $("#choices").empty();
        $("#choices").append('<button id="slow">John\'s car gets slower than usual</button>');
        $("#choices").append('<button id="carpool">John takes carpools</button>');
        $("#slow").click();
        $("#carpool").click();
    });
});