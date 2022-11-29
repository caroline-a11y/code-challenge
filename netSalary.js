/*Calculations displays for all deductables and  net salary for an employee
    
deductions = (payee + NHIF + NSSF)
Earnable pay = Gross pay - deductions e.g Gross salary - (payee + NHIF + NSSF) ==> net salary
taxable income = Gross pay
Gross salary = all_benefits + basic salary e.g house_allowance + hardship_allowance + risk_allowance + basic_salary
*/
const { IncomingMessage } = require('http');
const readline = require('readline');
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

input.question("What is your Gross Salary?\n Note: The gross salary is a total of your basic pay and all benefits\n", function (gross_pay){
    let paye;
    let extraTaxablePay;
    let nhif;
    let nssf= 200;
    let total_deductions;
    let net_salary;
    if (gross-pay < 24001){
        paye = gross_pay * 0.1;
    }else if (gross_pay < 32334){
        paye = 2400;
        extraTaxablePay = gross_pay - 24000
        paye = (extraTaxablePay * 0.25) + paye;
    }else {
        paye = 4483;
        extraTaxablePay = gross_pay - 32333;
        paye = (extraTaxablePay * 0.30) + paye;       
    }
    if (grossPay < 6000){
        nhif = 150;
    }else if(gross_pay < 8000){
        nhif = 300;
    }else if(gross_pay < 12000){
        nhif = 400;
    }else if(gross_pay < 15000){
        nhif = 500;
    }else if(gross_pay < 20000){
        nhif = 600;
    }else if(gross_pay < 2500){
        nhif = 700;
    }else if(gross_pay < 30000){
        nhif = 850;
    }
    else if(gross_pay > 35000){
        nhif = 900;
    } else {
        nhif = 950
    }

    total_deductions = nhif + paye + nssf;
    net_salary = gross-pay - total-deductions;
    process.stdout.write(`Your gross pay is Ksh: ${gross_pay}\n`);
    process.stdout.write(`Your P.A.Y.E is Ksh: ${paye}\n`);
    process.stdout.write(`Your NHIF deduction pay is Ksh: ${nhif}\n`);
    process.stdout.write(`Your standard NSSF deduction is Ksh: ${nssf}\n`);    
    process.stdout.write(`Your Total deduction amount to Ksh: ${total_deductions}\n`);
    process.stdout.write(`Your Net Salary is Ksh: ${net_salary}\n`);    
    input.close();
})
