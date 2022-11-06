function changeColor(sender) {
    sender.style.backgroundColor = "#" + returnColor();
    sender.style.borderColor = "#" + returnColor();

}

function returnColor () {
    return Math.floor(Math.random()*16777215).toString(16);
}