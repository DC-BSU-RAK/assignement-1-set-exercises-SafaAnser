// wait for the entire window to load before executing any JavaScript
window.onload = () => {
    // get the "Calculate" button inside the element with id "butn"
    const calculateButton = document.querySelector("#butn button");

    //get the "Reset" button of type 'reset'
    const resetButton = document.querySelector("button[type='reset']");
    
    // add click event listener to trigger the calculate function
    calculateButton.addEventListener('click', calculate);

    // add click event listener to trigger the reset function
    resetButton.addEventListener('click', reset);
}

// function to calculate total petrol cost
function calculate() {
    // get the petrol cost value and convert it to a float
    const petrol_cost = parseFloat(document.querySelector('#petrol_cost').value);

    // get the liters value and convert it to a float
    const liters = parseFloat(document.querySelector('#liters').value);

    // ccheck if either input is not a valid number
    if (isNaN(petrol_cost) || isNaN(liters)) {
        // Show error message if input is invalid
        document.querySelector('#totalAmount').innerText = "Please choose the numbers";
        return;
    }

    // calculate the total cost
    const totalAmount = petrol_cost * liters;

    // display the result rounded to two decimal places
    document.querySelector('#totalAmount').innerText = totalAmount.toFixed(2);
}

// function to reset the input fields and output display
function reset() {
    // clear the petrol cost input
    document.querySelector('#petrol_cost').value = '';

    // clear the liters input
    document.querySelector('#liters').value = '';

    // clear the total amount display
    document.querySelector('#totalAmount').innerText = '';
}
