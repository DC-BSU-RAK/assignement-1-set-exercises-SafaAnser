window.onload = () => {
    const calculateButton = document.querySelector("#butn button");
    const resetButton = document.querySelector("button[type='reset']");
    
    calculateButton.addEventListener('click', calculate);
    resetButton.addEventListener('click', reset);
}

function calculate() {
    const petrol_cost = parseFloat(document.querySelector('#petrol_cost').value);
    const liters = parseFloat(document.querySelector('#liters').value);

    if (isNaN(petrol_cost) || isNaN(liters)) {
        document.querySelector('#totalAmount').innerText = "Please choose the numbers";
        return;
    }

    const totalAmount = petrol_cost * liters;
    document.querySelector('#totalAmount').innerText = totalAmount.toFixed(2);
}

function reset() {
    document.querySelector('#petrol_cost').value = '';
    document.querySelector('#liters').value = '';
    document.querySelector('#totalAmount').innerText = '';
} 
