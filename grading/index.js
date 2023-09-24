function getUserInput() {
    const mark = parseInt(prompt("Enter the student's mark (between 0 and 100):"));
  
    if (!isNaN(mark) && mark >= 0 && mark <= 100) {
      const grade = getGrade(mark);
      alert(`The grade for ${mark} is ${grade}`);
    } else {
      alert("Invalid input. Please enter a number between 0 and 100.");
    }
  }
  