/*eslint-env browser*/

var startingNumber = 0;
var countdownNumber = parseFloat(window.prompt("Please enter a \" Countdown\" number"));

var i;

window.document.write(countdownNumber + "\n");

for (i = countdownNumber; i >= startingNumber; i -= 1) {
    
    countdownNumber -= 1;
    window.document.write(countdownNumber + "\n");
    
}