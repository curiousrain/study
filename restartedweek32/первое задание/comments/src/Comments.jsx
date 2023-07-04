import { useState } from "react";
import './Comments.css';

const Comments = (() => {
    const [name, setName] = useState('');
    const [messages, setMessages] = useState([]);
    const [avatar, setAvatar] = useState('');
    const [showName, setShowName] = useState(false);
    const [messageText, setMessageText] = useState('');

    const nameCheck = (e) => {
        setShowName(e.target.checked);
    };
    const getName = () => {
        let nickname = name
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
    };
    const getAvatar = () => {
        const randomAvatar = Math.round((Math.random() * 9)) + 1;
        return `images/${randomAvatar}.jpg`;
    };
    const updateAvatar = (avatar) => {
        setAvatar(avatar.target.value)
    }
    const addMessage = () => {
        const commentText = checkSpam(messageText);
        const nickname = getName() || 'user';
        const userImage = avatar || getAvatar();
        const messageDate = new Date();
        const message = {
            name: nickname,
            avatar: userImage,
            messageText: commentText,
            messageDate: messageDate
        }
        setMessages([message, ...messages]);
        console.log(messages);
    };
    const checkSpam = (value) => {
        return value.replace(/(виагра)|(xxx)|(viagra)|(ххх)/ig, "***");
    };
    const updateName = (name) => {
        setName(name.target.value)
    };
    const updateMessage = (message) => {
        setMessageText(message.target.value)
    };
    return (
        <>
            <div className='leave-comment'>
                <h1>Оставить комментарий</h1>
                <label>Показывать ваше имя?</label>
                <input type="checkbox" name="check" className="namecheck" onChange={nameCheck} checked={showName} />
                {showName
                    ?
                    <>
                        <label for="text">Введите ФИО:</label>
                        <input type="text" className="fio" onChange={updateName} value={name} />
                    </>
                    :
                    <></>
                }
                <label for="text">Добавьте свой аватар</label>
                <input type="url" className="url" value={avatar} onChange={updateAvatar} />
                <label for="text">Комментарий</label>
                <textarea name="message" className="message" cols="30" rows="10" onChange={updateMessage} value={messageText} />
                <button onClick={addMessage}>Отправить</button>
            </div>
            <div className="show-comment">
                <h1>Чат</h1>
                <div className="sentmessages">
                    {messages.map((message) =>
                        <div className="message">
                            <span className="name" >{message.name}</span>
                            <img src={message.avatar} alt="user-image" />
                            <p className="message-text">{message.messageText}</p>
                            <p className="date">{message.messageDate.toString()} </p>
                        </div>)}
                </div>
            </div>
        </>
    )
});

export default Comments;