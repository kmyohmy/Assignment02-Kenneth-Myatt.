/*eslint-env browser*/

var noun = window.prompt("Please enter a noun");
var aUsernumba = parseFloat(window.prompt("Please enter a number"));

if (isNaN(aUsernumba) || !isNaN(noun)) {
    window.document.write("My records indicated you misentered something ! Please follow instructions!");
} else if (aUsernumba > 1) {
   
    window.document.write(aUsernumba + " " + noun + "s");

} else {
    window.document.write(aUsernumba + " " + noun);
}


