/*eslint-env browser*/

var option1 = parseFloat(window.prompt("Enter your first score!"));
var option2 = parseFloat(window.prompt("Enter the second score"));


if (isNaN(option1) || isNaN(option2)) {
    window.document.write("Sorry, but you did not enter a valid number");
    
} else if (option1 > option2) {
    window.document.write(option1 + " is the larger of the two");
    
} else if (option1 === option2) {
    window.document.write("The two numbers are the same! ");
    
    
    
} else {
    window.document.write(option2 + " is the larger of the two");
         
}