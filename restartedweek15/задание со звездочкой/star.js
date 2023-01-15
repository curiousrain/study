const enter = document.getElementById("enter");
const result = document.getElementById("result");

document.getElementById("button").onclick = function () {
    const number = Number(enter.value);
    const numberResult = number ** 2;
    result.value = numberResult;
}