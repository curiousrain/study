function Card(props) {
    const { superhero } = props;
    return (
        <div className="superhero">
            <h3 className="sh-name"><b>Имя:</b> {superhero.name}</h3>
            <p className="sh-heartvalue">{"" || ""}</p>
            <p className="sh-universe"><b>Вселенная:</b> {superhero.universe}</p>
            <p className="sh-alterego"><b>Альтерэго:</b> {superhero.alterego}</p>
            <p className="sh-occupation"><b>Род деятельности:</b> {superhero.occupation}</p>
            <p className="sh-friends"><b>Союзники:</b> {superhero.friends}</p>
            <p className="sh-powers"><b>Суперсилы:</b> {superhero.superpowers}</p>
            <img className="sh-image" src={superhero.url} alt={superhero.superhero} />
            <p className="sh-info">{superhero.info}</p>
            <button className="sh-review"> Оцените супергероя</button>
        </div>
    );
}

export default Card;