function pyramid(asterisk)
{

    for(var i = 0; i < asterisk; i ++) {

        var result = " ";
        console.log(asterisk);
    
        for(var row = 0; row < asterisk - i; row ++) {
        result += " ";
        console.log(asterisk);
    }
    
    for(var level = 0; level <= i; level ++) {    
       result += " * ";
    console.log(result);  
}
}  
}
pyramid(" 5 ")

Math.floor(pyramid() * 4);