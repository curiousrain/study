import Table from "../table/table"
import FlashCard from "../flash-cards/flash-cards"
import colors from "../words-by-topic/colors-words.json"
import general from "../words-by-topic/general-words.json"
import clothes from "../words-by-topic/clothes-words.json"
import food from "../words-by-topic/food-drinks-words.json"
import "../main/main.scss"
function MainPage() {
    const allWords = colors.concat(general, clothes, food);
    return (
        <div className="main-container">
            <header className="main-nav">
                <h1 className="nav-title">Flash Learning Hebrew!</h1>
                <div className="nav">
                    <a className="nav-item" href="#">Dictionary</a>
                    <div>

                    </div>
                </div>
            </header>
            <div className="card-container">
                <FlashCard word={colors[0]}></FlashCard>
            </div>
            <div className="other-topics-card">
            </div>
            <div className="words-table-container">
                <Table words={allWords}></Table>

            </div>
        </div>
    )
}

export default MainPage