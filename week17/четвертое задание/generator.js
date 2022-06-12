
const output = document.getElementById("output");
function generate(){
    const numbers = [];
    let min = 10;
    let max = -10;
    let sum = 0;
    let prod = 1;
    for (let i = 0; i!= 10;i++){
        const number = getNumber(); 
        numbers.push(number);
        if (number > max){
            max = number;
        } 
        if (number < min){
            min = number;
        }
        sum+=number;
        prod*=number;
    }
    const avg = sum / numbers.length;
    output.innerHTML = `
    <p><strong>Сгенерировали: </strong>${numbers}</p>
    <p><strong>Минимальное: </strong> ${min}</p>
    <p><strong>Максимальное: </strong>${max}</p>
    <p><strong>Среднее арифметическое: </strong>${avg}</p>
    <p><strong>Сумма чисел: </strong>${sum}</p>
    <p><strong>Произведение чисел: </strong>${prod}</p>
    `;
}

function getNumber(){
    return Math.round(Math.random()*20-10);
}