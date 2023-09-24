# week-1-code-challenge

# Challenge 1: Student Grade Generator (Toy Problem)

Involves writing a function that prompts the user to input student marks. The input should be between 0 and 100. The output after the user inputs the marks correspond the correct grade, as shown below: 
A: 80-100
B: 60-79
C: 50-59
D: 40-49
E: Less than 40
## Detailed Steps:
Define the Function:

Start by creating a function called generateStudentGrade.
This function will take one parameter, which is the studentMark.
Example:
function generateStudentGrade(studentMark) {
  // Implementation will go here
}
Prompt User for Input:

Use the prompt function to get the user's input for the student's mark.
Parse the input to ensure it's a valid number between 0 and 100.
Example:

function generateStudentGrade() {
  let studentMark = parseFloat(prompt("Enter student's mark (0-100):"));
  // Add validation for valid input range (0-100)
  // ...
}
Grade Calculation:

Implement logic to calculate the grade based on the input mark.
Example:

function generateStudentGrade() {
  let studentMark = parseFloat(prompt("Enter student's mark (0-100):"));
  if (studentMark >= 80 && studentMark <= 100) {
    return 'A';
  } else if (studentMark >= 60 && studentMark < 80) {
    return 'B';
  } else if (studentMark >= 50 && studentMark < 60) {
    return 'C';
  } else if (studentMark >= 40 && studentMark < 50) {
    return 'D';
  } else {
    return 'E';
  }
}
Handle Invalid Inputs:

Consider adding error handling to handle cases where the user inputs a value outside the valid range (0-100).
Example:

function generateStudentGrade() {
  let studentMark = parseFloat(prompt("Enter student's mark (0-100):"));
  if (isNaN(studentMark) || studentMark < 0 || studentMark > 100) {
    alert("Invalid input! Please enter a number between 0 and 100.");
    return;
  }
  // Rest of the grade calculation logic
  // ...
}
Display the Grade:

Finally, display the calculated grade to the user.
Example:

function generateStudentGrade() {
  let studentMark = parseFloat(prompt("Enter student's mark (0-100):"));
  if (isNaN(studentMark) || studentMark < 0 || studentMark > 100) {
    alert("Invalid input! Please enter a number between 0 and 100.");
    return;
  }
  let grade;
  if (studentMark >= 80 && studentMark <= 100) {
    grade = 'A';
  } else if (studentMark >= 60 && studentMark < 80) {
    grade = 'B';
  } else if (studentMark >= 50 && studentMark < 60) {
    grade = 'C';
  } else if (studentMark >= 40 && studentMark < 50) {
    grade = 'D';
  } else {
    grade = 'E';
  }
  alert(`The student's grade is: ${grade}`);
}
Testing:

You can now call the function to test it.

# Challenge 2: Speed Detector (Toy Problem)
Involved writing a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it prints “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it gives the driver one demerit point and prints the total number of demerit points.

   > For example, if the speed is 80, it prints: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
## Detailed Steps:
Define the Function:

Start by creating a function called speedDetector.
This function will take one parameter, which is the carSpeed.
Example:

function speedDetector(carSpeed) {
  // Implementation will go here
}
Prompt User for Input:

Use the prompt function to get the user's input for the car's speed.
Parse the input to ensure it's a valid number.
Example:

function speedDetector() {
  let carSpeed = parseInt(prompt("Enter the car's speed (in km/s):"));
  // Add validation for valid input
  // ...
}
Demerit Calculation:

Implement logic to calculate the demerit points based on the speed.
Example:

function speedDetector() {
  let carSpeed = parseInt(prompt("Enter the car's speed (in km/s):"));
  if (carSpeed < 70) {
    alert("Ok");
  } else {
    let demeritPoints = Math.floor((carSpeed - 70) / 5);
    if (demeritPoints > 12) {
      alert(`License suspended. Points: ${demeritPoints}`);
    } else {
      alert(`Points: ${demeritPoints}`);
    }
  }
}
Handle Invalid Inputs:

Consider adding error handling to handle cases where the user inputs a non-numeric value.
Example:

function speedDetector() {
  let carSpeed = parseInt(prompt("Enter the car's speed (in km/s):"));
  if (isNaN(carSpeed) || carSpeed < 0) {
    alert("Invalid input! Please enter a valid positive number.");
    return;
  }
  // Rest of the demerit calculation logic
  // ...
}
Testing:

You can now call the function to test it.
Example:

javascript
speedDetector();
# Challenge 3: Net Salary Calculator (Toy Problem)

The programs major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits.It Calculates the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary based on KRA, NHIF, and NSSF values provided in the links below.

https://www.aren.co.ke/payroll/taxrates.htm
https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye

## Detailed Steps:
Gather Inputs:

Start by creating a function called calculateNetSalary.
Use prompt to get the user's input for basic salary and benefits.
Parse the input to ensure they are valid numbers.
Example:

function calculateNetSalary() {
  let basicSalary = parseFloat(prompt("Enter Basic Salary (in Ksh):"));
  let benefits = parseFloat(prompt("Enter Benefits (in Ksh):"));
  // Add validation for valid input
  // ...
}
Retrieve Tax Rates:

Go to the provided links and gather the tax rates for PAYE.
You can write them as constants in your program.
Example:

const PAYE_RATES = [
  { min: 0, max: 24000, rate: 10.0 },
  // Add other ranges and rates
];
Calculate PAYE (Tax):

Implement logic to calculate the PAYE based on the provided tax rates and the total salary (basic salary + benefits).
Example:

function calculateNetSalary() {
  let basicSalary = parseFloat(prompt("Enter Basic Salary (in Ksh):"));
  let benefits = parseFloat(prompt("Enter Benefits (in Ksh):"));
  let totalSalary = basicSalary + benefits;

  // Calculate PAYE
  let paye = 0;
  for (const rate of PAYE_RATES) {
    if (totalSalary >= rate.min && totalSalary <= rate.max) {
      paye = (rate.rate / 100) * (totalSalary - rate.min);
      break;
    }
  }
  // ...
}
Calculate NHIF and NSSF Deductions:

Go to the provided links and gather the NHIF and NSSF rates.
Implement logic to calculate the deductions based on the provided rates.
Example:

function calculateNetSalary() {
  // ...
  // Calculate NHIF
  let nhif = 0;
  // Implement NHIF deduction calculation logic
  // ...

  // Calculate NSSF
  let nssf = 0;
  // Implement NSSF deduction calculation logic
  // ...
}
Calculate Gross Salary and Net Salary:

Use the inputs and deductions to calculate the gross salary and net salary.
Example:

function calculateNetSalary() {
  // ...
  // Calculate Gross Salary
  let grossSalary = totalSalary - paye;

  // Calculate Net Salary
  let netSalary = grossSalary - nhif - nssf;
  // ...
}
Display Results:

Use alert or console.log to display the calculated values to the user.
Example:

function calculateNetSalary() {
  // ...
  // Display results to user
  alert(`Gross Salary: ${grossSalary} Ksh`);
  alert(`Net Salary: ${netSalary} Ksh`);
}
Testing:

You can now call the function to test it.
Example:

calculateNetSalary();