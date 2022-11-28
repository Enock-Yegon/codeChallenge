/*Write a program that prompts the user to input student marks.
 The input should be between 0 and 100. Then output the correct grade as follows: 
A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40.
*/
// declare prompt
const prompt = require("prompt-sync")();
let studentMarks = parseInt(prompt("Enter marks scored: "));
function checkStudentGrade(studentMarks){
        if (studentMarks>79 && studentMarks<100){
          console.log("Grade : A");      
          } 
        else if (studentMarks>60 && studentMarks<79) {
                console.log("Grade : B"); 
                  } 
        else if (studentMarks>49 && studentMarks<59) 
             {
                console.log("Grade : C"); 
        } else if (studentMarks>40 && studentMarks<49) {
                console.log("Grade : D"); 
        } else if (studentMarks>0 && studentMarks<40) {
                console.log("Grade : E"); 
        } else {
          console.log("Enter Valid Marks")
        }
}
console.log(checkStudentGrade(studentMarks));