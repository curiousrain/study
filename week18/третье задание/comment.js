let messages = [];
let commentary = localStorage.getItem('comment');
if (commentary != null) {
    messages = JSON.parse (commentary);
    generateMessages();
}
let nickname = localStorage.getItem('nickname');
if (nickname != null) {
    document.getElementById("nickname").value = nickname;
}
let picture = localStorage.getItem('picture');
if (picture != null) {
    document.getElementById("picture").value = picture;
}
function addMessage() {
    let sendMessage =  checkSpam(document.getElementById("message").value);
    nickname = document.getElementById("nickname").value;
    picture = document.getElementById("picture").value;
    messages.push({nickname: nickname, message: sendMessage, picture: picture});
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("picture", picture);
    localStorage.setItem('comment', JSON.stringify(messages));
    generateMessages();
}

function generateMessages(){
    let showMessage = "";
    for (let message of messages) {
        showMessage += `<p><img height = "50px" src = "${message.picture}" /><strong>${message.nickname}:</strong> ${message.message}</p>`;
    }
    document.getElementById("sentmessages").innerHTML = showMessage;
}

function checkSpam(value){
    return value.replace(/(виагра)|(xxx)|(viagra)|(ххх)/ig, "***");
}
