document.querySelector('.formContainer').addEventListener('submit', (event) => {
    event.preventDefault();

    const height = parseFloat(document.querySelector('.Height').value * 0.3048);
    const weight = parseFloat(document.querySelector('.Weight').value);

    if (isNaN(height) || isNaN(weight)) {
        alert('Please enter valid numbers for Height and Weight.');
        return;
    }

    const bmi = weight / Math.pow(height, 2);
    const resultContainer = document.querySelector('.resultContainer');

    if (bmi < 18.5) {
        resultContainer.innerHTML = "Underweight";
    } else if (bmi < 24.9) {
        resultContainer.innerHTML = "Normal";
    } else if (bmi < 29.9) {
        resultContainer.innerHTML = "Overweight";
    } else if (bmi < 39.9) {
        resultContainer.innerHTML = "Obese";
    } else {
        resultContainer.innerHTML = "Morbidly Obese";
    }
    document.querySelector('.resultContainer2').innerHTML=bmi.toFixed(2);
});