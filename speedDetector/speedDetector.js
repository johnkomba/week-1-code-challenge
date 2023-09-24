function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
  
    if (speed <= speedLimit) {
      return "Ok";
    } else {
      const points = Math.floor((speed - speedLimit) / kmPerPoint);
      if (points >= 12) {
        return "License suspended";
      } else {
        return `Points: ${points}`;
      }
    }
  }
  
  function getUserInput() {
    const speed = parseInt(prompt("Enter the speed of the car:"));
  
    if (!isNaN(speed)) {
      const result = checkSpeed(speed);
      alert(result);
    } else {
      alert("Invalid input. Please enter a number.");
    }
  }
  