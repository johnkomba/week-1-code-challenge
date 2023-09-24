function getUserInput() {
    const userInput = prompt("Enter the speed of the car:");
    const speed = parseInt(userInput);

    if (!isNaN(speed)) {
        const result = checkSpeed(speed);
        alert(result);
    } else {
        alert("Invalid input. Please enter a number.");
    }
}

getUserInput();