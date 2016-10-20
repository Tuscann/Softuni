function subtract() {
    let first = document.getElementById('firstNumber').value;
    let second = document.getElementById('secondNumber').value;

    let sum = Number(first) - Number(second);
    document.getElementById('result').textContent = sum;
}