function getGrade(mark) {
  if (mark > 79) {
    return "A";
  } else if (mark >= 60 && mark <= 79) {
    return "B";
  } else if (mark >= 50 && mark <= 59) {
    return "C";
  } else if (mark >= 40 && mark <= 49) {
    return "D";
  } else {
    return "E";
  }
}

function getUserInput() {
  const mark = parseInt(prompt("Enter the student's mark (between 0 and 100):"));

  if (!isNaN(mark) && mark >= 0 && mark <= 100) {
    const grade = getGrade(mark);
    alert(`The grade for ${mark} is ${grade}`);
  } else {
    alert("Invalid input. Please enter a number between 0 and 100.");
  }
}
