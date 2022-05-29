let messages = [];
function addMessage() {
    let sendMessage =  checkSpam(document.getElementById("message").value);
    messages.push(sendMessage);
    generateMessages();
    console.log(messages);
}

function generateMessages(){
    let showMessage = "";
    for (let message of messages) {
        showMessage += `<p>${message}</p>`;
    }
    document.getElementById("sentmessages").innerHTML = showMessage;
}

function checkSpam(value){
    return value.replace(/(виагра)|(xxx)|(viagra)|(ххх)/ig, "***");
}