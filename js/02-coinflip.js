/*eslint-env browser*/
var numCoinFlip = Math.round(Math.random()); //0 or 1
var numChoice = parseFloat(window.prompt("Please type either a 1 for Heads or  0  for Tails"));


if (numCoinFlip === 1 && numChoice === 1) {
    window.document.write("Congratulations! \nYou got it right!");
    

} else if (numCoinFlip === 0 && numChoice === 0) {
    window.document.write("The flip was tails! \nCongratulations! You got it right!");
    

} else if (numCoinFlip === 1 && numChoice === 0) {
    window.document.write("The flip was Heads! \nSorry, You got it wrong!");
    

} else if (numCoinFlip === 0 && numChoice === 1) {
    window.document.write("The flip was tails! \nSorry, You got it wrong!");
    

} else if (isNaN(numChoice)) {
    
    window.document.write("You submitted something that was not a number");

    
} else {
    window.document.write("You have reached this because you put a number higher than 1");
    
    
    
}


//Boolean Version

/*var numCoinFlip = Math.round(Math.random()); //0 or 1
var numChoice = parseFloat(window.prompt("Please type either a 1 for Heads or  0  for Tails"));


if (numCoinFlip === 1 && numChoice === 1) {
    window.document.write("Congratulations! \nYou got it right!");
    

} else if (numCoinFlip === 0 && numChoice === 0) {
    window.document.write("The flip was tails! \nCongratulations! You got it right!");
    

} else if (numCoinFlip === 1 && numChoice === 0) {
    window.document.write("The flip was Heads! \nSorry, You got it wrong!");
    

} else if (numCoinFlip === 0 && numChoice === 1) {
    window.document.write("The flip was tails! \nSorry, You got it wrong!");
    

} else if (isNaN(numChoice)) {
    
    window.document.write("You submitted something that was not a number");

    
} else {
    window.document.write("You have reached this because you put a number higher than 1");
    
    
    
}


*/