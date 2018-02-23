/*eslint-env browser*/
//Global Variables
var studentAmount = 5;
var Ursula = new Object();
var Paul = new Object();
var Henry = new Object();
var Tabitha = new Object();
var Lucy = new Object();

Ursula.grade = parseFloat(window.prompt("Please Enter the score for Student Name: Ursula"));
Paul.grade = parseFloat(window.prompt("Please Enter the score for Student Name: Paul "));
Henry.grade = parseFloat(window.prompt("Please Enter the score for Student Name: Henry"));
Tabitha.grade =  parseFloat(window.prompt("Please Enter the score for Student Name: Tabitha"));
Lucy.grade =  parseFloat(window.prompt("Please Enter the score for Student Name: Lucy"));
var classAverage = parseFloat((Ursula + Paul + Henry + Tabitha + Lucy) / studentAmount);

var classList = [Ursula.grade, Paul.grade, Henry.grade, Tabitha.grade, Lucy.grade];

var i;



/*for / in LOOP!*/

for (i = 0; i < classList.length; i+=1){

        if (classList[i] > 100){
        window.console.log("You entered a grade higher than 100%");

        }else if (classList[i] < 90){
            classList[i].grade += "A";

        }else if(classList[i] <80){
            classList[i].grade += "B";
        }else if(classList[i] <70){
            classList[i].grade += "C";
        }else if(classList[i] <60){
            classList[i].grade += "D";
        }
}
window.console.log(classList)
window.console.log("Student(s)\t\t"  + "Grade");
window.console.log("--------------------------------------");
window.console.log("Ursula:\t\t " + Ursula + "\n");
window.console.log("Paul:\t\t" +  Paul + "\n");
window.console.log("Henry:\t\t" + Henry + "\n");
window.console.log("Tabitha:\t\t" +  Tabitha + "\n");
window.console.log("Lucy:\t\t" + Lucy + "\n");
window.console.log("--------------------------------------");
window.console.log("Average points: " + classAverage + "\n");


