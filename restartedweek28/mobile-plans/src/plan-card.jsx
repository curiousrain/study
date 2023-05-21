import './plan.scss'
function Card(props) {
    const { plan } = props;
    return (
        <div className={"plan-container" + (plan.isSelected ? " selected" : "")}>
            <div className="plan-name-container">
                <h3 className="plan-name">{plan.name}</h3>
            </div>
            <div className="plan-price-container">
                <span className="plan-text">руб </span>
                <span className="plan-price">{plan.price}</span>
                <span className="plan-per">/мес</span>
            </div>
            <div className="plan-speed-container">
                <p className="plan-speed">до {plan.speed} Мбит/сек</p>
            </div>
            <div className="plan-volume-container">
                <p className="plan-volume">Объем включенного трафика не ограничен</p>
            </div>
        </div>
    )
}

export default Card