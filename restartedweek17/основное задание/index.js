let messages = [];
const fioInput = document.getElementById("fio");
const avatarInput = document.getElementById("url");
const messageInput = document.getElementById("message");
const checkName = document.getElementById("namecheck");
const hide = document.getElementById("hide");
checkName.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        hide.classList.remove('hidename');
    }
    else {
        hide.classList.add('hidename');
    }
})
function addMessage() {
    const messageText = checkSpam(messageInput.value);
    const fio = getfio() || 'user';
    const avatar = avatarInput.value || getavatar();
    const messageDate = new Date();
    const message = {
        fio: fio,
        avatar: avatar,
        messageText: messageText,
        messageDate: messageDate
    }
    messages.push(message);
    generateMessages();
    console.log(messages);
}

function generateMessages() {
    let showMessage = "";
    for (let message of messages) {
        showMessage +=
            `<div class = "message">
            <span class = "name" >${message.fio}</span>
            <img src= "${message.avatar}">
            <p class = "message-text">${message.messageText}</p>
            <p class = "date">${message.messageDate} </p>
            </div>`;
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
    return normal.join(" ");
}


function getavatar() {
    const randomAvatar = Math.round((Math.random() * 9)) + 1;
    return `./images/${randomAvatar}.jpg`;
}


