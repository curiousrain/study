import "../flash-cards/flash-cards.scss"
function FlashCard(props) {
    const { word } = props;
    return (
        <div className="flash-card-container">
            <div className="flash-card-front">
                <p className="word-hebrew">{word.hebrew}</p>
            </div>
            <button className="flash-card-button">See translation</button>
            <div className="flash-card-back hidden">
                <p className="word-transcription">{word.transcription}</p>
                <p className="word-english">{word.english}</p>
            </div>
        </div>
    )
}

export default FlashCard;