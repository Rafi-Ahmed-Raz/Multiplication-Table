// Variables
let showBtn = document.getElementById('showBtn');
let numberInput = document.getElementById('numberInput');
let result = document.getElementById('result');

// Control flow and loops
showBtn.onclick = function () {
    let num = Number(numberInput.value);

    // if / else condition
    if (num >= 1 && num <= 20) {
        let output = '';
        // for loop
        for (let i = 1; i <= 10; i++) {
            // template literal
            output += `${num} × ${i} = ${num * i}\n`;
        }
        result.textContent = output;
    } else {
        result.textContent = 'Please enter a number between 1 and 20.';
    }
};