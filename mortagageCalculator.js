const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === ''    ||
         Number.isNaN(Number(number)) ||
         Number(number) < 1;
}

prompt('Welcome to mortgage calculator.');

while (true) {

  prompt('What is the loan amount?\nExample: if $500,000.00 enter 500000');
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt('Invalid number, please try again');
    prompt('What is the loan amount?\nExample: if $500,000.00 enter 500000');
    loanAmount = readline.question();
  }

  prompt('What is the Annual Percentage Rate (APR)?\nExample: if 5.0% enter 5.');
  let annualPercentageRate = readline.question();

  while (invalidNumber(annualPercentageRate)) {
    prompt('Invalid number, please try again');
    prompt('What is the Annual Percentage Rate (APR)?\nExample: if 5.0% enter 5.');
    annualPercentageRate = readline.question();
  }

  prompt('What is the loan duration in years?\nExample: if 30 years enter 30.');
  let durationYears = readline.question();

  while (invalidNumber(durationYears)) {
    prompt('Invalid number, please try again');
    prompt('What is the loan duration in years?\nExample: if 30 years enter 30.');
    durationYears = readline.question();
  }
  annualPercentageRate /= 100;
  let monthlyInterestRate = annualPercentageRate / 12;
  let durationMonthly = durationYears * 12;
  let monthlyPayment = loanAmount *
             (monthlyInterestRate /
             (1 - Math.pow((1 + monthlyInterestRate), (-durationMonthly))));

  prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);

  prompt('Do you want to perform another calculation?\n(1: Yes / 2: No)');
  let repeat = readline.question();

  while (invalidNumber(repeat)) {
    prompt('Invalid number, please try again');
    prompt('Do you want to perform another calculation? \n (1: Yes / 2: No)');
    repeat = readline.question();
  }

  if (repeat !== '1') break;
}