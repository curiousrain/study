let messages = [];
const fioInput = document.getElementById("fio");
const avatarInput = document.getElementById("url");
const messageInput = document.getElementById("message");
function addMessage() {
    const messageText = checkSpam(messageInput.value);
    const fio = getfio();
    const avatar = avatarInput.value;
    const message = {
        fio: fio,
        avatar: avatar,
        messageText: messageText,
    }
    messages.push(message);
    generateMessages();
    console.log(messages);
}

function generateMessages() {
    let showMessage = "";
    for (let message of messages) {
        showMessage +=
            `<p>
            <span>${message.fio}</span>
            <img src= "${message.avatar}">
            ${message.messageText}
            </p>`;
    }
    document.getElementById("sentmessages").innerHTML = showMessage;
}

function checkSpam(value) {
    return value.replace(/(виагра)|(xxx)|(viagra)|(ххх)/ig, "***");
}

function getfio() {
    let nickname = fio.value
        .trim()
        .replace(/\s+/g, " ")
        .replace(/[^a-zA-ZА-Яа-я\s]+/g, "");
    let names = nickname.split(" ");
    let normal = names.map((partOfName) => {
        const firstLetter = partOfName.substring(0, 1).toUpperCase();
        const other = partOfName.substring(1).toLowerCase();
        const full = firstLetter + other;
        return full;
    });
    return normal.join(" ")
}



