const btn = document.getElementById('calculate');

btn.addEventListener('click', function () {
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    if (height === '' || weight === '') {
        alert('Please fill out the input fields!');
        return;
    }

    height = parseFloat(height) / 100;
    weight = parseFloat(weight);

    let BMI = weight / (height * height);
    BMI = BMI.toFixed(2);

    document.querySelector('#result').innerHTML = BMI;

    let status = '';
    if (BMI < 18.5) {
        status = "Underweight";
    } else if (BMI >= 18.5 && BMI < 25) {
        status = "Healthy";
    } else if (BMI >= 25 && BMI < 30) {
        status = "Overweight";
    } else if (BMI >= 30) {
        status = "Obese";
    }

    document.querySelector('.comment').innerHTML = `Comment: you are <span id="comment">${status}</span>`;
});
