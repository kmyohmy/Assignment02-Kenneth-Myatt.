/*eslint-env browser*/
var coinFlip;


do {
    coinFlip = Math.round(Math.random());
    
    if (coinFlip === 1) {
        window.console.log("Tails");
        break;
        
    } else if (coinFlip === 0) {
        window.console.log("Heads");
        
    }
    
    
    
    
} while (coinFlip === 0);