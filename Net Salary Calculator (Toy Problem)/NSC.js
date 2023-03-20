function calculateNetSalary() {
    // get user input for basic salary and benefits
    let basicSalary = parseFloat(document.getElementById("basicSalary").value);
    let benefits = parseFloat(document.getElementById("benefits").value);

    // calculate gross salary
    let grossSalary = basicSalary + benefits;

    // calculate payee (KRA)
    let KRA = 0;
    if (grossSalary <= 24000) {
      KRA = 0;
    } else if (grossSalary <= 40000) {
      KRA = (grossSalary - 24000) * 0.1;
    } else if (grossSalary <= 80000) {
      KRA = 1600 + (grossSalary - 40000) * 0.2;
    } else if (grossSalary <= 120000) {
      KRA = 9600 + (grossSalary - 80000) * 0.25;
    } else if (grossSalary <= 160000) {
      KRA = 21600 + (grossSalary - 120000) * 0.3;
    } else {
      KRA = 38400 + (grossSalary - 160000) * 0.35;
    }

    // calculate NHIF deductions
    let NHIF = 0;
    if (grossSalary <= 5999) {
      NHIF = 150;
    } else if (grossSalary <= 7999) {
      NHIF = 300;
    } else if (grossSalary <= 11999) {
      NHIF = 400;
    } else if (grossSalary <= 14999) {
      NHIF = 500;
    } else if (grossSalary <= 19999) {
      NHIF = 600;
    } else if (grossSalary <= 24999) {
      NHIF = 750;
    } else if (grossSalary <= 29999) {
      NHIF = 850;
    } else if (grossSalary <= 34999) {
      NHIF = 900;
    } else if (grossSalary <= 39999) {
      NHIF = 950;
    }  else if (grossSalary <= 49999) {
      NHIF = 1000;
    } else if (grossSalary <= 59999) {
      NHIF = 1100;
    } else if (grossSalary <= 69999) {
      NHIF = 1200;
    } else if (grossSalary <= 79999) {
      NHIF = 1300;
    } else if (grossSalary <= 89999) {
      NHIF = 1400;
    } else if (grossSalary <= 99999) {
      NHIF = 1500;
    } else {
      NHIF = 1700;
    }

    // calculate NSSF
    let NSSF = Math.min(grossSalary * 0.06, 2160);

    // calculate net salary
    let netSalary = grossSalary - KRA - NHIF - NSSF;

    // display results on page
    document.getElementById("grossSalary").innerHTML = `Gross Salary: KES ${grossSalary.toFixed(2)}`;
    document.getElementById("KRA").innerHTML = `Payee (KRA): KES ${KRA.toFixed(2)}`;
    document.getElementById("NHIF").innerHTML = `NHIF : KES ${NHIF.toFixed(2)}`;
    document.getElementById("NSSF").innerHTML = `NSSF : KES ${NSSF.toFixed(2)}`;
    document.getElementById("netSalary").innerHTML = `Net Salary: KES ${netSalary.toFixed(2)}`;
  }