/*Given the basic salary and benefits of an employee, write a program that would calculate the Payee Tax, NHIF, NSSF Deductions and net salary.*/
//Declare prompt
const prompt = require("prompt-sync")();
let basicSalary = parseInt(prompt("Enter your basic salary: "));
let employeeBenefits = parseInt(prompt("Enter the benefits of an employee: "));
let grossSalary = parseFloat(basicSalary) + parseFloat(employeeBenefits);
let NHIFdeduction = 0
function checkNHIFDeduction(grossSalary){
   if(grossSalary>0 && grossSalary<= 5999){
    NHIFdeduction = 150;
}else if (grossSalary>=6000 && grossSalary<= 7999) {
        NHIFdeduction  = 300
      } 
      else if (grossSalary>=8000 && grossSalary<= 11999) {
        NHIFdeduction  = 400
      }
    else if (grossSalary>=12000 && grossSalary<= 14999) {
      NHIFdeduction  = 500
    }
    else if (grossSalary>=15000 && grossSalary<= 19999) {
        NHIFdeduction  = 600
      }
      else if (grossSalary>=20000 && grossSalary<= 24999) {
        NHIFdeduction  = 750
      }
      else if (grossSalary>=25000 && grossSalary<= 29999) {
        NHIFdeduction  = 850;
      }
      else if (grossSalary>=30000 && grossSalary<= 34999) {
        NHIFdeduction  = 900
      }
      else if (grossSalary>=35000 && grossSalary<= 39999) {
        NHIFdeduction  = 950
      }
      else if (grossSalary>=40000 && grossSalary<= 44999) {
        NHIFdeduction  = 1000
      }
      else if (grossSalary>=45000 && grossSalary<= 49999) {
        NHIFdeduction  = 1100
      }
      else if (grossSalary>=50000 && grossSalary<= 59999) {
        NHIFdeduction  = 1200
      }
      else if (grossSalary>=60000 && grossSalary<= 69999) {
        NHIFdeduction  = 1300
      }
      else if (grossSalary>=70000 && grossSalary<= 79999) {
        NHIFdeduction  = 1400;
      }
      else if (grossSalary>=80000 && grossSalary<= 89999) {
        NHIFdeduction  = 1500
      }
      else if (grossSalary>=90000 && grossSalary<= 99999) {
        NHIFdeduction  = 1600
      }
      else if (grossSalary>=100000) {
        NHIFdeduction  = 1700
      }
      return NHIFdeduction
    }
    let PAYE = 0;
      function checkPAYE(grossSalary){
        if( grossSalary>0 && grossSalary<= 24000){
            PAYE = grossSalary * 0.1
        } else if( grossSalary>= 24001 && grossSalary<=32333){
            PAYE = grossSalary * 0.25
        } else if ( grossSalary>32333){
            PAYE = grossSalary * 0.3
        }
        return PAYE;
    }
checkNHIFDeduction(grossSalary);
checkPAYE(grossSalary);
let NSSFdeduction = grossSalary * 0.06;
let totalDeduction = (parseFloat(NHIFdeduction) + parseFloat(PAYE) + parseFloat(NSSFdeduction));
let netSalary = grossSalary - totalDeduction;
console.log("Your net salary is: \t" +netSalary);