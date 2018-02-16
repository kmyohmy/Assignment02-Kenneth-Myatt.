/*eslint-env browser*/

var output = 0;
var i;

window.console.log(output);

for (i=0; i<=14; i+=1){
    output += 1;
  
    
    if (output%2){
        window.console.log(output + " is odd");
    
    } else { window.console.log(output + " is even");
           
            }
      
}

