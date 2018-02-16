/* eslint-env browser*/

var output = 0;
var i;

for (i = 0; i <= 99; i += 1 ){
    output += 1;
    
    if((output % 5 === 0) && (output % 3 === 0)){
        
        window.console.log(output + " Marco Polo!");
        
    } else if (output % 5  === 0){
        
        window.console.log(output + " Polo!");
   
    } else if (output % 3 === 0){
        
         window.console.log(output + " Marco!");
        
    }
    
    else{
        
        window.console.log(output);
        
    }
    
    
}