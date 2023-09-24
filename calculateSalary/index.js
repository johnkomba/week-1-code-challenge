function calculateNetSalary() {
    const basicSalary = parseFloat(document.getElementById('basicSalary').value);
    const benefits = parseFloat(document.getElementById('benefits').value);

    // Calculation
    const paye = basicSalary * 0.1;
    const nhif = 150; // NHIF value
    const nssf = Math.min(basicSalary * 0.06, 6000); // NSSF value
    const grossSalary = basicSalary + benefits;
    const netSalary = grossSalary - paye - nhif - nssf;

    // Displaying the Results
    const resultsElement = document.getElementById('results');
    resultsElement.innerHTML = `
        <p>Gross Salary: Ksh ${grossSalary}</p>
        <p>PAYE: Ksh ${paye}</p>
        <p>NHIF Deductions: Ksh ${nhif}</p>
        <p>NSSF Deductions: Ksh ${nssf}</p>
        <p>Net Salary: Ksh ${netSalary}</p>
    `;
}
