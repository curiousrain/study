let a = document.getElementById('first-number');
let b = document.getElementById('second-number');
let result = document.getElementById('result');

function add() {
    result.innerText = Number(a.value) + Number(b.value);
}

function subtract() {
    result.innerText = Number(a.value) - Number(b.value);
}

function divide() {
    let numberB = Number(b.value);
    if (numberB == 0) {
        alert("Нельзя делить на ноль!");
    } else {
        result.innerText = Number(a.value) / Number(b.value);
    }
}

function multiply() {
    result.innerText = Number(a.value) * Number(b.value);
}