// Array to store the numbers
let numbers = [];

// Function to add a number to the array
function addNumber() {
  // Get the input value
  const numberInput = document.getElementById('numberInput');
  const number = parseInt(numberInput.value);

  // Add the number to the array
  if (!isNaN(number)) {
    numbers.push(number);
  }

  // Clear the input field
  numberInput.value = '';

  // Log the updated array
  console.log(numbers);
}

// Event listener for the button click
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', addNumber);
