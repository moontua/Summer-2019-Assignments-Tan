$(document).ready(function() {
    $("#calculate").click(function() {
        var firstNumber = $("#firstNum").val();
        firstNumber=parseInt(firstNumber);
        var secondNumber = $("#secondNum").val();
        secondwNumber=parseInt(secondNumber);

        console.log(firstNumber + secondNumber);
        $("body").append(firstNumber + secondNumber);
    });

});